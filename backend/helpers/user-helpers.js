const url = require('url')

module.exports = {
    formatUser :  (user, url) => {
        return {...user._doc, password : null, _id : user.id , photo : user._doc.photo ? `${url}/images/${user._doc.photo}` : `${url}/images/placeholder.jpg`}
    },

    fullUrl : req => {
        return url.format({
            protocol: req.protocol,
            host: req.get('host')
        })
    }
}


//