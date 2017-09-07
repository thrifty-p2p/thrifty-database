
exports.up = (knex, Promise) => {
  return knex.schema.createTable('account', table => {
    table.increments('id').primary();
    table.text('first_name').notNullable();
    table.text('last_name').notNullable();
    table.text('email').notNullable();
    table.text('password').notNullable();
    table.integer('total_sales');
    table.timestamp('date_created').default(knex.fn.now());
    table.text('address').nullable();
    table.integer('location_id').unsigned().references('id').inTable('location').onDelete('cascade');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('account');
};
