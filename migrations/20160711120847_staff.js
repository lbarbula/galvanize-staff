exports.up = function(knex, Promise) {
  return knex.schema.createTable('staff', function(table){
    table.increments()
    table.text('first_name')
    table.text('last_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('staff')
};
