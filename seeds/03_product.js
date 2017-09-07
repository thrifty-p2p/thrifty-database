const product = require('../data/product.json');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE product RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('product').insert(product);
    });
};
