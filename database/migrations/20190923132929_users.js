exports.up = function(knex) {
  return knex.schema
  // Users Table
    .createTable("users", tbl => {
      tbl.increments();

      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl.string("password", 128).notNullable();
    })

    // Children Table
    .createTable("children", tbl => {
      tbl.increments();

      tbl.string("name", 128).notNullable();
      tbl.string("age", 128).notNullable();
      tbl.string("weight", 8);
      tbl
        .integer('users_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })

    // Food Entries Table
    .createTable("entries", tbl => {
      tbl.increments();

      tbl
        .integer('children_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('children')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.date("date").notNullable();
      tbl.string("meal").notNullable();
      tbl.string('food').notNullable();
      tbl.string('category').notNullable();
      tbl.integer('servings').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("entries")
    .dropTableIfExists("children")
    .dropTableIfExists("users");
};