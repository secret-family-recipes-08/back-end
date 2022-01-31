const db = require('../data/db-config')

function getAll() {
    return db('users')
}

module.exports = {getAll}