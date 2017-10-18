const graphql = require('graphql')

module.exports = {
  apiTournamentMatchBytournamentMatchId: {
    method: 'DELETE',
    url: 'api/Tournament/Match/{tournamentMatchId}',
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchapiTournamentMatchBytournamentMatchIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdPlayerByentityName: {
    method: 'POST',
    url: 'api/Tournament/Match/{tournamentMatchId}/Player/{entityName}',
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchapiTournamentMatchBytournamentMatchIdPlayerByentityNameResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdMessage: {
    method: 'POST',
    url: 'api/Tournament/Match/{tournamentMatchId}/Message/',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { message: { type: graphql.GraphQLString } }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchapiTournamentMatchBytournamentMatchIdMessageResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdScheduleDelayByminutes: {
    method: 'PUT',
    url: 'api/Tournament/Match/{tournamentMatchId}/Schedule/Delay/{minutes}',
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchapiTournamentMatchBytournamentMatchIdScheduleDelayByminutesResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdMode: {
    method: 'PUT',
    url: 'api/Tournament/Match/{tournamentMatchId}/Mode/',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { manualMode: { type: graphql.GraphQLBoolean } }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchapiTournamentMatchBytournamentMatchIdModeResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdAdministrator: {
    method: 'PUT',
    url: 'api/Tournament/Match/{tournamentMatchId}/Administrator/',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { entityName: { type: graphql.GraphQLString } }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchapiTournamentMatchBytournamentMatchIdAdministratorResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdAssistanceByassistanceId: {
    method: 'DELETE',
    url: 'api/Tournament/Match/{tournamentMatchId}/Assistance/{assistanceId}/',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { comments: { type: graphql.GraphQLString } }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchapiTournamentMatchBytournamentMatchIdAssistanceByassistanceIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdPlayer: {
    method: 'POST',
    url: 'api/Tournament/Match/{tournamentMatchId}/Player/',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        entityName: { type: graphql.GraphQLString },
        isOnTeamA: { type: graphql.GraphQLBoolean }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchapiTournamentMatchBytournamentMatchIdPlayerResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdSchedule: {
    method: 'PUT',
    url: 'api/Tournament/Match/{tournamentMatchId}/Schedule/',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        startDateTime: { type: graphql.GraphQLString },
        administratorComment: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchapiTournamentMatchBytournamentMatchIdScheduleResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdStreamingVideo: {
    method: 'PUT',
    url: 'api/Tournament/Match/{tournamentMatchId}/Streaming/Video/',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        streamingServiceId: { type: graphql.GraphQLInt },
        broadcastUrl: { type: graphql.GraphQLString },
        allowedSpectators: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchapiTournamentMatchBytournamentMatchIdStreamingVideoResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdModeManualServer: {
    method: 'PUT',
    url: 'api/Tournament/Match/{tournamentMatchId}/Mode/Manual/Server/',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { manualConnectionInfo: { type: graphql.GraphQLString } }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchapiTournamentMatchBytournamentMatchIdModeManualServerResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdStatusEnforceLive: {
    method: 'PUT',
    url: 'api/Tournament/Match/{tournamentMatchId}/Status/EnforceLive',
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchapiTournamentMatchBytournamentMatchIdStatusEnforceLiveResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdDispute: {
    method: 'POST',
    url: 'api/Tournament/Match/{tournamentMatchId}/Dispute',
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchapiTournamentMatchBytournamentMatchIdDisputeResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdServerIssue: {
    method: 'POST',
    url: 'api/Tournament/Match/{tournamentMatchId}/Server/Issue',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        regionId: { type: graphql.GraphQLInt },
        serverId: { type: graphql.GraphQLInt },
        enforceSnapshotRound: { type: graphql.GraphQLInt },
        administratorComment: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchapiTournamentMatchBytournamentMatchIdServerIssueResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdScoringEnforce: {
    method: 'POST',
    url: 'api/Tournament/Match/{tournamentMatchId}/Scoring/Enforce',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        scoreA: { type: graphql.GraphQLFloat },
        scoreB: { type: graphql.GraphQLFloat },
        applyToEntireRound: { type: graphql.GraphQLBoolean },
        administratorComment: { type: graphql.GraphQLString },
        recursiveAutoDelete: { type: graphql.GraphQLBoolean },
        imageUrl: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchapiTournamentMatchBytournamentMatchIdScoringEnforceResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
