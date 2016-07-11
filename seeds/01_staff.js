
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE staff RESTART IDENTITY CASCADE')
    .then(function () {
      return Promise.all([
        knex('staff').insert(
          {
          first_name: 'Kyle',
          last_name: 'Coberly'
          }),
        knex('staff').insert(
          {
            first_name: 'Elana',
            last_name: 'Kopelvich'
          }),
        knex('staff').insert(
          {
            first_name: 'Roberto',
            last_name: 'Ortega'
          })
      ]);
    });
};
