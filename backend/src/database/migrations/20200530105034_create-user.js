
exports.up = function(knex) {
  return knex.schema.createTable('users',(table) => {
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.decimal("cpf").notNullable();
    table.datetime("born_date",{ precision: 6 });
    table.string("email").notNullable();
    table.string("phone").notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
