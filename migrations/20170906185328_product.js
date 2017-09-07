
exports.up = (knex, Promise) => {
  return knex.schema.createTable('product', table => {
    table.increments('id').primary();
    table.text('title').notNullable();
    table.integer('price').notNullable();
    table.text('description').notNullable();
    table.timestamp('date_created').default(knex.fn.now());
    table.integer('seller_id').unsigned().references('id').inTable('account').onDelete('cascade');
    table.integer('location_id').unsigned().references('id').inTable('location').onDelete('cascade');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.createTable('product');
};
