const product_category = require('../data/product_category.json');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE product_category RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('product_category').insert(product_category);
    });
};
