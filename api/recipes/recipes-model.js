const db = require("../data/db-config");

function findAll() {
  return db("recipes as r")
    .leftJoin("categories as c", "r.category_id", "c.category_id")
    .leftJoin("sources as s", "r.source_id", "s.source_id")
    .select(
      "r.recipe_id",
      "r.recipe_name",
      "r.recipe_instructions",
      "r.recipe_ingredients",
      "c.category_id",
      "c.category_name",
      "s.source_id",
      "s.source_name"
    );
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
      "c.category_id",
      "c.category_name",
      "s.source_id",
      "s.source_name"
    )
    .where("r.recipe_id", id);
}

async function add(newRecipe) {
  const [added] = await db("recipes").insert(newRecipe, ["recipe_name"]);
  return added;
}

module.exports = { findAll, findById, add };
