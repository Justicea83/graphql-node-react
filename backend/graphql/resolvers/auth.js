const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

const {formatUser} = require('../../helpers/user-helpers')

module.exports = {
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



