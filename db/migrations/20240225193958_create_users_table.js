export let up = function(knex) {
    return knex.schema
      .createTable('users', function (table) {
        table.increments('id');
        table.string('name', 255).notNullable();
        table.string('email', 255);
        table.timestamps();
      });
  };
  
  export let down = function(knex) {
    return knex.schema
      .dropTable('users');
  };