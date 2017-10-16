const { GraphQLBoolean, GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')

module.exports = {
  blogs: {
    method: 'GET',
    url: '/blog',
    response: new GraphQLList(new GraphQLObjectType({
      name: 'blogsResponse',
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
    })),
  },
  blog: {
    method: 'GET',
    url: '/blog/{id}',
    urlParams: {
      id: {
        type: GraphQLString
      }
    },
    response: new GraphQLObjectType({
      name: 'blogResponse',
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
    }),
  },
  removeBlog: {
    method: 'DELETE',
    url: '/blog/{id}',
    urlParams: {
      id: {
        type: GraphQLString
      }
    },
    response: GraphQLBoolean
  },
  addBlog: {
    method: 'POST',
    url: '/blog',
    body: {
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
    },
    response: new GraphQLObjectType({
      name: 'addBlogResponse',
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
  updateBlog: {
    method: 'PUT',
    url: '/blog/{id}',
    urlParams: {
      id: {
        type: GraphQLString
      }
    },
    body: {
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
    },
    response: GraphQLBoolean
  }
}
