
exports.up = (knex, Promise) => {
  return knex.schema.createTable('location', table => {
    table.increments('id').primary();
    table.text('city').notNullable();
    table.text('state').notNullable();
    table.integer('zip_code').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('location');
};
