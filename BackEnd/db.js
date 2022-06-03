const {Pool} = require('pg')

const pool = new Pool({
    user:'postgres', //currently using Main User (Make a dedicated user + password for app)
    password:'820824',
    database:'test4_db',
    port: 5432,
    host:'localhost',
});

module.exports = {pool};