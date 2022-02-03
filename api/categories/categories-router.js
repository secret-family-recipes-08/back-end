const router = require('express').Router()
const Category = require('./categories-model')
const {restricted} = require('../middleware/restricted')

router.get('/', restricted, (req, res, next) => {
    Category.getAll()
        .then(categories => {
            res.status(200).json(categories)
        })
        .catch(err => next(err))
})

router.post('/', restricted, (req, res, next) => {
    Category.add(req.body)
        .then(newCat => {
            res.status(201).json(newCat)
        })
        .catch(err => next(err))
})


module.exports = router