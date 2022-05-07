exports.seed = async function(knex) {
  await knex('users').del()
  await knex('users').insert([
    {
      name: 'Anna Clara Ferraz', 
      email: 'annac@gmail.com', 
      password: 'admin'
    }
  ]);
};
