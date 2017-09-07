const location = require('../data/location.json');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE location RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('location').insert(location);
    });
};
