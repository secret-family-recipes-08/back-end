const db = require('../data/db-config')

function getAll() {
    return db('categories')
}

module.exports = {getAll}