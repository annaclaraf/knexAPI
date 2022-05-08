exports.up = function(knex) {
    return knex.schema.createTable('posts', table => {
        table.increments('id')
    
        table.string('content').notNullable()

        table.integer('user_id')
            .references('users.id')
            .unsigned()
            .notNullable()
            .onDelete('CASCADE')
       
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts')
};
