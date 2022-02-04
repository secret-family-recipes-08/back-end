const db = require('../data/db-config')

function getAll() {
    return db('sources')
}

async function add(source) {
    const [newSource] = await db('sources').insert(source, ['source_id', 'source_name']) 
    return newSource
}

module.exports = {getAll, add}