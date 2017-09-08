
exports.up = (knex, Promise) => {
  return knex.schema.createTable('account', table => {
    table.increments('id').primary();
    table.text('first_name').notNullable();
    table.text('last_name').notNullable();
    table.text('email').notNullable().unique();
    table.text('username').notNullable().unique();
    table.text('password').notNullable();
    table.text('profile_image_url');
    table.integer('total_sales').defaultTo(0);
    table.integer('total_purchases').defaultTo(0);
    table.timestamp('date_created').default(knex.fn.now());
    table.boolean('admin').notNullable().defaultTo(false);
    table.text('address');
    table.integer('location_id').unsigned().references('id').inTable('location').onDelete('cascade');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('account');
};
