const db = require('../data/db-config')

function getAll() {
    return db('categories')
}

async function add(category) {
    const [newCategory] = await db('categories').insert(category, ['category_id', 'category_name'])
    return newCategory
}

module.exports = {getAll, add}