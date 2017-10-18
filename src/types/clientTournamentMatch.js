const graphql = require('graphql')

module.exports = {
  apiTournamentMatchBytournamentMatchIdPlayerByentityName: {
    method: 'DELETE',
    url: 'api/Tournament/Match/{tournamentMatchId}/Player/{entityName}',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { hasPenalty: { type: graphql.GraphQLBoolean } }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchapiTournamentMatchBytournamentMatchIdPlayerByentityNameResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdFeedback: {
    method: 'GET',
    url: 'api/Tournament/Match/{tournamentMatchId}/Feedback',
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchapiTournamentMatchBytournamentMatchIdFeedbackResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientTournamentMatchapiTournamentMatchBytournamentMatchIdFeedbackresponseResponse',
            fields: {
              summary: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientTournamentMatchapiTournamentMatchBytournamentMatchIdFeedbackresponsesummaryResponse',
                  fields: {
                    id: { type: graphql.GraphQLInt },
                    feedbackCount: { type: graphql.GraphQLInt },
                    feedbackRating1: { type: graphql.GraphQLInt },
                    feedbackRating2: { type: graphql.GraphQLInt },
                    feedbackRating3: { type: graphql.GraphQLInt },
                    feedbackRating4: { type: graphql.GraphQLInt },
                    feedbackRating5: { type: graphql.GraphQLInt }
                  }
                })
              },
              feedback: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientTournamentMatchapiTournamentMatchBytournamentMatchIdFeedbackresponsefeedbackResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTournamentMatchapiTournamentMatchBytournamentMatchIdFeedbackresponsefeedbackitemResponse',
                          fields: {
                            siteFeedbackId: { type: graphql.GraphQLInt },
                            tournamentId: { type: graphql.GraphQLInt },
                            tournamentMatchId: { type: graphql.GraphQLInt },
                            feedbackRating: { type: graphql.GraphQLInt },
                            comments: { type: graphql.GraphQLString },
                            entityId: { type: graphql.GraphQLInt },
                            entityProfile: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTournamentMatchapiTournamentMatchBytournamentMatchIdFeedbackresponsefeedbackitementityProfileResponse',
                                fields: {
                                  nickname: { type: graphql.GraphQLString },
                                  lanModeEnabled: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  lanSeatLocation: {
                                    type: graphql.GraphQLString
                                  },
                                  entityName: { type: graphql.GraphQLString },
                                  entityIsTeam: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  displayName: { type: graphql.GraphQLString },
                                  entityImageUrl: {
                                    type: graphql.GraphQLString
                                  },
                                  entityImageUrlIsExternal: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  entityBackgroundImageUrl: {
                                    type: graphql.GraphQLString
                                  },
                                  entityBackgroundImageUrlIsExternal: {
                                    type: graphql.GraphQLBoolean
                                  }
                                }
                              })
                            },
                            feedbackDateTime: { type: graphql.GraphQLString }
                          }
                        })
                      }
                    }
                  })
                )
              }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdPlayerMyStatus: {
    method: 'PUT',
    url: 'api/Tournament/Match/{tournamentMatchId}/Player/My/Status',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        isReady: { type: graphql.GraphQLBoolean },
        forceSet: { type: graphql.GraphQLBoolean }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchapiTournamentMatchBytournamentMatchIdPlayerMyStatusResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdParticipantByentityIdTeamSideByteamSideId: {
    method: 'POST',
    url:
      'api/Tournament/Match/{tournamentMatchId}/Participant/{entityId}/TeamSide/{teamSideId}',
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchapiTournamentMatchBytournamentMatchIdParticipantByentityIdTeamSideByteamSideIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDecks: {
    method: 'POST',
    url:
      'api/Tournament/Match/{tournamentMatchId}/Participant/{entityId}/hearthstone/decks',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        hearthstoneDecks: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'bodyhearthstoneDecksResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'bodyhearthstoneDecksitemResponse',
                    fields: {
                      playerNumber: { type: graphql.GraphQLInt },
                      hearthstoneDeckId: { type: graphql.GraphQLInt }
                    }
                  })
                }
              }
            })
          )
        }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchapiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDecksResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDeckStartingBydeckId: {
    method: 'PUT',
    url:
      'api/Tournament/Match/{tournamentMatchId}/Participant/{entityId}/hearthstone/deck/starting/{deckId}',
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchapiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDeckStartingBydeckIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDeckExclude: {
    method: 'PUT',
    url:
      'api/Tournament/Match/{tournamentMatchId}/Participant/{entityId}/hearthstone/deck/exclude',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        hearthstoneDeckIds: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'bodyhearthstoneDeckIdsResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: { type: graphql.GraphQLInt }
              }
            })
          )
        }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchapiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDeckExcludeResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdTeamMyStatus: {
    method: 'PUT',
    url: 'api/Tournament/Match/{tournamentMatchId}/Team/My/Status',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        isReady: { type: graphql.GraphQLBoolean },
        forceSet: { type: graphql.GraphQLBoolean }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchapiTournamentMatchBytournamentMatchIdTeamMyStatusResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdScoringManualApprove: {
    method: 'POST',
    url: 'api/Tournament/Match/{tournamentMatchId}/Scoring/Manual/Approve',
    urlParams: {
      tournamentMatchId: {
        type: graphql.GraphQLInt
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchapiTournamentMatchBytournamentMatchIdScoringManualApproveResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdScoringManual: {
    method: 'POST',
    url: 'api/Tournament/Match/{tournamentMatchId}/Scoring/Manual',
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchapiTournamentMatchBytournamentMatchIdScoringManualResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdServerRequest: {
    method: 'POST',
    url: 'api/Tournament/Match/{tournamentMatchId}/Server/Request',
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchapiTournamentMatchBytournamentMatchIdServerRequestResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdAssistance: {
    method: 'POST',
    url: 'api/Tournament/Match/{tournamentMatchId}/Assistance',
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchapiTournamentMatchBytournamentMatchIdAssistanceResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientTournamentMatchapiTournamentMatchBytournamentMatchIdAssistanceresponseResponse',
            fields: {
              assistanceRequestedById: { type: graphql.GraphQLInt },
              tournamentMatchAssistanceId: { type: graphql.GraphQLInt }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdPlayer: {
    method: 'POST',
    url: 'api/Tournament/Match/{tournamentMatchId}/Player',
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchapiTournamentMatchBytournamentMatchIdPlayerResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
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
        'clientTournamentMatchapiTournamentMatchBytournamentMatchIdDisputeResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdScoringConfirm: {
    method: 'PUT',
    url: 'api/Tournament/Match/{tournamentMatchId}/Scoring/Confirm',
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchapiTournamentMatchBytournamentMatchIdScoringConfirmResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdForfeit: {
    method: 'PUT',
    url: 'api/Tournament/Match/{tournamentMatchId}/Forfeit',
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchapiTournamentMatchBytournamentMatchIdForfeitResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchBytournamentMatchIdLeagueSchedule: {
    method: 'PUT',
    url: 'api/Tournament/Match/{tournamentMatchId}/League/Schedule/',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        startDateTime: { type: graphql.GraphQLString },
        administratorComment: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchapiTournamentMatchBytournamentMatchIdLeagueScheduleResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
