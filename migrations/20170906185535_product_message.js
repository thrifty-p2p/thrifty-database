exports.up = (knex, Promise) => {
  return knex.schema.createTable('message_product', table => {
    table.increments('id').primary();
    table.text('message_body').notNullable();
    table.timestamp('created_at').default(knex.fn.now());
    table.integer('account_id').unsigned().references('id').inTable('account').onDelete('cascade');
    table.integer('product_id').unsigned().references('id').inTable('product').onDelete('cascade');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.createTable('message_product');
};
