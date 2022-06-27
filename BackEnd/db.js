const {Pool} = require('pg')

const pool = new Pool({
    user:'user123', //currently using Main User (Make a dedicated user + password for app)
    password:'password123',
    database:'db1',
    port: 5432,
    host:'localhost',
});

module.exports = {pool};