var knex = require('./knex')

module.exports = {
    listStaff: () => {
      return knex('staff')
  },
    addStaff: (model) => {
      return knex('staff').insert(model)
    }
}
