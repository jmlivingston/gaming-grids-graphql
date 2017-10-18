const graphql = require('graphql')

module.exports = {
  apiNotificationsBynotificationIdStatus: {
    method: 'PUT',
    url: 'api/Notifications/{notificationId}/Status',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { stateName: { type: graphql.GraphQLString } }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientNotificationapiNotificationsBynotificationIdStatusResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
