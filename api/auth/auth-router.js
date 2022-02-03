const router = require('express').Router()
const bcrypt = require('bcrypt')
const tokenBuilder = require('./token-builder')
const { checkUsernameExists, validateUser } = require('../middleware/users-middleware')
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || "top secret string";

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

router.post("/validateToken", (req, res, next) => {
    const {token} = req.body;
    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).json({message: 'token is invalid!'})
            } else {
                res.status(200).json({message: 'token is valid'})
            }
        })
    } else {
        next({status: 401, message: 'need a token to login'})
    }
});
        
        

module.exports = router