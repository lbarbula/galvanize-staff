# Galvanize Staff

An app for tracking Galvanzie staff and their associated cohorts.

##Installation

* `npm install`
* Set up a postgres database
* create .env file, use `.env.example` as a reference
* `knex migrate:latest --env production`
* `knex seed:run --env production`
* `npm run dev-start`
