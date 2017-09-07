exports.up = (knex, Promise) => {
  return knex.schema.createTable('transaction', table => {
    table.increments('id').primary();
    table.timestamp('created_at').default(knex.fn.now());
    table.integer('stripe_transaction_id');
    table.integer('order_id').unsigned().references('id').inTable('order').onDelete('cascade');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.createTable('transaction');
};
