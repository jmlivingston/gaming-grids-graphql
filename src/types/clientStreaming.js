const graphql = require('graphql')

module.exports = {
  apiStreamingVideoPlayer: {
    method: 'DELETE',
    url: 'api/Streaming/Video/Player',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        serviceId: { type: graphql.GraphQLInt },
        nickName: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientStreamingapiStreamingVideoPlayerResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiStreamingVideoTeamByentityName: {
    method: 'DELETE',
    url: 'api/Streaming/Video/Team/{entityName}',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        serviceId: { type: graphql.GraphQLInt },
        nickName: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientStreamingapiStreamingVideoTeamByentityNameResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
