exports.up = function(knex) {
    return knex.schema.createTable('questions', function(table) {
      table.increments('id').primary();
      table.integer('student_id').unsigned().notNullable().references('id').inTable('students').onDelete('CASCADE');
      table.text('question').notNullable();
      table.timestamp('asked_at').defaultTo(knex.fn.now()); 
      table.timestamps(true, true); 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('questions');
  };
  