exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable().unique()
      users.string('password', 200).notNullable()
    })
    .createTable('categories', table => {
      table.increments('category_id')
      table.string('category_name', 256).notNullable().unique()
    })
    .createTable('sources', table => {
      table.increments('source_id')
      table.string('source_name', 256).notNullable().unique()
    })
    .createTable('ingredients', table => {
      table.increments('ingredient_id')
      table.string('ingredient_name', 256).notNullable().unique()
      table.string('ingredient_unit', 256)
    })
    .createTable('recipes', table => {
      table.increments('recipe_id')
      table.string('recipe_name', 256).notNullable().unique()
      table.integer('source_id')
        .unsigned()
        .notNullable()
        .references('source_id')
        .inTable('sources')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      table.integer('category_id')
        .unsigned()
        .notNullable()
        .references('category_id')
        .inTable('categories')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
    .createTable('instructions', table => {
      table.increments('instruction_id')
      table.integer('instruction_number').notNullable()
      table.string('instruction_text', 1000).notNullable()
      table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
    .createTable('quantities', table => {
      table.increments('quantity_id')
      table.integer('instruction_id')
        .unsigned()
        .notNullable()
        .references('instruction_id')
        .inTable('instructions')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      table.float('quantity').notNullable()

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
    .dropTableIfExists('quantities')
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('sources')
    .dropTableIfExists('categories')
    .dropTableIfExists('users')
}
