const graphql = require('graphql')

module.exports = {
  apiSupportContact: {
    method: 'POST',
    url: 'api/Support/Contact',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        emailAddress: { type: graphql.GraphQLString },
        subject: { type: graphql.GraphQLString },
        message: { type: graphql.GraphQLString },
        category: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientSupportapiSupportContactResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiSupportPlayerFeedbackReport: {
    method: 'undefined',
    url: 'api/Support/Player/Feedback/Report',
    urlParams: {
      entityId: {
        type: graphql.GraphQLInt
      },
      tournamentMatchId: {
        type: graphql.GraphQLInt
      },
      gameShortCode: {
        type: graphql.GraphQLString
      },
      feedbackReportedById: {
        type: graphql.GraphQLInt
      },
      feedbackRating: {
        type: graphql.GraphQLInt
      },
      feedbackMessage: {
        type: graphql.GraphQLString
      },
      inappropriateFlags: {
        type: graphql.GraphQLBoolean
      },
      reportToAdministrator: {
        type: graphql.GraphQLBoolean
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientSupportapiSupportPlayerFeedbackReportResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
