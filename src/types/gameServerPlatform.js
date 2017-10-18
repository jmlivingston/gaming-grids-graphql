const graphql = require('graphql')

module.exports = {
  apiPlatformEndpointConfiguration: {
    method: 'GET',
    url: 'api/Platform/EndpointConfiguration',
    response: new graphql.GraphQLObjectType({
      name: 'gameServerPlatformapiPlatformEndpointConfigurationResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'gameServerPlatformapiPlatformEndpointConfigurationresponseResponse',
            fields: {
              clientApiId: { type: graphql.GraphQLInt },
              clientApiKey: { type: graphql.GraphQLString },
              clientApiIssuedDateTime: { type: graphql.GraphQLString },
              hasServerPermission: { type: graphql.GraphQLBoolean },
              clientApiKeyDescription: { type: graphql.GraphQLString },
              gameServerApiEndPoint: { type: graphql.GraphQLString },
              clientApiEndPoint: { type: graphql.GraphQLString },
              ftpHost: { type: graphql.GraphQLString },
              ftpPath: { type: graphql.GraphQLString },
              ftpUserName: { type: graphql.GraphQLString },
              ftpPassword: { type: graphql.GraphQLString },
              sslAvailable: { type: graphql.GraphQLBoolean },
              playbackPath: { type: graphql.GraphQLString }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
