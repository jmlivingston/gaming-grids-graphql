const graphql = require('graphql')

module.exports = {
  apiTournamentSeries: {
    method: 'POST',
    url: 'api/Tournament/Series/',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        tournamentSeriesName: { type: graphql.GraphQLString },
        gamePlatformFranchiseTitleId: { type: graphql.GraphQLInt },
        tournamentSubscriptionTypeId: { type: graphql.GraphQLInt },
        registrationOpenDateTIme: { type: graphql.GraphQLString },
        tournamentStartDateTime: { type: graphql.GraphQLString },
        tournamentSerieseDoesCycle: { type: graphql.GraphQLBoolean }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentSeriesapiTournamentSeriesResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentSeriesByseriesId: {
    method: 'PUT',
    url: 'api/Tournament/Series/{seriesId}',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        tournamentSeriesName: { type: graphql.GraphQLString },
        gamePlatformFranchiseTitleId: { type: graphql.GraphQLInt },
        tournamentSubscriptionTypeId: { type: graphql.GraphQLInt },
        registrationOpenDateTIme: { type: graphql.GraphQLString },
        tournamentStartDateTime: { type: graphql.GraphQLString },
        tournamentSerieseDoesCycle: { type: graphql.GraphQLBoolean }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentSeriesapiTournamentSeriesByseriesIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentSeriesByseriesIdStateBystateId: {
    method: 'PUT',
    url: 'api/Tournament/Series/{seriesId}/state/{stateId}',
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentSeriesapiTournamentSeriesByseriesIdStateBystateIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
