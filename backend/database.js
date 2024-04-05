const { Pool, Client } = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin",
    database: "users1"
})

client.connect();

module.exports = client