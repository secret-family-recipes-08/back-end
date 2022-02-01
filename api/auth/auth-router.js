const router = require('express').Router()
const User = require('../users/users-model')
const bcrypt = require('bcrypt')
const tokenBuilder = require('./token-builder')

router.post('/login', (req, res, next) => {
    let { username, password } = req.body
    
    User.getBy({ username })
        .then(([user]) => {
            if (user && bcrypt.compareSync(password)) {
                const token = tokenBuilder(user)
                res.status(200).json({message: `welcome, ${username}`, token})
            } else {
                next({status: 401, message: 'invalid credentials'})
            }
        })
        .catch(err => next(err))

})

module.exports = router