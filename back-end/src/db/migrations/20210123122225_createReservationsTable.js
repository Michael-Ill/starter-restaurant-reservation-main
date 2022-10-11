exports.up = async function (knex) {
	return knex.schema.createTable('reservations', (table) => {
	  table.increments('reservation_id').primary();
	  table.string('first_name').notNullable();
	  table.string('last_name').notNullable();
	  table.string('mobile_number').notNullable();
	  table.date('reservation_date').notNullable();
	  table.time('reservation_time').notNullable();
	  table.string("status").defaultTo("booked");
	  table.integer('people').unsigned().notNullable();
	  table.timestamps(true, true);
	});
  };
  
  exports.down = async function (knex) {
	return knex.schema.dropTable('reservations');
  };