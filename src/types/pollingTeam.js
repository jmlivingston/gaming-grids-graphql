const graphql = require('graphql')

module.exports = {
  apiTeamCaptainOnlineCount: {
    method: 'GET',
    url: 'api/Team/Captain/Online/count',
    response: new graphql.GraphQLObjectType({
      name: 'pollingTeamapiTeamCaptainOnlineCountResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
