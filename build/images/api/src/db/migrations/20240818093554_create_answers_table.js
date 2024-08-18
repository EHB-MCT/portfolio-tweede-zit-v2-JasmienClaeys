exports.up = function(knex) {
    return knex.schema.createTable('answers', function(table) {
      table.increments('id').primary();
      table.integer('question_id').unsigned().notNullable().references('id').inTable('questions').onDelete('CASCADE');
      table.text('answer').notNullable();
      table.timestamp('answered_at').defaultTo(knex.fn.now()); 
      table.timestamps(true, true); 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('answers');
  };
  