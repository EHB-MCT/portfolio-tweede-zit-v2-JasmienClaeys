exports.seed = function(knex) {
  // Deletes allexisting entries
  return knex('answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('answers').insert([
        { question_id: 1, answer: 'The homework is to read chapters 3 and 4.'},
        { question_id: 2, answer: 'Sure, the lecture was about database normalization.'}
      ]);
    });
};
