const order_product = require('../data/order_product.json');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE order_product RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('order_product').insert(order_product);
    });
};
