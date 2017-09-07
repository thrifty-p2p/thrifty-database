const product_message = require('../data/product_message.json');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE product_message RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('product_message').insert(product_message);
    });
};
