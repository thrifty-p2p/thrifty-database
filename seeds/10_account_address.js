const account_address = require('../data/account_address.json');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE account_address RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('account_address').insert(account_address);
    });
};
