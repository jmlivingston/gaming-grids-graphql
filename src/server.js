const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const cors = require('cors')

const schema = require('./schema')

const port = 3000

const app = express().use('*', cors())

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(port)
console.log("GraphQL running at http://localhost:" + port + "/graphql");
console.log("GraphiQL running at http://localhost:" + port + "/graphiql")
