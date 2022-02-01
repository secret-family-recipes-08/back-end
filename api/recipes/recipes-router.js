const Recipe = require('./recipes-model')
const router = require('express').Router()

router.get('/', (req, res, next) => {
    Recipe.findAll()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
    const {id} = req.params
    Recipe.findById(id)
        .then(recipe => {
            if (!recipe) {
                return next({ status: 404, message: `could not find recipe with id ${id}`})
            }
            res.status(200).json(recipe)
        })
        .catch(err => next(err))
})

module.exports = router