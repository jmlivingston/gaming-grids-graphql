const graphql = require('graphql')

module.exports = {
  apiTeamByentityName: {
    method: 'DELETE',
    url: 'api/Team/{entityName}',
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamapiTeamByentityNameResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTeam: {
    method: 'POST',
    url: 'api/Team/',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        entityName: { type: graphql.GraphQLString },
        displayName: { type: graphql.GraphQLString },
        joinPassword: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamapiTeamResponse',
      fields: {
        response: { type: graphql.GraphQLString },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTeamByteamEntityNameRosterRequested: {
    method: 'POST',
    url: 'api/Team/{teamEntityName}/Roster/requested',
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamapiTeamByteamEntityNameRosterRequestedResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTeamByteamEntityNameRoster: {
    method: 'DELETE',
    url: 'api/Team/{teamEntityName}/Roster',
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamapiTeamByteamEntityNameRosterResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTeamByteamEntityNameRosterByplayerEntityNameValidation: {
    method: 'GET',
    url: 'api/Team/{teamEntityName}/Roster/{playerEntityName}/Validation',
    response: new graphql.GraphQLObjectType({
      name:
        'clientTeamapiTeamByteamEntityNameRosterByplayerEntityNameValidationResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientTeamapiTeamByteamEntityNameRosterByplayerEntityNameValidationresponseResponse',
            fields: {
              willDropTeam: { type: graphql.GraphQLBoolean },
              tournaments: { type: graphql.GraphQLString }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTeamOnline: {
    method: 'GET',
    url: 'api/Team/online',
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamapiTeamOnlineResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientTeamapiTeamOnlineresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientTeamapiTeamOnlineresponseitemResponse',
                    fields: {
                      ownerId: { type: graphql.GraphQLInt },
                      joinPassword: { type: graphql.GraphQLString },
                      foundedDate: { type: graphql.GraphQLString },
                      teamDescriptionLong: { type: graphql.GraphQLString },
                      teamColor: { type: graphql.GraphQLString },
                      lastOpponentEmailDateTime: {
                        type: graphql.GraphQLString
                      },
                      lastAdminEmailDateTime: { type: graphql.GraphQLString },
                      isFriendsTeam: { type: graphql.GraphQLBoolean },
                      canEditProfile: { type: graphql.GraphQLBoolean },
                      entityTeamId: { type: graphql.GraphQLInt },
                      teamDescription: { type: graphql.GraphQLString },
                      numberOfPlayers: { type: graphql.GraphQLInt },
                      entityId: { type: graphql.GraphQLInt },
                      addressCountryId: { type: graphql.GraphQLInt },
                      gamingServerRegionId: { type: graphql.GraphQLInt },
                      isActive: { type: graphql.GraphQLBoolean },
                      createdDateTime: { type: graphql.GraphQLString },
                      matchPlayStatisticsId: { type: graphql.GraphQLInt },
                      entityName: { type: graphql.GraphQLString },
                      entityIsTeam: { type: graphql.GraphQLBoolean },
                      displayName: { type: graphql.GraphQLString },
                      entityImageUrl: { type: graphql.GraphQLString },
                      entityImageUrlIsExternal: {
                        type: graphql.GraphQLBoolean
                      },
                      entityBackgroundImageUrl: { type: graphql.GraphQLString },
                      entityBackgroundImageUrlIsExternal: {
                        type: graphql.GraphQLBoolean
                      }
                    }
                  })
                }
              }
            })
          )
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTeamByteamEntityNameRosterByplayerEntityName: {
    method: 'PUT',
    url: 'api/Team/{teamEntityName}/Roster/{playerEntityName}',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        roleId: { type: graphql.GraphQLInt },
        playerTitle: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamapiTeamByteamEntityNameRosterByplayerEntityNameResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTeamByteamEntityNameRosterInvite: {
    method: 'POST',
    url: 'api/Team/{teamEntityName}/Roster/Invite',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { entityName: { type: graphql.GraphQLString } }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamapiTeamByteamEntityNameRosterInviteResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
