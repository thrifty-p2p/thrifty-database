const transaction = require('../data/transaction.json');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE transaction RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('transaction').insert(transaction);
    });
};
