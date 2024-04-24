const { Pool, Client } = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin",
    database: "graphql"
})

client.connect();

module.exports = client