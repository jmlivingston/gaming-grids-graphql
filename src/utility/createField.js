const {
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql')

const restApi = require('../utility/restApi')
const { encodeUriParams, mapEnclosedValueArgs } = require('./textUtility')

const combineQueryMutations = (...types) => {
  const queryMutations = types.reduce((results, type) => {
    const queryMutation = createQueriesMutations(type)
    results = {
      queries: {
        ...results.queries,
        ...queryMutation.queries
      },
      mutations: {
        ...results.mutations,
        ...queryMutation.mutations
      }
    }
    return results
  }, {})

  return queryMutations
}

const createQueriesMutations = type => {
  const combinedQueryMutations = Object.keys(type).reduce((results, key) => {
    const queriesMutations = createField(key, type[key])
    results = {
      queries: {
        ...results.queries,
        ...queriesMutations.queries
      },
      mutations: {
        ...results.mutations,
        ...queriesMutations.mutations
      }
    }
    return results
  }, {})
  return combinedQueryMutations
}

const createField = (name, type) => {
  const queries = {}
  const mutations = {}

  const coreProperties = {
    type: type.response,
    args: type.args,
    resolve: (root, args) => {
      const url = mapEnclosedValueArgs(type.url, args.urlParams, '{', '}') + encodeUriParams(args.uriParams)
      return restApi[type.method]({
        url,
        body: args.body
      })
    }
  }

  if (type.method === 'GET') {
    queries[name] = {
      ...coreProperties
    }
  } else {
    mutations[name] = {
      ...coreProperties
    }
  }
  return { queries, mutations }
}

module.exports = {
  combineQueryMutations,
  createField,
  createQueriesMutations
}
