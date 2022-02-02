exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username", 200).notNullable().unique();
      users.string("password", 200).notNullable();
    })
    .createTable("categories", (table) => {
      table.increments("category_id");
      table.string("category_name", 256).notNullable().unique();
    })
    .createTable("sources", (table) => {
      table.increments("source_id");
      table.string("source_name", 256).notNullable().unique();
    })
    .createTable("recipes", (table) => {
      table.increments("recipe_id");
      table.string("recipe_name", 256).notNullable().unique();
      table.string('recipe_img_url', 256);
      table
        .integer("source_id")
        .unsigned()
        .notNullable()
        .references("source_id")
        .inTable("sources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("category_id")
        .unsigned()
        .notNullable()
        .references("category_id")
        .inTable("categories")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
};

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("sources")
    .dropTableIfExists("categories")
    .dropTableIfExists("users");
};
