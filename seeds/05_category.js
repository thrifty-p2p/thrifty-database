const category = require('../data/category.json');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE category RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('category').insert(category);
    });
};
