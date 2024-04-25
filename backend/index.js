
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
    console.log('Received POST request to /register')
    
    console.log(req.body.reg_username_post)
    console.log(req.body.reg_password_post)
})

app.post('/actone', (req, res) => {
    console.log('Received POST request to /actone')
    
    value = req.body.echovalue

    value = value.toUpperCase()
    console.log(value)
    res.send(value)
})

app.post('/actthree', (req, res) => {
    console.log('Received POST request to /actthree')
    
    a = parseInt(req.body.avalue)
    var result = a;
    if (num === 0 || num === 1) 
      res.send(1)
    while (a > 1) { 
      num--;
      result *= num;
    }
    res.send(result)
})

app.all('/graphql', createHandler({schema, resolvers}))

app.listen (3002, () => console.log('App in port 3002'))