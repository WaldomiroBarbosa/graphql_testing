var { buildSchema } = require('graphql')
var { createSchema } = require('graphql-yoga')

const schema = buildSchema( `
  type User 
  {
    id: ID!
    username: String!
    password: String!
  }

  type AuthPayload 
  {
    token: String!
    user: User!
  }

  type Query 
  {
    user(id: ID!): User
    users: [User]
  }

  type Mutation 
  {
    signUp(username: String!, password: String!): AuthPayload
    signIn(username: String!, password: String!): AuthPayload
  }
`);

module.exports = schema