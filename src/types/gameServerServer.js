const graphql = require('graphql')

module.exports = {
  apiServerHeartbeat: {
    method: 'POST',
    url: 'api/Server/Heartbeat',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        ipAddress: { type: graphql.GraphQLString },
        gamePort: { type: graphql.GraphQLString },
        streamingPort: { type: graphql.GraphQLString },
        serverTypeCode: { type: graphql.GraphQLString },
        gamingModeCode: { type: graphql.GraphQLString },
        platformShortCode: { type: graphql.GraphQLString },
        gameShortCode: { type: graphql.GraphQLString },
        hostingProviderCode: { type: graphql.GraphQLString },
        gameModVersion: { type: graphql.GraphQLFloat },
        gameServerVersion: { type: graphql.GraphQLString },
        isServerOutdated: { type: graphql.GraphQLBoolean },
        lanTag: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'gameServerServerapiServerHeartbeatResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiServerGameByGameShortCodePlatformByPlatformShortCodeVersionUpdate: {
    method: 'POST',
    url:
      'api/Server/game/{GameShortCode}/Platform/{PlatformShortCode}/version/update',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { version: { type: graphql.GraphQLString } }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerServerapiServerGameByGameShortCodePlatformByPlatformShortCodeVersionUpdateResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiServerHeartbeatStatusByipAddressBygamePort: {
    method: 'GET',
    url: 'api/Server/Heartbeat/Status/{ipAddress}/{gamePort}',
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerServerapiServerHeartbeatStatusByipAddressBygamePortResponse',
      fields: {
        gamingServerId: { type: graphql.GraphQLInt },
        gameName: { type: graphql.GraphQLString },
        gamingServerAddedDateTime: { type: graphql.GraphQLString },
        gamingServerTypeName: { type: graphql.GraphQLString },
        isOnline: { type: graphql.GraphQLBoolean },
        gamingServerCityName: { type: graphql.GraphQLString },
        addressCountry: {
          type: new graphql.GraphQLObjectType({
            name:
              'gameServerServerapiServerHeartbeatStatusByipAddressBygamePortaddressCountryResponse',
            fields: {
              addressCountryId: { type: graphql.GraphQLInt },
              addressCountryCode: { type: graphql.GraphQLString },
              addressCountry3LetterCode: { type: graphql.GraphQLString },
              addressCountry: { type: graphql.GraphQLString },
              allowsRealMoney: { type: graphql.GraphQLBoolean },
              flagSmallImageUrl: { type: graphql.GraphQLString },
              flagLargeImageUrl: { type: graphql.GraphQLString },
              showInList: { type: graphql.GraphQLBoolean },
              orderBy: { type: graphql.GraphQLInt }
            }
          })
        },
        gamingServerRegionName: { type: graphql.GraphQLString },
        ipAddress: { type: graphql.GraphQLString },
        gamePort: { type: graphql.GraphQLString },
        lastHeartbeatDateTime: { type: graphql.GraphQLString },
        isInUsed: { type: graphql.GraphQLBoolean }
      }
    })
  },
  apiServerByGamingServerIdMatchActive: {
    method: 'GET',
    url: 'api/Server/{GamingServerId}/Match/Active',
    response: new graphql.GraphQLObjectType({
      name: 'gameServerServerapiServerByGamingServerIdMatchActiveResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'gameServerServerapiServerByGamingServerIdMatchActiveresponseResponse',
            fields: {
              tournamentMatchStateId: { type: graphql.GraphQLInt },
              tournamentMatchId: { type: graphql.GraphQLInt },
              tournamentId: { type: graphql.GraphQLInt },
              gamePlatformFranchiseTitleId: { type: graphql.GraphQLInt },
              isTeamTournament: { type: graphql.GraphQLBoolean },
              matchIsLive: { type: graphql.GraphQLBoolean },
              matchLiveDateTime: { type: graphql.GraphQLString },
              matchIsComplete: { type: graphql.GraphQLBoolean },
              matchCompleteDateTime: { type: graphql.GraphQLString },
              matchIsFinalized: { type: graphql.GraphQLBoolean },
              matchFinalizedDateTime: { type: graphql.GraphQLString },
              enableMatchLobby: { type: graphql.GraphQLBoolean },
              allowCheckin: { type: graphql.GraphQLBoolean },
              allowCheckinDateTime: { type: graphql.GraphQLString },
              scheduledStartDateTime: { type: graphql.GraphQLString },
              scheduledForfeitDateTime: { type: graphql.GraphQLString },
              entityOwnerId: { type: graphql.GraphQLInt },
              entityOwnerProfile: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'gameServerServerapiServerByGamingServerIdMatchActiveresponseentityOwnerProfileResponse',
                  fields: {
                    nickname: { type: graphql.GraphQLString },
                    lanModeEnabled: { type: graphql.GraphQLBoolean },
                    lanSeatLocation: { type: graphql.GraphQLString },
                    entityName: { type: graphql.GraphQLString },
                    entityIsTeam: { type: graphql.GraphQLBoolean },
                    displayName: { type: graphql.GraphQLString },
                    entityImageUrl: { type: graphql.GraphQLString },
                    entityImageUrlIsExternal: { type: graphql.GraphQLBoolean },
                    entityBackgroundImageUrl: { type: graphql.GraphQLString },
                    entityBackgroundImageUrlIsExternal: {
                      type: graphql.GraphQLBoolean
                    }
                  }
                })
              },
              entityParticipantA: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'gameServerServerapiServerByGamingServerIdMatchActiveresponseentityParticipantAResponse',
                  fields: {
                    id: { type: graphql.GraphQLInt },
                    isBye: { type: graphql.GraphQLBoolean },
                    noShow: { type: graphql.GraphQLBoolean },
                    forfeit: { type: graphql.GraphQLBoolean },
                    score: { type: graphql.GraphQLFloat },
                    liveScore: { type: graphql.GraphQLFloat },
                    teamSideId: { type: graphql.GraphQLInt },
                    teamSideName: { type: graphql.GraphQLString },
                    countryCode: { type: graphql.GraphQLString },
                    region: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'gameServerServerapiServerByGamingServerIdMatchActiveresponseentityParticipantAregionResponse',
                        fields: {
                          gamingServerRegionId: { type: graphql.GraphQLInt },
                          gamingServerRegionName: {
                            type: graphql.GraphQLString
                          }
                        }
                      })
                    },
                    profile: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'gameServerServerapiServerByGamingServerIdMatchActiveresponseentityParticipantAprofileResponse',
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
                    hearthstoneDecks: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLObjectType({
                          name:
                            'gameServerServerapiServerByGamingServerIdMatchActiveresponseentityParticipantAhearthstoneDecksResponse',
                          fields: {
                            capacity: { type: graphql.GraphQLInt },
                            count: { type: graphql.GraphQLInt },
                            item: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'gameServerServerapiServerByGamingServerIdMatchActiveresponseentityParticipantAhearthstoneDecksitemResponse',
                                fields: {
                                  playerNumber: { type: graphql.GraphQLInt },
                                  isStartingDeck: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  hearthstoneDeckExcluded: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  gameTitleModeHearthstoneDeckId: {
                                    type: graphql.GraphQLInt
                                  },
                                  gameTitleModeId: { type: graphql.GraphQLInt },
                                  hearthstoneDeck: {
                                    type: graphql.GraphQLString
                                  },
                                  hearthstoneDeckImage: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'gameServerServerapiServerByGamingServerIdMatchActiveresponseentityParticipantAhearthstoneDecksitemhearthstoneDeckImageResponse',
                                      fields: {
                                        urlPath: {
                                          type: graphql.GraphQLString
                                        },
                                        relativePath: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  },
                                  isActive: { type: graphql.GraphQLBoolean }
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
              entityParticipantB: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'gameServerServerapiServerByGamingServerIdMatchActiveresponseentityParticipantBResponse',
                  fields: {
                    id: { type: graphql.GraphQLInt },
                    isBye: { type: graphql.GraphQLBoolean },
                    noShow: { type: graphql.GraphQLBoolean },
                    forfeit: { type: graphql.GraphQLBoolean },
                    score: { type: graphql.GraphQLFloat },
                    liveScore: { type: graphql.GraphQLFloat },
                    teamSideId: { type: graphql.GraphQLInt },
                    teamSideName: { type: graphql.GraphQLString },
                    countryCode: { type: graphql.GraphQLString },
                    region: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'gameServerServerapiServerByGamingServerIdMatchActiveresponseentityParticipantBregionResponse',
                        fields: {
                          gamingServerRegionId: { type: graphql.GraphQLInt },
                          gamingServerRegionName: {
                            type: graphql.GraphQLString
                          }
                        }
                      })
                    },
                    profile: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'gameServerServerapiServerByGamingServerIdMatchActiveresponseentityParticipantBprofileResponse',
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
                    hearthstoneDecks: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLObjectType({
                          name:
                            'gameServerServerapiServerByGamingServerIdMatchActiveresponseentityParticipantBhearthstoneDecksResponse',
                          fields: {
                            capacity: { type: graphql.GraphQLInt },
                            count: { type: graphql.GraphQLInt },
                            item: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'gameServerServerapiServerByGamingServerIdMatchActiveresponseentityParticipantBhearthstoneDecksitemResponse',
                                fields: {
                                  playerNumber: { type: graphql.GraphQLInt },
                                  isStartingDeck: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  hearthstoneDeckExcluded: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  gameTitleModeHearthstoneDeckId: {
                                    type: graphql.GraphQLInt
                                  },
                                  gameTitleModeId: { type: graphql.GraphQLInt },
                                  hearthstoneDeck: {
                                    type: graphql.GraphQLString
                                  },
                                  hearthstoneDeckImage: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'gameServerServerapiServerByGamingServerIdMatchActiveresponseentityParticipantBhearthstoneDecksitemhearthstoneDeckImageResponse',
                                      fields: {
                                        urlPath: {
                                          type: graphql.GraphQLString
                                        },
                                        relativePath: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  },
                                  isActive: { type: graphql.GraphQLBoolean }
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
              roundNumber: { type: graphql.GraphQLInt },
              roundLevelTypeId: { type: graphql.GraphQLInt },
              matchNumber: { type: graphql.GraphQLInt },
              numberOfMaps: { type: graphql.GraphQLInt },
              mapNumber: { type: graphql.GraphQLInt },
              currentGameTitleModeMapId: { type: graphql.GraphQLInt },
              mapFileName: { type: graphql.GraphQLString },
              mapDisplayName: { type: graphql.GraphQLString },
              gamingServerRegionId: { type: graphql.GraphQLInt },
              gamingServerRegionName: { type: graphql.GraphQLString },
              isBracket: { type: graphql.GraphQLBoolean },
              allowRescheduling: { type: graphql.GraphQLBoolean },
              willBroadcast: { type: graphql.GraphQLBoolean },
              broadcastUrl: { type: graphql.GraphQLString },
              automaticGoLiveOnSchedule: { type: graphql.GraphQLBoolean },
              minutesAfterStartToForfeit: { type: graphql.GraphQLInt },
              minutesBeforeStartToAllowCheckin: { type: graphql.GraphQLInt },
              serverSendPlayerSummaryStatistics: {
                type: graphql.GraphQLBoolean
              },
              gamingServerId: { type: graphql.GraphQLInt },
              entityPlayerControllerId: { type: graphql.GraphQLInt },
              allTeamAPlayersReady: { type: graphql.GraphQLBoolean },
              teamAIsReady: { type: graphql.GraphQLBoolean },
              allTeamBPlayersReady: { type: graphql.GraphQLBoolean },
              teamBIsReady: { type: graphql.GraphQLBoolean },
              scoreManuallyReportedDateTime: { type: graphql.GraphQLString },
              scoreManuallyReported: { type: graphql.GraphQLBoolean },
              scoreManuallyReportedByPlayerId: { type: graphql.GraphQLInt },
              scoreManuallyReportedByTeamA: { type: graphql.GraphQLBoolean },
              scoreManuallyApplyToEntireRound: { type: graphql.GraphQLBoolean },
              mapsPlayed: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'gameServerServerapiServerByGamingServerIdMatchActiveresponsemapsPlayedResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'gameServerServerapiServerByGamingServerIdMatchActiveresponsemapsPlayeditemResponse',
                          fields: {
                            tournamentMatchId: { type: graphql.GraphQLInt },
                            mapNumber: { type: graphql.GraphQLInt },
                            gameTitleModeMapId: { type: graphql.GraphQLInt },
                            mapStartDateTime: { type: graphql.GraphQLString },
                            mapEndDateTime: { type: graphql.GraphQLString },
                            entityParticipantAScore: {
                              type: graphql.GraphQLFloat
                            },
                            entityParticipantBScore: {
                              type: graphql.GraphQLFloat
                            },
                            map: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'gameServerServerapiServerByGamingServerIdMatchActiveresponsemapsPlayeditemmapResponse',
                                fields: {
                                  gameTitleModeMapId: {
                                    type: graphql.GraphQLInt
                                  },
                                  gameTitleModeId: { type: graphql.GraphQLInt },
                                  mapFileName: { type: graphql.GraphQLString },
                                  mapDisplayName: {
                                    type: graphql.GraphQLString
                                  },
                                  isActive: { type: graphql.GraphQLBoolean }
                                }
                              })
                            }
                          }
                        })
                      }
                    }
                  })
                )
              },
              dispute: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'gameServerServerapiServerByGamingServerIdMatchActiveresponsedisputeResponse',
                  fields: {
                    tournamentMatchDisputeId: { type: graphql.GraphQLInt },
                    tournamentMatchId: { type: graphql.GraphQLInt },
                    disputeState: { type: graphql.GraphQLInt },
                    initiatedByPlayerId: { type: graphql.GraphQLInt },
                    initiatedByPlayerProfile: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'gameServerServerapiServerByGamingServerIdMatchActiveresponsedisputeinitiatedByPlayerProfileResponse',
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
                    initiatorOnTeamA: { type: graphql.GraphQLBoolean },
                    teamAScore: { type: graphql.GraphQLFloat },
                    teamBScore: { type: graphql.GraphQLFloat },
                    imageUrl: { type: graphql.GraphQLString },
                    disputeDateTime: { type: graphql.GraphQLString },
                    entityAdministratorId: { type: graphql.GraphQLInt },
                    resolutionDateTime: { type: graphql.GraphQLString },
                    resolutionTeamAScore: { type: graphql.GraphQLFloat },
                    resolutionTeamBScore: { type: graphql.GraphQLFloat }
                  }
                })
              },
              myMatch: { type: graphql.GraphQLBoolean },
              newServerRequested: { type: graphql.GraphQLBoolean },
              newServerRequestedEntityId: { type: graphql.GraphQLInt },
              newServerRequestedByTeamA: { type: graphql.GraphQLBoolean },
              newServerRequestedCount: { type: graphql.GraphQLInt },
              needsAssistance: { type: graphql.GraphQLBoolean },
              allowedSpectators: { type: graphql.GraphQLString },
              streamingServiceId: { type: graphql.GraphQLInt },
              manualMode: { type: graphql.GraphQLBoolean },
              manualServerConnectionInfo: { type: graphql.GraphQLString },
              streamingService: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'gameServerServerapiServerByGamingServerIdMatchActiveresponsestreamingServiceResponse',
                  fields: {
                    streamingServiceId: { type: graphql.GraphQLInt },
                    streamingService: { type: graphql.GraphQLString },
                    sourceName: { type: graphql.GraphQLString }
                  }
                })
              },
              assistanceRequests: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'gameServerServerapiServerByGamingServerIdMatchActiveresponseassistanceRequestsResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'gameServerServerapiServerByGamingServerIdMatchActiveresponseassistanceRequestsitemResponse',
                          fields: {
                            tournamentMatchAssistanceId: {
                              type: graphql.GraphQLInt
                            },
                            tournamentMatchId: { type: graphql.GraphQLInt },
                            assistanceRequestedById: {
                              type: graphql.GraphQLInt
                            },
                            assistanceRequestedDateTime: {
                              type: graphql.GraphQLString
                            },
                            resolvedById: { type: graphql.GraphQLInt },
                            resolutionDateTime: { type: graphql.GraphQLString },
                            resolutionComments: { type: graphql.GraphQLString }
                          }
                        })
                      }
                    }
                  })
                )
              },
              lastUpdatedDateTime: { type: graphql.GraphQLString },
              serverConfigurationFileName: { type: graphql.GraphQLString },
              matchAdministratorId: { type: graphql.GraphQLInt },
              actionLog: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'gameServerServerapiServerByGamingServerIdMatchActiveresponseactionLogResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'gameServerServerapiServerByGamingServerIdMatchActiveresponseactionLogitemResponse',
                          fields: {
                            tournamentMatchActionLogId: {
                              type: graphql.GraphQLInt
                            },
                            entityId: { type: graphql.GraphQLInt },
                            entityProfile: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'gameServerServerapiServerByGamingServerIdMatchActiveresponseactionLogitementityProfileResponse',
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
                            tournamentMatchId: { type: graphql.GraphQLInt },
                            actionLogTypeId: { type: graphql.GraphQLInt },
                            actionLogType: { type: graphql.GraphQLString },
                            administratorComment: {
                              type: graphql.GraphQLString
                            },
                            actionLogDateTime: { type: graphql.GraphQLString }
                          }
                        })
                      }
                    }
                  })
                )
              },
              playback: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'gameServerServerapiServerByGamingServerIdMatchActiveresponseplaybackResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'gameServerServerapiServerByGamingServerIdMatchActiveresponseplaybackitemResponse',
                          fields: {
                            tournamentMatchPlaybackId: {
                              type: graphql.GraphQLInt
                            },
                            tournamentMatchId: { type: graphql.GraphQLInt },
                            tournamentMatchPlayback: {
                              type: graphql.GraphQLString
                            },
                            tournamentMatchPlaybackDateTime: {
                              type: graphql.GraphQLString
                            }
                          }
                        })
                      }
                    }
                  })
                )
              },
              qualifierGroupNumber: { type: graphql.GraphQLInt },
              isQualifier: { type: graphql.GraphQLBoolean },
              hasTieBreaker: { type: graphql.GraphQLBoolean },
              tieBreakerCount: { type: graphql.GraphQLInt },
              scoringImage: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'gameServerServerapiServerByGamingServerIdMatchActiveresponsescoringImageResponse',
                  fields: {
                    urlPath: { type: graphql.GraphQLString },
                    relativePath: { type: graphql.GraphQLString }
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
  apiServerIsOnlineByipAddressBygamePort: {
    method: 'GET',
    url: 'api/Server/IsOnline/{ipAddress}/{gamePort}',
    response: graphql.GraphQLBoolean
  }
}
