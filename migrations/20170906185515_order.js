exports.up = (knex, Promise) => {
  return knex.schema.createTable('store_order', table => {
    table.increments('id').primary();
    table.timestamp('order_date').default(knex.fn.now());;
    table.boolean('is_complete').defaultTo(false);
    table.integer('buyer_id').unsigned().references('id').inTable('account').onDelete('cascade');
    table.integer('product_id').unsigned().references('id').inTable('product').onDelete('cascade');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('store_order');
};
