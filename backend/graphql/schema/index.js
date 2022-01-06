const {buildSchema} = require('graphql')

module.exports = buildSchema(`
        type User {
            _id: ID!
            email : String!
            phone: String
            photo: String
            name: String
            bio: String
            password: String
        }
        
        input CreateUserInput {
            email : String!
            password: String!
        }
        
        type AuthData {
            userId : ID!
            token : String!
            expiresIn: Int!
        }
        
        type RootQuery {
            login(email : String!, password : String!) : AuthData
        }
        
        type RootMutation {
            createUser(createUserInput: CreateUserInput!) : User
        }
        
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `)