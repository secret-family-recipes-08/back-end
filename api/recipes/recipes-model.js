const db = require("../data/db-config");

function findAll() {
  return db("recipes as r")
    .leftJoin("categories as c", "r.category_id", "c.category_id")
    .leftJoin("sources as s", "r.source_id", "s.source_id")
    .leftJoin("instructions as instr", "r.recipe_id", "instr.recipe_id")
    .select(
      "r.recipe_id",
      "r.recipe_name",
      "c.category_id",
      "c.category_name",
      "s.source_id",
      "s.source_name",
      "instr.instruction_id",
      "instr.instruction_number",
      "instr.instruction_text"
    );
}

function findById(id) {
  return db("recipes as r")
    .leftJoin("categories as c", "r.category_id", "c.category_id")
    .leftJoin("sources as s", "r.source_id", "s.source_id")
    .leftJoin("instructions as instr", "r.recipe_id", "instr.recipe_id")
    .select(
      "r.recipe_id",
      "r.recipe_name",
      "c.category_id",
      "c.category_name",
      "s.source_id",
      "s.source_name",
      "instr.instruction_id",
      "instr.instruction_number",
      "instr.instruction_text"
    )
    .where("r.recipe_id", id);
}

async function add(newRecipe) {
  const [added] = await db("recipes").insert(newRecipe, ["recipe_name"]);
  return added;
}

module.exports = { findAll, findById, add };
