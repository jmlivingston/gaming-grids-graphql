const graphql = require('graphql')

module.exports = {
  apiPlatformMaintenanceStatus: {
    method: 'GET',
    url: 'api/Platform/Maintenance/Status',
    response: new graphql.GraphQLObjectType({
      name: 'pollingPlatformapiPlatformMaintenanceStatusResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'pollingPlatformapiPlatformMaintenanceStatusresponseResponse',
            fields: {
              maintenanceMode: { type: graphql.GraphQLBoolean },
              administratorOnlyAccess: { type: graphql.GraphQLBoolean },
              statusNoticeText: { type: graphql.GraphQLString },
              lastUpdatedByAdministratorId: { type: graphql.GraphQLInt },
              lastUpdatedDateTime: { type: graphql.GraphQLString }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
