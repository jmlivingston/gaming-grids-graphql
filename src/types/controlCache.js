const graphql = require('graphql')

module.exports = {
  apiCacheBuildAll: {
    method: 'GET',
    url: 'api/Cache/Build/All',
    response: new graphql.GraphQLObjectType({
      name: 'controlCacheapiCacheBuildAllResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
