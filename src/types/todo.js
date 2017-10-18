const {
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLList
} = require('graphql')

module.exports = {
  // todos: {
  //   method: 'GET',
  //   url: '/todo',
  //   response: new GraphQLList(new GraphQLObjectType({
  //     name: 'todosResponse',
  //     fields: {
  //       id: {
  //         type: GraphQLString
  //       },
  //       name: {
  //         type: GraphQLString
  //       },
  //       isComplete: {
  //         type: GraphQLBoolean
  //       }
  //     }
  //   })),
  // },
  todo: {
    method: 'GET',
    url: '/todo/{id}',
    args: {
      args: {
        type: new GraphQLNonNull(
          new GraphQLInputObjectType({
            name: 'args',
            fields: {
              id: {
                type: GraphQLString
              }
            }
          })
        )
      },
      uriParams: {
        type: new GraphQLNonNull(
          new GraphQLInputObjectType({
            name: 'uriParams',
            fields: {
              id2: {
                type: GraphQLFloat
              }
            }
          })
        )
      }
    },
    urlParams: {
      id: {
        type: GraphQLString
      }
    },
    uriParam: {
      id2: {
        type: GraphQLString
      }
    },
    response: new GraphQLObjectType({
      name: 'todoResponse',
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
      }
    })
  }
  // removeTodo: {
  //   method: 'DELETE',
  //   url: '/todo/{id}',
  //   urlParams: {
  //     id: {
  //       type: GraphQLString
  //     }
  //   },
  //   response: GraphQLBoolean
  // },
  // addTodo: {
  //   method: 'POST',
  //   url: '/todo',
  //   body: {
  //     fields: {
  //       id: {
  //         type: GraphQLString
  //       },
  //       name: {
  //         type: GraphQLString
  //       },
  //       isComplete: {
  //         type: GraphQLBoolean
  //       }
  //     }
  //   },
  //   response: new GraphQLObjectType({
  //     name: 'addTodoResponse',
  //     fields: {
  //       id: {
  //         type: GraphQLString
  //       },
  //       name: {
  //         type: GraphQLString
  //       },
  //       isComplete: {
  //         type: GraphQLBoolean
  //       }
  //     }
  //   })
  // },
  // updateTodo: {
  //   method: 'PUT',
  //   url: '/todo/{id}',
  //   urlParams: {
  //     id: {
  //       type: GraphQLString
  //     }
  //   },
  //   body: {
  //     fields: {
  //       id: {
  //         type: GraphQLString
  //       },
  //       name: {
  //         type: GraphQLString
  //       },
  //       isComplete: {
  //         type: GraphQLBoolean
  //       }
  //     }
  //   },
  //   response: GraphQLBoolean
  // }
}
