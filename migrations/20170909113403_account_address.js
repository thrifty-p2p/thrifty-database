exports.up = (knex, Promise) => {
  return knex.schema.createTable('account_address', table => {
    table.increments('id').primary();
    table.text('address');
    table.integer('account_id').unsigned().references('id').inTable('account').onDelete('cascade');
    table.integer('location_id').unsigned().references('id').inTable('location').onDelete('cascade');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('account_address');
};
