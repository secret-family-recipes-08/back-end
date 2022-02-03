const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || 'top secret string'

 const restricted =(req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        next({status: 401, message: 'you must be logged in to see this'})
    } else {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                next({status: 401, message: 'invalid login token'})
            } else {
                req.decodedJwt = decoded
                next()
            }
        })
    }
}

module.exports = {restricted}