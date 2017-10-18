const graphql = require('graphql')

module.exports = {
  apiTournamentMatchByTournamentMatchIdLiveScore: {
    method: 'POST',
    url: 'api/Tournament/Match/{TournamentMatchId}/Live/Score',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        currentInGameScoreA: { type: graphql.GraphQLFloat },
        currentInGameScoreB: { type: graphql.GraphQLFloat }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdLiveScoreResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchByTournamentMatchIdMessagePendingList: {
    method: 'GET',
    url: 'api/Tournament/Match/{TournamentMatchId}/Message/Pending/List',
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdMessagePendingListResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdMessagePendingListresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdMessagePendingListresponseitemResponse',
                    fields: {
                      messageId: { type: graphql.GraphQLInt },
                      tournamentMatchId: { type: graphql.GraphQLInt },
                      messageDirection: { type: graphql.GraphQLInt },
                      message: { type: graphql.GraphQLString },
                      pendingServerProcessing: { type: graphql.GraphQLBoolean },
                      messageDateTime: { type: graphql.GraphQLString }
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
  apiTournamentMatchByTournamentMatchIdMessageSend: {
    method: 'POST',
    url: 'api/Tournament/Match/{TournamentMatchId}/Message/Send',
    urlParams: {
      message: {
        type: graphql.GraphQLString
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdMessageSendResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchByTournamentMatchIdPlayerListActive: {
    method: 'GET',
    url: 'api/Tournament/Match/{TournamentMatchId}/Player/List/Active',
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdPlayerListActiveResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdPlayerListActiveresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdPlayerListActiveresponseitemResponse',
                    fields: {
                      tournamentMatchId: { type: graphql.GraphQLInt },
                      tournamentId: { type: graphql.GraphQLInt },
                      entityPlayerId: { type: graphql.GraphQLInt },
                      isTeamCaptain: { type: graphql.GraphQLBoolean },
                      isOnTeamA: { type: graphql.GraphQLBoolean },
                      nickname: { type: graphql.GraphQLString },
                      voteDidMyTeamWin: { type: graphql.GraphQLBoolean },
                      isReady: { type: graphql.GraphQLBoolean },
                      wasRemoved: { type: graphql.GraphQLBoolean },
                      hasPenalty: { type: graphql.GraphQLBoolean },
                      isActive: { type: graphql.GraphQLBoolean },
                      gamePlayerIdentifier: { type: graphql.GraphQLString },
                      steamId32: { type: graphql.GraphQLString },
                      steamId64: { type: graphql.GraphQLString },
                      profile: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdPlayerListActiveresponseitemprofileResponse',
                          fields: {
                            nickname: { type: graphql.GraphQLString },
                            lanModeEnabled: { type: graphql.GraphQLBoolean },
                            lanSeatLocation: { type: graphql.GraphQLString },
                            entityName: { type: graphql.GraphQLString },
                            entityIsTeam: { type: graphql.GraphQLBoolean },
                            displayName: { type: graphql.GraphQLString },
                            entityImageUrl: { type: graphql.GraphQLString },
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
                      firstName: { type: graphql.GraphQLString },
                      lastName: { type: graphql.GraphQLString },
                      addressCountry: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdPlayerListActiveresponseitemaddressCountryResponse',
                          fields: {
                            addressCountryId: { type: graphql.GraphQLInt },
                            addressCountryCode: { type: graphql.GraphQLString },
                            addressCountry3LetterCode: {
                              type: graphql.GraphQLString
                            },
                            addressCountry: { type: graphql.GraphQLString },
                            allowsRealMoney: { type: graphql.GraphQLBoolean },
                            flagSmallImageUrl: { type: graphql.GraphQLString },
                            flagLargeImageUrl: { type: graphql.GraphQLString },
                            showInList: { type: graphql.GraphQLBoolean },
                            orderBy: { type: graphql.GraphQLInt }
                          }
                        })
                      },
                      streamingServices: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdPlayerListActiveresponseitemstreamingServicesResponse',
                            fields: {
                              capacity: { type: graphql.GraphQLInt },
                              count: { type: graphql.GraphQLInt },
                              item: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdPlayerListActiveresponseitemstreamingServicesitemResponse',
                                  fields: {
                                    entityId: { type: graphql.GraphQLInt },
                                    streamName: { type: graphql.GraphQLString },
                                    streamLink: { type: graphql.GraphQLString },
                                    streamCurrentlyActive: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    streamActiveViewers: {
                                      type: graphql.GraphQLInt
                                    },
                                    lastUpdatedDateTime: {
                                      type: graphql.GraphQLString
                                    },
                                    streamingServiceId: {
                                      type: graphql.GraphQLInt
                                    },
                                    streamingService: {
                                      type: graphql.GraphQLString
                                    },
                                    sourceName: { type: graphql.GraphQLString }
                                  }
                                })
                              }
                            }
                          })
                        )
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
  apiTournamentMatchByTournamentMatchIdPlayerListActiveMinified: {
    method: 'GET',
    url: 'api/Tournament/Match/{TournamentMatchId}/Player/List/Active/Minified',
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdPlayerListActiveMinifiedResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdPlayerListActiveMinifiedresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdPlayerListActiveMinifiedresponseitemResponse',
                    fields: {
                      tournamentMatchId: { type: graphql.GraphQLInt },
                      tournamentId: { type: graphql.GraphQLInt },
                      entityPlayerId: { type: graphql.GraphQLInt },
                      isTeamCaptain: { type: graphql.GraphQLBoolean },
                      isOnTeamA: { type: graphql.GraphQLBoolean },
                      nickname: { type: graphql.GraphQLString },
                      voteDidMyTeamWin: { type: graphql.GraphQLBoolean },
                      isReady: { type: graphql.GraphQLBoolean },
                      wasRemoved: { type: graphql.GraphQLBoolean },
                      hasPenalty: { type: graphql.GraphQLBoolean },
                      isActive: { type: graphql.GraphQLBoolean },
                      gamePlayerIdentifier: { type: graphql.GraphQLString },
                      steamId32: { type: graphql.GraphQLString },
                      steamId64: { type: graphql.GraphQLString },
                      addressCountry: { type: graphql.GraphQLString }
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
  apiTournamentMatchByTournamentMatchIdPlayerByentityName: {
    method: 'DELETE',
    url: 'api/Tournament/Match/{TournamentMatchId}/Player/{entityName}',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { hasPenalty: { type: graphql.GraphQLBoolean } }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdPlayerByentityNameResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchByTournamentMatchIdPlayerFeedbackReport: {
    method: 'POST',
    url: 'api/Tournament/Match/{TournamentMatchId}/Player/Feedback/Report',
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
      name:
        'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdPlayerFeedbackReportResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchByTournamentMatchIdFinalize: {
    method: 'POST',
    url: 'api/Tournament/Match/{TournamentMatchId}/Finalize',
    urlParams: {
      participantAResults: {
        type: new graphql.GraphQLObjectType({
          name: 'urlParamparticipantAResultsResponse',
          fields: {
            isNoShow: { type: graphql.GraphQLBoolean },
            didForfeit: { type: graphql.GraphQLBoolean },
            finalScore: { type: graphql.GraphQLFloat }
          }
        })
      },
      participantBResults: {
        type: new graphql.GraphQLObjectType({
          name: 'urlParamparticipantBResultsResponse',
          fields: {
            isNoShow: { type: graphql.GraphQLBoolean },
            didForfeit: { type: graphql.GraphQLBoolean },
            finalScore: { type: graphql.GraphQLFloat }
          }
        })
      },
      serverSentPlayerSummaryStatistics: {
        type: graphql.GraphQLBoolean
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdFinalizeResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchByTournamentMatchIdAssistanceRequest: {
    method: 'POST',
    url: 'api/Tournament/Match/{TournamentMatchId}/Assistance/Request',
    urlParams: {
      entityId: {
        type: graphql.GraphQLInt
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdAssistanceRequestResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdAssistanceRequestresponseResponse',
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
  apiTournamentMatchByTournamentMatchIdSnapshotListByroundNumber: {
    method: 'GET',
    url: 'api/Tournament/Match/{TournamentMatchId}/Snapshot/List/{roundNumber}',
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdSnapshotListByroundNumberResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdSnapshotListByroundNumberresponseResponse',
            fields: {
              tournamentMatchId: { type: graphql.GraphQLInt },
              roundNumber: { type: graphql.GraphQLInt },
              snapshot: { type: graphql.GraphQLString },
              snapshotDateTime: { type: graphql.GraphQLString }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchByTournamentMatchIdSnapshotList: {
    method: 'GET',
    url: 'api/Tournament/Match/{TournamentMatchId}/Snapshot/List',
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdSnapshotListResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdSnapshotListresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdSnapshotListresponseitemResponse',
                    fields: {
                      tournamentMatchId: { type: graphql.GraphQLInt },
                      roundNumber: { type: graphql.GraphQLInt },
                      snapshot: { type: graphql.GraphQLString },
                      snapshotDateTime: { type: graphql.GraphQLString }
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
  apiTournamentMatchByTournamentMatchIdSnapshotCount: {
    method: 'GET',
    url: 'api/Tournament/Match/{TournamentMatchId}/Snapshot/Count',
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdSnapshotCountResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchByTournamentMatchIdSnapshotCreate: {
    method: 'POST',
    url: 'api/Tournament/Match/{TournamentMatchId}/Snapshot/Create',
    urlParams: {
      roundNumber: {
        type: graphql.GraphQLInt
      },
      snapshot: {
        type: graphql.GraphQLString
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdSnapshotCreateResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchByTournamentMatchIdPlayback: {
    method: 'POST',
    url: 'api/Tournament/Match/{TournamentMatchId}/Playback',
    urlParams: {
      playbackUrl: {
        type: graphql.GraphQLString
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdPlaybackResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchByTournamentMatchIdWorldOfTanksCallback: {
    method: 'POST',
    url: 'api/Tournament/Match/{TournamentMatchId}/WorldOfTanksCallback',
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchapiTournamentMatchByTournamentMatchIdWorldOfTanksCallbackResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentMatchLeagueOfLegendsCallback: {
    method: 'POST',
    url: 'api/Tournament/Match/LeagueOfLegendsCallback',
    body: graphql.GraphQLString,
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchapiTournamentMatchLeagueOfLegendsCallbackResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
