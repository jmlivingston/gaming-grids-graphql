const { GraphQLObjectType, GraphQLSchema } = require('graphql')

const types = require('./types')

module.exports = new GraphQLSchema({
  query: Object.keys(types.queries).length > 0 ? new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      ...types.queries
    }
  }) : undefined,
  mutation: Object.keys(types.mutations).length > 0 ? new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
      ...types.mutations
    }
  }) : undefined
})
