const { GraphQLString, GraphQLBoolean } = require('graphql')

module.exports = {
  fields: {
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    isComplete: {
      type: GraphQLBoolean
    }
  },
  types: {
    todos: {
      url: '/todo',
      queryType: {
        get: true
      }
    },
    todo: {
      url: '/todo/{id}',
      args: {
        id: {
          type: GraphQLString
        }
      },
      queryType: {
        getSingle: true
      }
    },
    removeTodo: {
      url: '/todo/{id}',
      args: {
        id: {
          type: GraphQLString
        }
      },      
      queryType: {
        remove: true
      }
    },
    addTodo: {
      url: '/todo',
      queryType: {
        add: true
      }
    },
    updateTodo: {
      url: '/todo/{id}',
      args: {
        id: {
          type: GraphQLString
        }
      },      
      queryType: {
        update: true
      }
    }
  }
}

// const { GraphQLString, GraphQLBoolean } = require('graphql')

// module.exports = {
//   idName: 'id',
//   name: 'todo',
//   queryType: {
//     add: true,
//     get: true,
//     remove: true,
//     update: true
//   },  
//   fields: {
//     id: {
//       type: GraphQLString
//     },
//     name: {
//       type: GraphQLString
//     },
//     isComplete: {
//       type: GraphQLBoolean
//     }
//   }
// }
