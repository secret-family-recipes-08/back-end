const router = require('express').Router()
const Source = require('./sources-model')
const {restricted} = require('../middleware/restricted')

router.get('/', restricted, (req, res, next) => {
    Source.getAll()
        .then(sources => {
            res.status(200).json(sources)
        })
        .catch(err => next(err))
})

router.post('/', restricted, (req, res, next) => {
    Source.add(req.body)
        .then(newSource => {
            res.status(201).json(newSource)
        })
        .catch(err => next(err))
})

module.exports = router