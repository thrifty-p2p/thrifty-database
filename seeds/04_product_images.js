const product_images = require('../data/product_images.json');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE product_images RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('product_images').insert(product_images);
    });
};
