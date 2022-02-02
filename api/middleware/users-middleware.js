const User = require('../users/users-model')

function validateUser(req, res, next) {
    const { username, password } = req.body
    if (!username || !username.trim() || !password || !password.trim()) {
        res.status(400).json({
            message: 'username and password are required'
        })
    } else if (username.length < 3 || password.length < 3){
        res.json({
            message: 'username and password must be at least 3 characters long'
        })
    } else {
        next()
    }
}

async function checkUsernameFree(req, res, next) {
    try {
        const users = await User.getBy({ username: req.body.username })
        if (!users.length) {
            next()
        } else {
            next({ status: 422, message: 'Username taken' })
        }
    } catch (err) {
        next(err)
    }
}

async function checkUsernameExists(req, res, next) {
    try {
        const {username} = req.body
        const [user] = await User.getBy({ username })
        if (user) {
            req.user = user
            next()
        } else {
            next({ status: 401, message: `user with username ${username} does not exist` })
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    validateUser,
    checkUsernameFree,
    checkUsernameExists
}