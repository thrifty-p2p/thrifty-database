const order = require('../data/order.json');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE order RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('order').insert(order);
    });
};
