const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const path = require('path')
const fs = require('fs')

const {formatUser} = require('../../helpers/user-helpers')

module.exports = {

    updateUserProfile: async ({updateUserProfileInput, photo}, req) => {

        const {isAuth, userId} = req

        if (!isAuth) {
            throw new Error("unauthenticated")
        }

        const user = await User.findOne({_id: userId})

        if (!user) {
            throw new Error("unauthenticated")
        }

        const {email, phone, password, bio, name} = updateUserProfileInput


        const userCheck = await User.findOne({
            email: {$eq: email},
            _id: {$ne: user.id}
        })

        if (userCheck) {
            throw  new Error('a user with this email already exists')
        }

        if (bio) {
            user.bio = bio;
        }

        if (name) {
            user.name = name;
        }

        if (phone) {
            user.phone = phone;
        }

        if (password) {
            user.password = await bcrypt.hash(password, 12);
        }

        if (photo) {
            const {createReadStream, filename, mimetype, encoding} = await photo

            const keywords = filename.split('.')

            const ext = keywords[keywords.length - 1]

            const finalFileName = `${user.id}.${ext}`

            const stream = createReadStream()

            const pathName = path.join(__dirname, `/public/images/${finalFileName}`)

            await stream.pipe(fs.createWriteStream(pathName))

            user.photo = finalFileName
        }

        await user.save()

        return formatUser(user)

    },

    login: async ({email, password}) => {
        const user = await User.findOne({email})

        if (!user) {
            throw new Error("invalid credentials")
        }

        if (!bcrypt.compare(password, user.password)) {
            throw new Error("invalid credentials")
        }

        const token = await jwt.sign({
            userId: user.id,
            email: user.email
        }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        return {
            userId: user.id,
            token,
            tokenExpiration: 1
        }

    },
    createUser: async ({createUserInput}) => {

        if (!createUserInput)
            throw new Error("wrap input around [createUserInput]")

        const {password, email} = createUserInput

        if (!password || !email) throw new Error("email and password are required")

        const user = await User.findOne({email: email})


        if (user) {
            throw new Error("User already exists")
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const newUser = new User({
            password: hashedPassword, email
        })

        const createdUser = await newUser.save()

        return formatUser(createdUser)
    }
}



