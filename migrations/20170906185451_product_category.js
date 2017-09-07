exports.up = (knex, Promise) => {
  return knex.schema.createTable('product_category', table => {
    table.increments('id').primary();
    table.integer('category_id').unsigned().references('id').inTable('category').onDelete('cascade');
    table.integer('product_id').unsigned().references('id').inTable('product').onDelete('cascade');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('product_category');
};
