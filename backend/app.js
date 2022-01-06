const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const graphQlSchema = require('./graphql/schema/index')
const graphQlResolvers = require('./graphql/resolvers/index')

app.use(bodyParser.json())

app.use('/graphql', graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
}))

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.wfavh.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(5000)
    }).catch(err => {
    console.log(err)
})