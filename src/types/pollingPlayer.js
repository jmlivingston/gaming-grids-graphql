const graphql = require('graphql')

module.exports = {
  apiPlayerMuut: {
    method: 'GET',
    url: 'api/Player/Muut',
    response: new graphql.GraphQLObjectType({
      name: 'pollingPlayerapiPlayerMuutResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'pollingPlayerapiPlayerMuutresponseResponse',
            fields: {
              timestamp: { type: graphql.GraphQLInt },
              message: { type: graphql.GraphQLString },
              signature: { type: graphql.GraphQLString }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerMyPermissionsAdmin: {
    method: 'GET',
    url: 'api/Player/My/Permissions/Admin',
    response: new graphql.GraphQLObjectType({
      name: 'pollingPlayerapiPlayerMyPermissionsAdminResponse',
      fields: {
        response: { type: graphql.GraphQLBoolean },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerMyTournamentsMatchLastId: {
    method: 'GET',
    url: 'api/Player/My/Tournaments/Match/LastId',
    response: new graphql.GraphQLObjectType({
      name: 'pollingPlayerapiPlayerMyTournamentsMatchLastIdResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerMyTournamentsMatchActive: {
    method: 'GET',
    url: 'api/Player/My/Tournaments/Match/Active',
    response: new graphql.GraphQLObjectType({
      name: 'pollingPlayerapiPlayerMyTournamentsMatchActiveResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'pollingPlayerapiPlayerMyTournamentsMatchActiveresponseResponse',
            fields: {
              tournamentMatchId: { type: graphql.GraphQLInt },
              gameName: { type: graphql.GraphQLString },
              gameImageLargeUrl: { type: graphql.GraphQLString },
              tournamentMatchIsTeam: { type: graphql.GraphQLBoolean },
              participantAEntityName: { type: graphql.GraphQLString },
              participantANickname: { type: graphql.GraphQLString },
              participantBEntityName: { type: graphql.GraphQLString },
              participantBNickname: { type: graphql.GraphQLString },
              scheduledStartDateTime: { type: graphql.GraphQLString },
              currentServerDateTime: { type: graphql.GraphQLString }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerMyTournamentsCheckinNeeded: {
    method: 'GET',
    url: 'api/Player/My/Tournaments/checkin/needed',
    response: new graphql.GraphQLObjectType({
      name: 'pollingPlayerapiPlayerMyTournamentsCheckinNeededResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'pollingPlayerapiPlayerMyTournamentsCheckinNeededresponseResponse',
            fields: {
              tournamentId: { type: graphql.GraphQLInt },
              tournamentName: { type: graphql.GraphQLString },
              gameImageLargeUrl: { type: graphql.GraphQLString },
              scheduledStartDateTime: { type: graphql.GraphQLString }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
