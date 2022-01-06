module.exports = {
    formatUser :  user => {
        return {...user._doc, password : null, _id : user.id}
    }
}