exports.up = (knex, Promise) => {
  return knex.schema.createTable('order', table => {
    table.increments('id').primary();
    table.dateTime('order_date').notNullable();
    table.integer('buyer_id').unsigned().references('id').inTable('product').onDelete('cascade');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.createTable('order');
};
