const db = require('../data/db-config')

function getAll() {
    return db('sources')
}

module.exports = {getAll}