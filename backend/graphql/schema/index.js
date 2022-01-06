const {buildSchema} = require('graphql')

module.exports = buildSchema(`

        input FileUpload {
            filename : String!
            mimetype : String!
            encoding : String!
        }
        
        type User {
            _id: ID!
            email : String!
            phone: String
            photo: String
            name: String
            bio: String
            password: String
        }
        
        input UpdateUserProfileInput{
            email : String!
            phone: String
            name: String
            bio: String
            password: String
        }
        
        input CreateUserInput {
            email : String!
            password: String!
        }
        
        type AuthData {
            token : String!
            expiresIn: Int!
            user : User!
        }
        
        type RootQuery {
            login(email : String!, password : String!) : AuthData
        }
        
        type RootMutation {
            createUser(createUserInput: CreateUserInput!) : User
            updateUserProfile(updateUserProfileInput: UpdateUserProfileInput!, photo : FileUpload) : User
        }
        
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `)