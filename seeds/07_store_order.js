const store_order = require('../data/store_order.json');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE store_order RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('store_order').insert(store_order);
    });
};
