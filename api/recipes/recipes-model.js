const db = require('../data/db-config')

function findAll() {
    return db('recipes as r')
        .leftJoin('categories as c', 'r.category_id', 'c.category_id')
        .leftJoin('sources as s', 'r.source_id', 's.source_id')
        .select('r.recipe_name', 'c.category_name', 's.source_name')
}

module.exports = {findAll}