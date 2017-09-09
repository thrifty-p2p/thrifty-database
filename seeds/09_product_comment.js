const product_comment = require('../data/product_comment.json');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE product_comment RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('product_comment').insert(product_comment);
    });
};
