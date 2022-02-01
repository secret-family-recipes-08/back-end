const router = require('express').Router()
const User = require('../users/users-model')
const bcrypt = require('bcrypt')

router.post('/login', (req, res, next) => {
    let { username, password } = req.body
    
    User.getBy({ username })
        .then(([user]) => {
            if (user && bcrypt.compareSync(password)) {
                
            }
        })
        .catch(err => next(err))

})

module.exports = router