const db = require('../data/db-config')

function getAll() {
    return db('users')
}

function getById(id) {
    return db('users').where('user_id', id).first()
}

async function add(user) {
    const [newUser] = await db('users').insert(user, ['user_id', 'username', 'password'])
    return newUser
}

module.exports = {getAll, getById, add}