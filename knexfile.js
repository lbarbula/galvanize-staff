require('dotenv').load()

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/galvanize-staff'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
}
