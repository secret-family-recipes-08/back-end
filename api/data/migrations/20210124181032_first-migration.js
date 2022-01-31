exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username", 200).notNullable().unique();
      users.string("password", 200).notNullable();
      users.timestamps(false, true);
    })
    .createTable("categories", (table) => {
      table.increments("category_id");
      table.string("category_name").unique().notNullable();
    })
    .createTable("recipes", (table) => {
      table.increments("recipe_id");
      table.string("recipe_title", 200).notNullable();
      table.string("source", 200);
      table.string("ingredients");
      table.string("instructions");
      table
        .integer("category_id")
        .unsigned()
        .references("category_id")
        .inTable("categories")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("recipes")
    .dropTableIfExists("categories")
};
