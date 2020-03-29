
exports.up = function(knex) {
      return knex.schema.createTable('incidents', function(table){
      table.increments();

      table.string('title').notNullable();
      table.string('descripition').notNullable();
      table.decimal('value').notNullable();
      
      table.string('ngo_id').notNullable();

      table.foreign('ngo_id').references('id').inTable('ngo');

    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
