const Recipe = require('./recipes-model')
const router = require('express').Router()

router.get('/', (req, res, next) => {
    Recipe.findAll()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => next(err))
})

module.exports = router