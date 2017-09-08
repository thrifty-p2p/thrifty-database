
exports.up = (knex, Promise) => {
  return knex.schema.createTable('product', table => {
    table.increments('id').primary();
    table.text('title').notNullable();
    table.integer('price').notNullable();
    table.text('description').notNullable();
    table.text('color').notNullable();
    table.integer('likes').defaultTo(0);
    table.boolean('is_available').defaultTo(true);
    table.integer('seller_id').unsigned().references('id').inTable('account').onDelete('cascade');
    table.timestamp('date_created').default(knex.fn.now());
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('product');
};
