exports.up = function(knex) {
    return knex.schema.createTable('dddList', function (table) {
        table.increments('id').primary();
        table.integer('origin').notNullable();
        table.integer('receiver').notNullable();
        table.decimal('value').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('dddList');
  };
  