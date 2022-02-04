const db = require("../data/db-config")

function findAll() {
  return db("recipes as r")
    .leftJoin("categories as c", "r.category_id", "c.category_id")
    .leftJoin("sources as s", "r.source_id", "s.source_id")
    .select(
      "r.recipe_id",
      "r.recipe_name",
      "r.recipe_instructions",
      "r.recipe_ingredients",
      "r.recipe_img_url",
      "c.category_id",
      "c.category_name",
      "s.source_id",
      "s.source_name"
    )
}

function findById(id) {
  return db("recipes as r")
    .leftJoin("categories as c", "r.category_id", "c.category_id")
    .leftJoin("sources as s", "r.source_id", "s.source_id")
    .select(
      "r.recipe_id",
      "r.recipe_name",
      "r.recipe_instructions",
      "r.recipe_ingredients",
      "r.recipe_img_url",
      "c.category_id",
      "c.category_name",
      "s.source_id",
      "s.source_name"
    )
    .where("r.recipe_id", id)
}

function findBy(filter) {
  return db('recipes').where(filter)
}

async function add(newRecipe) {
  const [added] = await db("recipes").insert(newRecipe, ["recipe_name"])
  return added
}

async function update(id, recipe) {
  console.log("Before: ", await findById(id))
  await db("recipes").where("recipe_id", id).update({
    recipe_name: recipe.recipe_name,
    recipe_img_url: recipe.recipe_img_url,
    recipe_instructions: recipe.recipe_instructions,
    recipe_ingredients: recipe.recipe_ingredients,
    category_id: recipe.category_id,
    // category_name: recipe.category_name,
    source_id: recipe.source_id,
    // source_name: recipe.source_name,
  })
  console.log("After: ", await findById(id))
  return findById(id)
}

// async function edit(id, changes) {
//   await db('items').where("item_id", id).update(changes)
//   return findById(id)
// }
//const update = async (recipe) => db("recipes").where({ id: recipe.id }).update(recipe).then(() => recipe);

const deleteById = (id) => {
  return db("recipes").where("recipe_id", id).del()
}

module.exports = { findAll, findById, add, deleteById, update }

