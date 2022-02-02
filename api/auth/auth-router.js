const router = require('express').Router()
const bcrypt = require('bcrypt')
const tokenBuilder = require('./token-builder')
const {checkUsernameExists, validateUser} = require('../middleware/users-middleware')

router.post('/login', validateUser, checkUsernameExists, (req, res, next) => {
    try {
        const {username, password} = req.user
        if (bcrypt.compareSync(req.body.password, password)) {
            const token = tokenBuilder(req.user)
            res.status(200).json({ message: `welcome back, ${username}`, token })
        } else {
            next({ status: 401, message: 'incorrect password' })
        }
    } catch (err) {
        next(err)
    }
})
        
        

module.exports = router