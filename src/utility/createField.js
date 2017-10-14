const { GraphQLList, GraphQLString, GraphQLBoolean, GraphQLObjectType, GraphQLInputObjectType } = require('graphql')
const restApi = require('../utility/restApi')
const { mapEnclosedValueArgs } = require('./textUtility')

const createQueriesMutations = (type) => {
  const foo = Object.keys(type.types).reduce((results, key) => {
    const queriesMutations = createField(key, type.types[key].url, type.types[key].args, type.fields, type.types[key].queryType)

    // console.log(JSON.stringify(queriesMutations, null, 2))
    results = {
      queries: {
        ...results.queries,
        ...queriesMutations.queries
      },
      mutations: {
        ...results.mutations,
        ...queriesMutations.mutations
      },      
    }
    return results
  }, {})
  console.log(JSON.stringify(foo, null, 2))
  return foo
}

const createField = (name, url, args, fields, queryType) => {
  const queries = {}
  const mutations = {}
  const type = new GraphQLObjectType({
    name: name,
    fields
  }) 


  if (queryType.get) {
    queries[name] = {
      type: new GraphQLList(type),
      args,
      resolve: () => restApi.get({ url: mapEnclosedValueArgs(url, args, '{', '}') })
    }
  }

  if (queryType.getSingle) {
    queries[name] = {
      type,
      args,
      resolve: (root, args) => {
        console.log(args)
        return restApi.get({ url: mapEnclosedValueArgs(url, args, '{', '}') })
      }
    }
  }  

  if (queryType.add) {
    mutations[name] = {
      type: type,
      args: { ...fields },
      resolve: (root, args) => restApi.add({ url: mapEnclosedValueArgs(url, args, '{', '}'), body: args })
    }
  }

  if (queryType.update) {
    mutations[name] = {
      type: GraphQLBoolean,
      args: { ...fields },
      resolve: (root, args) => restApi.update({ url: mapEnclosedValueArgs(url, args, '{', '}'), body: args })
    }
  }

  if (queryType.remove) {
    mutations[name] = {
      type: GraphQLBoolean,
      args,
      resolve: (root, args) => restApi.remove({ url: mapEnclosedValueArgs(url, args, '{', '}') })
    }
  }
  return { queries, mutations }
}

module.exports = {
  createField,
  createQueriesMutations
}


// const { GraphQLList, GraphQLString, GraphQLBoolean, GraphQLObjectType, GraphQLInputObjectType } = require('graphql')
// const restApi = require('../utility/restApi')

// const createField = ({ name, fields, idName, queryType }) => {
//   const queries = {}
//   const mutations = {}
//   const type = new GraphQLObjectType({
//     name: name,
//     fields
//   }) 
//   const capitalizedName = name.slice(0, 1).toUpperCase() + name.slice(1)

//   if (queryType.get) {
//     queries[name + 's'] = {
//       type: new GraphQLList(type),
//       resolve: () => restApi.get({ url: `/${name}` })
//     }
//     queries[name] = {
//       type,
//       args: {
//         [idName]: { type: GraphQLString }
//       },
//       resolve: (root, args) => restApi.get({ url: `/${name}`, id: args[idName] })
//     }
//   }

//   if (queryType.add) {
//     mutations["add" + capitalizedName] = {
//       type: type,
//       args: { ...fields },
//       resolve: (root, args) => restApi.add({ url: `/${name}`, body: args })
//     }
//   }

//   if (queryType.update) {
//     mutations["update" + capitalizedName] = {
//       type: GraphQLBoolean,
//       args: { ...fields },
//       resolve: (root, args) => restApi.update({ url: `/${name}`, id: args[idName], body: args })
//     }
//   }

//   if (queryType.remove) {
//     mutations["remove" + capitalizedName] = {
//       type: GraphQLBoolean,
//       args: {
//         [idName]: { type: GraphQLString }
//       },
//       resolve: (root, args) => restApi.remove({ url: `/${name}`, id: args[idName] })
//     }
//   }
//   return { queries, mutations }
// };

// module.exports = createField
