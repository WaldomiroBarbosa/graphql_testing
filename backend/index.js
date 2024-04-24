
const express = require('express')
const cors = require('cors')
const db = require('./database.js')
const schema = require('./schema.js')
const resolvers = require('./resolvers.js')
var { createHandler } = require("graphql-http/lib/use/express")
var { ruruHTML } = require("ruru/server")
var { GraphQLSchema } = require('graphql')
var { createSchema, createYoga } = require('graphql-yoga')


const app = express()
app.use(express.json())
app.use(cors())

//app.get("/", (_req, res) => {
   // res.type("html")
   // res.end(ruruHTML({ endpoint: "/graphql" }))
//})

app.post('/login', (req, res) => {
    console.log('Received POST request to /login')
    
    console.log(req.body.log_username_post)
    console.log(req.body.log_password_post)
})

app.post('/register', (req, res) => {
    console.log('Received POST request to /login')
    
    console.log(req.body.reg_username_post)
    console.log(req.body.reg_password_post)
})

app.all('/graphql', createHandler({schema, resolvers}))

app.listen (3002, () => console.log('App in port 3002'))