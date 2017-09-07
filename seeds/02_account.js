const account = require('../data/account.json');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE account RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('account').insert(account);
    });
};
