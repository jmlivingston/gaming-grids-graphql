const graphql = require('graphql')

module.exports = {
  apiFileUpload: {
    method: 'POST',
    url: 'api/File/Upload',
    response: new graphql.GraphQLObjectType({
      name: 'controlFileapiFileUploadResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlFileapiFileUploadresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'controlFileapiFileUploadresponseitemResponse',
                    fields: {
                      name: { type: graphql.GraphQLString },
                      size: { type: graphql.GraphQLInt },
                      shortUrl: { type: graphql.GraphQLString },
                      url: { type: graphql.GraphQLString },
                      thumbnailUrl: { type: graphql.GraphQLString },
                      deleteUrl: { type: graphql.GraphQLString },
                      deleteType: { type: graphql.GraphQLString },
                      error: { type: graphql.GraphQLString }
                    }
                  })
                }
              }
            })
          )
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
