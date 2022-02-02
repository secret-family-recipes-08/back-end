const users = [
    { username: 'gordon', password: '1234' },
    { username: 'anthony', password: 'asdf' },
    { username: 'guy', password: 'flavortown' }
]

const categories = [
    { category_name: 'Breakfast' },
    { category_name: 'Lunch' },
    { category_name: 'Dinner' },
    { category_name: 'Dessert' }
]

const sources = [
    { source_name: 'Grandma Martha' },
    { source_name: 'Aunt Rachael' },
    { source_name: 'Uncle Marcus' }
]

// const ingredients = [
//     { ingredient_name: 'Broccoli', ingredient_unit: 'cups' },
//     { ingredient_name: 'Pesto', ingredient_unit: 'cups' },
//     { ingredient_name: 'Pasta', ingredient_unit: 'pounds' },
//     { ingredient_name: 'Ground Beef', ingredient_unit: 'pounds' },
//     { ingredient_name: 'Tomato Sauce', ingredient_unit: 'cups' }
// ]

const recipes = [
    { recipe_name: 'Broccoli Pesto Pasta', source_id: 1, category_id: 3 },
    { recipe_name: 'Spaghetti', source_id: 2, category_id: 2 }
]

// const instructions = [
//     { instruction_number: 1, instruction_text: 'Boil pasta', recipe_id: 1 },
//     { instruction_number: 2, instruction_text: 'Add broccoli', recipe_id: 1 },
//     { instruction_number: 3, instruction_text: 'Mix in Pesto', recipe_id: 1 },
//     { instruction_number: 1, instruction_text: 'Boil pasta', recipe_id: 2 },
//     { instruction_number: 2, instruction_text: 'Cook ground beef', recipe_id: 2 },
//     { instruction_number: 3, instruction_text: 'Mix in Tomato Sauce', recipe_id: 2 }
// ]

// const quantities = [
//     { instruction_id: 1, ingredient_id: 3, quantity: 1 },
//     { instruction_id: 2, ingredient_id: 1, quantity: 4 },
//     { instruction_id: 3, ingredient_id: 2, quantity: 1.5 },
//     { instruction_id: 4, ingredient_id: 3, quantity: 1 },
//     { instruction_id: 5, ingredient_id: 4, quantity: 1 },
//     { instruction_id: 6, ingredient_id: 5, quantity: 2 }
// ]

exports.seed = async function (knex) {
    await knex('users').insert(users)
    await knex('categories').insert(categories)
    await knex('sources').insert(sources)
    // await knex('ingredients').insert(ingredients)
    await knex('recipes').insert(recipes)
    // await knex('instructions').insert(instructions)
    // await knex('quantities').insert(quantities)
}