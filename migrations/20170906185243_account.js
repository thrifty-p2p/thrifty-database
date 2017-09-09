
exports.up = (knex, Promise) => {
  return knex.schema.createTable('account', table => {
    table.increments('id').primary();
    table.text('first_name').notNullable();
    table.text('last_name').notNullable();
    table.text('email').notNullable().unique();
    table.text('username').notNullable().unique();
    table.text('password').notNullable();
    table.text('profile_image_url').defaultTo('https://s3.us-east-2.amazonaws.com/thrifty-p2p/thrifty_default_profile.jpg');
    table.integer('total_sales').defaultTo(0);
    table.integer('total_purchases').defaultTo(0);
    table.timestamp('date_created').default(knex.fn.now());
    table.boolean('admin').notNullable().defaultTo(false);
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('account');
};
