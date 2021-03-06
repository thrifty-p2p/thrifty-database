exports.up = (knex, Promise) => {
  return knex.schema.createTable('image', table => {
    table.increments('id').primary();
    table.text('image_url').notNullable();
    table.integer('product_id').unsigned().references('id').inTable('product').onDelete('cascade');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('image');
};
