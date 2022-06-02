const {Pool} = require('pg')

const pool = new Pool({
    user:'postgres',
    password:'820824',
    database:'genshin_impact',
    port: 5432,
    host:'localhost',
});

module.exports = {pool};