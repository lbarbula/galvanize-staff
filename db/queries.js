var knex = require('./knex')

module.exports = {
    listStaff: () => {
      return knex('staff')
  },
    addStaff: (model) => {
      return knex('staff').insert(model)
    },
    getStaff: (id) => {
      return knex('staff').select().where('id', id).first()
    },
    removeStaff: (id)=> {
      return knex('staff').del().where('id', id)
    }
}
