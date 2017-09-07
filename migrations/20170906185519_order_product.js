exports.up = (knex, Promise) => {
  return knex.schema.createTable('order_product', table => {
    table.increments('id').primary();
    table.integer('order_id').unsigned().references('id').inTable('order').onDelete('cascade');
    table.integer('product_id').unsigned().references('id').inTable('product').onDelete('cascade');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.createTable('order_product');
};
