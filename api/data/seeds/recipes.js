exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex("recipes")
  //   .truncate()
  //   .then(function () {
  // Inserts seed entries
  return knex("recipes").insert([
    {
      recipe_title: "Penne ala Vodka",
      source: "Grandma",
      ingredients: "Penne, vodka sauce, salt, onions, peppers, olive oil",
      instructions: "mix ingredients and stir. heat. serve.",
      category_id: 3,
    },
    {
      recipe_title: "Chocolate Cake",
      source: "self",
      ingredients: "chocolate, cake",
      instructions: "mix and bake",
      category_id: 4,
    },
    {
      recipe_title: "Tacos",
      source: "mom",
      ingredients: "ground beef, taco shells, lettuce, cheese, salsa",
      instructions: "brown meat, put ingredients in taco shell, eat.",
      category_id: 3,
    },
  ]);
};
