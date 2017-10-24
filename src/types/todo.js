const {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLInputObjectType,
  GraphQLOutputObjectType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLList
} = require('graphql')

module.exports = {
  todos: {
    method: 'GET',
    url: '/to-dos',
    response: new GraphQLList(
      new GraphQLObjectType({
        name: 'todosResponse',
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
    )
  },
  todo: {
    method: 'GET',
    url: '/to-dos/{id}/{id3}',
    args: {
      urlParams: {
        type: new GraphQLNonNull(
          new GraphQLInputObjectType({
            name: 'todoUrlParams',
            fields: {
              id: {
                type: GraphQLString
              },
              id3: {
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
              },
              foo: {
                type: GraphQLString
              }
            }
          })
        )
      }
    },
    response: new GraphQLObjectType({
      name: 'getTodoResponse',
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
  },
  removeTodo: {
    method: 'DELETE',
    url: '/to-dos/{id}',
    args: {
      urlParams: {
        type: new GraphQLNonNull(
          new GraphQLInputObjectType({
            name: 'removeTodoUrlParams',
            fields: {
              id: {
                type: GraphQLString
              }
            }
          })
        )
      }
    },
    response: new GraphQLObjectType({
      name: 'removeTodoResponse',
      fields: {
        ok: {
          type: GraphQLBoolean
        },
        status: {
          type: GraphQLInt
        },
        statusText: {
          type: GraphQLBoolean
        }
      }
    })
  },
  addTodo: {
    method: 'POST',
    url: '/to-dos',
    args: {
      body: {
        type: new GraphQLNonNull(
          new GraphQLInputObjectType({
            name: 'addTodoUrlParams',
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
        )
      }
    },
    response: new GraphQLObjectType({
      name: 'addTodoResponse',
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
  },
  updateTodo: {
    method: 'PUT',
    url: '/to-dos/{id}',
    args: {
      urlParams: {
        type: new GraphQLNonNull(
          new GraphQLInputObjectType({
            name: 'updateTodoUrlParams',
            fields: {
              id: {
                type: GraphQLString
              }
            }
          })
        )
      },
      body: {
        type: new GraphQLNonNull(
          new GraphQLInputObjectType({
            name: 'updateTodoBody',
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
        )
      }
    },
    response: new GraphQLObjectType({
      name: 'updateTodoResponse',
      fields: {
        ok: {
          type: GraphQLBoolean
        },
        status: {
          type: GraphQLInt
        },
        statusText: {
          type: GraphQLBoolean
        }
      }
    })
  }
}
