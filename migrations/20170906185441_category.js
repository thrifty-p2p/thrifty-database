exports.up = (knex, Promise) => {
  return knex.schema.createTable('category', table => {
    table.increments('id').primary();
    table.text('name').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.createTable('category');
};
