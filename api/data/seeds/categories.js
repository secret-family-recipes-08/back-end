
exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex("categories")
  //   .truncate()
  //   .then(function () {
  // Inserts seed entries
  return knex("categories").insert([
    { category_name: "breakfast" },
    { category_name: "lunch" },
    { category_name: "dinner" },
    { category_name: "dessert" },
    { category_name: "appetizer" },
    { category_name: "side dish" },
    { category_name: "other" },
  ]);
};
