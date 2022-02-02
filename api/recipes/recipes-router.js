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

router.post('/', (req, res, next) => {
    Recipe.add(req.body)
        .then(newRecipe => {
            res.status(201).json(newRecipe)
        })
        .catch(err => next(err))
})

router.delete("/", (req, res) => {
  Recipe.deleteById(req.payload)
    .then(() => res.status(200).json({message:`recipe with id ${req.payload} was successfully deleted`}))
    .catch(err => res.status(500).json({message:err.message, stack:err.stack, where:"deleting recipe"}));
})


module.exports = router