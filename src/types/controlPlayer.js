const graphql = require('graphql')

module.exports = {
  apiPlayerByentityNameProfile: {
    method: 'PUT',
    url: 'api/Player/{entityName}/profile',
    response: new graphql.GraphQLObjectType({
      name: 'controlPlayerapiPlayerByentityNameProfileResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'controlPlayerapiPlayerByentityNameProfileresponseResponse',
            fields: {
              entityId: { type: graphql.GraphQLInt },
              userLoginToken: { type: graphql.GraphQLString },
              entityMembershipId: { type: graphql.GraphQLString },
              entityMembershipToken: { type: graphql.GraphQLString },
              emailAddress: { type: graphql.GraphQLString },
              firstName: { type: graphql.GraphQLString },
              lastName: { type: graphql.GraphQLString },
              entityName: { type: graphql.GraphQLString },
              displayName: { type: graphql.GraphQLString },
              isAdministrator: { type: graphql.GraphQLBoolean },
              registrationDateTime: { type: graphql.GraphQLString },
              lastLoginDateTime: { type: graphql.GraphQLString },
              entityImageUrl: { type: graphql.GraphQLString },
              playerSubscriptionTypeId: { type: graphql.GraphQLInt },
              muut: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlPlayerapiPlayerByentityNameProfileresponsemuutResponse',
                  fields: {
                    timestamp: { type: graphql.GraphQLInt },
                    message: { type: graphql.GraphQLString },
                    signature: { type: graphql.GraphQLString }
                  }
                })
              }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerByentityNameTournamentAllowed: {
    method: 'GET',
    url: 'api/Player/{entityName}/Tournament/Allowed',
    response: new graphql.GraphQLObjectType({
      name: 'controlPlayerapiPlayerByentityNameTournamentAllowedResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerByentityNameChangePassword: {
    method: 'PUT',
    url: 'api/Player/{entityName}/ChangePassword',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { newPwd: { type: graphql.GraphQLString } }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlPlayerapiPlayerByentityNameChangePasswordResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerByentityNameSteam: {
    method: 'PUT',
    url: 'api/Player/{entityName}/Steam',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        steamId32: { type: graphql.GraphQLInt },
        steamId64: { type: graphql.GraphQLInt }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlPlayerapiPlayerByentityNameSteamResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerByentityNameTournamentPolicy: {
    method: 'PUT',
    url: 'api/Player/{entityName}/TournamentPolicy',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { tournamentManagementPolicyId: { type: graphql.GraphQLInt } }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlPlayerapiPlayerByentityNameTournamentPolicyResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
