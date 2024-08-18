/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema
        .createTable('students', function(table) {
            table.increments('id').primary();
            table.uuid('uuid').defaultTo(knex.fn.uuid());
            table.string('name', 255).notNullable();
            table.string('email').unique().notNullable();
            table.timestamps();
        })
        .createTable('comments', function (table) {
            table.increments('id').primary();
            table.string('text', 255).notNullable();
            table.integer('user_id').unsigned().references('users.id');
            table.timestamps();
        });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('students');
  };
  
