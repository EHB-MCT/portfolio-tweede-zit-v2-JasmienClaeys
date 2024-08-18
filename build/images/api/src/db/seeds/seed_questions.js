exports.seed = function(knex) {
  // Deletes all existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        { student_id: 1, question: 'What is the homework for next week?' },
        { student_id: 2, question: 'Can you explain the last lecture?' }
      ]);
    });
};
