const router = require('express').Router()
const User = require('../users/users-model')

router.post('/login', (req, res, next) => {
    let { username, password } = req.body
    
    
})

module.exports = router