const graphql = require('graphql')

module.exports = {
  apiPlayerMyProfileSteam: {
    method: 'GET',
    url: 'api/Player/my/Profile/Steam',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerapiPlayerMyProfileSteamResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientPlayerapiPlayerMyProfileSteamresponseResponse',
            fields: {
              steamAccountId: { type: graphql.GraphQLInt },
              tournamentId: { type: graphql.GraphQLInt },
              entityPlayerId: { type: graphql.GraphQLInt },
              steamUserName: { type: graphql.GraphQLString },
              steamPassword: { type: graphql.GraphQLString },
              steamId32: { type: graphql.GraphQLString },
              steamId64: { type: graphql.GraphQLString }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerMyProfileSkrill: {
    method: 'GET',
    url: 'api/Player/my/Profile/Skrill',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerapiPlayerMyProfileSkrillResponse',
      fields: {
        response: { type: graphql.GraphQLBoolean },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerMyProfileCash: {
    method: 'GET',
    url: 'api/Player/my/Profile/Cash',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerapiPlayerMyProfileCashResponse',
      fields: {
        response: { type: graphql.GraphQLBoolean },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerMyProfileLanMode: {
    method: 'PUT',
    url: 'api/Player/my/Profile/LanMode',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        lanModeEnabled: { type: graphql.GraphQLBoolean },
        lanSeatLocation: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerapiPlayerMyProfileLanModeResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerMyGames: {
    method: 'GET',
    url: 'api/Player/My/Games',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerapiPlayerMyGamesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientPlayerapiPlayerMyGamesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientPlayerapiPlayerMyGamesresponseitemResponse',
                    fields: {
                      isValid: { type: graphql.GraphQLBoolean },
                      platforms: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerapiPlayerMyGamesresponseitemplatformsResponse',
                            fields: {
                              capacity: { type: graphql.GraphQLInt },
                              count: { type: graphql.GraphQLInt },
                              item: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyGamesresponseitemplatformsitemResponse',
                                  fields: {
                                    myGame: { type: graphql.GraphQLBoolean },
                                    isConfirmed: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    nickname: { type: graphql.GraphQLString },
                                    isDisconnected: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    powerRankingScore: {
                                      type: graphql.GraphQLInt
                                    },
                                    powerRankingLevelNumber: {
                                      type: graphql.GraphQLInt
                                    },
                                    powerRankingDivision: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyGamesresponseitemplatformsitempowerRankingDivisionResponse',
                                        fields: {
                                          powerRankingDivisionId: {
                                            type: graphql.GraphQLInt
                                          },
                                          powerRankingDivision: {
                                            type: graphql.GraphQLString
                                          },
                                          topPoints: {
                                            type: graphql.GraphQLInt
                                          },
                                          bottomPoints: {
                                            type: graphql.GraphQLInt
                                          },
                                          numberOfLevels: {
                                            type: graphql.GraphQLInt
                                          },
                                          powerRankingLevels: {
                                            type: new graphql.GraphQLList(
                                              new graphql.GraphQLObjectType({
                                                name:
                                                  'clientPlayerapiPlayerMyGamesresponseitemplatformsitempowerRankingDivisionpowerRankingLevelsResponse',
                                                fields: {
                                                  capacity: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  count: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  item: {
                                                    type: new graphql.GraphQLObjectType(
                                                      {
                                                        name:
                                                          'clientPlayerapiPlayerMyGamesresponseitemplatformsitempowerRankingDivisionpowerRankingLevelsitemResponse',
                                                        fields: {
                                                          powerRankingLevelNumber: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          topPoints: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          bottomPoints: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          }
                                                        }
                                                      }
                                                    )
                                                  }
                                                }
                                              })
                                            )
                                          },
                                          powerRankingImageLogo: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyGamesresponseitemplatformsitempowerRankingDivisionpowerRankingImageLogoResponse',
                                                fields: {
                                                  urlPath: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  relativePath: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    },
                                    matches: {
                                      type: new graphql.GraphQLList(
                                        new graphql.GraphQLObjectType({
                                          name:
                                            'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesResponse',
                                          fields: {
                                            capacity: {
                                              type: graphql.GraphQLInt
                                            },
                                            count: { type: graphql.GraphQLInt },
                                            item: {
                                              type: new graphql.GraphQLObjectType(
                                                {
                                                  name:
                                                    'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitemResponse',
                                                  fields: {
                                                    tournamentTitle: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    tournamentTypeName: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    gameShortCode: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    imageLogo: {
                                                      type: new graphql.GraphQLObjectType(
                                                        {
                                                          name:
                                                            'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitemimageLogoResponse',
                                                          fields: {
                                                            urlPath: {
                                                              type:
                                                                graphql.GraphQLString
                                                            },
                                                            relativePath: {
                                                              type:
                                                                graphql.GraphQLString
                                                            }
                                                          }
                                                        }
                                                      )
                                                    },
                                                    gameName: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    teamSize: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    tournamentMatchStateId: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    tournamentMatchId: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    tournamentId: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    gamePlatformFranchiseTitleId: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    isTeamTournament: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    matchIsLive: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    matchLiveDateTime: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    matchIsComplete: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    matchCompleteDateTime: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    matchIsFinalized: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    matchFinalizedDateTime: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    enableMatchLobby: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    allowCheckin: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    allowCheckinDateTime: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    scheduledStartDateTime: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    scheduledForfeitDateTime: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    entityOwnerId: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    entityOwnerProfile: {
                                                      type: new graphql.GraphQLObjectType(
                                                        {
                                                          name:
                                                            'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitementityOwnerProfileResponse',
                                                          fields: {
                                                            nickname: {
                                                              type:
                                                                graphql.GraphQLString
                                                            },
                                                            lanModeEnabled: {
                                                              type:
                                                                graphql.GraphQLBoolean
                                                            },
                                                            lanSeatLocation: {
                                                              type:
                                                                graphql.GraphQLString
                                                            },
                                                            entityName: {
                                                              type:
                                                                graphql.GraphQLString
                                                            },
                                                            entityIsTeam: {
                                                              type:
                                                                graphql.GraphQLBoolean
                                                            },
                                                            displayName: {
                                                              type:
                                                                graphql.GraphQLString
                                                            },
                                                            entityImageUrl: {
                                                              type:
                                                                graphql.GraphQLString
                                                            },
                                                            entityImageUrlIsExternal: {
                                                              type:
                                                                graphql.GraphQLBoolean
                                                            },
                                                            entityBackgroundImageUrl: {
                                                              type:
                                                                graphql.GraphQLString
                                                            },
                                                            entityBackgroundImageUrlIsExternal: {
                                                              type:
                                                                graphql.GraphQLBoolean
                                                            }
                                                          }
                                                        }
                                                      )
                                                    },
                                                    entityParticipantA: {
                                                      type: new graphql.GraphQLObjectType(
                                                        {
                                                          name:
                                                            'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitementityParticipantAResponse',
                                                          fields: {
                                                            id: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            isBye: {
                                                              type:
                                                                graphql.GraphQLBoolean
                                                            },
                                                            noShow: {
                                                              type:
                                                                graphql.GraphQLBoolean
                                                            },
                                                            forfeit: {
                                                              type:
                                                                graphql.GraphQLBoolean
                                                            },
                                                            score: {
                                                              type:
                                                                graphql.GraphQLFloat
                                                            },
                                                            liveScore: {
                                                              type:
                                                                graphql.GraphQLFloat
                                                            },
                                                            teamSideId: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            teamSideName: {
                                                              type:
                                                                graphql.GraphQLString
                                                            },
                                                            countryCode: {
                                                              type:
                                                                graphql.GraphQLString
                                                            },
                                                            region: {
                                                              type: new graphql.GraphQLObjectType(
                                                                {
                                                                  name:
                                                                    'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitementityParticipantAregionResponse',
                                                                  fields: {
                                                                    gamingServerRegionId: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    gamingServerRegionName: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    }
                                                                  }
                                                                }
                                                              )
                                                            },
                                                            profile: {
                                                              type: new graphql.GraphQLObjectType(
                                                                {
                                                                  name:
                                                                    'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitementityParticipantAprofileResponse',
                                                                  fields: {
                                                                    nickname: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    lanModeEnabled: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    },
                                                                    lanSeatLocation: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    entityName: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    entityIsTeam: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    },
                                                                    displayName: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    entityImageUrl: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    entityImageUrlIsExternal: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    },
                                                                    entityBackgroundImageUrl: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    entityBackgroundImageUrlIsExternal: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    }
                                                                  }
                                                                }
                                                              )
                                                            },
                                                            hearthstoneDecks: {
                                                              type: new graphql.GraphQLList(
                                                                new graphql.GraphQLObjectType(
                                                                  {
                                                                    name:
                                                                      'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitementityParticipantAhearthstoneDecksResponse',
                                                                    fields: {
                                                                      capacity: {
                                                                        type:
                                                                          graphql.GraphQLInt
                                                                      },
                                                                      count: {
                                                                        type:
                                                                          graphql.GraphQLInt
                                                                      },
                                                                      item: {
                                                                        type: new graphql.GraphQLObjectType(
                                                                          {
                                                                            name:
                                                                              'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitementityParticipantAhearthstoneDecksitemResponse',
                                                                            fields: {
                                                                              playerNumber: {
                                                                                type:
                                                                                  graphql.GraphQLInt
                                                                              },
                                                                              isStartingDeck: {
                                                                                type:
                                                                                  graphql.GraphQLBoolean
                                                                              },
                                                                              hearthstoneDeckExcluded: {
                                                                                type:
                                                                                  graphql.GraphQLBoolean
                                                                              },
                                                                              gameTitleModeHearthstoneDeckId: {
                                                                                type:
                                                                                  graphql.GraphQLInt
                                                                              },
                                                                              gameTitleModeId: {
                                                                                type:
                                                                                  graphql.GraphQLInt
                                                                              },
                                                                              hearthstoneDeck: {
                                                                                type:
                                                                                  graphql.GraphQLString
                                                                              },
                                                                              isActive: {
                                                                                type:
                                                                                  graphql.GraphQLBoolean
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      }
                                                                    }
                                                                  }
                                                                )
                                                              )
                                                            }
                                                          }
                                                        }
                                                      )
                                                    },
                                                    entityParticipantB: {
                                                      type: new graphql.GraphQLObjectType(
                                                        {
                                                          name:
                                                            'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitementityParticipantBResponse',
                                                          fields: {
                                                            id: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            isBye: {
                                                              type:
                                                                graphql.GraphQLBoolean
                                                            },
                                                            noShow: {
                                                              type:
                                                                graphql.GraphQLBoolean
                                                            },
                                                            forfeit: {
                                                              type:
                                                                graphql.GraphQLBoolean
                                                            },
                                                            score: {
                                                              type:
                                                                graphql.GraphQLFloat
                                                            },
                                                            liveScore: {
                                                              type:
                                                                graphql.GraphQLFloat
                                                            },
                                                            teamSideId: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            teamSideName: {
                                                              type:
                                                                graphql.GraphQLString
                                                            },
                                                            countryCode: {
                                                              type:
                                                                graphql.GraphQLString
                                                            },
                                                            region: {
                                                              type: new graphql.GraphQLObjectType(
                                                                {
                                                                  name:
                                                                    'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitementityParticipantBregionResponse',
                                                                  fields: {
                                                                    gamingServerRegionId: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    gamingServerRegionName: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    }
                                                                  }
                                                                }
                                                              )
                                                            },
                                                            profile: {
                                                              type: new graphql.GraphQLObjectType(
                                                                {
                                                                  name:
                                                                    'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitementityParticipantBprofileResponse',
                                                                  fields: {
                                                                    nickname: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    lanModeEnabled: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    },
                                                                    lanSeatLocation: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    entityName: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    entityIsTeam: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    },
                                                                    displayName: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    entityImageUrl: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    entityImageUrlIsExternal: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    },
                                                                    entityBackgroundImageUrl: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    entityBackgroundImageUrlIsExternal: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    }
                                                                  }
                                                                }
                                                              )
                                                            },
                                                            hearthstoneDecks: {
                                                              type: new graphql.GraphQLList(
                                                                new graphql.GraphQLObjectType(
                                                                  {
                                                                    name:
                                                                      'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitementityParticipantBhearthstoneDecksResponse',
                                                                    fields: {
                                                                      capacity: {
                                                                        type:
                                                                          graphql.GraphQLInt
                                                                      },
                                                                      count: {
                                                                        type:
                                                                          graphql.GraphQLInt
                                                                      },
                                                                      item: {
                                                                        type: new graphql.GraphQLObjectType(
                                                                          {
                                                                            name:
                                                                              'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitementityParticipantBhearthstoneDecksitemResponse',
                                                                            fields: {
                                                                              playerNumber: {
                                                                                type:
                                                                                  graphql.GraphQLInt
                                                                              },
                                                                              isStartingDeck: {
                                                                                type:
                                                                                  graphql.GraphQLBoolean
                                                                              },
                                                                              hearthstoneDeckExcluded: {
                                                                                type:
                                                                                  graphql.GraphQLBoolean
                                                                              },
                                                                              gameTitleModeHearthstoneDeckId: {
                                                                                type:
                                                                                  graphql.GraphQLInt
                                                                              },
                                                                              gameTitleModeId: {
                                                                                type:
                                                                                  graphql.GraphQLInt
                                                                              },
                                                                              hearthstoneDeck: {
                                                                                type:
                                                                                  graphql.GraphQLString
                                                                              },
                                                                              isActive: {
                                                                                type:
                                                                                  graphql.GraphQLBoolean
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      }
                                                                    }
                                                                  }
                                                                )
                                                              )
                                                            }
                                                          }
                                                        }
                                                      )
                                                    },
                                                    roundNumber: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    roundLevelTypeId: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    matchNumber: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    numberOfMaps: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    mapNumber: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    currentGameTitleModeMapId: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    mapFileName: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    mapDisplayName: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    gamingServerRegionId: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    gamingServerRegionName: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    isBracket: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    allowRescheduling: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    willBroadcast: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    broadcastUrl: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    automaticGoLiveOnSchedule: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    minutesAfterStartToForfeit: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    minutesBeforeStartToAllowCheckin: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    serverSendPlayerSummaryStatistics: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    gamingServerId: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    entityPlayerControllerId: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    allTeamAPlayersReady: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    teamAIsReady: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    allTeamBPlayersReady: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    teamBIsReady: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    scoreManuallyReportedDateTime: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    scoreManuallyReported: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    scoreManuallyReportedByPlayerId: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    scoreManuallyReportedByTeamA: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    scoreManuallyApplyToEntireRound: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    mapsPlayed: {
                                                      type: new graphql.GraphQLList(
                                                        new graphql.GraphQLObjectType(
                                                          {
                                                            name:
                                                              'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitemmapsPlayedResponse',
                                                            fields: {
                                                              capacity: {
                                                                type:
                                                                  graphql.GraphQLInt
                                                              },
                                                              count: {
                                                                type:
                                                                  graphql.GraphQLInt
                                                              },
                                                              item: {
                                                                type: new graphql.GraphQLObjectType(
                                                                  {
                                                                    name:
                                                                      'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitemmapsPlayeditemResponse',
                                                                    fields: {
                                                                      tournamentMatchId: {
                                                                        type:
                                                                          graphql.GraphQLInt
                                                                      },
                                                                      mapNumber: {
                                                                        type:
                                                                          graphql.GraphQLInt
                                                                      },
                                                                      gameTitleModeMapId: {
                                                                        type:
                                                                          graphql.GraphQLInt
                                                                      },
                                                                      mapStartDateTime: {
                                                                        type:
                                                                          graphql.GraphQLString
                                                                      },
                                                                      mapEndDateTime: {
                                                                        type:
                                                                          graphql.GraphQLString
                                                                      },
                                                                      entityParticipantAScore: {
                                                                        type:
                                                                          graphql.GraphQLFloat
                                                                      },
                                                                      entityParticipantBScore: {
                                                                        type:
                                                                          graphql.GraphQLFloat
                                                                      },
                                                                      map: {
                                                                        type: new graphql.GraphQLObjectType(
                                                                          {
                                                                            name:
                                                                              'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitemmapsPlayeditemmapResponse',
                                                                            fields: {
                                                                              gameTitleModeMapId: {
                                                                                type:
                                                                                  graphql.GraphQLInt
                                                                              },
                                                                              gameTitleModeId: {
                                                                                type:
                                                                                  graphql.GraphQLInt
                                                                              },
                                                                              mapFileName: {
                                                                                type:
                                                                                  graphql.GraphQLString
                                                                              },
                                                                              mapDisplayName: {
                                                                                type:
                                                                                  graphql.GraphQLString
                                                                              },
                                                                              isActive: {
                                                                                type:
                                                                                  graphql.GraphQLBoolean
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      }
                                                                    }
                                                                  }
                                                                )
                                                              }
                                                            }
                                                          }
                                                        )
                                                      )
                                                    },
                                                    dispute: {
                                                      type: new graphql.GraphQLObjectType(
                                                        {
                                                          name:
                                                            'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitemdisputeResponse',
                                                          fields: {
                                                            tournamentMatchDisputeId: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            tournamentMatchId: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            disputeState: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            initiatedByPlayerId: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            initiatedByPlayerProfile: {
                                                              type: new graphql.GraphQLObjectType(
                                                                {
                                                                  name:
                                                                    'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitemdisputeinitiatedByPlayerProfileResponse',
                                                                  fields: {
                                                                    nickname: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    lanModeEnabled: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    },
                                                                    lanSeatLocation: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    entityName: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    entityIsTeam: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    },
                                                                    displayName: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    entityImageUrl: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    entityImageUrlIsExternal: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    },
                                                                    entityBackgroundImageUrl: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    entityBackgroundImageUrlIsExternal: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    }
                                                                  }
                                                                }
                                                              )
                                                            },
                                                            initiatorOnTeamA: {
                                                              type:
                                                                graphql.GraphQLBoolean
                                                            },
                                                            teamAScore: {
                                                              type:
                                                                graphql.GraphQLFloat
                                                            },
                                                            teamBScore: {
                                                              type:
                                                                graphql.GraphQLFloat
                                                            },
                                                            imageUrl: {
                                                              type:
                                                                graphql.GraphQLString
                                                            },
                                                            disputeDateTime: {
                                                              type:
                                                                graphql.GraphQLString
                                                            },
                                                            entityAdministratorId: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            resolutionDateTime: {
                                                              type:
                                                                graphql.GraphQLString
                                                            },
                                                            resolutionTeamAScore: {
                                                              type:
                                                                graphql.GraphQLFloat
                                                            },
                                                            resolutionTeamBScore: {
                                                              type:
                                                                graphql.GraphQLFloat
                                                            }
                                                          }
                                                        }
                                                      )
                                                    },
                                                    myMatch: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    newServerRequested: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    newServerRequestedEntityId: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    newServerRequestedByTeamA: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    newServerRequestedCount: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    needsAssistance: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    allowedSpectators: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    streamingServiceId: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    manualMode: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    manualServerConnectionInfo: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    streamingService: {
                                                      type: new graphql.GraphQLObjectType(
                                                        {
                                                          name:
                                                            'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitemstreamingServiceResponse',
                                                          fields: {
                                                            streamingServiceId: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            streamingService: {
                                                              type:
                                                                graphql.GraphQLString
                                                            },
                                                            sourceName: {
                                                              type:
                                                                graphql.GraphQLString
                                                            }
                                                          }
                                                        }
                                                      )
                                                    },
                                                    assistanceRequests: {
                                                      type: new graphql.GraphQLList(
                                                        new graphql.GraphQLObjectType(
                                                          {
                                                            name:
                                                              'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitemassistanceRequestsResponse',
                                                            fields: {
                                                              capacity: {
                                                                type:
                                                                  graphql.GraphQLInt
                                                              },
                                                              count: {
                                                                type:
                                                                  graphql.GraphQLInt
                                                              },
                                                              item: {
                                                                type: new graphql.GraphQLObjectType(
                                                                  {
                                                                    name:
                                                                      'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitemassistanceRequestsitemResponse',
                                                                    fields: {
                                                                      tournamentMatchAssistanceId: {
                                                                        type:
                                                                          graphql.GraphQLInt
                                                                      },
                                                                      tournamentMatchId: {
                                                                        type:
                                                                          graphql.GraphQLInt
                                                                      },
                                                                      assistanceRequestedById: {
                                                                        type:
                                                                          graphql.GraphQLInt
                                                                      },
                                                                      assistanceRequestedDateTime: {
                                                                        type:
                                                                          graphql.GraphQLString
                                                                      },
                                                                      resolvedById: {
                                                                        type:
                                                                          graphql.GraphQLInt
                                                                      },
                                                                      resolutionDateTime: {
                                                                        type:
                                                                          graphql.GraphQLString
                                                                      },
                                                                      resolutionComments: {
                                                                        type:
                                                                          graphql.GraphQLString
                                                                      }
                                                                    }
                                                                  }
                                                                )
                                                              }
                                                            }
                                                          }
                                                        )
                                                      )
                                                    },
                                                    lastUpdatedDateTime: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    serverConfigurationFileName: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    matchAdministratorId: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    actionLog: {
                                                      type: new graphql.GraphQLList(
                                                        new graphql.GraphQLObjectType(
                                                          {
                                                            name:
                                                              'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitemactionLogResponse',
                                                            fields: {
                                                              capacity: {
                                                                type:
                                                                  graphql.GraphQLInt
                                                              },
                                                              count: {
                                                                type:
                                                                  graphql.GraphQLInt
                                                              },
                                                              item: {
                                                                type: new graphql.GraphQLObjectType(
                                                                  {
                                                                    name:
                                                                      'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitemactionLogitemResponse',
                                                                    fields: {
                                                                      tournamentMatchActionLogId: {
                                                                        type:
                                                                          graphql.GraphQLInt
                                                                      },
                                                                      entityId: {
                                                                        type:
                                                                          graphql.GraphQLInt
                                                                      },
                                                                      entityProfile: {
                                                                        type: new graphql.GraphQLObjectType(
                                                                          {
                                                                            name:
                                                                              'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitemactionLogitementityProfileResponse',
                                                                            fields: {
                                                                              nickname: {
                                                                                type:
                                                                                  graphql.GraphQLString
                                                                              },
                                                                              lanModeEnabled: {
                                                                                type:
                                                                                  graphql.GraphQLBoolean
                                                                              },
                                                                              lanSeatLocation: {
                                                                                type:
                                                                                  graphql.GraphQLString
                                                                              },
                                                                              entityName: {
                                                                                type:
                                                                                  graphql.GraphQLString
                                                                              },
                                                                              entityIsTeam: {
                                                                                type:
                                                                                  graphql.GraphQLBoolean
                                                                              },
                                                                              displayName: {
                                                                                type:
                                                                                  graphql.GraphQLString
                                                                              },
                                                                              entityImageUrl: {
                                                                                type:
                                                                                  graphql.GraphQLString
                                                                              },
                                                                              entityImageUrlIsExternal: {
                                                                                type:
                                                                                  graphql.GraphQLBoolean
                                                                              },
                                                                              entityBackgroundImageUrl: {
                                                                                type:
                                                                                  graphql.GraphQLString
                                                                              },
                                                                              entityBackgroundImageUrlIsExternal: {
                                                                                type:
                                                                                  graphql.GraphQLBoolean
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      },
                                                                      tournamentMatchId: {
                                                                        type:
                                                                          graphql.GraphQLInt
                                                                      },
                                                                      actionLogTypeId: {
                                                                        type:
                                                                          graphql.GraphQLInt
                                                                      },
                                                                      actionLogType: {
                                                                        type:
                                                                          graphql.GraphQLString
                                                                      },
                                                                      administratorComment: {
                                                                        type:
                                                                          graphql.GraphQLString
                                                                      },
                                                                      actionLogDateTime: {
                                                                        type:
                                                                          graphql.GraphQLString
                                                                      }
                                                                    }
                                                                  }
                                                                )
                                                              }
                                                            }
                                                          }
                                                        )
                                                      )
                                                    },
                                                    playback: {
                                                      type: new graphql.GraphQLList(
                                                        new graphql.GraphQLObjectType(
                                                          {
                                                            name:
                                                              'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitemplaybackResponse',
                                                            fields: {
                                                              capacity: {
                                                                type:
                                                                  graphql.GraphQLInt
                                                              },
                                                              count: {
                                                                type:
                                                                  graphql.GraphQLInt
                                                              },
                                                              item: {
                                                                type: new graphql.GraphQLObjectType(
                                                                  {
                                                                    name:
                                                                      'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitemplaybackitemResponse',
                                                                    fields: {
                                                                      tournamentMatchPlaybackId: {
                                                                        type:
                                                                          graphql.GraphQLInt
                                                                      },
                                                                      tournamentMatchId: {
                                                                        type:
                                                                          graphql.GraphQLInt
                                                                      },
                                                                      tournamentMatchPlayback: {
                                                                        type:
                                                                          graphql.GraphQLString
                                                                      },
                                                                      tournamentMatchPlaybackDateTime: {
                                                                        type:
                                                                          graphql.GraphQLString
                                                                      }
                                                                    }
                                                                  }
                                                                )
                                                              }
                                                            }
                                                          }
                                                        )
                                                      )
                                                    },
                                                    qualifierGroupNumber: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    isQualifier: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    hasTieBreaker: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    tieBreakerCount: {
                                                      type: graphql.GraphQLInt
                                                    },
                                                    scoringImage: {
                                                      type: new graphql.GraphQLObjectType(
                                                        {
                                                          name:
                                                            'clientPlayerapiPlayerMyGamesresponseitemplatformsitemmatchesitemscoringImageResponse',
                                                          fields: {
                                                            urlPath: {
                                                              type:
                                                                graphql.GraphQLString
                                                            },
                                                            relativePath: {
                                                              type:
                                                                graphql.GraphQLString
                                                            }
                                                          }
                                                        }
                                                      )
                                                    }
                                                  }
                                                }
                                              )
                                            }
                                          }
                                        })
                                      )
                                    },
                                    statistics: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyGamesresponseitemplatformsitemstatisticsResponse',
                                        fields: {
                                          matchPlayStatisticsId: {
                                            type: graphql.GraphQLInt
                                          },
                                          entityId: {
                                            type: graphql.GraphQLInt
                                          },
                                          matchesPlayedCount: {
                                            type: graphql.GraphQLInt
                                          },
                                          wonCount: {
                                            type: graphql.GraphQLInt
                                          },
                                          lostCount: {
                                            type: graphql.GraphQLInt
                                          },
                                          tieCount: {
                                            type: graphql.GraphQLInt
                                          },
                                          forfeitedWonCount: {
                                            type: graphql.GraphQLInt
                                          },
                                          forfeitedLostCount: {
                                            type: graphql.GraphQLInt
                                          },
                                          noShowCount: {
                                            type: graphql.GraphQLInt
                                          },
                                          totalWinnings: {
                                            type: graphql.GraphQLInt
                                          },
                                          totalScore: {
                                            type: graphql.GraphQLFloat
                                          },
                                          totalTimePlayedInSeconds: {
                                            type: graphql.GraphQLInt
                                          },
                                          winStreak: {
                                            type: graphql.GraphQLInt
                                          },
                                          lossStreak: {
                                            type: graphql.GraphQLInt
                                          }
                                        }
                                      })
                                    },
                                    gamePlatformId: {
                                      type: graphql.GraphQLInt
                                    },
                                    gamePlatformCode: {
                                      type: graphql.GraphQLString
                                    },
                                    gamePlatform: {
                                      type: graphql.GraphQLString
                                    },
                                    imageSmall: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyGamesresponseitemplatformsitemimageSmallResponse',
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
                      },
                      gameTitleId: { type: graphql.GraphQLInt },
                      gameName: { type: graphql.GraphQLString },
                      gameShortCode: { type: graphql.GraphQLString },
                      gameDescription: { type: graphql.GraphQLString },
                      gameWebsite: { type: graphql.GraphQLString },
                      imageLarge: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerMyGamesresponseitemimageLargeResponse',
                          fields: {
                            urlPath: { type: graphql.GraphQLString },
                            relativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      imageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerMyGamesresponseitemimageSmallResponse',
                          fields: {
                            urlPath: { type: graphql.GraphQLString },
                            relativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      imageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerMyGamesresponseitemimageBackgroundResponse',
                          fields: {
                            urlPath: { type: graphql.GraphQLString },
                            relativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      maximumPlayersAllowed: { type: graphql.GraphQLInt },
                      minimumMinutesBetweenTournamentRounds: {
                        type: graphql.GraphQLInt
                      },
                      franchise: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerMyGamesresponseitemfranchiseResponse',
                          fields: {
                            gameFranchiseId: { type: graphql.GraphQLInt },
                            gameFranchise: { type: graphql.GraphQLString },
                            imageLarge: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyGamesresponseitemfranchiseimageLargeResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyGamesresponseitemfranchiseimageSmallResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyGamesresponseitemfranchiseimageBackgroundResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            isActive: { type: graphql.GraphQLBoolean }
                          }
                        })
                      },
                      developer: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerMyGamesresponseitemdeveloperResponse',
                          fields: {
                            gameDeveloperId: { type: graphql.GraphQLInt },
                            gameDeveloper: { type: graphql.GraphQLString },
                            website: { type: graphql.GraphQLString },
                            isActive: { type: graphql.GraphQLBoolean }
                          }
                        })
                      },
                      hasTeamSides: { type: graphql.GraphQLBoolean },
                      isHearthstone: { type: graphql.GraphQLBoolean },
                      hearthstoneManageDecks: { type: graphql.GraphQLBoolean },
                      isActive: { type: graphql.GraphQLBoolean }
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
  apiPlayerMyTopGame: {
    method: 'GET',
    url: 'api/Player/My/TopGame',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerapiPlayerMyTopGameResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientPlayerapiPlayerMyTopGameresponseResponse',
            fields: {
              isValid: { type: graphql.GraphQLBoolean },
              platforms: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerapiPlayerMyTopGameresponseplatformsResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerMyTopGameresponseplatformsitemResponse',
                          fields: {
                            myGame: { type: graphql.GraphQLBoolean },
                            isConfirmed: { type: graphql.GraphQLBoolean },
                            nickname: { type: graphql.GraphQLString },
                            isDisconnected: { type: graphql.GraphQLBoolean },
                            powerRankingScore: { type: graphql.GraphQLInt },
                            powerRankingLevelNumber: {
                              type: graphql.GraphQLInt
                            },
                            powerRankingDivision: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyTopGameresponseplatformsitempowerRankingDivisionResponse',
                                fields: {
                                  powerRankingDivisionId: {
                                    type: graphql.GraphQLInt
                                  },
                                  powerRankingDivision: {
                                    type: graphql.GraphQLString
                                  },
                                  topPoints: { type: graphql.GraphQLInt },
                                  bottomPoints: { type: graphql.GraphQLInt },
                                  numberOfLevels: { type: graphql.GraphQLInt },
                                  powerRankingLevels: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyTopGameresponseplatformsitempowerRankingDivisionpowerRankingLevelsResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyTopGameresponseplatformsitempowerRankingDivisionpowerRankingLevelsitemResponse',
                                                fields: {
                                                  powerRankingLevelNumber: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  topPoints: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  bottomPoints: {
                                                    type: graphql.GraphQLInt
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  },
                                  powerRankingImageLogo: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerMyTopGameresponseplatformsitempowerRankingDivisionpowerRankingImageLogoResponse',
                                      fields: {
                                        urlPath: {
                                          type: graphql.GraphQLString
                                        },
                                        relativePath: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  }
                                }
                              })
                            },
                            matches: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitemResponse',
                                        fields: {
                                          tournamentTitle: {
                                            type: graphql.GraphQLString
                                          },
                                          tournamentTypeName: {
                                            type: graphql.GraphQLString
                                          },
                                          gameShortCode: {
                                            type: graphql.GraphQLString
                                          },
                                          imageLogo: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitemimageLogoResponse',
                                                fields: {
                                                  urlPath: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  relativePath: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          },
                                          gameName: {
                                            type: graphql.GraphQLString
                                          },
                                          teamSize: {
                                            type: graphql.GraphQLInt
                                          },
                                          tournamentMatchStateId: {
                                            type: graphql.GraphQLInt
                                          },
                                          tournamentMatchId: {
                                            type: graphql.GraphQLInt
                                          },
                                          tournamentId: {
                                            type: graphql.GraphQLInt
                                          },
                                          gamePlatformFranchiseTitleId: {
                                            type: graphql.GraphQLInt
                                          },
                                          isTeamTournament: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          matchIsLive: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          matchLiveDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          matchIsComplete: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          matchCompleteDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          matchIsFinalized: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          matchFinalizedDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          enableMatchLobby: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          allowCheckin: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          allowCheckinDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          scheduledStartDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          scheduledForfeitDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          entityOwnerId: {
                                            type: graphql.GraphQLInt
                                          },
                                          entityOwnerProfile: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitementityOwnerProfileResponse',
                                                fields: {
                                                  nickname: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  lanModeEnabled: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  lanSeatLocation: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  entityName: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  entityIsTeam: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  displayName: {
                                                    type: graphql.GraphQLString
                                                  },
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
                                              }
                                            )
                                          },
                                          entityParticipantA: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitementityParticipantAResponse',
                                                fields: {
                                                  id: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  isBye: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  noShow: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  forfeit: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  score: {
                                                    type: graphql.GraphQLFloat
                                                  },
                                                  liveScore: {
                                                    type: graphql.GraphQLFloat
                                                  },
                                                  teamSideId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  teamSideName: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  countryCode: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  region: {
                                                    type: new graphql.GraphQLObjectType(
                                                      {
                                                        name:
                                                          'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitementityParticipantAregionResponse',
                                                        fields: {
                                                          gamingServerRegionId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          gamingServerRegionName: {
                                                            type:
                                                              graphql.GraphQLString
                                                          }
                                                        }
                                                      }
                                                    )
                                                  },
                                                  profile: {
                                                    type: new graphql.GraphQLObjectType(
                                                      {
                                                        name:
                                                          'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitementityParticipantAprofileResponse',
                                                        fields: {
                                                          nickname: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          lanModeEnabled: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          lanSeatLocation: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          entityName: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          entityIsTeam: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          displayName: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          entityImageUrl: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          entityImageUrlIsExternal: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          entityBackgroundImageUrl: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          entityBackgroundImageUrlIsExternal: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          }
                                                        }
                                                      }
                                                    )
                                                  },
                                                  hearthstoneDecks: {
                                                    type: new graphql.GraphQLList(
                                                      new graphql.GraphQLObjectType(
                                                        {
                                                          name:
                                                            'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitementityParticipantAhearthstoneDecksResponse',
                                                          fields: {
                                                            capacity: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            count: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            item: {
                                                              type: new graphql.GraphQLObjectType(
                                                                {
                                                                  name:
                                                                    'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitementityParticipantAhearthstoneDecksitemResponse',
                                                                  fields: {
                                                                    playerNumber: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    isStartingDeck: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    },
                                                                    hearthstoneDeckExcluded: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    },
                                                                    gameTitleModeHearthstoneDeckId: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    gameTitleModeId: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    hearthstoneDeck: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    hearthstoneDeckImage: {
                                                                      type: new graphql.GraphQLObjectType(
                                                                        {
                                                                          name:
                                                                            'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitementityParticipantAhearthstoneDecksitemhearthstoneDeckImageResponse',
                                                                          fields: {
                                                                            urlPath: {
                                                                              type:
                                                                                graphql.GraphQLString
                                                                            },
                                                                            relativePath: {
                                                                              type:
                                                                                graphql.GraphQLString
                                                                            }
                                                                          }
                                                                        }
                                                                      )
                                                                    },
                                                                    isActive: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    }
                                                                  }
                                                                }
                                                              )
                                                            }
                                                          }
                                                        }
                                                      )
                                                    )
                                                  }
                                                }
                                              }
                                            )
                                          },
                                          entityParticipantB: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitementityParticipantBResponse',
                                                fields: {
                                                  id: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  isBye: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  noShow: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  forfeit: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  score: {
                                                    type: graphql.GraphQLFloat
                                                  },
                                                  liveScore: {
                                                    type: graphql.GraphQLFloat
                                                  },
                                                  teamSideId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  teamSideName: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  countryCode: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  region: {
                                                    type: new graphql.GraphQLObjectType(
                                                      {
                                                        name:
                                                          'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitementityParticipantBregionResponse',
                                                        fields: {
                                                          gamingServerRegionId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          gamingServerRegionName: {
                                                            type:
                                                              graphql.GraphQLString
                                                          }
                                                        }
                                                      }
                                                    )
                                                  },
                                                  profile: {
                                                    type: new graphql.GraphQLObjectType(
                                                      {
                                                        name:
                                                          'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitementityParticipantBprofileResponse',
                                                        fields: {
                                                          nickname: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          lanModeEnabled: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          lanSeatLocation: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          entityName: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          entityIsTeam: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          displayName: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          entityImageUrl: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          entityImageUrlIsExternal: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          entityBackgroundImageUrl: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          entityBackgroundImageUrlIsExternal: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          }
                                                        }
                                                      }
                                                    )
                                                  },
                                                  hearthstoneDecks: {
                                                    type: new graphql.GraphQLList(
                                                      new graphql.GraphQLObjectType(
                                                        {
                                                          name:
                                                            'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitementityParticipantBhearthstoneDecksResponse',
                                                          fields: {
                                                            capacity: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            count: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            item: {
                                                              type: new graphql.GraphQLObjectType(
                                                                {
                                                                  name:
                                                                    'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitementityParticipantBhearthstoneDecksitemResponse',
                                                                  fields: {
                                                                    playerNumber: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    isStartingDeck: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    },
                                                                    hearthstoneDeckExcluded: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    },
                                                                    gameTitleModeHearthstoneDeckId: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    gameTitleModeId: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    hearthstoneDeck: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    hearthstoneDeckImage: {
                                                                      type: new graphql.GraphQLObjectType(
                                                                        {
                                                                          name:
                                                                            'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitementityParticipantBhearthstoneDecksitemhearthstoneDeckImageResponse',
                                                                          fields: {
                                                                            urlPath: {
                                                                              type:
                                                                                graphql.GraphQLString
                                                                            },
                                                                            relativePath: {
                                                                              type:
                                                                                graphql.GraphQLString
                                                                            }
                                                                          }
                                                                        }
                                                                      )
                                                                    },
                                                                    isActive: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    }
                                                                  }
                                                                }
                                                              )
                                                            }
                                                          }
                                                        }
                                                      )
                                                    )
                                                  }
                                                }
                                              }
                                            )
                                          },
                                          roundNumber: {
                                            type: graphql.GraphQLInt
                                          },
                                          roundLevelTypeId: {
                                            type: graphql.GraphQLInt
                                          },
                                          matchNumber: {
                                            type: graphql.GraphQLInt
                                          },
                                          numberOfMaps: {
                                            type: graphql.GraphQLInt
                                          },
                                          mapNumber: {
                                            type: graphql.GraphQLInt
                                          },
                                          currentGameTitleModeMapId: {
                                            type: graphql.GraphQLInt
                                          },
                                          mapFileName: {
                                            type: graphql.GraphQLString
                                          },
                                          mapDisplayName: {
                                            type: graphql.GraphQLString
                                          },
                                          gamingServerRegionId: {
                                            type: graphql.GraphQLInt
                                          },
                                          gamingServerRegionName: {
                                            type: graphql.GraphQLString
                                          },
                                          isBracket: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          allowRescheduling: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          willBroadcast: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          broadcastUrl: {
                                            type: graphql.GraphQLString
                                          },
                                          automaticGoLiveOnSchedule: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          minutesAfterStartToForfeit: {
                                            type: graphql.GraphQLInt
                                          },
                                          minutesBeforeStartToAllowCheckin: {
                                            type: graphql.GraphQLInt
                                          },
                                          serverSendPlayerSummaryStatistics: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          gamingServerId: {
                                            type: graphql.GraphQLInt
                                          },
                                          entityPlayerControllerId: {
                                            type: graphql.GraphQLInt
                                          },
                                          allTeamAPlayersReady: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          teamAIsReady: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          allTeamBPlayersReady: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          teamBIsReady: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          scoreManuallyReportedDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          scoreManuallyReported: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          scoreManuallyReportedByPlayerId: {
                                            type: graphql.GraphQLInt
                                          },
                                          scoreManuallyReportedByTeamA: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          scoreManuallyApplyToEntireRound: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          mapsPlayed: {
                                            type: new graphql.GraphQLList(
                                              new graphql.GraphQLObjectType({
                                                name:
                                                  'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitemmapsPlayedResponse',
                                                fields: {
                                                  capacity: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  count: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  item: {
                                                    type: new graphql.GraphQLObjectType(
                                                      {
                                                        name:
                                                          'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitemmapsPlayeditemResponse',
                                                        fields: {
                                                          tournamentMatchId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          mapNumber: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          gameTitleModeMapId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          mapStartDateTime: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          mapEndDateTime: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          entityParticipantAScore: {
                                                            type:
                                                              graphql.GraphQLFloat
                                                          },
                                                          entityParticipantBScore: {
                                                            type:
                                                              graphql.GraphQLFloat
                                                          },
                                                          map: {
                                                            type: new graphql.GraphQLObjectType(
                                                              {
                                                                name:
                                                                  'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitemmapsPlayeditemmapResponse',
                                                                fields: {
                                                                  gameTitleModeMapId: {
                                                                    type:
                                                                      graphql.GraphQLInt
                                                                  },
                                                                  gameTitleModeId: {
                                                                    type:
                                                                      graphql.GraphQLInt
                                                                  },
                                                                  mapFileName: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  mapDisplayName: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  isActive: {
                                                                    type:
                                                                      graphql.GraphQLBoolean
                                                                  }
                                                                }
                                                              }
                                                            )
                                                          }
                                                        }
                                                      }
                                                    )
                                                  }
                                                }
                                              })
                                            )
                                          },
                                          dispute: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitemdisputeResponse',
                                                fields: {
                                                  tournamentMatchDisputeId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  tournamentMatchId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  disputeState: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  initiatedByPlayerId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  initiatedByPlayerProfile: {
                                                    type: new graphql.GraphQLObjectType(
                                                      {
                                                        name:
                                                          'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitemdisputeinitiatedByPlayerProfileResponse',
                                                        fields: {
                                                          nickname: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          lanModeEnabled: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          lanSeatLocation: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          entityName: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          entityIsTeam: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          displayName: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          entityImageUrl: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          entityImageUrlIsExternal: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          entityBackgroundImageUrl: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          entityBackgroundImageUrlIsExternal: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          }
                                                        }
                                                      }
                                                    )
                                                  },
                                                  initiatorOnTeamA: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  teamAScore: {
                                                    type: graphql.GraphQLFloat
                                                  },
                                                  teamBScore: {
                                                    type: graphql.GraphQLFloat
                                                  },
                                                  imageUrl: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  disputeDateTime: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  entityAdministratorId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  resolutionDateTime: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  resolutionTeamAScore: {
                                                    type: graphql.GraphQLFloat
                                                  },
                                                  resolutionTeamBScore: {
                                                    type: graphql.GraphQLFloat
                                                  }
                                                }
                                              }
                                            )
                                          },
                                          myMatch: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          newServerRequested: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          newServerRequestedEntityId: {
                                            type: graphql.GraphQLInt
                                          },
                                          newServerRequestedByTeamA: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          newServerRequestedCount: {
                                            type: graphql.GraphQLInt
                                          },
                                          needsAssistance: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          allowedSpectators: {
                                            type: graphql.GraphQLString
                                          },
                                          streamingServiceId: {
                                            type: graphql.GraphQLInt
                                          },
                                          manualMode: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          manualServerConnectionInfo: {
                                            type: graphql.GraphQLString
                                          },
                                          streamingService: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitemstreamingServiceResponse',
                                                fields: {
                                                  streamingServiceId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  streamingService: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  sourceName: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          },
                                          assistanceRequests: {
                                            type: new graphql.GraphQLList(
                                              new graphql.GraphQLObjectType({
                                                name:
                                                  'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitemassistanceRequestsResponse',
                                                fields: {
                                                  capacity: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  count: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  item: {
                                                    type: new graphql.GraphQLObjectType(
                                                      {
                                                        name:
                                                          'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitemassistanceRequestsitemResponse',
                                                        fields: {
                                                          tournamentMatchAssistanceId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          tournamentMatchId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          assistanceRequestedById: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          assistanceRequestedDateTime: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          resolvedById: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          resolutionDateTime: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          resolutionComments: {
                                                            type:
                                                              graphql.GraphQLString
                                                          }
                                                        }
                                                      }
                                                    )
                                                  }
                                                }
                                              })
                                            )
                                          },
                                          lastUpdatedDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          serverConfigurationFileName: {
                                            type: graphql.GraphQLString
                                          },
                                          matchAdministratorId: {
                                            type: graphql.GraphQLInt
                                          },
                                          actionLog: {
                                            type: new graphql.GraphQLList(
                                              new graphql.GraphQLObjectType({
                                                name:
                                                  'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitemactionLogResponse',
                                                fields: {
                                                  capacity: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  count: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  item: {
                                                    type: new graphql.GraphQLObjectType(
                                                      {
                                                        name:
                                                          'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitemactionLogitemResponse',
                                                        fields: {
                                                          tournamentMatchActionLogId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          entityId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          entityProfile: {
                                                            type: new graphql.GraphQLObjectType(
                                                              {
                                                                name:
                                                                  'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitemactionLogitementityProfileResponse',
                                                                fields: {
                                                                  nickname: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  lanModeEnabled: {
                                                                    type:
                                                                      graphql.GraphQLBoolean
                                                                  },
                                                                  lanSeatLocation: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  entityName: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  entityIsTeam: {
                                                                    type:
                                                                      graphql.GraphQLBoolean
                                                                  },
                                                                  displayName: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  entityImageUrl: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  entityImageUrlIsExternal: {
                                                                    type:
                                                                      graphql.GraphQLBoolean
                                                                  },
                                                                  entityBackgroundImageUrl: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  entityBackgroundImageUrlIsExternal: {
                                                                    type:
                                                                      graphql.GraphQLBoolean
                                                                  }
                                                                }
                                                              }
                                                            )
                                                          },
                                                          tournamentMatchId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          actionLogTypeId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          actionLogType: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          administratorComment: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          actionLogDateTime: {
                                                            type:
                                                              graphql.GraphQLString
                                                          }
                                                        }
                                                      }
                                                    )
                                                  }
                                                }
                                              })
                                            )
                                          },
                                          playback: {
                                            type: new graphql.GraphQLList(
                                              new graphql.GraphQLObjectType({
                                                name:
                                                  'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitemplaybackResponse',
                                                fields: {
                                                  capacity: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  count: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  item: {
                                                    type: new graphql.GraphQLObjectType(
                                                      {
                                                        name:
                                                          'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitemplaybackitemResponse',
                                                        fields: {
                                                          tournamentMatchPlaybackId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          tournamentMatchId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          tournamentMatchPlayback: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          tournamentMatchPlaybackDateTime: {
                                                            type:
                                                              graphql.GraphQLString
                                                          }
                                                        }
                                                      }
                                                    )
                                                  }
                                                }
                                              })
                                            )
                                          },
                                          qualifierGroupNumber: {
                                            type: graphql.GraphQLInt
                                          },
                                          isQualifier: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          hasTieBreaker: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          tieBreakerCount: {
                                            type: graphql.GraphQLInt
                                          },
                                          scoringImage: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyTopGameresponseplatformsitemmatchesitemscoringImageResponse',
                                                fields: {
                                                  urlPath: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  relativePath: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    }
                                  }
                                })
                              )
                            },
                            statistics: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyTopGameresponseplatformsitemstatisticsResponse',
                                fields: {
                                  matchPlayStatisticsId: {
                                    type: graphql.GraphQLInt
                                  },
                                  entityId: { type: graphql.GraphQLInt },
                                  matchesPlayedCount: {
                                    type: graphql.GraphQLInt
                                  },
                                  wonCount: { type: graphql.GraphQLInt },
                                  lostCount: { type: graphql.GraphQLInt },
                                  tieCount: { type: graphql.GraphQLInt },
                                  forfeitedWonCount: {
                                    type: graphql.GraphQLInt
                                  },
                                  forfeitedLostCount: {
                                    type: graphql.GraphQLInt
                                  },
                                  noShowCount: { type: graphql.GraphQLInt },
                                  totalWinnings: { type: graphql.GraphQLInt },
                                  totalScore: { type: graphql.GraphQLFloat },
                                  totalTimePlayedInSeconds: {
                                    type: graphql.GraphQLInt
                                  },
                                  winStreak: { type: graphql.GraphQLInt },
                                  lossStreak: { type: graphql.GraphQLInt }
                                }
                              })
                            },
                            gamePlatformId: { type: graphql.GraphQLInt },
                            gamePlatformCode: { type: graphql.GraphQLString },
                            gamePlatform: { type: graphql.GraphQLString },
                            imageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyTopGameresponseplatformsitemimageSmallResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
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
              },
              gameTitleId: { type: graphql.GraphQLInt },
              gameName: { type: graphql.GraphQLString },
              gameShortCode: { type: graphql.GraphQLString },
              gameDescription: { type: graphql.GraphQLString },
              gameWebsite: { type: graphql.GraphQLString },
              imageLarge: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPlayerapiPlayerMyTopGameresponseimageLargeResponse',
                  fields: {
                    urlPath: { type: graphql.GraphQLString },
                    relativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              imageSmall: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPlayerapiPlayerMyTopGameresponseimageSmallResponse',
                  fields: {
                    urlPath: { type: graphql.GraphQLString },
                    relativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              imageBackground: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPlayerapiPlayerMyTopGameresponseimageBackgroundResponse',
                  fields: {
                    urlPath: { type: graphql.GraphQLString },
                    relativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              maximumPlayersAllowed: { type: graphql.GraphQLInt },
              minimumMinutesBetweenTournamentRounds: {
                type: graphql.GraphQLInt
              },
              franchise: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPlayerapiPlayerMyTopGameresponsefranchiseResponse',
                  fields: {
                    gameFranchiseId: { type: graphql.GraphQLInt },
                    gameFranchise: { type: graphql.GraphQLString },
                    imageLarge: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientPlayerapiPlayerMyTopGameresponsefranchiseimageLargeResponse',
                        fields: {
                          urlPath: { type: graphql.GraphQLString },
                          relativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    imageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientPlayerapiPlayerMyTopGameresponsefranchiseimageSmallResponse',
                        fields: {
                          urlPath: { type: graphql.GraphQLString },
                          relativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    imageBackground: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientPlayerapiPlayerMyTopGameresponsefranchiseimageBackgroundResponse',
                        fields: {
                          urlPath: { type: graphql.GraphQLString },
                          relativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    isActive: { type: graphql.GraphQLBoolean }
                  }
                })
              },
              developer: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPlayerapiPlayerMyTopGameresponsedeveloperResponse',
                  fields: {
                    gameDeveloperId: { type: graphql.GraphQLInt },
                    gameDeveloper: { type: graphql.GraphQLString },
                    website: { type: graphql.GraphQLString },
                    isActive: { type: graphql.GraphQLBoolean }
                  }
                })
              },
              hasTeamSides: { type: graphql.GraphQLBoolean },
              isHearthstone: { type: graphql.GraphQLBoolean },
              hearthstoneManageDecks: { type: graphql.GraphQLBoolean },
              isActive: { type: graphql.GraphQLBoolean }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerMyTeams: {
    method: 'GET',
    url: 'api/Player/My/Teams',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerapiPlayerMyTeamsResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientPlayerapiPlayerMyTeamsresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientPlayerapiPlayerMyTeamsresponseitemResponse',
                    fields: {
                      statistics: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerMyTeamsresponseitemstatisticsResponse',
                          fields: {
                            matchPlayStatisticsId: { type: graphql.GraphQLInt },
                            entityId: { type: graphql.GraphQLInt },
                            matchesPlayedCount: { type: graphql.GraphQLInt },
                            wonCount: { type: graphql.GraphQLInt },
                            lostCount: { type: graphql.GraphQLInt },
                            tieCount: { type: graphql.GraphQLInt },
                            forfeitedWonCount: { type: graphql.GraphQLInt },
                            forfeitedLostCount: { type: graphql.GraphQLInt },
                            noShowCount: { type: graphql.GraphQLInt },
                            totalWinnings: { type: graphql.GraphQLInt },
                            totalScore: { type: graphql.GraphQLFloat },
                            totalTimePlayedInSeconds: {
                              type: graphql.GraphQLInt
                            },
                            winStreak: { type: graphql.GraphQLInt },
                            lossStreak: { type: graphql.GraphQLInt }
                          }
                        })
                      },
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
  apiPlayerMyMatches: {
    method: 'GET',
    url: 'api/Player/My/Matches',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerapiPlayerMyMatchesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientPlayerapiPlayerMyMatchesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientPlayerapiPlayerMyMatchesresponseitemResponse',
                    fields: {
                      tournament: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerMyMatchesresponseitemtournamentResponse',
                          fields: {
                            estimatedPrizePool: { type: graphql.GraphQLInt },
                            tournamentStateId: { type: graphql.GraphQLInt },
                            isTournamentSpecificAdministrator: {
                              type: graphql.GraphQLBoolean
                            },
                            isPublished: { type: graphql.GraphQLBoolean },
                            gameName: { type: graphql.GraphQLString },
                            isTournamentAdministrator: {
                              type: graphql.GraphQLBoolean
                            },
                            entityOwnerId: { type: graphql.GraphQLInt },
                            gameTitleRulesId: { type: graphql.GraphQLInt },
                            isApproved: { type: graphql.GraphQLBoolean },
                            isRealCurrency: { type: graphql.GraphQLBoolean },
                            entityApprovedById: { type: graphql.GraphQLInt },
                            resultIsFinalized: { type: graphql.GraphQLBoolean },
                            entityResultFinalizedById: {
                              type: graphql.GraphQLInt
                            },
                            tournamentPassword: { type: graphql.GraphQLString },
                            prizePoolAmount: { type: graphql.GraphQLInt },
                            tournamentPrizeFundingTypeId: {
                              type: graphql.GraphQLInt
                            },
                            tournamentPrizeFundingTypeName: {
                              type: graphql.GraphQLString
                            },
                            doesCycle: { type: graphql.GraphQLBoolean },
                            cycleLengthInMinutes: { type: graphql.GraphQLInt },
                            cycleMinutesBeforeStart: {
                              type: graphql.GraphQLInt
                            },
                            maxCycleCount: { type: graphql.GraphQLInt },
                            cycleCount: { type: graphql.GraphQLInt },
                            hasCycled: { type: graphql.GraphQLBoolean },
                            cycledTournamentId: { type: graphql.GraphQLInt },
                            canOnlyRegisterFromRegionId: {
                              type: graphql.GraphQLInt
                            },
                            canOnlyRegisterFromRegionName: {
                              type: graphql.GraphQLString
                            },
                            gamingServerRegionName: {
                              type: graphql.GraphQLString
                            },
                            openPlayMinimumTimeToQualify: {
                              type: graphql.GraphQLInt
                            },
                            roundRobinIsComplete: {
                              type: graphql.GraphQLBoolean
                            },
                            tournamentSeedingTypeId: {
                              type: graphql.GraphQLInt
                            },
                            tournamentPairingTypeId: {
                              type: graphql.GraphQLInt
                            },
                            automaticGoLiveOnSchedule: {
                              type: graphql.GraphQLBoolean
                            },
                            minutesAfterStartToForfeit: {
                              type: graphql.GraphQLInt
                            },
                            minutesBeforeStartToAllowCheckin: {
                              type: graphql.GraphQLInt
                            },
                            sponsors: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyMatchesresponseitemtournamentsponsorsResponse',
                                fields: {
                                  titleSponsor: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerMyMatchesresponseitemtournamentsponsorstitleSponsorResponse',
                                      fields: {
                                        sponsorName: {
                                          type: graphql.GraphQLString
                                        },
                                        sponsorImageUrl: {
                                          type: graphql.GraphQLString
                                        },
                                        sponsorImageRelativeUrl: {
                                          type: graphql.GraphQLString
                                        },
                                        sponsorLink: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  },
                                  mainSponsors: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyMatchesresponseitemtournamentsponsorsmainSponsorsResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyMatchesresponseitemtournamentsponsorsmainSponsorsitemResponse',
                                                fields: {
                                                  sponsorName: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  sponsorImageUrl: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  sponsorImageRelativeUrl: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  sponsorLink: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  },
                                  partners: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyMatchesresponseitemtournamentsponsorspartnersResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyMatchesresponseitemtournamentsponsorspartnersitemResponse',
                                                fields: {
                                                  sponsorName: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  sponsorImageUrl: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  sponsorImageRelativeUrl: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  sponsorLink: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  }
                                }
                              })
                            },
                            announcements: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyMatchesresponseitemtournamentannouncementsResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyMatchesresponseitemtournamentannouncementsitemResponse',
                                        fields: {
                                          tournamentAnnouncementId: {
                                            type: graphql.GraphQLInt
                                          },
                                          tournamentId: {
                                            type: graphql.GraphQLInt
                                          },
                                          tournamentAnnouncement: {
                                            type: graphql.GraphQLString
                                          },
                                          createdDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          createdById: {
                                            type: graphql.GraphQLInt
                                          },
                                          entityName: {
                                            type: graphql.GraphQLString
                                          },
                                          displayName: {
                                            type: graphql.GraphQLString
                                          }
                                        }
                                      })
                                    }
                                  }
                                })
                              )
                            },
                            createdDateTime: { type: graphql.GraphQLString },
                            gamePlatformFranchiseTitleStateId: {
                              type: graphql.GraphQLInt
                            },
                            allMatchesRunManualMode: {
                              type: graphql.GraphQLBoolean
                            },
                            thirdPartyTournamentId: {
                              type: graphql.GraphQLString
                            },
                            thirdPartyApiRegion: {
                              type: graphql.GraphQLString
                            },
                            thirdPartyTournamentConfiguration: {
                              type: graphql.GraphQLString
                            },
                            serverConfigurationFileName: {
                              type: graphql.GraphQLString
                            },
                            allowPreCheckin: { type: graphql.GraphQLBoolean },
                            preCheckinMinutesBeforeStart: {
                              type: graphql.GraphQLInt
                            },
                            standByParticipantCount: {
                              type: graphql.GraphQLInt
                            },
                            isPreCheckinAvailable: {
                              type: graphql.GraphQLBoolean
                            },
                            qualifier: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyMatchesresponseitemtournamentqualifierResponse',
                                fields: {
                                  tournamentId: { type: graphql.GraphQLInt },
                                  numberOfGroups: { type: graphql.GraphQLInt },
                                  qualifierWinPoints: {
                                    type: graphql.GraphQLInt
                                  },
                                  qualifierLossPoints: {
                                    type: graphql.GraphQLInt
                                  },
                                  qualifierTiePoints: {
                                    type: graphql.GraphQLInt
                                  },
                                  qualifierScoreMultiplierPoints: {
                                    type: graphql.GraphQLInt
                                  },
                                  qualifierSortTypeId: {
                                    type: graphql.GraphQLInt
                                  },
                                  league: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerMyMatchesresponseitemtournamentqualifierleagueResponse',
                                      fields: {
                                        endDateTime: {
                                          type: graphql.GraphQLString
                                        },
                                        gameTileModeMapId: {
                                          type: graphql.GraphQLInt
                                        },
                                        minimumNumberOfMatches: {
                                          type: graphql.GraphQLInt
                                        },
                                        numberOfPlays: {
                                          type: graphql.GraphQLInt
                                        },
                                        allowRegistrationAfterTournamentStart: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        groupPlacementOnJoin: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        maximumConcurrentMatches: {
                                          type: graphql.GraphQLInt
                                        },
                                        bufferInMinutesBetweenMatches: {
                                          type: graphql.GraphQLInt
                                        }
                                      }
                                    })
                                  },
                                  groups: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyMatchesresponseitemtournamentqualifiergroupsResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyMatchesresponseitemtournamentqualifiergroupsitemResponse',
                                                fields: {
                                                  tournamentId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  groupNumber: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  groupName: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  isGuaranteedPlayoffs: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  numberOfPlayersToAdvance: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  playRegularSeasonMatches: {
                                                    type: graphql.GraphQLBoolean
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  },
                                  tieBreakers: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyMatchesresponseitemtournamentqualifiertieBreakersResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyMatchesresponseitemtournamentqualifiertieBreakersitemResponse',
                                                fields: {
                                                  tieBreakerLevelId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  tieBreakerTypeId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  tieBreakerName: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  tieBreakerDescription: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  }
                                }
                              })
                            },
                            tournamentManagementPolicyId: {
                              type: graphql.GraphQLInt
                            },
                            predefinedStreamedMatches: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyMatchesresponseitemtournamentpredefinedStreamedMatchesResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyMatchesresponseitemtournamentpredefinedStreamedMatchesitemResponse',
                                        fields: {
                                          roundRuleLevelId: {
                                            type: graphql.GraphQLInt
                                          },
                                          roundNumber: {
                                            type: graphql.GraphQLInt
                                          },
                                          matchNumber: {
                                            type: graphql.GraphQLInt
                                          },
                                          streamingServiceId: {
                                            type: graphql.GraphQLInt
                                          },
                                          broadcastUrl: {
                                            type: graphql.GraphQLString
                                          }
                                        }
                                      })
                                    }
                                  }
                                })
                              )
                            },
                            lanModeEnabled: { type: graphql.GraphQLBoolean },
                            enableLanTagging: { type: graphql.GraphQLBoolean },
                            lanTag: { type: graphql.GraphQLString },
                            allowedCountryIds: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyMatchesresponseitemtournamentallowedCountryIdsResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: { type: graphql.GraphQLInt }
                                  }
                                })
                              )
                            },
                            allowedCountryList: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyMatchesresponseitemtournamentallowedCountryListResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyMatchesresponseitemtournamentallowedCountryListitemResponse',
                                        fields: {
                                          addressCountryId: {
                                            type: graphql.GraphQLInt
                                          },
                                          addressCountryCode: {
                                            type: graphql.GraphQLString
                                          },
                                          addressCountry3LetterCode: {
                                            type: graphql.GraphQLString
                                          },
                                          addressCountry: {
                                            type: graphql.GraphQLString
                                          },
                                          allowsRealMoney: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          flagSmallImageUrl: {
                                            type: graphql.GraphQLString
                                          },
                                          flagLargeImageUrl: {
                                            type: graphql.GraphQLString
                                          },
                                          showInList: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          orderBy: { type: graphql.GraphQLInt }
                                        }
                                      })
                                    }
                                  }
                                })
                              )
                            },
                            pauseIfQualifierEndsInTie: {
                              type: graphql.GraphQLBoolean
                            },
                            isPausedForTiedQualifierFinish: {
                              type: graphql.GraphQLBoolean
                            },
                            isPausedForTiedQualifierFinishDateTime: {
                              type: graphql.GraphQLString
                            },
                            qualifierTiedFinishIsResolved: {
                              type: graphql.GraphQLBoolean
                            },
                            qualifierTiedFinishIsResolvedDateTime: {
                              type: graphql.GraphQLString
                            },
                            qualifierTiedFinishIsResolvedByAdministratorId: {
                              type: graphql.GraphQLInt
                            },
                            qualifierTiedFinishIsResolvedByAdministratorProfile: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyMatchesresponseitemtournamentqualifierTiedFinishIsResolvedByAdministratorProfileResponse',
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
                            restrictPowerRankingStartDivisionId: {
                              type: graphql.GraphQLInt
                            },
                            restrictPowerRankingEndDivisionId: {
                              type: graphql.GraphQLInt
                            },
                            payouts: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyMatchesresponseitemtournamentpayoutsResponse',
                                fields: {
                                  hasPayouts: { type: graphql.GraphQLBoolean },
                                  isFixedPayouts: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  payoutCount: { type: graphql.GraphQLInt },
                                  fixedPayoutAmount: {
                                    type: graphql.GraphQLInt
                                  },
                                  places: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyMatchesresponseitemtournamentpayoutsplacesResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyMatchesresponseitemtournamentpayoutsplacesitemResponse',
                                                fields: {
                                                  isAwarded: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  awardedDateTime: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  awardedAmount: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  numberOfWinnersAwarded: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  winners: {
                                                    type: new graphql.GraphQLList(
                                                      new graphql.GraphQLObjectType(
                                                        {
                                                          name:
                                                            'clientPlayerapiPlayerMyMatchesresponseitemtournamentpayoutsplacesitemwinnersResponse',
                                                          fields: {
                                                            capacity: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            count: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            item: {
                                                              type: new graphql.GraphQLObjectType(
                                                                {
                                                                  name:
                                                                    'clientPlayerapiPlayerMyMatchesresponseitemtournamentpayoutsplacesitemwinnersitemResponse',
                                                                  fields: {
                                                                    entityId: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    entityName: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    entityIsTeam: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    },
                                                                    displayName: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    entityImageUrl: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    }
                                                                  }
                                                                }
                                                              )
                                                            }
                                                          }
                                                        }
                                                      )
                                                    )
                                                  },
                                                  placeNumber: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  payoutAmount: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  payoutPercent: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  otherPayout: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  xperiencePoints: {
                                                    type: graphql.GraphQLInt
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  }
                                }
                              })
                            },
                            challengeMinEntryFee: { type: graphql.GraphQLInt },
                            challengeMaxEntryFee: { type: graphql.GraphQLInt },
                            challengeOffers: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyMatchesresponseitemtournamentchallengeOffersResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyMatchesresponseitemtournamentchallengeOffersitemResponse',
                                        fields: {
                                          challengeOfferId: {
                                            type: graphql.GraphQLInt
                                          },
                                          entryFee: {
                                            type: graphql.GraphQLInt
                                          },
                                          serviceFee: {
                                            type: graphql.GraphQLInt
                                          },
                                          totalFee: {
                                            type: graphql.GraphQLInt
                                          },
                                          tournamentId: {
                                            type: graphql.GraphQLInt
                                          },
                                          tournamentDescription: {
                                            type: graphql.GraphQLString
                                          },
                                          tournamentTitle: {
                                            type: graphql.GraphQLString
                                          },
                                          creatorEntityId: {
                                            type: graphql.GraphQLInt
                                          },
                                          challengerEntityId: {
                                            type: graphql.GraphQLInt
                                          },
                                          offerDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          creatorStateId: {
                                            type: graphql.GraphQLInt
                                          },
                                          creatorStateDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          challengerStateId: {
                                            type: graphql.GraphQLInt
                                          },
                                          challengerStateDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          hasPendingRegistration: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          tournamentMatchId: {
                                            type: graphql.GraphQLInt
                                          },
                                          challengeComplete: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          challengeCompleteDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          challengerNeedsRegistration: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          creatorNeedsRegistration: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          challengeCancelled: {
                                            type: graphql.GraphQLBoolean
                                          }
                                        }
                                      })
                                    }
                                  }
                                })
                              )
                            },
                            keepAlive: { type: graphql.GraphQLString },
                            matchCountdownMinutes: { type: graphql.GraphQLInt },
                            locationIds: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyMatchesresponseitemtournamentlocationIdsResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: { type: graphql.GraphQLInt }
                                  }
                                })
                              )
                            },
                            locations: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyMatchesresponseitemtournamentlocationsResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyMatchesresponseitemtournamentlocationsitemResponse',
                                        fields: {
                                          locationId: {
                                            type: graphql.GraphQLInt
                                          },
                                          stateProvence: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyMatchesresponseitemtournamentlocationsitemstateProvenceResponse',
                                                fields: {
                                                  addressStateProvenceId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  addressCountryId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  addressStateProvenceCode: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  addressStateProvence: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  allowsRealMoney: {
                                                    type: graphql.GraphQLBoolean
                                                  }
                                                }
                                              }
                                            )
                                          },
                                          country: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyMatchesresponseitemtournamentlocationsitemcountryResponse',
                                                fields: {
                                                  addressCountryId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  addressCountryCode: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  addressCountry3LetterCode: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  addressCountry: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  allowsRealMoney: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  flagSmallImageUrl: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  flagLargeImageUrl: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  showInList: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  orderBy: {
                                                    type: graphql.GraphQLInt
                                                  }
                                                }
                                              }
                                            )
                                          },
                                          region: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyMatchesresponseitemtournamentlocationsitemregionResponse',
                                                fields: {
                                                  gamingServerRegionId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  gamingServerRegionName: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          },
                                          isActive: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          location: {
                                            type: graphql.GraphQLString
                                          },
                                          streetAddress: {
                                            type: graphql.GraphQLString
                                          },
                                          city: { type: graphql.GraphQLString },
                                          addressStateProvenceId: {
                                            type: graphql.GraphQLInt
                                          },
                                          addressCountryId: {
                                            type: graphql.GraphQLInt
                                          },
                                          postalCode: {
                                            type: graphql.GraphQLString
                                          },
                                          gamingServerRegionId: {
                                            type: graphql.GraphQLInt
                                          },
                                          phoneNumber: {
                                            type: graphql.GraphQLString
                                          },
                                          emailAddress: {
                                            type: graphql.GraphQLString
                                          },
                                          hours: {
                                            type: graphql.GraphQLString
                                          },
                                          description: {
                                            type: graphql.GraphQLString
                                          }
                                        }
                                      })
                                    }
                                  }
                                })
                              )
                            },
                            trophyGroup: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyMatchesresponseitemtournamenttrophyGroupResponse',
                                fields: {
                                  trophyGroupId: { type: graphql.GraphQLInt },
                                  trophyGroup: { type: graphql.GraphQLString },
                                  isActive: { type: graphql.GraphQLBoolean }
                                }
                              })
                            },
                            trophyGroupId: { type: graphql.GraphQLInt },
                            xperiencePointsForJoining: {
                              type: graphql.GraphQLInt
                            },
                            xperiencePointsPerRound: {
                              type: graphql.GraphQLInt
                            },
                            bracketsBuilt: { type: graphql.GraphQLBoolean },
                            totalEntryFeesAmount: { type: graphql.GraphQLInt },
                            totalPayoutAmount: { type: graphql.GraphQLInt },
                            totalRakeAmount: { type: graphql.GraphQLInt },
                            directChallengeOppontentEntityId: {
                              type: graphql.GraphQLInt
                            },
                            useCommunitySteamAccounts: {
                              type: graphql.GraphQLBoolean
                            },
                            isChallenge: { type: graphql.GraphQLBoolean },
                            tournamentIsComplete: {
                              type: graphql.GraphQLBoolean
                            },
                            tournamentIsLive: { type: graphql.GraphQLBoolean },
                            tournamentLiveDateTime: {
                              type: graphql.GraphQLString
                            },
                            tournamentId: { type: graphql.GraphQLInt },
                            gameTitleModeId: { type: graphql.GraphQLInt },
                            tournamentTitle: { type: graphql.GraphQLString },
                            tournamentDescription: {
                              type: graphql.GraphQLString
                            },
                            tournamentSeriesId: { type: graphql.GraphQLInt },
                            gamePlatformFranchiseTitleId: {
                              type: graphql.GraphQLInt
                            },
                            isTeamTournament: { type: graphql.GraphQLBoolean },
                            minimumNumberOfEntities: {
                              type: graphql.GraphQLInt
                            },
                            maximumNumberOfEntities: {
                              type: graphql.GraphQLInt
                            },
                            teamSize: { type: graphql.GraphQLInt },
                            tournamentTypeId: { type: graphql.GraphQLInt },
                            originalTournamentTypeId: {
                              type: graphql.GraphQLInt
                            },
                            tournamentTypeName: { type: graphql.GraphQLString },
                            tournamentStartDateTime: {
                              type: graphql.GraphQLString
                            },
                            tournamentEndDateTime: {
                              type: graphql.GraphQLString
                            },
                            registrationCutoffDateTime: {
                              type: graphql.GraphQLString
                            },
                            isPublic: { type: graphql.GraphQLBoolean },
                            isFavorite: { type: graphql.GraphQLBoolean },
                            enableMatchLobby: { type: graphql.GraphQLBoolean },
                            imageLogo: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyMatchesresponseitemtournamentimageLogoResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyMatchesresponseitemtournamentimageBackgroundResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            joinPasswordRequired: {
                              type: graphql.GraphQLBoolean
                            },
                            hasConsolationRound: {
                              type: graphql.GraphQLBoolean
                            },
                            currentNumberOfParticipants: {
                              type: graphql.GraphQLInt
                            },
                            powerRankingProfileId: { type: graphql.GraphQLInt },
                            platformGame: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyMatchesresponseitemtournamentplatformGameResponse',
                                fields: {
                                  gamePlatformFranchiseTitleId: {
                                    type: graphql.GraphQLInt
                                  },
                                  platform: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerMyMatchesresponseitemtournamentplatformGameplatformResponse',
                                      fields: {
                                        gamePlatformId: {
                                          type: graphql.GraphQLInt
                                        },
                                        gamePlatformCode: {
                                          type: graphql.GraphQLString
                                        },
                                        gamePlatform: {
                                          type: graphql.GraphQLString
                                        },
                                        imageSmall: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerapiPlayerMyMatchesresponseitemtournamentplatformGameplatformimageSmallResponse',
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
                                        isActive: {
                                          type: graphql.GraphQLBoolean
                                        }
                                      }
                                    })
                                  },
                                  game: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerMyMatchesresponseitemtournamentplatformGamegameResponse',
                                      fields: {
                                        gameTitleId: {
                                          type: graphql.GraphQLInt
                                        },
                                        gameName: {
                                          type: graphql.GraphQLString
                                        },
                                        gameShortCode: {
                                          type: graphql.GraphQLString
                                        },
                                        gameDescription: {
                                          type: graphql.GraphQLString
                                        },
                                        gameWebsite: {
                                          type: graphql.GraphQLString
                                        },
                                        imageLarge: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerapiPlayerMyMatchesresponseitemtournamentplatformGamegameimageLargeResponse',
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
                                        imageSmall: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerapiPlayerMyMatchesresponseitemtournamentplatformGamegameimageSmallResponse',
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
                                        imageBackground: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerapiPlayerMyMatchesresponseitemtournamentplatformGamegameimageBackgroundResponse',
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
                                        maximumPlayersAllowed: {
                                          type: graphql.GraphQLInt
                                        },
                                        minimumMinutesBetweenTournamentRounds: {
                                          type: graphql.GraphQLInt
                                        },
                                        franchise: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerapiPlayerMyMatchesresponseitemtournamentplatformGamegamefranchiseResponse',
                                            fields: {
                                              gameFranchiseId: {
                                                type: graphql.GraphQLInt
                                              },
                                              gameFranchise: {
                                                type: graphql.GraphQLString
                                              },
                                              imageLarge: {
                                                type: new graphql.GraphQLObjectType(
                                                  {
                                                    name:
                                                      'clientPlayerapiPlayerMyMatchesresponseitemtournamentplatformGamegamefranchiseimageLargeResponse',
                                                    fields: {
                                                      urlPath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      relativePath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      }
                                                    }
                                                  }
                                                )
                                              },
                                              imageSmall: {
                                                type: new graphql.GraphQLObjectType(
                                                  {
                                                    name:
                                                      'clientPlayerapiPlayerMyMatchesresponseitemtournamentplatformGamegamefranchiseimageSmallResponse',
                                                    fields: {
                                                      urlPath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      relativePath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      }
                                                    }
                                                  }
                                                )
                                              },
                                              imageBackground: {
                                                type: new graphql.GraphQLObjectType(
                                                  {
                                                    name:
                                                      'clientPlayerapiPlayerMyMatchesresponseitemtournamentplatformGamegamefranchiseimageBackgroundResponse',
                                                    fields: {
                                                      urlPath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      relativePath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      }
                                                    }
                                                  }
                                                )
                                              },
                                              isActive: {
                                                type: graphql.GraphQLBoolean
                                              }
                                            }
                                          })
                                        },
                                        developer: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerapiPlayerMyMatchesresponseitemtournamentplatformGamegamedeveloperResponse',
                                            fields: {
                                              gameDeveloperId: {
                                                type: graphql.GraphQLInt
                                              },
                                              gameDeveloper: {
                                                type: graphql.GraphQLString
                                              },
                                              website: {
                                                type: graphql.GraphQLString
                                              },
                                              isActive: {
                                                type: graphql.GraphQLBoolean
                                              }
                                            }
                                          })
                                        },
                                        hasTeamSides: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        isHearthstone: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        hearthstoneManageDecks: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        isActive: {
                                          type: graphql.GraphQLBoolean
                                        }
                                      }
                                    })
                                  },
                                  gamePlatformFranchiseTitleStateId: {
                                    type: graphql.GraphQLInt
                                  },
                                  gameAddedDateTime: {
                                    type: graphql.GraphQLString
                                  },
                                  gameDownloadLink: {
                                    type: graphql.GraphQLString
                                  },
                                  chatPanelGuid: {
                                    type: graphql.GraphQLString
                                  },
                                  imageLarge: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerMyMatchesresponseitemtournamentplatformGameimageLargeResponse',
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
                                  imageSmall: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerMyMatchesresponseitemtournamentplatformGameimageSmallResponse',
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
                                  imageBackground: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerMyMatchesresponseitemtournamentplatformGameimageBackgroundResponse',
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
                                  totalWinnings: { type: graphql.GraphQLInt },
                                  thirdPartyApplicationId: {
                                    type: graphql.GraphQLString
                                  },
                                  thirdPartyApiKey: {
                                    type: graphql.GraphQLString
                                  },
                                  gameReleaseVersion: {
                                    type: graphql.GraphQLString
                                  },
                                  gameRevisedDateTime: {
                                    type: graphql.GraphQLString
                                  },
                                  gameVersion: { type: graphql.GraphQLString },
                                  gameVersionNeedsVerification: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  issueGamesServerToMatch: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  tournamentCount: { type: graphql.GraphQLInt },
                                  validationMethodTypeId: {
                                    type: graphql.GraphQLInt
                                  },
                                  externalCallbackTemplateId: {
                                    type: graphql.GraphQLInt
                                  },
                                  internalCallbackTemplateId: {
                                    type: graphql.GraphQLInt
                                  },
                                  gameServerModVersion: {
                                    type: graphql.GraphQLFloat
                                  }
                                }
                              })
                            },
                            gameTitleMode: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyMatchesresponseitemtournamentgameTitleModeResponse',
                                fields: {
                                  gameTitleModeId: { type: graphql.GraphQLInt },
                                  gameTitleId: { type: graphql.GraphQLInt },
                                  gameTitleMode: {
                                    type: graphql.GraphQLString
                                  },
                                  isActive: { type: graphql.GraphQLBoolean }
                                }
                              })
                            },
                            lastUpdatedDateTime: {
                              type: graphql.GraphQLString
                            },
                            entryFee: { type: graphql.GraphQLInt },
                            serviceFee: { type: graphql.GraphQLInt },
                            totalFee: { type: graphql.GraphQLInt }
                          }
                        })
                      },
                      tournamentTitle: { type: graphql.GraphQLString },
                      tournamentTypeName: { type: graphql.GraphQLString },
                      gameShortCode: { type: graphql.GraphQLString },
                      imageLogo: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerMyMatchesresponseitemimageLogoResponse',
                          fields: {
                            urlPath: { type: graphql.GraphQLString },
                            relativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      gameName: { type: graphql.GraphQLString },
                      teamSize: { type: graphql.GraphQLInt },
                      isInLobby: { type: graphql.GraphQLBoolean },
                      isReady: { type: graphql.GraphQLBoolean },
                      tournamentMatchStateId: { type: graphql.GraphQLInt },
                      tournamentMatchId: { type: graphql.GraphQLInt },
                      tournamentId: { type: graphql.GraphQLInt },
                      gamePlatformFranchiseTitleId: {
                        type: graphql.GraphQLInt
                      },
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
                            'clientPlayerapiPlayerMyMatchesresponseitementityOwnerProfileResponse',
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
                      entityParticipantA: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerMyMatchesresponseitementityParticipantAResponse',
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
                                  'clientPlayerapiPlayerMyMatchesresponseitementityParticipantAregionResponse',
                                fields: {
                                  gamingServerRegionId: {
                                    type: graphql.GraphQLInt
                                  },
                                  gamingServerRegionName: {
                                    type: graphql.GraphQLString
                                  }
                                }
                              })
                            },
                            profile: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyMatchesresponseitementityParticipantAprofileResponse',
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
                            hearthstoneDecks: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyMatchesresponseitementityParticipantAhearthstoneDecksResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyMatchesresponseitementityParticipantAhearthstoneDecksitemResponse',
                                        fields: {
                                          playerNumber: {
                                            type: graphql.GraphQLInt
                                          },
                                          isStartingDeck: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          hearthstoneDeckExcluded: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          gameTitleModeHearthstoneDeckId: {
                                            type: graphql.GraphQLInt
                                          },
                                          gameTitleModeId: {
                                            type: graphql.GraphQLInt
                                          },
                                          hearthstoneDeck: {
                                            type: graphql.GraphQLString
                                          },
                                          hearthstoneDeckImage: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyMatchesresponseitementityParticipantAhearthstoneDecksitemhearthstoneDeckImageResponse',
                                                fields: {
                                                  urlPath: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  relativePath: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          },
                                          isActive: {
                                            type: graphql.GraphQLBoolean
                                          }
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
                            'clientPlayerapiPlayerMyMatchesresponseitementityParticipantBResponse',
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
                                  'clientPlayerapiPlayerMyMatchesresponseitementityParticipantBregionResponse',
                                fields: {
                                  gamingServerRegionId: {
                                    type: graphql.GraphQLInt
                                  },
                                  gamingServerRegionName: {
                                    type: graphql.GraphQLString
                                  }
                                }
                              })
                            },
                            profile: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyMatchesresponseitementityParticipantBprofileResponse',
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
                            hearthstoneDecks: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyMatchesresponseitementityParticipantBhearthstoneDecksResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyMatchesresponseitementityParticipantBhearthstoneDecksitemResponse',
                                        fields: {
                                          playerNumber: {
                                            type: graphql.GraphQLInt
                                          },
                                          isStartingDeck: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          hearthstoneDeckExcluded: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          gameTitleModeHearthstoneDeckId: {
                                            type: graphql.GraphQLInt
                                          },
                                          gameTitleModeId: {
                                            type: graphql.GraphQLInt
                                          },
                                          hearthstoneDeck: {
                                            type: graphql.GraphQLString
                                          },
                                          hearthstoneDeckImage: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyMatchesresponseitementityParticipantBhearthstoneDecksitemhearthstoneDeckImageResponse',
                                                fields: {
                                                  urlPath: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  relativePath: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          },
                                          isActive: {
                                            type: graphql.GraphQLBoolean
                                          }
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
                      automaticGoLiveOnSchedule: {
                        type: graphql.GraphQLBoolean
                      },
                      minutesAfterStartToForfeit: { type: graphql.GraphQLInt },
                      minutesBeforeStartToAllowCheckin: {
                        type: graphql.GraphQLInt
                      },
                      serverSendPlayerSummaryStatistics: {
                        type: graphql.GraphQLBoolean
                      },
                      gamingServerId: { type: graphql.GraphQLInt },
                      entityPlayerControllerId: { type: graphql.GraphQLInt },
                      allTeamAPlayersReady: { type: graphql.GraphQLBoolean },
                      teamAIsReady: { type: graphql.GraphQLBoolean },
                      allTeamBPlayersReady: { type: graphql.GraphQLBoolean },
                      teamBIsReady: { type: graphql.GraphQLBoolean },
                      scoreManuallyReportedDateTime: {
                        type: graphql.GraphQLString
                      },
                      scoreManuallyReported: { type: graphql.GraphQLBoolean },
                      scoreManuallyReportedByPlayerId: {
                        type: graphql.GraphQLInt
                      },
                      scoreManuallyReportedByTeamA: {
                        type: graphql.GraphQLBoolean
                      },
                      scoreManuallyApplyToEntireRound: {
                        type: graphql.GraphQLBoolean
                      },
                      mapsPlayed: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerapiPlayerMyMatchesresponseitemmapsPlayedResponse',
                            fields: {
                              capacity: { type: graphql.GraphQLInt },
                              count: { type: graphql.GraphQLInt },
                              item: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyMatchesresponseitemmapsPlayeditemResponse',
                                  fields: {
                                    tournamentMatchId: {
                                      type: graphql.GraphQLInt
                                    },
                                    mapNumber: { type: graphql.GraphQLInt },
                                    gameTitleModeMapId: {
                                      type: graphql.GraphQLInt
                                    },
                                    mapStartDateTime: {
                                      type: graphql.GraphQLString
                                    },
                                    mapEndDateTime: {
                                      type: graphql.GraphQLString
                                    },
                                    entityParticipantAScore: {
                                      type: graphql.GraphQLFloat
                                    },
                                    entityParticipantBScore: {
                                      type: graphql.GraphQLFloat
                                    },
                                    map: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyMatchesresponseitemmapsPlayeditemmapResponse',
                                        fields: {
                                          gameTitleModeMapId: {
                                            type: graphql.GraphQLInt
                                          },
                                          gameTitleModeId: {
                                            type: graphql.GraphQLInt
                                          },
                                          mapFileName: {
                                            type: graphql.GraphQLString
                                          },
                                          mapDisplayName: {
                                            type: graphql.GraphQLString
                                          },
                                          isActive: {
                                            type: graphql.GraphQLBoolean
                                          }
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
                            'clientPlayerapiPlayerMyMatchesresponseitemdisputeResponse',
                          fields: {
                            tournamentMatchDisputeId: {
                              type: graphql.GraphQLInt
                            },
                            tournamentMatchId: { type: graphql.GraphQLInt },
                            disputeState: { type: graphql.GraphQLInt },
                            initiatedByPlayerId: { type: graphql.GraphQLInt },
                            initiatedByPlayerProfile: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyMatchesresponseitemdisputeinitiatedByPlayerProfileResponse',
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
                            initiatorOnTeamA: { type: graphql.GraphQLBoolean },
                            teamAScore: { type: graphql.GraphQLFloat },
                            teamBScore: { type: graphql.GraphQLFloat },
                            imageUrl: { type: graphql.GraphQLString },
                            disputeDateTime: { type: graphql.GraphQLString },
                            entityAdministratorId: { type: graphql.GraphQLInt },
                            resolutionDateTime: { type: graphql.GraphQLString },
                            resolutionTeamAScore: {
                              type: graphql.GraphQLFloat
                            },
                            resolutionTeamBScore: { type: graphql.GraphQLFloat }
                          }
                        })
                      },
                      myMatch: { type: graphql.GraphQLBoolean },
                      newServerRequested: { type: graphql.GraphQLBoolean },
                      newServerRequestedEntityId: { type: graphql.GraphQLInt },
                      newServerRequestedByTeamA: {
                        type: graphql.GraphQLBoolean
                      },
                      newServerRequestedCount: { type: graphql.GraphQLInt },
                      needsAssistance: { type: graphql.GraphQLBoolean },
                      allowedSpectators: { type: graphql.GraphQLString },
                      streamingServiceId: { type: graphql.GraphQLInt },
                      manualMode: { type: graphql.GraphQLBoolean },
                      manualServerConnectionInfo: {
                        type: graphql.GraphQLString
                      },
                      streamingService: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerMyMatchesresponseitemstreamingServiceResponse',
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
                              'clientPlayerapiPlayerMyMatchesresponseitemassistanceRequestsResponse',
                            fields: {
                              capacity: { type: graphql.GraphQLInt },
                              count: { type: graphql.GraphQLInt },
                              item: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyMatchesresponseitemassistanceRequestsitemResponse',
                                  fields: {
                                    tournamentMatchAssistanceId: {
                                      type: graphql.GraphQLInt
                                    },
                                    tournamentMatchId: {
                                      type: graphql.GraphQLInt
                                    },
                                    assistanceRequestedById: {
                                      type: graphql.GraphQLInt
                                    },
                                    assistanceRequestedDateTime: {
                                      type: graphql.GraphQLString
                                    },
                                    resolvedById: { type: graphql.GraphQLInt },
                                    resolutionDateTime: {
                                      type: graphql.GraphQLString
                                    },
                                    resolutionComments: {
                                      type: graphql.GraphQLString
                                    }
                                  }
                                })
                              }
                            }
                          })
                        )
                      },
                      lastUpdatedDateTime: { type: graphql.GraphQLString },
                      serverConfigurationFileName: {
                        type: graphql.GraphQLString
                      },
                      matchAdministratorId: { type: graphql.GraphQLInt },
                      actionLog: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerapiPlayerMyMatchesresponseitemactionLogResponse',
                            fields: {
                              capacity: { type: graphql.GraphQLInt },
                              count: { type: graphql.GraphQLInt },
                              item: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyMatchesresponseitemactionLogitemResponse',
                                  fields: {
                                    tournamentMatchActionLogId: {
                                      type: graphql.GraphQLInt
                                    },
                                    entityId: { type: graphql.GraphQLInt },
                                    entityProfile: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyMatchesresponseitemactionLogitementityProfileResponse',
                                        fields: {
                                          nickname: {
                                            type: graphql.GraphQLString
                                          },
                                          lanModeEnabled: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          lanSeatLocation: {
                                            type: graphql.GraphQLString
                                          },
                                          entityName: {
                                            type: graphql.GraphQLString
                                          },
                                          entityIsTeam: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          displayName: {
                                            type: graphql.GraphQLString
                                          },
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
                                    tournamentMatchId: {
                                      type: graphql.GraphQLInt
                                    },
                                    actionLogTypeId: {
                                      type: graphql.GraphQLInt
                                    },
                                    actionLogType: {
                                      type: graphql.GraphQLString
                                    },
                                    administratorComment: {
                                      type: graphql.GraphQLString
                                    },
                                    actionLogDateTime: {
                                      type: graphql.GraphQLString
                                    }
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
                              'clientPlayerapiPlayerMyMatchesresponseitemplaybackResponse',
                            fields: {
                              capacity: { type: graphql.GraphQLInt },
                              count: { type: graphql.GraphQLInt },
                              item: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyMatchesresponseitemplaybackitemResponse',
                                  fields: {
                                    tournamentMatchPlaybackId: {
                                      type: graphql.GraphQLInt
                                    },
                                    tournamentMatchId: {
                                      type: graphql.GraphQLInt
                                    },
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
                            'clientPlayerapiPlayerMyMatchesresponseitemscoringImageResponse',
                          fields: {
                            urlPath: { type: graphql.GraphQLString },
                            relativePath: { type: graphql.GraphQLString }
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
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerMyTournamentBygameShortCodeTemplates: {
    method: 'GET',
    url: 'api/Player/My/Tournament/{gameShortCode}/Templates',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemResponse',
                    fields: {
                      entityPlayerId: { type: graphql.GraphQLInt },
                      tournamentTemplateName: { type: graphql.GraphQLString },
                      tournamentProfile: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileResponse',
                          fields: {
                            estimatedPrizePool: { type: graphql.GraphQLInt },
                            tournamentStateId: { type: graphql.GraphQLInt },
                            isTournamentSpecificAdministrator: {
                              type: graphql.GraphQLBoolean
                            },
                            isPublished: { type: graphql.GraphQLBoolean },
                            gameName: { type: graphql.GraphQLString },
                            isTournamentAdministrator: {
                              type: graphql.GraphQLBoolean
                            },
                            entityOwnerId: { type: graphql.GraphQLInt },
                            gameTitleRulesId: { type: graphql.GraphQLInt },
                            isApproved: { type: graphql.GraphQLBoolean },
                            isRealCurrency: { type: graphql.GraphQLBoolean },
                            entityApprovedById: { type: graphql.GraphQLInt },
                            resultIsFinalized: { type: graphql.GraphQLBoolean },
                            entityResultFinalizedById: {
                              type: graphql.GraphQLInt
                            },
                            tournamentPassword: { type: graphql.GraphQLString },
                            prizePoolAmount: { type: graphql.GraphQLInt },
                            tournamentPrizeFundingTypeId: {
                              type: graphql.GraphQLInt
                            },
                            tournamentPrizeFundingTypeName: {
                              type: graphql.GraphQLString
                            },
                            doesCycle: { type: graphql.GraphQLBoolean },
                            cycleLengthInMinutes: { type: graphql.GraphQLInt },
                            cycleMinutesBeforeStart: {
                              type: graphql.GraphQLInt
                            },
                            maxCycleCount: { type: graphql.GraphQLInt },
                            cycleCount: { type: graphql.GraphQLInt },
                            hasCycled: { type: graphql.GraphQLBoolean },
                            cycledTournamentId: { type: graphql.GraphQLInt },
                            canOnlyRegisterFromRegionId: {
                              type: graphql.GraphQLInt
                            },
                            canOnlyRegisterFromRegionName: {
                              type: graphql.GraphQLString
                            },
                            gamingServerRegionName: {
                              type: graphql.GraphQLString
                            },
                            openPlayMinimumTimeToQualify: {
                              type: graphql.GraphQLInt
                            },
                            roundRobinIsComplete: {
                              type: graphql.GraphQLBoolean
                            },
                            tournamentSeedingTypeId: {
                              type: graphql.GraphQLInt
                            },
                            tournamentPairingTypeId: {
                              type: graphql.GraphQLInt
                            },
                            automaticGoLiveOnSchedule: {
                              type: graphql.GraphQLBoolean
                            },
                            minutesAfterStartToForfeit: {
                              type: graphql.GraphQLInt
                            },
                            minutesBeforeStartToAllowCheckin: {
                              type: graphql.GraphQLInt
                            },
                            sponsors: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilesponsorsResponse',
                                fields: {
                                  titleSponsor: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilesponsorstitleSponsorResponse',
                                      fields: {
                                        sponsorName: {
                                          type: graphql.GraphQLString
                                        },
                                        sponsorImageUrl: {
                                          type: graphql.GraphQLString
                                        },
                                        sponsorImageRelativeUrl: {
                                          type: graphql.GraphQLString
                                        },
                                        sponsorLink: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  },
                                  mainSponsors: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilesponsorsmainSponsorsResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilesponsorsmainSponsorsitemResponse',
                                                fields: {
                                                  sponsorName: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  sponsorImageUrl: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  sponsorImageRelativeUrl: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  sponsorLink: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  },
                                  partners: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilesponsorspartnersResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilesponsorspartnersitemResponse',
                                                fields: {
                                                  sponsorName: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  sponsorImageUrl: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  sponsorImageRelativeUrl: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  sponsorLink: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  }
                                }
                              })
                            },
                            announcements: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileannouncementsResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileannouncementsitemResponse',
                                        fields: {
                                          tournamentAnnouncementId: {
                                            type: graphql.GraphQLInt
                                          },
                                          tournamentId: {
                                            type: graphql.GraphQLInt
                                          },
                                          tournamentAnnouncement: {
                                            type: graphql.GraphQLString
                                          },
                                          createdDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          createdById: {
                                            type: graphql.GraphQLInt
                                          },
                                          entityName: {
                                            type: graphql.GraphQLString
                                          },
                                          displayName: {
                                            type: graphql.GraphQLString
                                          }
                                        }
                                      })
                                    }
                                  }
                                })
                              )
                            },
                            createdDateTime: { type: graphql.GraphQLString },
                            gamePlatformFranchiseTitleStateId: {
                              type: graphql.GraphQLInt
                            },
                            allMatchesRunManualMode: {
                              type: graphql.GraphQLBoolean
                            },
                            thirdPartyTournamentId: {
                              type: graphql.GraphQLString
                            },
                            thirdPartyApiRegion: {
                              type: graphql.GraphQLString
                            },
                            thirdPartyTournamentConfiguration: {
                              type: graphql.GraphQLString
                            },
                            serverConfigurationFileName: {
                              type: graphql.GraphQLString
                            },
                            allowPreCheckin: { type: graphql.GraphQLBoolean },
                            preCheckinMinutesBeforeStart: {
                              type: graphql.GraphQLInt
                            },
                            standByParticipantCount: {
                              type: graphql.GraphQLInt
                            },
                            isPreCheckinAvailable: {
                              type: graphql.GraphQLBoolean
                            },
                            qualifier: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilequalifierResponse',
                                fields: {
                                  tournamentId: { type: graphql.GraphQLInt },
                                  numberOfGroups: { type: graphql.GraphQLInt },
                                  qualifierWinPoints: {
                                    type: graphql.GraphQLInt
                                  },
                                  qualifierLossPoints: {
                                    type: graphql.GraphQLInt
                                  },
                                  qualifierTiePoints: {
                                    type: graphql.GraphQLInt
                                  },
                                  qualifierScoreMultiplierPoints: {
                                    type: graphql.GraphQLInt
                                  },
                                  qualifierSortTypeId: {
                                    type: graphql.GraphQLInt
                                  },
                                  league: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilequalifierleagueResponse',
                                      fields: {
                                        endDateTime: {
                                          type: graphql.GraphQLString
                                        },
                                        gameTileModeMapId: {
                                          type: graphql.GraphQLInt
                                        },
                                        minimumNumberOfMatches: {
                                          type: graphql.GraphQLInt
                                        },
                                        numberOfPlays: {
                                          type: graphql.GraphQLInt
                                        },
                                        allowRegistrationAfterTournamentStart: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        groupPlacementOnJoin: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        maximumConcurrentMatches: {
                                          type: graphql.GraphQLInt
                                        },
                                        bufferInMinutesBetweenMatches: {
                                          type: graphql.GraphQLInt
                                        }
                                      }
                                    })
                                  },
                                  groups: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilequalifiergroupsResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilequalifiergroupsitemResponse',
                                                fields: {
                                                  tournamentId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  groupNumber: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  groupName: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  isGuaranteedPlayoffs: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  numberOfPlayersToAdvance: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  playRegularSeasonMatches: {
                                                    type: graphql.GraphQLBoolean
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  },
                                  tieBreakers: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilequalifiertieBreakersResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilequalifiertieBreakersitemResponse',
                                                fields: {
                                                  tieBreakerLevelId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  tieBreakerTypeId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  tieBreakerName: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  tieBreakerDescription: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  }
                                }
                              })
                            },
                            tournamentManagementPolicyId: {
                              type: graphql.GraphQLInt
                            },
                            predefinedStreamedMatches: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilepredefinedStreamedMatchesResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilepredefinedStreamedMatchesitemResponse',
                                        fields: {
                                          roundRuleLevelId: {
                                            type: graphql.GraphQLInt
                                          },
                                          roundNumber: {
                                            type: graphql.GraphQLInt
                                          },
                                          matchNumber: {
                                            type: graphql.GraphQLInt
                                          },
                                          streamingServiceId: {
                                            type: graphql.GraphQLInt
                                          },
                                          broadcastUrl: {
                                            type: graphql.GraphQLString
                                          }
                                        }
                                      })
                                    }
                                  }
                                })
                              )
                            },
                            lanModeEnabled: { type: graphql.GraphQLBoolean },
                            enableLanTagging: { type: graphql.GraphQLBoolean },
                            lanTag: { type: graphql.GraphQLString },
                            allowedCountryIds: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileallowedCountryIdsResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: { type: graphql.GraphQLInt }
                                  }
                                })
                              )
                            },
                            allowedCountryList: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileallowedCountryListResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileallowedCountryListitemResponse',
                                        fields: {
                                          addressCountryId: {
                                            type: graphql.GraphQLInt
                                          },
                                          addressCountryCode: {
                                            type: graphql.GraphQLString
                                          },
                                          addressCountry3LetterCode: {
                                            type: graphql.GraphQLString
                                          },
                                          addressCountry: {
                                            type: graphql.GraphQLString
                                          },
                                          allowsRealMoney: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          flagSmallImageUrl: {
                                            type: graphql.GraphQLString
                                          },
                                          flagLargeImageUrl: {
                                            type: graphql.GraphQLString
                                          },
                                          showInList: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          orderBy: { type: graphql.GraphQLInt }
                                        }
                                      })
                                    }
                                  }
                                })
                              )
                            },
                            pauseIfQualifierEndsInTie: {
                              type: graphql.GraphQLBoolean
                            },
                            isPausedForTiedQualifierFinish: {
                              type: graphql.GraphQLBoolean
                            },
                            isPausedForTiedQualifierFinishDateTime: {
                              type: graphql.GraphQLString
                            },
                            qualifierTiedFinishIsResolved: {
                              type: graphql.GraphQLBoolean
                            },
                            qualifierTiedFinishIsResolvedDateTime: {
                              type: graphql.GraphQLString
                            },
                            qualifierTiedFinishIsResolvedByAdministratorId: {
                              type: graphql.GraphQLInt
                            },
                            qualifierTiedFinishIsResolvedByAdministratorProfile: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilequalifierTiedFinishIsResolvedByAdministratorProfileResponse',
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
                            restrictPowerRankingStartDivisionId: {
                              type: graphql.GraphQLInt
                            },
                            restrictPowerRankingEndDivisionId: {
                              type: graphql.GraphQLInt
                            },
                            payouts: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilepayoutsResponse',
                                fields: {
                                  hasPayouts: { type: graphql.GraphQLBoolean },
                                  isFixedPayouts: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  payoutCount: { type: graphql.GraphQLInt },
                                  fixedPayoutAmount: {
                                    type: graphql.GraphQLInt
                                  },
                                  places: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilepayoutsplacesResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilepayoutsplacesitemResponse',
                                                fields: {
                                                  isAwarded: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  awardedDateTime: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  awardedAmount: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  numberOfWinnersAwarded: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  winners: {
                                                    type: new graphql.GraphQLList(
                                                      new graphql.GraphQLObjectType(
                                                        {
                                                          name:
                                                            'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilepayoutsplacesitemwinnersResponse',
                                                          fields: {
                                                            capacity: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            count: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            item: {
                                                              type: new graphql.GraphQLObjectType(
                                                                {
                                                                  name:
                                                                    'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilepayoutsplacesitemwinnersitemResponse',
                                                                  fields: {
                                                                    entityId: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    entityName: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    entityIsTeam: {
                                                                      type:
                                                                        graphql.GraphQLBoolean
                                                                    },
                                                                    displayName: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    },
                                                                    entityImageUrl: {
                                                                      type:
                                                                        graphql.GraphQLString
                                                                    }
                                                                  }
                                                                }
                                                              )
                                                            }
                                                          }
                                                        }
                                                      )
                                                    )
                                                  },
                                                  placeNumber: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  payoutAmount: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  payoutPercent: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  otherPayout: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  xperiencePoints: {
                                                    type: graphql.GraphQLInt
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  }
                                }
                              })
                            },
                            challengeMinEntryFee: { type: graphql.GraphQLInt },
                            challengeMaxEntryFee: { type: graphql.GraphQLInt },
                            challengeOffers: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilechallengeOffersResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilechallengeOffersitemResponse',
                                        fields: {
                                          challengeOfferId: {
                                            type: graphql.GraphQLInt
                                          },
                                          entryFee: {
                                            type: graphql.GraphQLInt
                                          },
                                          serviceFee: {
                                            type: graphql.GraphQLInt
                                          },
                                          totalFee: {
                                            type: graphql.GraphQLInt
                                          },
                                          tournamentId: {
                                            type: graphql.GraphQLInt
                                          },
                                          tournamentDescription: {
                                            type: graphql.GraphQLString
                                          },
                                          tournamentTitle: {
                                            type: graphql.GraphQLString
                                          },
                                          creatorEntityId: {
                                            type: graphql.GraphQLInt
                                          },
                                          challengerEntityId: {
                                            type: graphql.GraphQLInt
                                          },
                                          offerDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          creatorStateId: {
                                            type: graphql.GraphQLInt
                                          },
                                          creatorStateDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          challengerStateId: {
                                            type: graphql.GraphQLInt
                                          },
                                          challengerStateDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          hasPendingRegistration: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          tournamentMatchId: {
                                            type: graphql.GraphQLInt
                                          },
                                          challengeComplete: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          challengeCompleteDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          challengerNeedsRegistration: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          creatorNeedsRegistration: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          challengeCancelled: {
                                            type: graphql.GraphQLBoolean
                                          }
                                        }
                                      })
                                    }
                                  }
                                })
                              )
                            },
                            keepAlive: { type: graphql.GraphQLString },
                            matchCountdownMinutes: { type: graphql.GraphQLInt },
                            locationIds: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilelocationIdsResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: { type: graphql.GraphQLInt }
                                  }
                                })
                              )
                            },
                            locations: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilelocationsResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilelocationsitemResponse',
                                        fields: {
                                          locationId: {
                                            type: graphql.GraphQLInt
                                          },
                                          stateProvence: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilelocationsitemstateProvenceResponse',
                                                fields: {
                                                  addressStateProvenceId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  addressCountryId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  addressStateProvenceCode: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  addressStateProvence: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  allowsRealMoney: {
                                                    type: graphql.GraphQLBoolean
                                                  }
                                                }
                                              }
                                            )
                                          },
                                          country: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilelocationsitemcountryResponse',
                                                fields: {
                                                  addressCountryId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  addressCountryCode: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  addressCountry3LetterCode: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  addressCountry: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  allowsRealMoney: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  flagSmallImageUrl: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  flagLargeImageUrl: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  showInList: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  orderBy: {
                                                    type: graphql.GraphQLInt
                                                  }
                                                }
                                              }
                                            )
                                          },
                                          region: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilelocationsitemregionResponse',
                                                fields: {
                                                  gamingServerRegionId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  gamingServerRegionName: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          },
                                          isActive: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          location: {
                                            type: graphql.GraphQLString
                                          },
                                          streetAddress: {
                                            type: graphql.GraphQLString
                                          },
                                          city: { type: graphql.GraphQLString },
                                          addressStateProvenceId: {
                                            type: graphql.GraphQLInt
                                          },
                                          addressCountryId: {
                                            type: graphql.GraphQLInt
                                          },
                                          postalCode: {
                                            type: graphql.GraphQLString
                                          },
                                          gamingServerRegionId: {
                                            type: graphql.GraphQLInt
                                          },
                                          phoneNumber: {
                                            type: graphql.GraphQLString
                                          },
                                          emailAddress: {
                                            type: graphql.GraphQLString
                                          },
                                          hours: {
                                            type: graphql.GraphQLString
                                          },
                                          description: {
                                            type: graphql.GraphQLString
                                          }
                                        }
                                      })
                                    }
                                  }
                                })
                              )
                            },
                            trophyGroup: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfiletrophyGroupResponse',
                                fields: {
                                  trophyGroupId: { type: graphql.GraphQLInt },
                                  trophyGroup: { type: graphql.GraphQLString },
                                  isActive: { type: graphql.GraphQLBoolean }
                                }
                              })
                            },
                            trophyGroupId: { type: graphql.GraphQLInt },
                            xperiencePointsForJoining: {
                              type: graphql.GraphQLInt
                            },
                            xperiencePointsPerRound: {
                              type: graphql.GraphQLInt
                            },
                            bracketsBuilt: { type: graphql.GraphQLBoolean },
                            totalEntryFeesAmount: { type: graphql.GraphQLInt },
                            totalPayoutAmount: { type: graphql.GraphQLInt },
                            totalRakeAmount: { type: graphql.GraphQLInt },
                            directChallengeOppontentEntityId: {
                              type: graphql.GraphQLInt
                            },
                            useCommunitySteamAccounts: {
                              type: graphql.GraphQLBoolean
                            },
                            isChallenge: { type: graphql.GraphQLBoolean },
                            tournamentIsComplete: {
                              type: graphql.GraphQLBoolean
                            },
                            tournamentIsLive: { type: graphql.GraphQLBoolean },
                            tournamentLiveDateTime: {
                              type: graphql.GraphQLString
                            },
                            tournamentId: { type: graphql.GraphQLInt },
                            gameTitleModeId: { type: graphql.GraphQLInt },
                            tournamentTitle: { type: graphql.GraphQLString },
                            tournamentDescription: {
                              type: graphql.GraphQLString
                            },
                            tournamentSeriesId: { type: graphql.GraphQLInt },
                            gamePlatformFranchiseTitleId: {
                              type: graphql.GraphQLInt
                            },
                            isTeamTournament: { type: graphql.GraphQLBoolean },
                            minimumNumberOfEntities: {
                              type: graphql.GraphQLInt
                            },
                            maximumNumberOfEntities: {
                              type: graphql.GraphQLInt
                            },
                            teamSize: { type: graphql.GraphQLInt },
                            tournamentTypeId: { type: graphql.GraphQLInt },
                            originalTournamentTypeId: {
                              type: graphql.GraphQLInt
                            },
                            tournamentTypeName: { type: graphql.GraphQLString },
                            tournamentStartDateTime: {
                              type: graphql.GraphQLString
                            },
                            tournamentEndDateTime: {
                              type: graphql.GraphQLString
                            },
                            registrationCutoffDateTime: {
                              type: graphql.GraphQLString
                            },
                            isPublic: { type: graphql.GraphQLBoolean },
                            isFavorite: { type: graphql.GraphQLBoolean },
                            enableMatchLobby: { type: graphql.GraphQLBoolean },
                            imageLogo: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileimageLogoResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileimageBackgroundResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            joinPasswordRequired: {
                              type: graphql.GraphQLBoolean
                            },
                            hasConsolationRound: {
                              type: graphql.GraphQLBoolean
                            },
                            currentNumberOfParticipants: {
                              type: graphql.GraphQLInt
                            },
                            powerRankingProfileId: { type: graphql.GraphQLInt },
                            platformGame: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileplatformGameResponse',
                                fields: {
                                  gamePlatformFranchiseTitleId: {
                                    type: graphql.GraphQLInt
                                  },
                                  platform: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileplatformGameplatformResponse',
                                      fields: {
                                        gamePlatformId: {
                                          type: graphql.GraphQLInt
                                        },
                                        gamePlatformCode: {
                                          type: graphql.GraphQLString
                                        },
                                        gamePlatform: {
                                          type: graphql.GraphQLString
                                        },
                                        imageSmall: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileplatformGameplatformimageSmallResponse',
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
                                        isActive: {
                                          type: graphql.GraphQLBoolean
                                        }
                                      }
                                    })
                                  },
                                  game: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileplatformGamegameResponse',
                                      fields: {
                                        gameTitleId: {
                                          type: graphql.GraphQLInt
                                        },
                                        gameName: {
                                          type: graphql.GraphQLString
                                        },
                                        gameShortCode: {
                                          type: graphql.GraphQLString
                                        },
                                        gameDescription: {
                                          type: graphql.GraphQLString
                                        },
                                        gameWebsite: {
                                          type: graphql.GraphQLString
                                        },
                                        imageLarge: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileplatformGamegameimageLargeResponse',
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
                                        imageSmall: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileplatformGamegameimageSmallResponse',
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
                                        imageBackground: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileplatformGamegameimageBackgroundResponse',
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
                                        maximumPlayersAllowed: {
                                          type: graphql.GraphQLInt
                                        },
                                        minimumMinutesBetweenTournamentRounds: {
                                          type: graphql.GraphQLInt
                                        },
                                        franchise: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileplatformGamegamefranchiseResponse',
                                            fields: {
                                              gameFranchiseId: {
                                                type: graphql.GraphQLInt
                                              },
                                              gameFranchise: {
                                                type: graphql.GraphQLString
                                              },
                                              imageLarge: {
                                                type: new graphql.GraphQLObjectType(
                                                  {
                                                    name:
                                                      'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileplatformGamegamefranchiseimageLargeResponse',
                                                    fields: {
                                                      urlPath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      relativePath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      }
                                                    }
                                                  }
                                                )
                                              },
                                              imageSmall: {
                                                type: new graphql.GraphQLObjectType(
                                                  {
                                                    name:
                                                      'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileplatformGamegamefranchiseimageSmallResponse',
                                                    fields: {
                                                      urlPath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      relativePath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      }
                                                    }
                                                  }
                                                )
                                              },
                                              imageBackground: {
                                                type: new graphql.GraphQLObjectType(
                                                  {
                                                    name:
                                                      'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileplatformGamegamefranchiseimageBackgroundResponse',
                                                    fields: {
                                                      urlPath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      relativePath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      }
                                                    }
                                                  }
                                                )
                                              },
                                              isActive: {
                                                type: graphql.GraphQLBoolean
                                              }
                                            }
                                          })
                                        },
                                        developer: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileplatformGamegamedeveloperResponse',
                                            fields: {
                                              gameDeveloperId: {
                                                type: graphql.GraphQLInt
                                              },
                                              gameDeveloper: {
                                                type: graphql.GraphQLString
                                              },
                                              website: {
                                                type: graphql.GraphQLString
                                              },
                                              isActive: {
                                                type: graphql.GraphQLBoolean
                                              }
                                            }
                                          })
                                        },
                                        hasTeamSides: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        isHearthstone: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        hearthstoneManageDecks: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        isActive: {
                                          type: graphql.GraphQLBoolean
                                        }
                                      }
                                    })
                                  },
                                  gamePlatformFranchiseTitleStateId: {
                                    type: graphql.GraphQLInt
                                  },
                                  gameAddedDateTime: {
                                    type: graphql.GraphQLString
                                  },
                                  gameDownloadLink: {
                                    type: graphql.GraphQLString
                                  },
                                  chatPanelGuid: {
                                    type: graphql.GraphQLString
                                  },
                                  imageLarge: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileplatformGameimageLargeResponse',
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
                                  imageSmall: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileplatformGameimageSmallResponse',
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
                                  imageBackground: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfileplatformGameimageBackgroundResponse',
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
                                  totalWinnings: { type: graphql.GraphQLInt },
                                  thirdPartyApplicationId: {
                                    type: graphql.GraphQLString
                                  },
                                  thirdPartyApiKey: {
                                    type: graphql.GraphQLString
                                  },
                                  gameReleaseVersion: {
                                    type: graphql.GraphQLString
                                  },
                                  gameRevisedDateTime: {
                                    type: graphql.GraphQLString
                                  },
                                  gameVersion: { type: graphql.GraphQLString },
                                  gameVersionNeedsVerification: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  issueGamesServerToMatch: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  tournamentCount: { type: graphql.GraphQLInt },
                                  validationMethodTypeId: {
                                    type: graphql.GraphQLInt
                                  },
                                  externalCallbackTemplateId: {
                                    type: graphql.GraphQLInt
                                  },
                                  internalCallbackTemplateId: {
                                    type: graphql.GraphQLInt
                                  },
                                  gameServerModVersion: {
                                    type: graphql.GraphQLFloat
                                  }
                                }
                              })
                            },
                            gameTitleMode: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerMyTournamentBygameShortCodeTemplatesresponseitemtournamentProfilegameTitleModeResponse',
                                fields: {
                                  gameTitleModeId: { type: graphql.GraphQLInt },
                                  gameTitleId: { type: graphql.GraphQLInt },
                                  gameTitleMode: {
                                    type: graphql.GraphQLString
                                  },
                                  isActive: { type: graphql.GraphQLBoolean }
                                }
                              })
                            },
                            lastUpdatedDateTime: {
                              type: graphql.GraphQLString
                            },
                            entryFee: { type: graphql.GraphQLInt },
                            serviceFee: { type: graphql.GraphQLInt },
                            totalFee: { type: graphql.GraphQLInt }
                          }
                        })
                      },
                      isPublic: { type: graphql.GraphQLBoolean },
                      gameTitleId: { type: graphql.GraphQLInt },
                      tournamentTemplateId: { type: graphql.GraphQLInt }
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
  apiPlayerMyTournamentTemplate: {
    method: 'POST',
    url: 'api/Player/My/Tournament/Template',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        tournamentTemplateName: { type: graphql.GraphQLString },
        tournamentId: { type: graphql.GraphQLInt },
        isPublic: { type: graphql.GraphQLBoolean }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerapiPlayerMyTournamentTemplateResponse',
      fields: {
        response: { type: graphql.GraphQLBoolean },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerMyTournamentTemplateBytemplateId: {
    method: 'DELETE',
    url: 'api/Player/My/Tournament/Template/{templateId}',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerapiPlayerMyTournamentTemplateBytemplateIdResponse',
      fields: {
        response: { type: graphql.GraphQLBoolean },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerByentityName: {
    method: 'GET',
    url: 'api/Player/{entityName}',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerapiPlayerByentityNameResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientPlayerapiPlayerByentityNameresponseResponse',
            fields: {
              isMyProfile: { type: graphql.GraphQLBoolean },
              address: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPlayerapiPlayerByentityNameresponseaddressResponse',
                  fields: {
                    entityUserId: { type: graphql.GraphQLInt },
                    address: { type: graphql.GraphQLString },
                    city: { type: graphql.GraphQLString },
                    addressStateProvenceId: { type: graphql.GraphQLInt },
                    addressStateProvenceName: { type: graphql.GraphQLString },
                    addressStateProvenceCode: { type: graphql.GraphQLString },
                    postalCode: { type: graphql.GraphQLString },
                    addressCountryId: { type: graphql.GraphQLInt },
                    country: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientPlayerapiPlayerByentityNameresponseaddresscountryResponse',
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
                    }
                  }
                })
              },
              games: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerapiPlayerByentityNameresponsegamesResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerByentityNameresponsegamesitemResponse',
                          fields: {
                            isValid: { type: graphql.GraphQLBoolean },
                            platforms: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemResponse',
                                        fields: {
                                          myGame: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          isConfirmed: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          nickname: {
                                            type: graphql.GraphQLString
                                          },
                                          isDisconnected: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          powerRankingScore: {
                                            type: graphql.GraphQLInt
                                          },
                                          powerRankingLevelNumber: {
                                            type: graphql.GraphQLInt
                                          },
                                          powerRankingDivision: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitempowerRankingDivisionResponse',
                                                fields: {
                                                  powerRankingDivisionId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  powerRankingDivision: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  topPoints: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  bottomPoints: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  numberOfLevels: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  powerRankingLevels: {
                                                    type: new graphql.GraphQLList(
                                                      new graphql.GraphQLObjectType(
                                                        {
                                                          name:
                                                            'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitempowerRankingDivisionpowerRankingLevelsResponse',
                                                          fields: {
                                                            capacity: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            count: {
                                                              type:
                                                                graphql.GraphQLInt
                                                            },
                                                            item: {
                                                              type: new graphql.GraphQLObjectType(
                                                                {
                                                                  name:
                                                                    'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitempowerRankingDivisionpowerRankingLevelsitemResponse',
                                                                  fields: {
                                                                    powerRankingLevelNumber: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    topPoints: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    bottomPoints: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    }
                                                                  }
                                                                }
                                                              )
                                                            }
                                                          }
                                                        }
                                                      )
                                                    )
                                                  },
                                                  powerRankingImageLogo: {
                                                    type: new graphql.GraphQLObjectType(
                                                      {
                                                        name:
                                                          'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitempowerRankingDivisionpowerRankingImageLogoResponse',
                                                        fields: {
                                                          urlPath: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          relativePath: {
                                                            type:
                                                              graphql.GraphQLString
                                                          }
                                                        }
                                                      }
                                                    )
                                                  }
                                                }
                                              }
                                            )
                                          },
                                          matches: {
                                            type: new graphql.GraphQLList(
                                              new graphql.GraphQLObjectType({
                                                name:
                                                  'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesResponse',
                                                fields: {
                                                  capacity: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  count: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  item: {
                                                    type: new graphql.GraphQLObjectType(
                                                      {
                                                        name:
                                                          'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitemResponse',
                                                        fields: {
                                                          tournamentTitle: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          tournamentTypeName: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          gameShortCode: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          imageLogo: {
                                                            type: new graphql.GraphQLObjectType(
                                                              {
                                                                name:
                                                                  'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitemimageLogoResponse',
                                                                fields: {
                                                                  urlPath: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  relativePath: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  }
                                                                }
                                                              }
                                                            )
                                                          },
                                                          gameName: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          teamSize: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          tournamentMatchStateId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          tournamentMatchId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          tournamentId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          gamePlatformFranchiseTitleId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          isTeamTournament: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          matchIsLive: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          matchLiveDateTime: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          matchIsComplete: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          matchCompleteDateTime: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          matchIsFinalized: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          matchFinalizedDateTime: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          enableMatchLobby: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          allowCheckin: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          allowCheckinDateTime: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          scheduledStartDateTime: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          scheduledForfeitDateTime: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          entityOwnerId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          entityOwnerProfile: {
                                                            type: new graphql.GraphQLObjectType(
                                                              {
                                                                name:
                                                                  'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitementityOwnerProfileResponse',
                                                                fields: {
                                                                  nickname: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  lanModeEnabled: {
                                                                    type:
                                                                      graphql.GraphQLBoolean
                                                                  },
                                                                  lanSeatLocation: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  entityName: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  entityIsTeam: {
                                                                    type:
                                                                      graphql.GraphQLBoolean
                                                                  },
                                                                  displayName: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  entityImageUrl: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  entityImageUrlIsExternal: {
                                                                    type:
                                                                      graphql.GraphQLBoolean
                                                                  },
                                                                  entityBackgroundImageUrl: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  entityBackgroundImageUrlIsExternal: {
                                                                    type:
                                                                      graphql.GraphQLBoolean
                                                                  }
                                                                }
                                                              }
                                                            )
                                                          },
                                                          entityParticipantA: {
                                                            type: new graphql.GraphQLObjectType(
                                                              {
                                                                name:
                                                                  'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitementityParticipantAResponse',
                                                                fields: {
                                                                  id: {
                                                                    type:
                                                                      graphql.GraphQLInt
                                                                  },
                                                                  isBye: {
                                                                    type:
                                                                      graphql.GraphQLBoolean
                                                                  },
                                                                  noShow: {
                                                                    type:
                                                                      graphql.GraphQLBoolean
                                                                  },
                                                                  forfeit: {
                                                                    type:
                                                                      graphql.GraphQLBoolean
                                                                  },
                                                                  score: {
                                                                    type:
                                                                      graphql.GraphQLFloat
                                                                  },
                                                                  liveScore: {
                                                                    type:
                                                                      graphql.GraphQLFloat
                                                                  },
                                                                  teamSideId: {
                                                                    type:
                                                                      graphql.GraphQLInt
                                                                  },
                                                                  teamSideName: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  countryCode: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  region: {
                                                                    type: new graphql.GraphQLObjectType(
                                                                      {
                                                                        name:
                                                                          'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitementityParticipantAregionResponse',
                                                                        fields: {
                                                                          gamingServerRegionId: {
                                                                            type:
                                                                              graphql.GraphQLInt
                                                                          },
                                                                          gamingServerRegionName: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          }
                                                                        }
                                                                      }
                                                                    )
                                                                  },
                                                                  profile: {
                                                                    type: new graphql.GraphQLObjectType(
                                                                      {
                                                                        name:
                                                                          'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitementityParticipantAprofileResponse',
                                                                        fields: {
                                                                          nickname: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          lanModeEnabled: {
                                                                            type:
                                                                              graphql.GraphQLBoolean
                                                                          },
                                                                          lanSeatLocation: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          entityName: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          entityIsTeam: {
                                                                            type:
                                                                              graphql.GraphQLBoolean
                                                                          },
                                                                          displayName: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          entityImageUrl: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          entityImageUrlIsExternal: {
                                                                            type:
                                                                              graphql.GraphQLBoolean
                                                                          },
                                                                          entityBackgroundImageUrl: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          entityBackgroundImageUrlIsExternal: {
                                                                            type:
                                                                              graphql.GraphQLBoolean
                                                                          }
                                                                        }
                                                                      }
                                                                    )
                                                                  },
                                                                  hearthstoneDecks: {
                                                                    type: new graphql.GraphQLList(
                                                                      new graphql.GraphQLObjectType(
                                                                        {
                                                                          name:
                                                                            'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitementityParticipantAhearthstoneDecksResponse',
                                                                          fields: {
                                                                            capacity: {
                                                                              type:
                                                                                graphql.GraphQLInt
                                                                            },
                                                                            count: {
                                                                              type:
                                                                                graphql.GraphQLInt
                                                                            }
                                                                          }
                                                                        }
                                                                      )
                                                                    )
                                                                  }
                                                                }
                                                              }
                                                            )
                                                          },
                                                          entityParticipantB: {
                                                            type: new graphql.GraphQLObjectType(
                                                              {
                                                                name:
                                                                  'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitementityParticipantBResponse',
                                                                fields: {
                                                                  id: {
                                                                    type:
                                                                      graphql.GraphQLInt
                                                                  },
                                                                  isBye: {
                                                                    type:
                                                                      graphql.GraphQLBoolean
                                                                  },
                                                                  noShow: {
                                                                    type:
                                                                      graphql.GraphQLBoolean
                                                                  },
                                                                  forfeit: {
                                                                    type:
                                                                      graphql.GraphQLBoolean
                                                                  },
                                                                  score: {
                                                                    type:
                                                                      graphql.GraphQLFloat
                                                                  },
                                                                  liveScore: {
                                                                    type:
                                                                      graphql.GraphQLFloat
                                                                  },
                                                                  teamSideId: {
                                                                    type:
                                                                      graphql.GraphQLInt
                                                                  },
                                                                  teamSideName: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  countryCode: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  region: {
                                                                    type: new graphql.GraphQLObjectType(
                                                                      {
                                                                        name:
                                                                          'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitementityParticipantBregionResponse',
                                                                        fields: {
                                                                          gamingServerRegionId: {
                                                                            type:
                                                                              graphql.GraphQLInt
                                                                          },
                                                                          gamingServerRegionName: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          }
                                                                        }
                                                                      }
                                                                    )
                                                                  },
                                                                  profile: {
                                                                    type: new graphql.GraphQLObjectType(
                                                                      {
                                                                        name:
                                                                          'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitementityParticipantBprofileResponse',
                                                                        fields: {
                                                                          nickname: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          lanModeEnabled: {
                                                                            type:
                                                                              graphql.GraphQLBoolean
                                                                          },
                                                                          lanSeatLocation: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          entityName: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          entityIsTeam: {
                                                                            type:
                                                                              graphql.GraphQLBoolean
                                                                          },
                                                                          displayName: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          entityImageUrl: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          entityImageUrlIsExternal: {
                                                                            type:
                                                                              graphql.GraphQLBoolean
                                                                          },
                                                                          entityBackgroundImageUrl: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          entityBackgroundImageUrlIsExternal: {
                                                                            type:
                                                                              graphql.GraphQLBoolean
                                                                          }
                                                                        }
                                                                      }
                                                                    )
                                                                  },
                                                                  hearthstoneDecks: {
                                                                    type: new graphql.GraphQLList(
                                                                      new graphql.GraphQLObjectType(
                                                                        {
                                                                          name:
                                                                            'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitementityParticipantBhearthstoneDecksResponse',
                                                                          fields: {
                                                                            capacity: {
                                                                              type:
                                                                                graphql.GraphQLInt
                                                                            },
                                                                            count: {
                                                                              type:
                                                                                graphql.GraphQLInt
                                                                            }
                                                                          }
                                                                        }
                                                                      )
                                                                    )
                                                                  }
                                                                }
                                                              }
                                                            )
                                                          },
                                                          roundNumber: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          roundLevelTypeId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          matchNumber: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          numberOfMaps: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          mapNumber: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          currentGameTitleModeMapId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          mapFileName: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          mapDisplayName: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          gamingServerRegionId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          gamingServerRegionName: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          isBracket: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          allowRescheduling: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          willBroadcast: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          broadcastUrl: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          automaticGoLiveOnSchedule: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          minutesAfterStartToForfeit: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          minutesBeforeStartToAllowCheckin: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          serverSendPlayerSummaryStatistics: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          gamingServerId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          entityPlayerControllerId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          allTeamAPlayersReady: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          teamAIsReady: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          allTeamBPlayersReady: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          teamBIsReady: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          scoreManuallyReportedDateTime: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          scoreManuallyReported: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          scoreManuallyReportedByPlayerId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          scoreManuallyReportedByTeamA: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          scoreManuallyApplyToEntireRound: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          mapsPlayed: {
                                                            type: new graphql.GraphQLList(
                                                              new graphql.GraphQLObjectType(
                                                                {
                                                                  name:
                                                                    'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitemmapsPlayedResponse',
                                                                  fields: {
                                                                    capacity: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    count: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    item: {
                                                                      type: new graphql.GraphQLObjectType(
                                                                        {
                                                                          name:
                                                                            'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitemmapsPlayeditemResponse',
                                                                          fields: {
                                                                            tournamentMatchId: {
                                                                              type:
                                                                                graphql.GraphQLInt
                                                                            },
                                                                            mapNumber: {
                                                                              type:
                                                                                graphql.GraphQLInt
                                                                            },
                                                                            gameTitleModeMapId: {
                                                                              type:
                                                                                graphql.GraphQLInt
                                                                            },
                                                                            mapStartDateTime: {
                                                                              type:
                                                                                graphql.GraphQLString
                                                                            },
                                                                            mapEndDateTime: {
                                                                              type:
                                                                                graphql.GraphQLString
                                                                            },
                                                                            entityParticipantAScore: {
                                                                              type:
                                                                                graphql.GraphQLFloat
                                                                            },
                                                                            entityParticipantBScore: {
                                                                              type:
                                                                                graphql.GraphQLFloat
                                                                            }
                                                                          }
                                                                        }
                                                                      )
                                                                    }
                                                                  }
                                                                }
                                                              )
                                                            )
                                                          },
                                                          dispute: {
                                                            type: new graphql.GraphQLObjectType(
                                                              {
                                                                name:
                                                                  'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitemdisputeResponse',
                                                                fields: {
                                                                  tournamentMatchDisputeId: {
                                                                    type:
                                                                      graphql.GraphQLInt
                                                                  },
                                                                  tournamentMatchId: {
                                                                    type:
                                                                      graphql.GraphQLInt
                                                                  },
                                                                  disputeState: {
                                                                    type:
                                                                      graphql.GraphQLInt
                                                                  },
                                                                  initiatedByPlayerId: {
                                                                    type:
                                                                      graphql.GraphQLInt
                                                                  },
                                                                  initiatedByPlayerProfile: {
                                                                    type: new graphql.GraphQLObjectType(
                                                                      {
                                                                        name:
                                                                          'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitemdisputeinitiatedByPlayerProfileResponse',
                                                                        fields: {
                                                                          nickname: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          lanModeEnabled: {
                                                                            type:
                                                                              graphql.GraphQLBoolean
                                                                          },
                                                                          lanSeatLocation: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          entityName: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          entityIsTeam: {
                                                                            type:
                                                                              graphql.GraphQLBoolean
                                                                          },
                                                                          displayName: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          entityImageUrl: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          entityImageUrlIsExternal: {
                                                                            type:
                                                                              graphql.GraphQLBoolean
                                                                          },
                                                                          entityBackgroundImageUrl: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          entityBackgroundImageUrlIsExternal: {
                                                                            type:
                                                                              graphql.GraphQLBoolean
                                                                          }
                                                                        }
                                                                      }
                                                                    )
                                                                  },
                                                                  initiatorOnTeamA: {
                                                                    type:
                                                                      graphql.GraphQLBoolean
                                                                  },
                                                                  teamAScore: {
                                                                    type:
                                                                      graphql.GraphQLFloat
                                                                  },
                                                                  teamBScore: {
                                                                    type:
                                                                      graphql.GraphQLFloat
                                                                  },
                                                                  imageUrl: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  disputeDateTime: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  entityAdministratorId: {
                                                                    type:
                                                                      graphql.GraphQLInt
                                                                  },
                                                                  resolutionDateTime: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  resolutionTeamAScore: {
                                                                    type:
                                                                      graphql.GraphQLFloat
                                                                  },
                                                                  resolutionTeamBScore: {
                                                                    type:
                                                                      graphql.GraphQLFloat
                                                                  }
                                                                }
                                                              }
                                                            )
                                                          },
                                                          myMatch: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          newServerRequested: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          newServerRequestedEntityId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          newServerRequestedByTeamA: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          newServerRequestedCount: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          needsAssistance: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          allowedSpectators: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          streamingServiceId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          manualMode: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          manualServerConnectionInfo: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          streamingService: {
                                                            type: new graphql.GraphQLObjectType(
                                                              {
                                                                name:
                                                                  'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitemstreamingServiceResponse',
                                                                fields: {
                                                                  streamingServiceId: {
                                                                    type:
                                                                      graphql.GraphQLInt
                                                                  },
                                                                  streamingService: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  sourceName: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  }
                                                                }
                                                              }
                                                            )
                                                          },
                                                          assistanceRequests: {
                                                            type: new graphql.GraphQLList(
                                                              new graphql.GraphQLObjectType(
                                                                {
                                                                  name:
                                                                    'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitemassistanceRequestsResponse',
                                                                  fields: {
                                                                    capacity: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    count: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    item: {
                                                                      type: new graphql.GraphQLObjectType(
                                                                        {
                                                                          name:
                                                                            'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitemassistanceRequestsitemResponse',
                                                                          fields: {
                                                                            tournamentMatchAssistanceId: {
                                                                              type:
                                                                                graphql.GraphQLInt
                                                                            },
                                                                            tournamentMatchId: {
                                                                              type:
                                                                                graphql.GraphQLInt
                                                                            },
                                                                            assistanceRequestedById: {
                                                                              type:
                                                                                graphql.GraphQLInt
                                                                            },
                                                                            assistanceRequestedDateTime: {
                                                                              type:
                                                                                graphql.GraphQLString
                                                                            },
                                                                            resolvedById: {
                                                                              type:
                                                                                graphql.GraphQLInt
                                                                            },
                                                                            resolutionDateTime: {
                                                                              type:
                                                                                graphql.GraphQLString
                                                                            },
                                                                            resolutionComments: {
                                                                              type:
                                                                                graphql.GraphQLString
                                                                            }
                                                                          }
                                                                        }
                                                                      )
                                                                    }
                                                                  }
                                                                }
                                                              )
                                                            )
                                                          },
                                                          lastUpdatedDateTime: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          serverConfigurationFileName: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          matchAdministratorId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          actionLog: {
                                                            type: new graphql.GraphQLList(
                                                              new graphql.GraphQLObjectType(
                                                                {
                                                                  name:
                                                                    'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitemactionLogResponse',
                                                                  fields: {
                                                                    capacity: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    count: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    item: {
                                                                      type: new graphql.GraphQLObjectType(
                                                                        {
                                                                          name:
                                                                            'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitemactionLogitemResponse',
                                                                          fields: {
                                                                            tournamentMatchActionLogId: {
                                                                              type:
                                                                                graphql.GraphQLInt
                                                                            },
                                                                            entityId: {
                                                                              type:
                                                                                graphql.GraphQLInt
                                                                            },
                                                                            tournamentMatchId: {
                                                                              type:
                                                                                graphql.GraphQLInt
                                                                            },
                                                                            actionLogTypeId: {
                                                                              type:
                                                                                graphql.GraphQLInt
                                                                            },
                                                                            actionLogType: {
                                                                              type:
                                                                                graphql.GraphQLString
                                                                            },
                                                                            administratorComment: {
                                                                              type:
                                                                                graphql.GraphQLString
                                                                            },
                                                                            actionLogDateTime: {
                                                                              type:
                                                                                graphql.GraphQLString
                                                                            }
                                                                          }
                                                                        }
                                                                      )
                                                                    }
                                                                  }
                                                                }
                                                              )
                                                            )
                                                          },
                                                          playback: {
                                                            type: new graphql.GraphQLList(
                                                              new graphql.GraphQLObjectType(
                                                                {
                                                                  name:
                                                                    'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitemplaybackResponse',
                                                                  fields: {
                                                                    capacity: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    count: {
                                                                      type:
                                                                        graphql.GraphQLInt
                                                                    },
                                                                    item: {
                                                                      type: new graphql.GraphQLObjectType(
                                                                        {
                                                                          name:
                                                                            'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitemplaybackitemResponse',
                                                                          fields: {
                                                                            tournamentMatchPlaybackId: {
                                                                              type:
                                                                                graphql.GraphQLInt
                                                                            },
                                                                            tournamentMatchId: {
                                                                              type:
                                                                                graphql.GraphQLInt
                                                                            },
                                                                            tournamentMatchPlayback: {
                                                                              type:
                                                                                graphql.GraphQLString
                                                                            },
                                                                            tournamentMatchPlaybackDateTime: {
                                                                              type:
                                                                                graphql.GraphQLString
                                                                            }
                                                                          }
                                                                        }
                                                                      )
                                                                    }
                                                                  }
                                                                }
                                                              )
                                                            )
                                                          },
                                                          qualifierGroupNumber: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          isQualifier: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          hasTieBreaker: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          tieBreakerCount: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          scoringImage: {
                                                            type: new graphql.GraphQLObjectType(
                                                              {
                                                                name:
                                                                  'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemmatchesitemscoringImageResponse',
                                                                fields: {
                                                                  urlPath: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  },
                                                                  relativePath: {
                                                                    type:
                                                                      graphql.GraphQLString
                                                                  }
                                                                }
                                                              }
                                                            )
                                                          }
                                                        }
                                                      }
                                                    )
                                                  }
                                                }
                                              })
                                            )
                                          },
                                          statistics: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemstatisticsResponse',
                                                fields: {
                                                  matchPlayStatisticsId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  entityId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  matchesPlayedCount: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  wonCount: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  lostCount: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  tieCount: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  forfeitedWonCount: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  forfeitedLostCount: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  noShowCount: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  totalWinnings: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  totalScore: {
                                                    type: graphql.GraphQLFloat
                                                  },
                                                  totalTimePlayedInSeconds: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  winStreak: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  lossStreak: {
                                                    type: graphql.GraphQLInt
                                                  }
                                                }
                                              }
                                            )
                                          },
                                          gamePlatformId: {
                                            type: graphql.GraphQLInt
                                          },
                                          gamePlatformCode: {
                                            type: graphql.GraphQLString
                                          },
                                          gamePlatform: {
                                            type: graphql.GraphQLString
                                          },
                                          imageSmall: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerByentityNameresponsegamesitemplatformsitemimageSmallResponse',
                                                fields: {
                                                  urlPath: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  relativePath: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          },
                                          isActive: {
                                            type: graphql.GraphQLBoolean
                                          }
                                        }
                                      })
                                    }
                                  }
                                })
                              )
                            },
                            gameTitleId: { type: graphql.GraphQLInt },
                            gameName: { type: graphql.GraphQLString },
                            gameShortCode: { type: graphql.GraphQLString },
                            gameDescription: { type: graphql.GraphQLString },
                            gameWebsite: { type: graphql.GraphQLString },
                            imageLarge: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerByentityNameresponsegamesitemimageLargeResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerByentityNameresponsegamesitemimageSmallResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerByentityNameresponsegamesitemimageBackgroundResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            maximumPlayersAllowed: { type: graphql.GraphQLInt },
                            minimumMinutesBetweenTournamentRounds: {
                              type: graphql.GraphQLInt
                            },
                            franchise: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerByentityNameresponsegamesitemfranchiseResponse',
                                fields: {
                                  gameFranchiseId: { type: graphql.GraphQLInt },
                                  gameFranchise: {
                                    type: graphql.GraphQLString
                                  },
                                  imageLarge: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerByentityNameresponsegamesitemfranchiseimageLargeResponse',
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
                                  imageSmall: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerByentityNameresponsegamesitemfranchiseimageSmallResponse',
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
                                  imageBackground: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerByentityNameresponsegamesitemfranchiseimageBackgroundResponse',
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
                            },
                            developer: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerByentityNameresponsegamesitemdeveloperResponse',
                                fields: {
                                  gameDeveloperId: { type: graphql.GraphQLInt },
                                  gameDeveloper: {
                                    type: graphql.GraphQLString
                                  },
                                  website: { type: graphql.GraphQLString },
                                  isActive: { type: graphql.GraphQLBoolean }
                                }
                              })
                            },
                            hasTeamSides: { type: graphql.GraphQLBoolean },
                            isHearthstone: { type: graphql.GraphQLBoolean },
                            hearthstoneManageDecks: {
                              type: graphql.GraphQLBoolean
                            },
                            isActive: { type: graphql.GraphQLBoolean }
                          }
                        })
                      }
                    }
                  })
                )
              },
              statistics: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPlayerapiPlayerByentityNameresponsestatisticsResponse',
                  fields: {
                    matchPlayStatisticsId: { type: graphql.GraphQLInt },
                    entityId: { type: graphql.GraphQLInt },
                    matchesPlayedCount: { type: graphql.GraphQLInt },
                    wonCount: { type: graphql.GraphQLInt },
                    lostCount: { type: graphql.GraphQLInt },
                    tieCount: { type: graphql.GraphQLInt },
                    forfeitedWonCount: { type: graphql.GraphQLInt },
                    forfeitedLostCount: { type: graphql.GraphQLInt },
                    noShowCount: { type: graphql.GraphQLInt },
                    totalWinnings: { type: graphql.GraphQLInt },
                    totalScore: { type: graphql.GraphQLFloat },
                    totalTimePlayedInSeconds: { type: graphql.GraphQLInt },
                    winStreak: { type: graphql.GraphQLInt },
                    lossStreak: { type: graphql.GraphQLInt }
                  }
                })
              },
              teamStatistics: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPlayerapiPlayerByentityNameresponseteamStatisticsResponse',
                  fields: {
                    matchPlayStatisticsId: { type: graphql.GraphQLInt },
                    entityId: { type: graphql.GraphQLInt },
                    matchesPlayedCount: { type: graphql.GraphQLInt },
                    wonCount: { type: graphql.GraphQLInt },
                    lostCount: { type: graphql.GraphQLInt },
                    tieCount: { type: graphql.GraphQLInt },
                    forfeitedWonCount: { type: graphql.GraphQLInt },
                    forfeitedLostCount: { type: graphql.GraphQLInt },
                    noShowCount: { type: graphql.GraphQLInt },
                    totalWinnings: { type: graphql.GraphQLInt },
                    totalScore: { type: graphql.GraphQLFloat },
                    totalTimePlayedInSeconds: { type: graphql.GraphQLInt },
                    winStreak: { type: graphql.GraphQLInt },
                    lossStreak: { type: graphql.GraphQLInt }
                  }
                })
              },
              teams: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerapiPlayerByentityNameresponseteamsResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerByentityNameresponseteamsitemResponse',
                          fields: {
                            statistics: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerByentityNameresponseteamsitemstatisticsResponse',
                                fields: {
                                  matchPlayStatisticsId: {
                                    type: graphql.GraphQLInt
                                  },
                                  entityId: { type: graphql.GraphQLInt },
                                  matchesPlayedCount: {
                                    type: graphql.GraphQLInt
                                  },
                                  wonCount: { type: graphql.GraphQLInt },
                                  lostCount: { type: graphql.GraphQLInt },
                                  tieCount: { type: graphql.GraphQLInt },
                                  forfeitedWonCount: {
                                    type: graphql.GraphQLInt
                                  },
                                  forfeitedLostCount: {
                                    type: graphql.GraphQLInt
                                  },
                                  noShowCount: { type: graphql.GraphQLInt },
                                  totalWinnings: { type: graphql.GraphQLInt },
                                  totalScore: { type: graphql.GraphQLFloat },
                                  totalTimePlayedInSeconds: {
                                    type: graphql.GraphQLInt
                                  },
                                  winStreak: { type: graphql.GraphQLInt },
                                  lossStreak: { type: graphql.GraphQLInt }
                                }
                              })
                            },
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
                            entityBackgroundImageUrl: {
                              type: graphql.GraphQLString
                            },
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
              schedule: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerapiPlayerByentityNameresponsescheduleResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerByentityNameresponsescheduleitemResponse',
                          fields: {
                            tournament: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentResponse',
                                fields: {
                                  estimatedPrizePool: {
                                    type: graphql.GraphQLInt
                                  },
                                  tournamentStateId: {
                                    type: graphql.GraphQLInt
                                  },
                                  isTournamentSpecificAdministrator: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  isPublished: { type: graphql.GraphQLBoolean },
                                  gameName: { type: graphql.GraphQLString },
                                  isTournamentAdministrator: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  entityOwnerId: { type: graphql.GraphQLInt },
                                  gameTitleRulesId: {
                                    type: graphql.GraphQLInt
                                  },
                                  isApproved: { type: graphql.GraphQLBoolean },
                                  isRealCurrency: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  entityApprovedById: {
                                    type: graphql.GraphQLInt
                                  },
                                  resultIsFinalized: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  entityResultFinalizedById: {
                                    type: graphql.GraphQLInt
                                  },
                                  tournamentPassword: {
                                    type: graphql.GraphQLString
                                  },
                                  prizePoolAmount: { type: graphql.GraphQLInt },
                                  tournamentPrizeFundingTypeId: {
                                    type: graphql.GraphQLInt
                                  },
                                  tournamentPrizeFundingTypeName: {
                                    type: graphql.GraphQLString
                                  },
                                  doesCycle: { type: graphql.GraphQLBoolean },
                                  cycleLengthInMinutes: {
                                    type: graphql.GraphQLInt
                                  },
                                  cycleMinutesBeforeStart: {
                                    type: graphql.GraphQLInt
                                  },
                                  maxCycleCount: { type: graphql.GraphQLInt },
                                  cycleCount: { type: graphql.GraphQLInt },
                                  hasCycled: { type: graphql.GraphQLBoolean },
                                  cycledTournamentId: {
                                    type: graphql.GraphQLInt
                                  },
                                  canOnlyRegisterFromRegionId: {
                                    type: graphql.GraphQLInt
                                  },
                                  canOnlyRegisterFromRegionName: {
                                    type: graphql.GraphQLString
                                  },
                                  gamingServerRegionName: {
                                    type: graphql.GraphQLString
                                  },
                                  openPlayMinimumTimeToQualify: {
                                    type: graphql.GraphQLInt
                                  },
                                  roundRobinIsComplete: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  tournamentSeedingTypeId: {
                                    type: graphql.GraphQLInt
                                  },
                                  tournamentPairingTypeId: {
                                    type: graphql.GraphQLInt
                                  },
                                  automaticGoLiveOnSchedule: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  minutesAfterStartToForfeit: {
                                    type: graphql.GraphQLInt
                                  },
                                  minutesBeforeStartToAllowCheckin: {
                                    type: graphql.GraphQLInt
                                  },
                                  sponsors: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentsponsorsResponse',
                                      fields: {
                                        titleSponsor: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentsponsorstitleSponsorResponse',
                                            fields: {
                                              sponsorName: {
                                                type: graphql.GraphQLString
                                              },
                                              sponsorImageUrl: {
                                                type: graphql.GraphQLString
                                              },
                                              sponsorImageRelativeUrl: {
                                                type: graphql.GraphQLString
                                              },
                                              sponsorLink: {
                                                type: graphql.GraphQLString
                                              }
                                            }
                                          })
                                        },
                                        mainSponsors: {
                                          type: new graphql.GraphQLList(
                                            new graphql.GraphQLObjectType({
                                              name:
                                                'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentsponsorsmainSponsorsResponse',
                                              fields: {
                                                capacity: {
                                                  type: graphql.GraphQLInt
                                                },
                                                count: {
                                                  type: graphql.GraphQLInt
                                                },
                                                item: {
                                                  type: new graphql.GraphQLObjectType(
                                                    {
                                                      name:
                                                        'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentsponsorsmainSponsorsitemResponse',
                                                      fields: {
                                                        sponsorName: {
                                                          type:
                                                            graphql.GraphQLString
                                                        },
                                                        sponsorImageUrl: {
                                                          type:
                                                            graphql.GraphQLString
                                                        },
                                                        sponsorImageRelativeUrl: {
                                                          type:
                                                            graphql.GraphQLString
                                                        },
                                                        sponsorLink: {
                                                          type:
                                                            graphql.GraphQLString
                                                        }
                                                      }
                                                    }
                                                  )
                                                }
                                              }
                                            })
                                          )
                                        },
                                        partners: {
                                          type: new graphql.GraphQLList(
                                            new graphql.GraphQLObjectType({
                                              name:
                                                'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentsponsorspartnersResponse',
                                              fields: {
                                                capacity: {
                                                  type: graphql.GraphQLInt
                                                },
                                                count: {
                                                  type: graphql.GraphQLInt
                                                },
                                                item: {
                                                  type: new graphql.GraphQLObjectType(
                                                    {
                                                      name:
                                                        'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentsponsorspartnersitemResponse',
                                                      fields: {
                                                        sponsorName: {
                                                          type:
                                                            graphql.GraphQLString
                                                        },
                                                        sponsorImageUrl: {
                                                          type:
                                                            graphql.GraphQLString
                                                        },
                                                        sponsorImageRelativeUrl: {
                                                          type:
                                                            graphql.GraphQLString
                                                        },
                                                        sponsorLink: {
                                                          type:
                                                            graphql.GraphQLString
                                                        }
                                                      }
                                                    }
                                                  )
                                                }
                                              }
                                            })
                                          )
                                        }
                                      }
                                    })
                                  },
                                  announcements: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentannouncementsResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentannouncementsitemResponse',
                                                fields: {
                                                  tournamentAnnouncementId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  tournamentId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  tournamentAnnouncement: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  createdDateTime: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  createdById: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  entityName: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  displayName: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  },
                                  createdDateTime: {
                                    type: graphql.GraphQLString
                                  },
                                  gamePlatformFranchiseTitleStateId: {
                                    type: graphql.GraphQLInt
                                  },
                                  allMatchesRunManualMode: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  thirdPartyTournamentId: {
                                    type: graphql.GraphQLString
                                  },
                                  thirdPartyApiRegion: {
                                    type: graphql.GraphQLString
                                  },
                                  thirdPartyTournamentConfiguration: {
                                    type: graphql.GraphQLString
                                  },
                                  serverConfigurationFileName: {
                                    type: graphql.GraphQLString
                                  },
                                  allowPreCheckin: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  preCheckinMinutesBeforeStart: {
                                    type: graphql.GraphQLInt
                                  },
                                  standByParticipantCount: {
                                    type: graphql.GraphQLInt
                                  },
                                  isPreCheckinAvailable: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  qualifier: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentqualifierResponse',
                                      fields: {
                                        tournamentId: {
                                          type: graphql.GraphQLInt
                                        },
                                        numberOfGroups: {
                                          type: graphql.GraphQLInt
                                        },
                                        qualifierWinPoints: {
                                          type: graphql.GraphQLInt
                                        },
                                        qualifierLossPoints: {
                                          type: graphql.GraphQLInt
                                        },
                                        qualifierTiePoints: {
                                          type: graphql.GraphQLInt
                                        },
                                        qualifierScoreMultiplierPoints: {
                                          type: graphql.GraphQLInt
                                        },
                                        qualifierSortTypeId: {
                                          type: graphql.GraphQLInt
                                        },
                                        league: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentqualifierleagueResponse',
                                            fields: {
                                              endDateTime: {
                                                type: graphql.GraphQLString
                                              },
                                              gameTileModeMapId: {
                                                type: graphql.GraphQLInt
                                              },
                                              minimumNumberOfMatches: {
                                                type: graphql.GraphQLInt
                                              },
                                              numberOfPlays: {
                                                type: graphql.GraphQLInt
                                              },
                                              allowRegistrationAfterTournamentStart: {
                                                type: graphql.GraphQLBoolean
                                              },
                                              groupPlacementOnJoin: {
                                                type: graphql.GraphQLBoolean
                                              },
                                              maximumConcurrentMatches: {
                                                type: graphql.GraphQLInt
                                              },
                                              bufferInMinutesBetweenMatches: {
                                                type: graphql.GraphQLInt
                                              }
                                            }
                                          })
                                        },
                                        groups: {
                                          type: new graphql.GraphQLList(
                                            new graphql.GraphQLObjectType({
                                              name:
                                                'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentqualifiergroupsResponse',
                                              fields: {
                                                capacity: {
                                                  type: graphql.GraphQLInt
                                                },
                                                count: {
                                                  type: graphql.GraphQLInt
                                                },
                                                item: {
                                                  type: new graphql.GraphQLObjectType(
                                                    {
                                                      name:
                                                        'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentqualifiergroupsitemResponse',
                                                      fields: {
                                                        tournamentId: {
                                                          type:
                                                            graphql.GraphQLInt
                                                        },
                                                        groupNumber: {
                                                          type:
                                                            graphql.GraphQLInt
                                                        },
                                                        groupName: {
                                                          type:
                                                            graphql.GraphQLString
                                                        },
                                                        isGuaranteedPlayoffs: {
                                                          type:
                                                            graphql.GraphQLBoolean
                                                        },
                                                        numberOfPlayersToAdvance: {
                                                          type:
                                                            graphql.GraphQLInt
                                                        },
                                                        playRegularSeasonMatches: {
                                                          type:
                                                            graphql.GraphQLBoolean
                                                        }
                                                      }
                                                    }
                                                  )
                                                }
                                              }
                                            })
                                          )
                                        },
                                        tieBreakers: {
                                          type: new graphql.GraphQLList(
                                            new graphql.GraphQLObjectType({
                                              name:
                                                'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentqualifiertieBreakersResponse',
                                              fields: {
                                                capacity: {
                                                  type: graphql.GraphQLInt
                                                },
                                                count: {
                                                  type: graphql.GraphQLInt
                                                },
                                                item: {
                                                  type: new graphql.GraphQLObjectType(
                                                    {
                                                      name:
                                                        'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentqualifiertieBreakersitemResponse',
                                                      fields: {
                                                        tieBreakerLevelId: {
                                                          type:
                                                            graphql.GraphQLInt
                                                        },
                                                        tieBreakerTypeId: {
                                                          type:
                                                            graphql.GraphQLInt
                                                        },
                                                        tieBreakerName: {
                                                          type:
                                                            graphql.GraphQLString
                                                        },
                                                        tieBreakerDescription: {
                                                          type:
                                                            graphql.GraphQLString
                                                        }
                                                      }
                                                    }
                                                  )
                                                }
                                              }
                                            })
                                          )
                                        }
                                      }
                                    })
                                  },
                                  tournamentManagementPolicyId: {
                                    type: graphql.GraphQLInt
                                  },
                                  predefinedStreamedMatches: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentpredefinedStreamedMatchesResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentpredefinedStreamedMatchesitemResponse',
                                                fields: {
                                                  roundRuleLevelId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  roundNumber: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  matchNumber: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  streamingServiceId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  broadcastUrl: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  },
                                  lanModeEnabled: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  enableLanTagging: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  lanTag: { type: graphql.GraphQLString },
                                  allowedCountryIds: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentallowedCountryIdsResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: { type: graphql.GraphQLInt }
                                        }
                                      })
                                    )
                                  },
                                  allowedCountryList: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentallowedCountryListResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentallowedCountryListitemResponse',
                                                fields: {
                                                  addressCountryId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  addressCountryCode: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  addressCountry3LetterCode: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  addressCountry: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  allowsRealMoney: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  flagSmallImageUrl: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  flagLargeImageUrl: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  showInList: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  orderBy: {
                                                    type: graphql.GraphQLInt
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  },
                                  pauseIfQualifierEndsInTie: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  isPausedForTiedQualifierFinish: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  isPausedForTiedQualifierFinishDateTime: {
                                    type: graphql.GraphQLString
                                  },
                                  qualifierTiedFinishIsResolved: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  qualifierTiedFinishIsResolvedDateTime: {
                                    type: graphql.GraphQLString
                                  },
                                  qualifierTiedFinishIsResolvedByAdministratorId: {
                                    type: graphql.GraphQLInt
                                  },
                                  qualifierTiedFinishIsResolvedByAdministratorProfile: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentqualifierTiedFinishIsResolvedByAdministratorProfileResponse',
                                      fields: {
                                        nickname: {
                                          type: graphql.GraphQLString
                                        },
                                        lanModeEnabled: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        lanSeatLocation: {
                                          type: graphql.GraphQLString
                                        },
                                        entityName: {
                                          type: graphql.GraphQLString
                                        },
                                        entityIsTeam: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        displayName: {
                                          type: graphql.GraphQLString
                                        },
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
                                  restrictPowerRankingStartDivisionId: {
                                    type: graphql.GraphQLInt
                                  },
                                  restrictPowerRankingEndDivisionId: {
                                    type: graphql.GraphQLInt
                                  },
                                  payouts: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentpayoutsResponse',
                                      fields: {
                                        hasPayouts: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        isFixedPayouts: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        payoutCount: {
                                          type: graphql.GraphQLInt
                                        },
                                        fixedPayoutAmount: {
                                          type: graphql.GraphQLInt
                                        },
                                        places: {
                                          type: new graphql.GraphQLList(
                                            new graphql.GraphQLObjectType({
                                              name:
                                                'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentpayoutsplacesResponse',
                                              fields: {
                                                capacity: {
                                                  type: graphql.GraphQLInt
                                                },
                                                count: {
                                                  type: graphql.GraphQLInt
                                                },
                                                item: {
                                                  type: new graphql.GraphQLObjectType(
                                                    {
                                                      name:
                                                        'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentpayoutsplacesitemResponse',
                                                      fields: {
                                                        isAwarded: {
                                                          type:
                                                            graphql.GraphQLBoolean
                                                        },
                                                        awardedDateTime: {
                                                          type:
                                                            graphql.GraphQLString
                                                        },
                                                        awardedAmount: {
                                                          type:
                                                            graphql.GraphQLInt
                                                        },
                                                        numberOfWinnersAwarded: {
                                                          type:
                                                            graphql.GraphQLInt
                                                        },
                                                        winners: {
                                                          type: new graphql.GraphQLList(
                                                            new graphql.GraphQLObjectType(
                                                              {
                                                                name:
                                                                  'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentpayoutsplacesitemwinnersResponse',
                                                                fields: {
                                                                  capacity: {
                                                                    type:
                                                                      graphql.GraphQLInt
                                                                  },
                                                                  count: {
                                                                    type:
                                                                      graphql.GraphQLInt
                                                                  },
                                                                  item: {
                                                                    type: new graphql.GraphQLObjectType(
                                                                      {
                                                                        name:
                                                                          'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentpayoutsplacesitemwinnersitemResponse',
                                                                        fields: {
                                                                          entityId: {
                                                                            type:
                                                                              graphql.GraphQLInt
                                                                          },
                                                                          entityName: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          entityIsTeam: {
                                                                            type:
                                                                              graphql.GraphQLBoolean
                                                                          },
                                                                          displayName: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          },
                                                                          entityImageUrl: {
                                                                            type:
                                                                              graphql.GraphQLString
                                                                          }
                                                                        }
                                                                      }
                                                                    )
                                                                  }
                                                                }
                                                              }
                                                            )
                                                          )
                                                        },
                                                        placeNumber: {
                                                          type:
                                                            graphql.GraphQLInt
                                                        },
                                                        payoutAmount: {
                                                          type:
                                                            graphql.GraphQLInt
                                                        },
                                                        payoutPercent: {
                                                          type:
                                                            graphql.GraphQLInt
                                                        },
                                                        otherPayout: {
                                                          type:
                                                            graphql.GraphQLString
                                                        },
                                                        xperiencePoints: {
                                                          type:
                                                            graphql.GraphQLInt
                                                        }
                                                      }
                                                    }
                                                  )
                                                }
                                              }
                                            })
                                          )
                                        }
                                      }
                                    })
                                  },
                                  challengeMinEntryFee: {
                                    type: graphql.GraphQLInt
                                  },
                                  challengeMaxEntryFee: {
                                    type: graphql.GraphQLInt
                                  },
                                  challengeOffers: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentchallengeOffersResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentchallengeOffersitemResponse',
                                                fields: {
                                                  challengeOfferId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  entryFee: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  serviceFee: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  totalFee: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  tournamentId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  tournamentDescription: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  tournamentTitle: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  creatorEntityId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  challengerEntityId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  offerDateTime: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  creatorStateId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  creatorStateDateTime: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  challengerStateId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  challengerStateDateTime: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  hasPendingRegistration: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  tournamentMatchId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  challengeComplete: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  challengeCompleteDateTime: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  challengerNeedsRegistration: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  creatorNeedsRegistration: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  challengeCancelled: {
                                                    type: graphql.GraphQLBoolean
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  },
                                  keepAlive: { type: graphql.GraphQLString },
                                  matchCountdownMinutes: {
                                    type: graphql.GraphQLInt
                                  },
                                  locationIds: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentlocationIdsResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: { type: graphql.GraphQLInt }
                                        }
                                      })
                                    )
                                  },
                                  locations: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentlocationsResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentlocationsitemResponse',
                                                fields: {
                                                  locationId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  stateProvence: {
                                                    type: new graphql.GraphQLObjectType(
                                                      {
                                                        name:
                                                          'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentlocationsitemstateProvenceResponse',
                                                        fields: {
                                                          addressStateProvenceId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          addressCountryId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          addressStateProvenceCode: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          addressStateProvence: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          allowsRealMoney: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          }
                                                        }
                                                      }
                                                    )
                                                  },
                                                  country: {
                                                    type: new graphql.GraphQLObjectType(
                                                      {
                                                        name:
                                                          'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentlocationsitemcountryResponse',
                                                        fields: {
                                                          addressCountryId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          addressCountryCode: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          addressCountry3LetterCode: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          addressCountry: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          allowsRealMoney: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          flagSmallImageUrl: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          flagLargeImageUrl: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          showInList: {
                                                            type:
                                                              graphql.GraphQLBoolean
                                                          },
                                                          orderBy: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          }
                                                        }
                                                      }
                                                    )
                                                  },
                                                  region: {
                                                    type: new graphql.GraphQLObjectType(
                                                      {
                                                        name:
                                                          'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentlocationsitemregionResponse',
                                                        fields: {
                                                          gamingServerRegionId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          gamingServerRegionName: {
                                                            type:
                                                              graphql.GraphQLString
                                                          }
                                                        }
                                                      }
                                                    )
                                                  },
                                                  isActive: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  location: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  streetAddress: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  city: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  addressStateProvenceId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  addressCountryId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  postalCode: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  gamingServerRegionId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  phoneNumber: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  emailAddress: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  hours: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  description: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  },
                                  trophyGroup: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamenttrophyGroupResponse',
                                      fields: {
                                        trophyGroupId: {
                                          type: graphql.GraphQLInt
                                        },
                                        trophyGroup: {
                                          type: graphql.GraphQLString
                                        },
                                        isActive: {
                                          type: graphql.GraphQLBoolean
                                        }
                                      }
                                    })
                                  },
                                  trophyGroupId: { type: graphql.GraphQLInt },
                                  xperiencePointsForJoining: {
                                    type: graphql.GraphQLInt
                                  },
                                  xperiencePointsPerRound: {
                                    type: graphql.GraphQLInt
                                  },
                                  bracketsBuilt: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  totalEntryFeesAmount: {
                                    type: graphql.GraphQLInt
                                  },
                                  totalPayoutAmount: {
                                    type: graphql.GraphQLInt
                                  },
                                  totalRakeAmount: { type: graphql.GraphQLInt },
                                  directChallengeOppontentEntityId: {
                                    type: graphql.GraphQLInt
                                  },
                                  useCommunitySteamAccounts: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  isChallenge: { type: graphql.GraphQLBoolean },
                                  tournamentIsComplete: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  tournamentIsLive: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  tournamentLiveDateTime: {
                                    type: graphql.GraphQLString
                                  },
                                  tournamentId: { type: graphql.GraphQLInt },
                                  gameTitleModeId: { type: graphql.GraphQLInt },
                                  tournamentTitle: {
                                    type: graphql.GraphQLString
                                  },
                                  tournamentDescription: {
                                    type: graphql.GraphQLString
                                  },
                                  tournamentSeriesId: {
                                    type: graphql.GraphQLInt
                                  },
                                  gamePlatformFranchiseTitleId: {
                                    type: graphql.GraphQLInt
                                  },
                                  isTeamTournament: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  minimumNumberOfEntities: {
                                    type: graphql.GraphQLInt
                                  },
                                  maximumNumberOfEntities: {
                                    type: graphql.GraphQLInt
                                  },
                                  teamSize: { type: graphql.GraphQLInt },
                                  tournamentTypeId: {
                                    type: graphql.GraphQLInt
                                  },
                                  originalTournamentTypeId: {
                                    type: graphql.GraphQLInt
                                  },
                                  tournamentTypeName: {
                                    type: graphql.GraphQLString
                                  },
                                  tournamentStartDateTime: {
                                    type: graphql.GraphQLString
                                  },
                                  tournamentEndDateTime: {
                                    type: graphql.GraphQLString
                                  },
                                  registrationCutoffDateTime: {
                                    type: graphql.GraphQLString
                                  },
                                  isPublic: { type: graphql.GraphQLBoolean },
                                  isFavorite: { type: graphql.GraphQLBoolean },
                                  enableMatchLobby: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  imageLogo: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentimageLogoResponse',
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
                                  imageBackground: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentimageBackgroundResponse',
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
                                  joinPasswordRequired: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  hasConsolationRound: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  currentNumberOfParticipants: {
                                    type: graphql.GraphQLInt
                                  },
                                  powerRankingProfileId: {
                                    type: graphql.GraphQLInt
                                  },
                                  platformGame: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentplatformGameResponse',
                                      fields: {
                                        gamePlatformFranchiseTitleId: {
                                          type: graphql.GraphQLInt
                                        },
                                        platform: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentplatformGameplatformResponse',
                                            fields: {
                                              gamePlatformId: {
                                                type: graphql.GraphQLInt
                                              },
                                              gamePlatformCode: {
                                                type: graphql.GraphQLString
                                              },
                                              gamePlatform: {
                                                type: graphql.GraphQLString
                                              },
                                              imageSmall: {
                                                type: new graphql.GraphQLObjectType(
                                                  {
                                                    name:
                                                      'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentplatformGameplatformimageSmallResponse',
                                                    fields: {
                                                      urlPath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      relativePath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      }
                                                    }
                                                  }
                                                )
                                              },
                                              isActive: {
                                                type: graphql.GraphQLBoolean
                                              }
                                            }
                                          })
                                        },
                                        game: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentplatformGamegameResponse',
                                            fields: {
                                              gameTitleId: {
                                                type: graphql.GraphQLInt
                                              },
                                              gameName: {
                                                type: graphql.GraphQLString
                                              },
                                              gameShortCode: {
                                                type: graphql.GraphQLString
                                              },
                                              gameDescription: {
                                                type: graphql.GraphQLString
                                              },
                                              gameWebsite: {
                                                type: graphql.GraphQLString
                                              },
                                              imageLarge: {
                                                type: new graphql.GraphQLObjectType(
                                                  {
                                                    name:
                                                      'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentplatformGamegameimageLargeResponse',
                                                    fields: {
                                                      urlPath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      relativePath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      }
                                                    }
                                                  }
                                                )
                                              },
                                              imageSmall: {
                                                type: new graphql.GraphQLObjectType(
                                                  {
                                                    name:
                                                      'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentplatformGamegameimageSmallResponse',
                                                    fields: {
                                                      urlPath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      relativePath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      }
                                                    }
                                                  }
                                                )
                                              },
                                              imageBackground: {
                                                type: new graphql.GraphQLObjectType(
                                                  {
                                                    name:
                                                      'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentplatformGamegameimageBackgroundResponse',
                                                    fields: {
                                                      urlPath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      relativePath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      }
                                                    }
                                                  }
                                                )
                                              },
                                              maximumPlayersAllowed: {
                                                type: graphql.GraphQLInt
                                              },
                                              minimumMinutesBetweenTournamentRounds: {
                                                type: graphql.GraphQLInt
                                              },
                                              franchise: {
                                                type: new graphql.GraphQLObjectType(
                                                  {
                                                    name:
                                                      'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentplatformGamegamefranchiseResponse',
                                                    fields: {
                                                      gameFranchiseId: {
                                                        type: graphql.GraphQLInt
                                                      },
                                                      gameFranchise: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      imageLarge: {
                                                        type: new graphql.GraphQLObjectType(
                                                          {
                                                            name:
                                                              'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentplatformGamegamefranchiseimageLargeResponse',
                                                            fields: {
                                                              urlPath: {
                                                                type:
                                                                  graphql.GraphQLString
                                                              },
                                                              relativePath: {
                                                                type:
                                                                  graphql.GraphQLString
                                                              }
                                                            }
                                                          }
                                                        )
                                                      },
                                                      imageSmall: {
                                                        type: new graphql.GraphQLObjectType(
                                                          {
                                                            name:
                                                              'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentplatformGamegamefranchiseimageSmallResponse',
                                                            fields: {
                                                              urlPath: {
                                                                type:
                                                                  graphql.GraphQLString
                                                              },
                                                              relativePath: {
                                                                type:
                                                                  graphql.GraphQLString
                                                              }
                                                            }
                                                          }
                                                        )
                                                      },
                                                      imageBackground: {
                                                        type: new graphql.GraphQLObjectType(
                                                          {
                                                            name:
                                                              'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentplatformGamegamefranchiseimageBackgroundResponse',
                                                            fields: {
                                                              urlPath: {
                                                                type:
                                                                  graphql.GraphQLString
                                                              },
                                                              relativePath: {
                                                                type:
                                                                  graphql.GraphQLString
                                                              }
                                                            }
                                                          }
                                                        )
                                                      },
                                                      isActive: {
                                                        type:
                                                          graphql.GraphQLBoolean
                                                      }
                                                    }
                                                  }
                                                )
                                              },
                                              developer: {
                                                type: new graphql.GraphQLObjectType(
                                                  {
                                                    name:
                                                      'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentplatformGamegamedeveloperResponse',
                                                    fields: {
                                                      gameDeveloperId: {
                                                        type: graphql.GraphQLInt
                                                      },
                                                      gameDeveloper: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      website: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      isActive: {
                                                        type:
                                                          graphql.GraphQLBoolean
                                                      }
                                                    }
                                                  }
                                                )
                                              },
                                              hasTeamSides: {
                                                type: graphql.GraphQLBoolean
                                              },
                                              isHearthstone: {
                                                type: graphql.GraphQLBoolean
                                              },
                                              hearthstoneManageDecks: {
                                                type: graphql.GraphQLBoolean
                                              },
                                              isActive: {
                                                type: graphql.GraphQLBoolean
                                              }
                                            }
                                          })
                                        },
                                        gamePlatformFranchiseTitleStateId: {
                                          type: graphql.GraphQLInt
                                        },
                                        gameAddedDateTime: {
                                          type: graphql.GraphQLString
                                        },
                                        gameDownloadLink: {
                                          type: graphql.GraphQLString
                                        },
                                        chatPanelGuid: {
                                          type: graphql.GraphQLString
                                        },
                                        imageLarge: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentplatformGameimageLargeResponse',
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
                                        imageSmall: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentplatformGameimageSmallResponse',
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
                                        imageBackground: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentplatformGameimageBackgroundResponse',
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
                                        totalWinnings: {
                                          type: graphql.GraphQLInt
                                        },
                                        thirdPartyApplicationId: {
                                          type: graphql.GraphQLString
                                        },
                                        thirdPartyApiKey: {
                                          type: graphql.GraphQLString
                                        },
                                        gameReleaseVersion: {
                                          type: graphql.GraphQLString
                                        },
                                        gameRevisedDateTime: {
                                          type: graphql.GraphQLString
                                        },
                                        gameVersion: {
                                          type: graphql.GraphQLString
                                        },
                                        gameVersionNeedsVerification: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        issueGamesServerToMatch: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        tournamentCount: {
                                          type: graphql.GraphQLInt
                                        },
                                        validationMethodTypeId: {
                                          type: graphql.GraphQLInt
                                        },
                                        externalCallbackTemplateId: {
                                          type: graphql.GraphQLInt
                                        },
                                        internalCallbackTemplateId: {
                                          type: graphql.GraphQLInt
                                        },
                                        gameServerModVersion: {
                                          type: graphql.GraphQLFloat
                                        }
                                      }
                                    })
                                  },
                                  gameTitleMode: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerByentityNameresponsescheduleitemtournamentgameTitleModeResponse',
                                      fields: {
                                        gameTitleModeId: {
                                          type: graphql.GraphQLInt
                                        },
                                        gameTitleId: {
                                          type: graphql.GraphQLInt
                                        },
                                        gameTitleMode: {
                                          type: graphql.GraphQLString
                                        },
                                        isActive: {
                                          type: graphql.GraphQLBoolean
                                        }
                                      }
                                    })
                                  },
                                  lastUpdatedDateTime: {
                                    type: graphql.GraphQLString
                                  },
                                  entryFee: { type: graphql.GraphQLInt },
                                  serviceFee: { type: graphql.GraphQLInt },
                                  totalFee: { type: graphql.GraphQLInt }
                                }
                              })
                            },
                            tournamentTitle: { type: graphql.GraphQLString },
                            tournamentTypeName: { type: graphql.GraphQLString },
                            gameShortCode: { type: graphql.GraphQLString },
                            imageLogo: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerByentityNameresponsescheduleitemimageLogoResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            gameName: { type: graphql.GraphQLString },
                            teamSize: { type: graphql.GraphQLInt },
                            isInLobby: { type: graphql.GraphQLBoolean },
                            isReady: { type: graphql.GraphQLBoolean },
                            tournamentMatchStateId: {
                              type: graphql.GraphQLInt
                            },
                            tournamentMatchId: { type: graphql.GraphQLInt },
                            tournamentId: { type: graphql.GraphQLInt },
                            gamePlatformFranchiseTitleId: {
                              type: graphql.GraphQLInt
                            },
                            isTeamTournament: { type: graphql.GraphQLBoolean },
                            matchIsLive: { type: graphql.GraphQLBoolean },
                            matchLiveDateTime: { type: graphql.GraphQLString },
                            matchIsComplete: { type: graphql.GraphQLBoolean },
                            matchCompleteDateTime: {
                              type: graphql.GraphQLString
                            },
                            matchIsFinalized: { type: graphql.GraphQLBoolean },
                            matchFinalizedDateTime: {
                              type: graphql.GraphQLString
                            },
                            enableMatchLobby: { type: graphql.GraphQLBoolean },
                            allowCheckin: { type: graphql.GraphQLBoolean },
                            allowCheckinDateTime: {
                              type: graphql.GraphQLString
                            },
                            scheduledStartDateTime: {
                              type: graphql.GraphQLString
                            },
                            scheduledForfeitDateTime: {
                              type: graphql.GraphQLString
                            },
                            entityOwnerId: { type: graphql.GraphQLInt },
                            entityOwnerProfile: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerByentityNameresponsescheduleitementityOwnerProfileResponse',
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
                            entityParticipantA: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerByentityNameresponsescheduleitementityParticipantAResponse',
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
                                        'clientPlayerapiPlayerByentityNameresponsescheduleitementityParticipantAregionResponse',
                                      fields: {
                                        gamingServerRegionId: {
                                          type: graphql.GraphQLInt
                                        },
                                        gamingServerRegionName: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  },
                                  profile: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerByentityNameresponsescheduleitementityParticipantAprofileResponse',
                                      fields: {
                                        nickname: {
                                          type: graphql.GraphQLString
                                        },
                                        lanModeEnabled: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        lanSeatLocation: {
                                          type: graphql.GraphQLString
                                        },
                                        entityName: {
                                          type: graphql.GraphQLString
                                        },
                                        entityIsTeam: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        displayName: {
                                          type: graphql.GraphQLString
                                        },
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
                                  hearthstoneDecks: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerByentityNameresponsescheduleitementityParticipantAhearthstoneDecksResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerByentityNameresponsescheduleitementityParticipantAhearthstoneDecksitemResponse',
                                                fields: {
                                                  playerNumber: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  isStartingDeck: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  hearthstoneDeckExcluded: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  gameTitleModeHearthstoneDeckId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  gameTitleModeId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  hearthstoneDeck: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  hearthstoneDeckImage: {
                                                    type: new graphql.GraphQLObjectType(
                                                      {
                                                        name:
                                                          'clientPlayerapiPlayerByentityNameresponsescheduleitementityParticipantAhearthstoneDecksitemhearthstoneDeckImageResponse',
                                                        fields: {
                                                          urlPath: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          relativePath: {
                                                            type:
                                                              graphql.GraphQLString
                                                          }
                                                        }
                                                      }
                                                    )
                                                  },
                                                  isActive: {
                                                    type: graphql.GraphQLBoolean
                                                  }
                                                }
                                              }
                                            )
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
                                  'clientPlayerapiPlayerByentityNameresponsescheduleitementityParticipantBResponse',
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
                                        'clientPlayerapiPlayerByentityNameresponsescheduleitementityParticipantBregionResponse',
                                      fields: {
                                        gamingServerRegionId: {
                                          type: graphql.GraphQLInt
                                        },
                                        gamingServerRegionName: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  },
                                  profile: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerByentityNameresponsescheduleitementityParticipantBprofileResponse',
                                      fields: {
                                        nickname: {
                                          type: graphql.GraphQLString
                                        },
                                        lanModeEnabled: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        lanSeatLocation: {
                                          type: graphql.GraphQLString
                                        },
                                        entityName: {
                                          type: graphql.GraphQLString
                                        },
                                        entityIsTeam: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        displayName: {
                                          type: graphql.GraphQLString
                                        },
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
                                  hearthstoneDecks: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerByentityNameresponsescheduleitementityParticipantBhearthstoneDecksResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerByentityNameresponsescheduleitementityParticipantBhearthstoneDecksitemResponse',
                                                fields: {
                                                  playerNumber: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  isStartingDeck: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  hearthstoneDeckExcluded: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  gameTitleModeHearthstoneDeckId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  gameTitleModeId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  hearthstoneDeck: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  hearthstoneDeckImage: {
                                                    type: new graphql.GraphQLObjectType(
                                                      {
                                                        name:
                                                          'clientPlayerapiPlayerByentityNameresponsescheduleitementityParticipantBhearthstoneDecksitemhearthstoneDeckImageResponse',
                                                        fields: {
                                                          urlPath: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          relativePath: {
                                                            type:
                                                              graphql.GraphQLString
                                                          }
                                                        }
                                                      }
                                                    )
                                                  },
                                                  isActive: {
                                                    type: graphql.GraphQLBoolean
                                                  }
                                                }
                                              }
                                            )
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
                            currentGameTitleModeMapId: {
                              type: graphql.GraphQLInt
                            },
                            mapFileName: { type: graphql.GraphQLString },
                            mapDisplayName: { type: graphql.GraphQLString },
                            gamingServerRegionId: { type: graphql.GraphQLInt },
                            gamingServerRegionName: {
                              type: graphql.GraphQLString
                            },
                            isBracket: { type: graphql.GraphQLBoolean },
                            allowRescheduling: { type: graphql.GraphQLBoolean },
                            willBroadcast: { type: graphql.GraphQLBoolean },
                            broadcastUrl: { type: graphql.GraphQLString },
                            automaticGoLiveOnSchedule: {
                              type: graphql.GraphQLBoolean
                            },
                            minutesAfterStartToForfeit: {
                              type: graphql.GraphQLInt
                            },
                            minutesBeforeStartToAllowCheckin: {
                              type: graphql.GraphQLInt
                            },
                            serverSendPlayerSummaryStatistics: {
                              type: graphql.GraphQLBoolean
                            },
                            gamingServerId: { type: graphql.GraphQLInt },
                            entityPlayerControllerId: {
                              type: graphql.GraphQLInt
                            },
                            allTeamAPlayersReady: {
                              type: graphql.GraphQLBoolean
                            },
                            teamAIsReady: { type: graphql.GraphQLBoolean },
                            allTeamBPlayersReady: {
                              type: graphql.GraphQLBoolean
                            },
                            teamBIsReady: { type: graphql.GraphQLBoolean },
                            scoreManuallyReportedDateTime: {
                              type: graphql.GraphQLString
                            },
                            scoreManuallyReported: {
                              type: graphql.GraphQLBoolean
                            },
                            scoreManuallyReportedByPlayerId: {
                              type: graphql.GraphQLInt
                            },
                            scoreManuallyReportedByTeamA: {
                              type: graphql.GraphQLBoolean
                            },
                            scoreManuallyApplyToEntireRound: {
                              type: graphql.GraphQLBoolean
                            },
                            mapsPlayed: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerByentityNameresponsescheduleitemmapsPlayedResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerByentityNameresponsescheduleitemmapsPlayeditemResponse',
                                        fields: {
                                          tournamentMatchId: {
                                            type: graphql.GraphQLInt
                                          },
                                          mapNumber: {
                                            type: graphql.GraphQLInt
                                          },
                                          gameTitleModeMapId: {
                                            type: graphql.GraphQLInt
                                          },
                                          mapStartDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          mapEndDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          entityParticipantAScore: {
                                            type: graphql.GraphQLFloat
                                          },
                                          entityParticipantBScore: {
                                            type: graphql.GraphQLFloat
                                          },
                                          map: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerByentityNameresponsescheduleitemmapsPlayeditemmapResponse',
                                                fields: {
                                                  gameTitleModeMapId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  gameTitleModeId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  mapFileName: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  mapDisplayName: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  isActive: {
                                                    type: graphql.GraphQLBoolean
                                                  }
                                                }
                                              }
                                            )
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
                                  'clientPlayerapiPlayerByentityNameresponsescheduleitemdisputeResponse',
                                fields: {
                                  tournamentMatchDisputeId: {
                                    type: graphql.GraphQLInt
                                  },
                                  tournamentMatchId: {
                                    type: graphql.GraphQLInt
                                  },
                                  disputeState: { type: graphql.GraphQLInt },
                                  initiatedByPlayerId: {
                                    type: graphql.GraphQLInt
                                  },
                                  initiatedByPlayerProfile: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerapiPlayerByentityNameresponsescheduleitemdisputeinitiatedByPlayerProfileResponse',
                                      fields: {
                                        nickname: {
                                          type: graphql.GraphQLString
                                        },
                                        lanModeEnabled: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        lanSeatLocation: {
                                          type: graphql.GraphQLString
                                        },
                                        entityName: {
                                          type: graphql.GraphQLString
                                        },
                                        entityIsTeam: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        displayName: {
                                          type: graphql.GraphQLString
                                        },
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
                                  initiatorOnTeamA: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  teamAScore: { type: graphql.GraphQLFloat },
                                  teamBScore: { type: graphql.GraphQLFloat },
                                  imageUrl: { type: graphql.GraphQLString },
                                  disputeDateTime: {
                                    type: graphql.GraphQLString
                                  },
                                  entityAdministratorId: {
                                    type: graphql.GraphQLInt
                                  },
                                  resolutionDateTime: {
                                    type: graphql.GraphQLString
                                  },
                                  resolutionTeamAScore: {
                                    type: graphql.GraphQLFloat
                                  },
                                  resolutionTeamBScore: {
                                    type: graphql.GraphQLFloat
                                  }
                                }
                              })
                            },
                            myMatch: { type: graphql.GraphQLBoolean },
                            newServerRequested: {
                              type: graphql.GraphQLBoolean
                            },
                            newServerRequestedEntityId: {
                              type: graphql.GraphQLInt
                            },
                            newServerRequestedByTeamA: {
                              type: graphql.GraphQLBoolean
                            },
                            newServerRequestedCount: {
                              type: graphql.GraphQLInt
                            },
                            needsAssistance: { type: graphql.GraphQLBoolean },
                            allowedSpectators: { type: graphql.GraphQLString },
                            streamingServiceId: { type: graphql.GraphQLInt },
                            manualMode: { type: graphql.GraphQLBoolean },
                            manualServerConnectionInfo: {
                              type: graphql.GraphQLString
                            },
                            streamingService: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerapiPlayerByentityNameresponsescheduleitemstreamingServiceResponse',
                                fields: {
                                  streamingServiceId: {
                                    type: graphql.GraphQLInt
                                  },
                                  streamingService: {
                                    type: graphql.GraphQLString
                                  },
                                  sourceName: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            assistanceRequests: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerByentityNameresponsescheduleitemassistanceRequestsResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerByentityNameresponsescheduleitemassistanceRequestsitemResponse',
                                        fields: {
                                          tournamentMatchAssistanceId: {
                                            type: graphql.GraphQLInt
                                          },
                                          tournamentMatchId: {
                                            type: graphql.GraphQLInt
                                          },
                                          assistanceRequestedById: {
                                            type: graphql.GraphQLInt
                                          },
                                          assistanceRequestedDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          resolvedById: {
                                            type: graphql.GraphQLInt
                                          },
                                          resolutionDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          resolutionComments: {
                                            type: graphql.GraphQLString
                                          }
                                        }
                                      })
                                    }
                                  }
                                })
                              )
                            },
                            lastUpdatedDateTime: {
                              type: graphql.GraphQLString
                            },
                            serverConfigurationFileName: {
                              type: graphql.GraphQLString
                            },
                            matchAdministratorId: { type: graphql.GraphQLInt },
                            actionLog: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerapiPlayerByentityNameresponsescheduleitemactionLogResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerByentityNameresponsescheduleitemactionLogitemResponse',
                                        fields: {
                                          tournamentMatchActionLogId: {
                                            type: graphql.GraphQLInt
                                          },
                                          entityId: {
                                            type: graphql.GraphQLInt
                                          },
                                          entityProfile: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlayerapiPlayerByentityNameresponsescheduleitemactionLogitementityProfileResponse',
                                                fields: {
                                                  nickname: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  lanModeEnabled: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  lanSeatLocation: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  entityName: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  entityIsTeam: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  displayName: {
                                                    type: graphql.GraphQLString
                                                  },
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
                                              }
                                            )
                                          },
                                          tournamentMatchId: {
                                            type: graphql.GraphQLInt
                                          },
                                          actionLogTypeId: {
                                            type: graphql.GraphQLInt
                                          },
                                          actionLogType: {
                                            type: graphql.GraphQLString
                                          },
                                          administratorComment: {
                                            type: graphql.GraphQLString
                                          },
                                          actionLogDateTime: {
                                            type: graphql.GraphQLString
                                          }
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
                                    'clientPlayerapiPlayerByentityNameresponsescheduleitemplaybackResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerapiPlayerByentityNameresponsescheduleitemplaybackitemResponse',
                                        fields: {
                                          tournamentMatchPlaybackId: {
                                            type: graphql.GraphQLInt
                                          },
                                          tournamentMatchId: {
                                            type: graphql.GraphQLInt
                                          },
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
                                  'clientPlayerapiPlayerByentityNameresponsescheduleitemscoringImageResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
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
              tournamentManagementPolicy: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPlayerapiPlayerByentityNameresponsetournamentManagementPolicyResponse',
                  fields: {
                    tournamentManagementPolicyId: { type: graphql.GraphQLInt },
                    tournamentManagementPolicyName: {
                      type: graphql.GraphQLString
                    },
                    isDefault: { type: graphql.GraphQLBoolean },
                    tournamentManagementPolicyDescription: {
                      type: graphql.GraphQLString
                    },
                    groupPurchasePrice: { type: graphql.GraphQLInt },
                    groupRenewalTimespan: { type: graphql.GraphQLInt },
                    allowPurchaseOfGroup: { type: graphql.GraphQLBoolean },
                    allowTournamentCreation: { type: graphql.GraphQLBoolean },
                    limitTournamentCreation: { type: graphql.GraphQLBoolean },
                    maxConcurrentTournaments: { type: graphql.GraphQLInt },
                    maxTournamentsPerTimespan: { type: graphql.GraphQLInt },
                    maxTournamentsTimespanSeconds: { type: graphql.GraphQLInt },
                    maxParticipantsPerTournament: { type: graphql.GraphQLInt },
                    allowPublicTournament: { type: graphql.GraphQLBoolean },
                    allowFormatSingleElimination: {
                      type: graphql.GraphQLBoolean
                    },
                    allowFormatDoubleElimination: {
                      type: graphql.GraphQLBoolean
                    },
                    allowFormatQualifiers: { type: graphql.GraphQLBoolean },
                    allowConsolationPrizes: { type: graphql.GraphQLBoolean },
                    advanceCreationTimeLimit: { type: graphql.GraphQLInt },
                    allowGlobalRegion: { type: graphql.GraphQLBoolean },
                    assignNewServerLimit: { type: graphql.GraphQLInt },
                    allowBrandedSponsorship: { type: graphql.GraphQLBoolean },
                    allowAccessAnalytics: { type: graphql.GraphQLBoolean },
                    maximumTournamentAdmins: { type: graphql.GraphQLInt },
                    allowCountryRestrictions: { type: graphql.GraphQLBoolean },
                    allowStandByList: { type: graphql.GraphQLBoolean },
                    allowRepeatAndCycle: { type: graphql.GraphQLBoolean },
                    allowLanMode: { type: graphql.GraphQLBoolean },
                    allowManualMode: { type: graphql.GraphQLBoolean },
                    authorizedGameTitlesList: { type: graphql.GraphQLString },
                    authorizedGameTitles: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerByentityNameresponsetournamentManagementPolicyauthorizedGameTitlesResponse',
                          fields: {
                            capacity: { type: graphql.GraphQLInt },
                            count: { type: graphql.GraphQLInt },
                            item: { type: graphql.GraphQLInt }
                          }
                        })
                      )
                    },
                    authorizedGamePlatformsList: {
                      type: graphql.GraphQLString
                    },
                    authorizedGamePlatofrms: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerByentityNameresponsetournamentManagementPolicyauthorizedGamePlatofrmsResponse',
                          fields: {
                            capacity: { type: graphql.GraphQLInt },
                            count: { type: graphql.GraphQLInt },
                            item: { type: graphql.GraphQLInt }
                          }
                        })
                      )
                    }
                  }
                })
              },
              trophies: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerapiPlayerByentityNameresponsetrophiesResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerByentityNameresponsetrophiesitemResponse',
                          fields: {
                            tournamentId: { type: graphql.GraphQLInt },
                            tournamentName: { type: graphql.GraphQLString },
                            tournamentStartDateTime: {
                              type: graphql.GraphQLString
                            },
                            placeNumber: { type: graphql.GraphQLInt },
                            trophyId: { type: graphql.GraphQLInt },
                            trophyImageUrl: { type: graphql.GraphQLString }
                          }
                        })
                      }
                    }
                  })
                )
              },
              entityPlayerId: { type: graphql.GraphQLInt },
              isOnline: { type: graphql.GraphQLBoolean },
              parentOrganizationId: { type: graphql.GraphQLInt },
              genderId: { type: graphql.GraphQLInt },
              gender: { type: graphql.GraphQLString },
              birthDate: { type: graphql.GraphQLString },
              lastActivityDateTime: { type: graphql.GraphQLString },
              numberOfTeams: { type: graphql.GraphQLInt },
              lastLoginDateTime: { type: graphql.GraphQLString },
              gameNicknames: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerapiPlayerByentityNameresponsegameNicknamesResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerByentityNameresponsegameNicknamesitemResponse',
                          fields: {
                            isTeam: { type: graphql.GraphQLBoolean },
                            nickname: { type: graphql.GraphQLString },
                            gameShortCode: { type: graphql.GraphQLString }
                          }
                        })
                      }
                    }
                  })
                )
              },
              streamingServices: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerapiPlayerByentityNameresponsestreamingServicesResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerByentityNameresponsestreamingServicesitemResponse',
                          fields: {
                            entityId: { type: graphql.GraphQLInt },
                            streamName: { type: graphql.GraphQLString },
                            streamLink: { type: graphql.GraphQLString },
                            streamCurrentlyActive: {
                              type: graphql.GraphQLBoolean
                            },
                            streamActiveViewers: { type: graphql.GraphQLInt },
                            lastUpdatedDateTime: {
                              type: graphql.GraphQLString
                            },
                            streamingServiceId: { type: graphql.GraphQLInt },
                            streamingService: { type: graphql.GraphQLString },
                            sourceName: { type: graphql.GraphQLString }
                          }
                        })
                      }
                    }
                  })
                )
              },
              isSystemAdministrator: { type: graphql.GraphQLBoolean },
              systemAdministratorIssuedDateTime: {
                type: graphql.GraphQLString
              },
              firstName: { type: graphql.GraphQLString },
              lastName: { type: graphql.GraphQLString },
              companyName: { type: graphql.GraphQLString },
              registrationIp: { type: graphql.GraphQLString },
              registrationDateTime: { type: graphql.GraphQLString },
              clientApiId: { type: graphql.GraphQLString },
              entityMembershipTypeId: { type: graphql.GraphQLInt },
              entityMembershipId: { type: graphql.GraphQLString },
              entityMembershipToken: { type: graphql.GraphQLString },
              emailAddress: { type: graphql.GraphQLString },
              teamMatchPlayStatisticsId: { type: graphql.GraphQLInt },
              tournamentManagementPolicyId: { type: graphql.GraphQLInt },
              lanModeEnabled: { type: graphql.GraphQLBoolean },
              lanSeatLocation: { type: graphql.GraphQLString },
              playerSubscriptionTypeId: { type: graphql.GraphQLInt },
              playerSubscriptionExpirationDate: { type: graphql.GraphQLString },
              isSkrillAuthorized: { type: graphql.GraphQLBoolean },
              raffleTickets: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerapiPlayerByentityNameresponseraffleTicketsResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerByentityNameresponseraffleTicketsitemResponse',
                          fields: {
                            raffleTicketId: { type: graphql.GraphQLInt },
                            entityId: { type: graphql.GraphQLInt },
                            raffleTicket: { type: graphql.GraphQLString },
                            isDailyTicket: { type: graphql.GraphQLBoolean },
                            raffleTicketDate: { type: graphql.GraphQLString }
                          }
                        })
                      }
                    }
                  })
                )
              },
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
              entityImageUrlIsExternal: { type: graphql.GraphQLBoolean },
              entityBackgroundImageUrl: { type: graphql.GraphQLString },
              entityBackgroundImageUrlIsExternal: {
                type: graphql.GraphQLBoolean
              }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerMyProfile: {
    method: 'PUT',
    url: 'api/Player/my/profile',
    urlParams: {
      displayName: {
        type: graphql.GraphQLString
      },
      firstName: {
        type: graphql.GraphQLString
      },
      lastName: {
        type: graphql.GraphQLString
      },
      address: {
        type: graphql.GraphQLString
      },
      city: {
        type: graphql.GraphQLString
      },
      postalCode: {
        type: graphql.GraphQLString
      },
      addressStateProvenceId: {
        type: graphql.GraphQLInt
      },
      birthdate: {
        type: graphql.GraphQLString
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerapiPlayerMyProfileResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientPlayerapiPlayerMyProfileresponseResponse',
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
                  name: 'clientPlayerapiPlayerMyProfileresponsemuutResponse',
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
  apiPlayerMyGameBygameShortCodePlatformByplatformCodeConfirmation: {
    method: 'POST',
    url:
      'api/Player/my/game/{gameShortCode}/platform/{platformCode}/Confirmation',
    response: new graphql.GraphQLObjectType({
      name:
        'clientPlayerapiPlayerMyGameBygameShortCodePlatformByplatformCodeConfirmationResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerMyFriends: {
    method: 'GET',
    url: 'api/Player/my/Friends',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerapiPlayerMyFriendsResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientPlayerapiPlayerMyFriendsresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientPlayerapiPlayerMyFriendsresponseitemResponse',
                    fields: {
                      myRequest: { type: graphql.GraphQLBoolean },
                      entityId: { type: graphql.GraphQLInt },
                      entityName: { type: graphql.GraphQLString },
                      displayName: { type: graphql.GraphQLString },
                      entityImageUrl: { type: graphql.GraphQLString },
                      gameServerRegion: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerapiPlayerMyFriendsresponseitemgameServerRegionResponse',
                          fields: {
                            gamingServerRegionId: { type: graphql.GraphQLInt },
                            gamingServerRegionName: {
                              type: graphql.GraphQLString
                            }
                          }
                        })
                      },
                      friendAccepted: { type: graphql.GraphQLBoolean },
                      isOnline: { type: graphql.GraphQLBoolean }
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
  apiPlayerMyFriendByfriendEntityName: {
    method: 'GET',
    url: 'api/Player/my/Friend/{friendEntityName}',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerapiPlayerMyFriendByfriendEntityNameResponse',
      fields: {
        response: { type: graphql.GraphQLBoolean },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerMyFriendsByentityName: {
    method: 'DELETE',
    url: 'api/Player/my/Friends/{entityName}',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerapiPlayerMyFriendsByentityNameResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerMyFriendsByentityNameAccept: {
    method: 'POST',
    url: 'api/Player/my/Friends/{entityName}/Accept',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerapiPlayerMyFriendsByentityNameAcceptResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlayerMyFriendsByentityNameDecline: {
    method: 'POST',
    url: 'api/Player/my/Friends/{entityName}/Decline',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerapiPlayerMyFriendsByentityNameDeclineResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
