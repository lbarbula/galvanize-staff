var knex = require('./knex')

module.exports = {
    listStaff: () => {
      return knex('staff')
  }
}
