const image = require('../data/image.json');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE image RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('image').insert(image);
    });
};
