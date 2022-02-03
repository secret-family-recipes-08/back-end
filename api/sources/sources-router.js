const router = require('express').Router()
const Source = require('./sources-model')

router.get('/', (req, res, next) => {
    Source.getAll()
        .then(sources => {
            res.status(200).json(sources)
        })
        .catch(err => next(err))
})

module.exports = router