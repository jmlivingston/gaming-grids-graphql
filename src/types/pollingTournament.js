const graphql = require('graphql')

module.exports = {
  apiTournamentByTournamentIdBracketUpdated: {
    method: 'GET',
    url: 'api/Tournament/{TournamentId}/Bracket/Updated',
    response: new graphql.GraphQLObjectType({
      name:
        'pollingTournamentapiTournamentByTournamentIdBracketUpdatedResponse',
      fields: {
        response: { type: graphql.GraphQLBoolean },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentByTournamentIdBracket: {
    method: 'GET',
    url: 'api/Tournament/{TournamentId}/Bracket',
    response: new graphql.GraphQLObjectType({
      name: 'pollingTournamentapiTournamentByTournamentIdBracketResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'pollingTournamentapiTournamentByTournamentIdBracketresponseResponse',
            fields: {
              lastUpdatedDateTime: { type: graphql.GraphQLString },
              teams: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentapiTournamentByTournamentIdBracketresponseteamsResponse',
                    fields: {
                      length: { type: graphql.GraphQLInt },
                      longLength: { type: graphql.GraphQLInt },
                      rank: { type: graphql.GraphQLInt },
                      syncRoot: { type: graphql.GraphQLString },
                      isReadOnly: { type: graphql.GraphQLBoolean },
                      isFixedSize: { type: graphql.GraphQLBoolean },
                      isSynchronized: { type: graphql.GraphQLBoolean }
                    }
                  })
                )
              },
              results: { type: graphql.GraphQLInt }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentByTournamentIdLeaguePlayByparticipantId: {
    method: 'GET',
    url: 'api/Tournament/{TournamentId}/League/Play/{participantId}',
    response: new graphql.GraphQLObjectType({
      name:
        'pollingTournamentapiTournamentByTournamentIdLeaguePlayByparticipantIdResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'pollingTournamentapiTournamentByTournamentIdLeaguePlayByparticipantIdresponseResponse',
            fields: {
              tournamentMatchId: { type: graphql.GraphQLInt },
              roundNumber: { type: graphql.GraphQLInt },
              matchNumber: { type: graphql.GraphQLInt },
              qualifierGroupNumber: { type: graphql.GraphQLInt },
              roundLevelTypeId: { type: graphql.GraphQLInt },
              participantAName: { type: graphql.GraphQLString },
              participantBName: { type: graphql.GraphQLString },
              isFinalized: { type: graphql.GraphQLBoolean }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentByTournamentIdAssistanceUnresolved: {
    method: 'GET',
    url: 'api/Tournament/{TournamentId}/Assistance/Unresolved/',
    response: new graphql.GraphQLObjectType({
      name:
        'pollingTournamentapiTournamentByTournamentIdAssistanceUnresolvedResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'pollingTournamentapiTournamentByTournamentIdAssistanceUnresolvedresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentapiTournamentByTournamentIdAssistanceUnresolvedresponseitemResponse',
                    fields: {
                      tournamentMatchId: { type: graphql.GraphQLInt },
                      roundNumber: { type: graphql.GraphQLInt },
                      matchNumber: { type: graphql.GraphQLInt },
                      qualifierGroupNumber: { type: graphql.GraphQLInt },
                      roundLevelTypeId: { type: graphql.GraphQLInt },
                      participantAName: { type: graphql.GraphQLString },
                      participantBName: { type: graphql.GraphQLString },
                      isFinalized: { type: graphql.GraphQLBoolean }
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
  apiTournamentByTournamentId: {
    method: 'GET',
    url: 'api/Tournament/{TournamentId}/',
    response: new graphql.GraphQLObjectType({
      name: 'pollingTournamentapiTournamentByTournamentIdResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'pollingTournamentapiTournamentByTournamentIdresponseResponse',
            fields: {
              isRegisteredForTournament: { type: graphql.GraphQLBoolean },
              isMyLanModeEnabled: { type: graphql.GraphQLBoolean },
              myLanSeatLocation: { type: graphql.GraphQLString },
              registeredTeamProfile: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentapiTournamentByTournamentIdresponseregisteredTeamProfileResponse',
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
              rulesTitle: { type: graphql.GraphQLString },
              rulesDescription: { type: graphql.GraphQLString },
              administrators: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentapiTournamentByTournamentIdresponseadministratorsResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentapiTournamentByTournamentIdresponseadministratorsitemResponse',
                          fields: {
                            isTournamentLevelAdministrator: {
                              type: graphql.GraphQLBoolean
                            },
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
                      }
                    }
                  })
                )
              },
              entityOwnerProfile: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentapiTournamentByTournamentIdresponseentityOwnerProfileResponse',
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
              participants: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentapiTournamentByTournamentIdresponseparticipantsResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentapiTournamentByTournamentIdresponseparticipantsitemResponse',
                          fields: {
                            tournamentId: { type: graphql.GraphQLInt },
                            entityParticipantId: { type: graphql.GraphQLInt },
                            entityParticipantProfile: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentapiTournamentByTournamentIdresponseparticipantsitementityParticipantProfileResponse',
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
                            joinDateTime: { type: graphql.GraphQLString },
                            isChallengeAggrssor: {
                              type: graphql.GraphQLBoolean
                            },
                            isAccepted: { type: graphql.GraphQLBoolean },
                            statistics: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentapiTournamentByTournamentIdresponseparticipantsitemstatisticsResponse',
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
                            finalPlacement: { type: graphql.GraphQLInt },
                            seededPlacement: { type: graphql.GraphQLInt },
                            flaggedAsCheater: { type: graphql.GraphQLBoolean },
                            hasDismissedResults: {
                              type: graphql.GraphQLBoolean
                            },
                            prizeAwardedAmount: { type: graphql.GraphQLInt },
                            otherPrizeAwarded: { type: graphql.GraphQLString },
                            matchPlayStatisticsId: { type: graphql.GraphQLInt },
                            isCheckedIn: { type: graphql.GraphQLBoolean },
                            checkedInDateTime: { type: graphql.GraphQLString },
                            isStandBy: { type: graphql.GraphQLBoolean },
                            standByPosition: { type: graphql.GraphQLInt },
                            qualifierGroupNumber: { type: graphql.GraphQLInt },
                            qualifierGroupSeedNumber: {
                              type: graphql.GraphQLInt
                            },
                            qualifierWinCount: { type: graphql.GraphQLInt },
                            qualifierLossCount: { type: graphql.GraphQLInt },
                            qualifierTieCount: { type: graphql.GraphQLInt },
                            qualifierScoreCount: { type: graphql.GraphQLInt },
                            qualifierTotalPoints: { type: graphql.GraphQLInt },
                            qualifierLastTotalPoints: {
                              type: graphql.GraphQLInt
                            },
                            qualifierRankingPosition: {
                              type: graphql.GraphQLInt
                            },
                            qualifierLastRankingPosition: {
                              type: graphql.GraphQLInt
                            },
                            qualifierScoreLastUpdate: {
                              type: graphql.GraphQLString
                            },
                            qualifierCurrentRoundNumber: {
                              type: graphql.GraphQLInt
                            },
                            qualifierMatchCount: { type: graphql.GraphQLInt },
                            qualifierAveragePoints: {
                              type: graphql.GraphQLInt
                            },
                            qualifierPointsFor: { type: graphql.GraphQLInt },
                            qualifierPointsAgainst: {
                              type: graphql.GraphQLInt
                            },
                            quitAfterLive: { type: graphql.GraphQLBoolean },
                            quitAfterLiveDateTime: {
                              type: graphql.GraphQLString
                            },
                            removedAfterLive: { type: graphql.GraphQLBoolean },
                            removedAfterLiveDateTime: {
                              type: graphql.GraphQLString
                            },
                            currentTieBreakerValues: {
                              type: graphql.GraphQLFloat
                            },
                            qualifierTieBreakers: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'pollingTournamentapiTournamentByTournamentIdresponseparticipantsitemqualifierTieBreakersResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'pollingTournamentapiTournamentByTournamentIdresponseparticipantsitemqualifierTieBreakersitemResponse',
                                        fields: {
                                          roundNumber: {
                                            type: graphql.GraphQLInt
                                          },
                                          tieBreakerLevelId: {
                                            type: graphql.GraphQLInt
                                          },
                                          tieBreakerTypeId: {
                                            type: graphql.GraphQLInt
                                          },
                                          tieBreakerValue: {
                                            type: graphql.GraphQLFloat
                                          }
                                        }
                                      })
                                    }
                                  }
                                })
                              )
                            },
                            gameTitleTeamSideId: { type: graphql.GraphQLInt },
                            gameTitleTeamSide: { type: graphql.GraphQLString }
                          }
                        })
                      }
                    }
                  })
                )
              },
              matches: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentapiTournamentByTournamentIdresponsematchesResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentapiTournamentByTournamentIdresponsematchesitemResponse',
                          fields: {
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
                                  'pollingTournamentapiTournamentByTournamentIdresponsematchesitementityOwnerProfileResponse',
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
                                  'pollingTournamentapiTournamentByTournamentIdresponsematchesitementityParticipantAResponse',
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
                                        'pollingTournamentapiTournamentByTournamentIdresponsematchesitementityParticipantAregionResponse',
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
                                        'pollingTournamentapiTournamentByTournamentIdresponsematchesitementityParticipantAprofileResponse',
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
                                          'pollingTournamentapiTournamentByTournamentIdresponsematchesitementityParticipantAhearthstoneDecksResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'pollingTournamentapiTournamentByTournamentIdresponsematchesitementityParticipantAhearthstoneDecksitemResponse',
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
                                                          'pollingTournamentapiTournamentByTournamentIdresponsematchesitementityParticipantAhearthstoneDecksitemhearthstoneDeckImageResponse',
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
                                  'pollingTournamentapiTournamentByTournamentIdresponsematchesitementityParticipantBResponse',
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
                                        'pollingTournamentapiTournamentByTournamentIdresponsematchesitementityParticipantBregionResponse',
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
                                        'pollingTournamentapiTournamentByTournamentIdresponsematchesitementityParticipantBprofileResponse',
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
                                          'pollingTournamentapiTournamentByTournamentIdresponsematchesitementityParticipantBhearthstoneDecksResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'pollingTournamentapiTournamentByTournamentIdresponsematchesitementityParticipantBhearthstoneDecksitemResponse',
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
                                                          'pollingTournamentapiTournamentByTournamentIdresponsematchesitementityParticipantBhearthstoneDecksitemhearthstoneDeckImageResponse',
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
                                    'pollingTournamentapiTournamentByTournamentIdresponsematchesitemmapsPlayedResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'pollingTournamentapiTournamentByTournamentIdresponsematchesitemmapsPlayeditemResponse',
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
                                                  'pollingTournamentapiTournamentByTournamentIdresponsematchesitemmapsPlayeditemmapResponse',
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
                                  'pollingTournamentapiTournamentByTournamentIdresponsematchesitemdisputeResponse',
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
                                        'pollingTournamentapiTournamentByTournamentIdresponsematchesitemdisputeinitiatedByPlayerProfileResponse',
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
                                  'pollingTournamentapiTournamentByTournamentIdresponsematchesitemstreamingServiceResponse',
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
                                    'pollingTournamentapiTournamentByTournamentIdresponsematchesitemassistanceRequestsResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'pollingTournamentapiTournamentByTournamentIdresponsematchesitemassistanceRequestsitemResponse',
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
                                    'pollingTournamentapiTournamentByTournamentIdresponsematchesitemactionLogResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'pollingTournamentapiTournamentByTournamentIdresponsematchesitemactionLogitemResponse',
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
                                                  'pollingTournamentapiTournamentByTournamentIdresponsematchesitemactionLogitementityProfileResponse',
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
                                    'pollingTournamentapiTournamentByTournamentIdresponsematchesitemplaybackResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'pollingTournamentapiTournamentByTournamentIdresponsematchesitemplaybackitemResponse',
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
                                  'pollingTournamentapiTournamentByTournamentIdresponsematchesitemscoringImageResponse',
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
              roundRules: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentapiTournamentByTournamentIdresponseroundRulesResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentapiTournamentByTournamentIdresponseroundRulesitemResponse',
                          fields: {
                            tournamentRoundRulesId: {
                              type: graphql.GraphQLInt
                            },
                            tournamentId: { type: graphql.GraphQLInt },
                            roundLevelTypeId: { type: graphql.GraphQLInt },
                            roundNumber: { type: graphql.GraphQLInt },
                            originalStartDateTime: {
                              type: graphql.GraphQLString
                            },
                            minimumStartDateTime: {
                              type: graphql.GraphQLString
                            },
                            maximumStartDateTime: {
                              type: graphql.GraphQLString
                            },
                            isMultipleMap: { type: graphql.GraphQLBoolean },
                            isMapListOrdered: { type: graphql.GraphQLBoolean },
                            isDelayed: { type: graphql.GraphQLBoolean },
                            maps: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'pollingTournamentapiTournamentByTournamentIdresponseroundRulesitemmapsResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'pollingTournamentapiTournamentByTournamentIdresponseroundRulesitemmapsitemResponse',
                                        fields: {
                                          tournamentRoundRulesId: {
                                            type: graphql.GraphQLInt
                                          },
                                          tournamentId: {
                                            type: graphql.GraphQLInt
                                          },
                                          roundLevelTypeId: {
                                            type: graphql.GraphQLInt
                                          },
                                          roundNumber: {
                                            type: graphql.GraphQLInt
                                          },
                                          mapPositionNumber: {
                                            type: graphql.GraphQLInt
                                          },
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
                              )
                            }
                          }
                        })
                      }
                    }
                  })
                )
              },
              isCheckedIn: { type: graphql.GraphQLBoolean },
              isRegisteredAsStandby: { type: graphql.GraphQLBoolean },
              registeredAsStandbyPosition: { type: graphql.GraphQLInt },
              tournamentManagementPolicy: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentapiTournamentByTournamentIdresponsetournamentManagementPolicyResponse',
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
                            'pollingTournamentapiTournamentByTournamentIdresponsetournamentManagementPolicyauthorizedGameTitlesResponse',
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
                            'pollingTournamentapiTournamentByTournamentIdresponsetournamentManagementPolicyauthorizedGamePlatofrmsResponse',
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
              pendingRegistration: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentapiTournamentByTournamentIdresponsependingRegistrationResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentapiTournamentByTournamentIdresponsependingRegistrationitemResponse',
                          fields: {
                            entityPlayerId: { type: graphql.GraphQLInt },
                            displayName: { type: graphql.GraphQLString },
                            entityTeamId: { type: graphql.GraphQLInt },
                            teamEntityName: { type: graphql.GraphQLString },
                            isTeamCaptain: { type: graphql.GraphQLBoolean },
                            hasAccepted: { type: graphql.GraphQLBoolean }
                          }
                        })
                      }
                    }
                  })
                )
              },
              estimatedPrizePool: { type: graphql.GraphQLInt },
              tournamentStateId: { type: graphql.GraphQLInt },
              isTournamentSpecificAdministrator: {
                type: graphql.GraphQLBoolean
              },
              isPublished: { type: graphql.GraphQLBoolean },
              gameName: { type: graphql.GraphQLString },
              isTournamentAdministrator: { type: graphql.GraphQLBoolean },
              entityOwnerId: { type: graphql.GraphQLInt },
              gameTitleRulesId: { type: graphql.GraphQLInt },
              isApproved: { type: graphql.GraphQLBoolean },
              isRealCurrency: { type: graphql.GraphQLBoolean },
              entityApprovedById: { type: graphql.GraphQLInt },
              resultIsFinalized: { type: graphql.GraphQLBoolean },
              entityResultFinalizedById: { type: graphql.GraphQLInt },
              tournamentPassword: { type: graphql.GraphQLString },
              prizePoolAmount: { type: graphql.GraphQLInt },
              tournamentPrizeFundingTypeId: { type: graphql.GraphQLInt },
              tournamentPrizeFundingTypeName: { type: graphql.GraphQLString },
              doesCycle: { type: graphql.GraphQLBoolean },
              cycleLengthInMinutes: { type: graphql.GraphQLInt },
              cycleMinutesBeforeStart: { type: graphql.GraphQLInt },
              maxCycleCount: { type: graphql.GraphQLInt },
              cycleCount: { type: graphql.GraphQLInt },
              hasCycled: { type: graphql.GraphQLBoolean },
              cycledTournamentId: { type: graphql.GraphQLInt },
              canOnlyRegisterFromRegionId: { type: graphql.GraphQLInt },
              canOnlyRegisterFromRegionName: { type: graphql.GraphQLString },
              gamingServerRegionName: { type: graphql.GraphQLString },
              openPlayMinimumTimeToQualify: { type: graphql.GraphQLInt },
              roundRobinIsComplete: { type: graphql.GraphQLBoolean },
              tournamentSeedingTypeId: { type: graphql.GraphQLInt },
              tournamentPairingTypeId: { type: graphql.GraphQLInt },
              automaticGoLiveOnSchedule: { type: graphql.GraphQLBoolean },
              minutesAfterStartToForfeit: { type: graphql.GraphQLInt },
              minutesBeforeStartToAllowCheckin: { type: graphql.GraphQLInt },
              sponsors: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentapiTournamentByTournamentIdresponsesponsorsResponse',
                  fields: {
                    titleSponsor: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentapiTournamentByTournamentIdresponsesponsorstitleSponsorResponse',
                        fields: {
                          sponsorName: { type: graphql.GraphQLString },
                          sponsorImageUrl: { type: graphql.GraphQLString },
                          sponsorImageRelativeUrl: {
                            type: graphql.GraphQLString
                          },
                          sponsorLink: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    mainSponsors: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentapiTournamentByTournamentIdresponsesponsorsmainSponsorsResponse',
                          fields: {
                            capacity: { type: graphql.GraphQLInt },
                            count: { type: graphql.GraphQLInt },
                            item: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentapiTournamentByTournamentIdresponsesponsorsmainSponsorsitemResponse',
                                fields: {
                                  sponsorName: { type: graphql.GraphQLString },
                                  sponsorImageUrl: {
                                    type: graphql.GraphQLString
                                  },
                                  sponsorImageRelativeUrl: {
                                    type: graphql.GraphQLString
                                  },
                                  sponsorLink: { type: graphql.GraphQLString }
                                }
                              })
                            }
                          }
                        })
                      )
                    },
                    partners: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentapiTournamentByTournamentIdresponsesponsorspartnersResponse',
                          fields: {
                            capacity: { type: graphql.GraphQLInt },
                            count: { type: graphql.GraphQLInt },
                            item: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentapiTournamentByTournamentIdresponsesponsorspartnersitemResponse',
                                fields: {
                                  sponsorName: { type: graphql.GraphQLString },
                                  sponsorImageUrl: {
                                    type: graphql.GraphQLString
                                  },
                                  sponsorImageRelativeUrl: {
                                    type: graphql.GraphQLString
                                  },
                                  sponsorLink: { type: graphql.GraphQLString }
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
              announcements: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentapiTournamentByTournamentIdresponseannouncementsResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentapiTournamentByTournamentIdresponseannouncementsitemResponse',
                          fields: {
                            tournamentAnnouncementId: {
                              type: graphql.GraphQLInt
                            },
                            tournamentId: { type: graphql.GraphQLInt },
                            tournamentAnnouncement: {
                              type: graphql.GraphQLString
                            },
                            createdDateTime: { type: graphql.GraphQLString },
                            createdById: { type: graphql.GraphQLInt },
                            entityName: { type: graphql.GraphQLString },
                            displayName: { type: graphql.GraphQLString }
                          }
                        })
                      }
                    }
                  })
                )
              },
              createdDateTime: { type: graphql.GraphQLString },
              gamePlatformFranchiseTitleStateId: { type: graphql.GraphQLInt },
              allMatchesRunManualMode: { type: graphql.GraphQLBoolean },
              thirdPartyTournamentId: { type: graphql.GraphQLString },
              thirdPartyApiRegion: { type: graphql.GraphQLString },
              thirdPartyTournamentConfiguration: {
                type: graphql.GraphQLString
              },
              serverConfigurationFileName: { type: graphql.GraphQLString },
              allowPreCheckin: { type: graphql.GraphQLBoolean },
              preCheckinMinutesBeforeStart: { type: graphql.GraphQLInt },
              standByParticipantCount: { type: graphql.GraphQLInt },
              isPreCheckinAvailable: { type: graphql.GraphQLBoolean },
              qualifier: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentapiTournamentByTournamentIdresponsequalifierResponse',
                  fields: {
                    tournamentId: { type: graphql.GraphQLInt },
                    numberOfGroups: { type: graphql.GraphQLInt },
                    qualifierWinPoints: { type: graphql.GraphQLInt },
                    qualifierLossPoints: { type: graphql.GraphQLInt },
                    qualifierTiePoints: { type: graphql.GraphQLInt },
                    qualifierScoreMultiplierPoints: {
                      type: graphql.GraphQLInt
                    },
                    qualifierSortTypeId: { type: graphql.GraphQLInt },
                    league: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentapiTournamentByTournamentIdresponsequalifierleagueResponse',
                        fields: {
                          endDateTime: { type: graphql.GraphQLString },
                          gameTileModeMapId: { type: graphql.GraphQLInt },
                          minimumNumberOfMatches: { type: graphql.GraphQLInt },
                          numberOfPlays: { type: graphql.GraphQLInt },
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
                            'pollingTournamentapiTournamentByTournamentIdresponsequalifiergroupsResponse',
                          fields: {
                            capacity: { type: graphql.GraphQLInt },
                            count: { type: graphql.GraphQLInt },
                            item: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentapiTournamentByTournamentIdresponsequalifiergroupsitemResponse',
                                fields: {
                                  tournamentId: { type: graphql.GraphQLInt },
                                  groupNumber: { type: graphql.GraphQLInt },
                                  groupName: { type: graphql.GraphQLString },
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
                              })
                            }
                          }
                        })
                      )
                    },
                    tieBreakers: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentapiTournamentByTournamentIdresponsequalifiertieBreakersResponse',
                          fields: {
                            capacity: { type: graphql.GraphQLInt },
                            count: { type: graphql.GraphQLInt },
                            item: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentapiTournamentByTournamentIdresponsequalifiertieBreakersitemResponse',
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
                              })
                            }
                          }
                        })
                      )
                    }
                  }
                })
              },
              tournamentManagementPolicyId: { type: graphql.GraphQLInt },
              predefinedStreamedMatches: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentapiTournamentByTournamentIdresponsepredefinedStreamedMatchesResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentapiTournamentByTournamentIdresponsepredefinedStreamedMatchesitemResponse',
                          fields: {
                            roundRuleLevelId: { type: graphql.GraphQLInt },
                            roundNumber: { type: graphql.GraphQLInt },
                            matchNumber: { type: graphql.GraphQLInt },
                            streamingServiceId: { type: graphql.GraphQLInt },
                            broadcastUrl: { type: graphql.GraphQLString }
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
                      'pollingTournamentapiTournamentByTournamentIdresponseallowedCountryIdsResponse',
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
                      'pollingTournamentapiTournamentByTournamentIdresponseallowedCountryListResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentapiTournamentByTournamentIdresponseallowedCountryListitemResponse',
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
                )
              },
              pauseIfQualifierEndsInTie: { type: graphql.GraphQLBoolean },
              isPausedForTiedQualifierFinish: { type: graphql.GraphQLBoolean },
              isPausedForTiedQualifierFinishDateTime: {
                type: graphql.GraphQLString
              },
              qualifierTiedFinishIsResolved: { type: graphql.GraphQLBoolean },
              qualifierTiedFinishIsResolvedDateTime: {
                type: graphql.GraphQLString
              },
              qualifierTiedFinishIsResolvedByAdministratorId: {
                type: graphql.GraphQLInt
              },
              qualifierTiedFinishIsResolvedByAdministratorProfile: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentapiTournamentByTournamentIdresponsequalifierTiedFinishIsResolvedByAdministratorProfileResponse',
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
              restrictPowerRankingStartDivisionId: { type: graphql.GraphQLInt },
              restrictPowerRankingEndDivisionId: { type: graphql.GraphQLInt },
              payouts: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentapiTournamentByTournamentIdresponsepayoutsResponse',
                  fields: {
                    hasPayouts: { type: graphql.GraphQLBoolean },
                    isFixedPayouts: { type: graphql.GraphQLBoolean },
                    payoutCount: { type: graphql.GraphQLInt },
                    fixedPayoutAmount: { type: graphql.GraphQLInt },
                    places: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentapiTournamentByTournamentIdresponsepayoutsplacesResponse',
                          fields: {
                            capacity: { type: graphql.GraphQLInt },
                            count: { type: graphql.GraphQLInt },
                            item: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentapiTournamentByTournamentIdresponsepayoutsplacesitemResponse',
                                fields: {
                                  isAwarded: { type: graphql.GraphQLBoolean },
                                  awardedDateTime: {
                                    type: graphql.GraphQLString
                                  },
                                  awardedAmount: { type: graphql.GraphQLInt },
                                  numberOfWinnersAwarded: {
                                    type: graphql.GraphQLInt
                                  },
                                  winners: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'pollingTournamentapiTournamentByTournamentIdresponsepayoutsplacesitemwinnersResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'pollingTournamentapiTournamentByTournamentIdresponsepayoutsplacesitemwinnersitemResponse',
                                                fields: {
                                                  entityId: {
                                                    type: graphql.GraphQLInt
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
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  },
                                  placeNumber: { type: graphql.GraphQLInt },
                                  payoutAmount: { type: graphql.GraphQLInt },
                                  payoutPercent: { type: graphql.GraphQLInt },
                                  otherPayout: { type: graphql.GraphQLString },
                                  xperiencePoints: { type: graphql.GraphQLInt }
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
              challengeMinEntryFee: { type: graphql.GraphQLInt },
              challengeMaxEntryFee: { type: graphql.GraphQLInt },
              challengeOffers: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentapiTournamentByTournamentIdresponsechallengeOffersResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentapiTournamentByTournamentIdresponsechallengeOffersitemResponse',
                          fields: {
                            challengeOfferId: { type: graphql.GraphQLInt },
                            entryFee: { type: graphql.GraphQLInt },
                            serviceFee: { type: graphql.GraphQLInt },
                            totalFee: { type: graphql.GraphQLInt },
                            tournamentId: { type: graphql.GraphQLInt },
                            tournamentDescription: {
                              type: graphql.GraphQLString
                            },
                            tournamentTitle: { type: graphql.GraphQLString },
                            creatorEntityId: { type: graphql.GraphQLInt },
                            challengerEntityId: { type: graphql.GraphQLInt },
                            offerDateTime: { type: graphql.GraphQLString },
                            creatorStateId: { type: graphql.GraphQLInt },
                            creatorStateDateTime: {
                              type: graphql.GraphQLString
                            },
                            challengerStateId: { type: graphql.GraphQLInt },
                            challengerStateDateTime: {
                              type: graphql.GraphQLString
                            },
                            hasPendingRegistration: {
                              type: graphql.GraphQLBoolean
                            },
                            tournamentMatchId: { type: graphql.GraphQLInt },
                            challengeComplete: { type: graphql.GraphQLBoolean },
                            challengeCompleteDateTime: {
                              type: graphql.GraphQLString
                            },
                            challengerNeedsRegistration: {
                              type: graphql.GraphQLBoolean
                            },
                            creatorNeedsRegistration: {
                              type: graphql.GraphQLBoolean
                            },
                            challengeCancelled: { type: graphql.GraphQLBoolean }
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
                      'pollingTournamentapiTournamentByTournamentIdresponselocationIdsResponse',
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
                      'pollingTournamentapiTournamentByTournamentIdresponselocationsResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentapiTournamentByTournamentIdresponselocationsitemResponse',
                          fields: {
                            locationId: { type: graphql.GraphQLInt },
                            stateProvence: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentapiTournamentByTournamentIdresponselocationsitemstateProvenceResponse',
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
                              })
                            },
                            country: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentapiTournamentByTournamentIdresponselocationsitemcountryResponse',
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
                                  showInList: { type: graphql.GraphQLBoolean },
                                  orderBy: { type: graphql.GraphQLInt }
                                }
                              })
                            },
                            region: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentapiTournamentByTournamentIdresponselocationsitemregionResponse',
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
                            isActive: { type: graphql.GraphQLBoolean },
                            location: { type: graphql.GraphQLString },
                            streetAddress: { type: graphql.GraphQLString },
                            city: { type: graphql.GraphQLString },
                            addressStateProvenceId: {
                              type: graphql.GraphQLInt
                            },
                            addressCountryId: { type: graphql.GraphQLInt },
                            postalCode: { type: graphql.GraphQLString },
                            gamingServerRegionId: { type: graphql.GraphQLInt },
                            phoneNumber: { type: graphql.GraphQLString },
                            emailAddress: { type: graphql.GraphQLString },
                            hours: { type: graphql.GraphQLString },
                            description: { type: graphql.GraphQLString }
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
                    'pollingTournamentapiTournamentByTournamentIdresponsetrophyGroupResponse',
                  fields: {
                    trophyGroupId: { type: graphql.GraphQLInt },
                    trophyGroup: { type: graphql.GraphQLString },
                    isActive: { type: graphql.GraphQLBoolean }
                  }
                })
              },
              trophyGroupId: { type: graphql.GraphQLInt },
              xperiencePointsForJoining: { type: graphql.GraphQLInt },
              xperiencePointsPerRound: { type: graphql.GraphQLInt },
              bracketsBuilt: { type: graphql.GraphQLBoolean },
              totalEntryFeesAmount: { type: graphql.GraphQLInt },
              totalPayoutAmount: { type: graphql.GraphQLInt },
              totalRakeAmount: { type: graphql.GraphQLInt },
              directChallengeOppontentEntityId: { type: graphql.GraphQLInt },
              useCommunitySteamAccounts: { type: graphql.GraphQLBoolean },
              isChallenge: { type: graphql.GraphQLBoolean },
              tournamentIsComplete: { type: graphql.GraphQLBoolean },
              tournamentIsLive: { type: graphql.GraphQLBoolean },
              tournamentLiveDateTime: { type: graphql.GraphQLString },
              tournamentId: { type: graphql.GraphQLInt },
              gameTitleModeId: { type: graphql.GraphQLInt },
              tournamentTitle: { type: graphql.GraphQLString },
              tournamentDescription: { type: graphql.GraphQLString },
              tournamentSeriesId: { type: graphql.GraphQLInt },
              gamePlatformFranchiseTitleId: { type: graphql.GraphQLInt },
              isTeamTournament: { type: graphql.GraphQLBoolean },
              minimumNumberOfEntities: { type: graphql.GraphQLInt },
              maximumNumberOfEntities: { type: graphql.GraphQLInt },
              teamSize: { type: graphql.GraphQLInt },
              tournamentTypeId: { type: graphql.GraphQLInt },
              originalTournamentTypeId: { type: graphql.GraphQLInt },
              tournamentTypeName: { type: graphql.GraphQLString },
              tournamentStartDateTime: { type: graphql.GraphQLString },
              tournamentEndDateTime: { type: graphql.GraphQLString },
              registrationCutoffDateTime: { type: graphql.GraphQLString },
              isPublic: { type: graphql.GraphQLBoolean },
              isFavorite: { type: graphql.GraphQLBoolean },
              enableMatchLobby: { type: graphql.GraphQLBoolean },
              imageLogo: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentapiTournamentByTournamentIdresponseimageLogoResponse',
                  fields: {
                    urlPath: { type: graphql.GraphQLString },
                    relativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              imageBackground: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentapiTournamentByTournamentIdresponseimageBackgroundResponse',
                  fields: {
                    urlPath: { type: graphql.GraphQLString },
                    relativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              joinPasswordRequired: { type: graphql.GraphQLBoolean },
              hasConsolationRound: { type: graphql.GraphQLBoolean },
              currentNumberOfParticipants: { type: graphql.GraphQLInt },
              powerRankingProfileId: { type: graphql.GraphQLInt },
              platformGame: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentapiTournamentByTournamentIdresponseplatformGameResponse',
                  fields: {
                    gamePlatformFranchiseTitleId: { type: graphql.GraphQLInt },
                    platform: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentapiTournamentByTournamentIdresponseplatformGameplatformResponse',
                        fields: {
                          gamePlatformId: { type: graphql.GraphQLInt },
                          gamePlatformCode: { type: graphql.GraphQLString },
                          gamePlatform: { type: graphql.GraphQLString },
                          imageSmall: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentapiTournamentByTournamentIdresponseplatformGameplatformimageSmallResponse',
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
                    game: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentapiTournamentByTournamentIdresponseplatformGamegameResponse',
                        fields: {
                          gameTitleId: { type: graphql.GraphQLInt },
                          gameName: { type: graphql.GraphQLString },
                          gameShortCode: { type: graphql.GraphQLString },
                          gameDescription: { type: graphql.GraphQLString },
                          gameWebsite: { type: graphql.GraphQLString },
                          imageLarge: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentapiTournamentByTournamentIdresponseplatformGamegameimageLargeResponse',
                              fields: {
                                urlPath: { type: graphql.GraphQLString },
                                relativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          imageSmall: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentapiTournamentByTournamentIdresponseplatformGamegameimageSmallResponse',
                              fields: {
                                urlPath: { type: graphql.GraphQLString },
                                relativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          imageBackground: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentapiTournamentByTournamentIdresponseplatformGamegameimageBackgroundResponse',
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
                                'pollingTournamentapiTournamentByTournamentIdresponseplatformGamegamefranchiseResponse',
                              fields: {
                                gameFranchiseId: { type: graphql.GraphQLInt },
                                gameFranchise: { type: graphql.GraphQLString },
                                imageLarge: {
                                  type: new graphql.GraphQLObjectType({
                                    name:
                                      'pollingTournamentapiTournamentByTournamentIdresponseplatformGamegamefranchiseimageLargeResponse',
                                    fields: {
                                      urlPath: { type: graphql.GraphQLString },
                                      relativePath: {
                                        type: graphql.GraphQLString
                                      }
                                    }
                                  })
                                },
                                imageSmall: {
                                  type: new graphql.GraphQLObjectType({
                                    name:
                                      'pollingTournamentapiTournamentByTournamentIdresponseplatformGamegamefranchiseimageSmallResponse',
                                    fields: {
                                      urlPath: { type: graphql.GraphQLString },
                                      relativePath: {
                                        type: graphql.GraphQLString
                                      }
                                    }
                                  })
                                },
                                imageBackground: {
                                  type: new graphql.GraphQLObjectType({
                                    name:
                                      'pollingTournamentapiTournamentByTournamentIdresponseplatformGamegamefranchiseimageBackgroundResponse',
                                    fields: {
                                      urlPath: { type: graphql.GraphQLString },
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
                                'pollingTournamentapiTournamentByTournamentIdresponseplatformGamegamedeveloperResponse',
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
                          hearthstoneManageDecks: {
                            type: graphql.GraphQLBoolean
                          },
                          isActive: { type: graphql.GraphQLBoolean }
                        }
                      })
                    },
                    gamePlatformFranchiseTitleStateId: {
                      type: graphql.GraphQLInt
                    },
                    gameAddedDateTime: { type: graphql.GraphQLString },
                    gameDownloadLink: { type: graphql.GraphQLString },
                    chatPanelGuid: { type: graphql.GraphQLString },
                    imageLarge: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentapiTournamentByTournamentIdresponseplatformGameimageLargeResponse',
                        fields: {
                          urlPath: { type: graphql.GraphQLString },
                          relativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    imageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentapiTournamentByTournamentIdresponseplatformGameimageSmallResponse',
                        fields: {
                          urlPath: { type: graphql.GraphQLString },
                          relativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    imageBackground: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentapiTournamentByTournamentIdresponseplatformGameimageBackgroundResponse',
                        fields: {
                          urlPath: { type: graphql.GraphQLString },
                          relativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    totalWinnings: { type: graphql.GraphQLInt },
                    thirdPartyApplicationId: { type: graphql.GraphQLString },
                    thirdPartyApiKey: { type: graphql.GraphQLString },
                    gameReleaseVersion: { type: graphql.GraphQLString },
                    gameRevisedDateTime: { type: graphql.GraphQLString },
                    gameVersion: { type: graphql.GraphQLString },
                    gameVersionNeedsVerification: {
                      type: graphql.GraphQLBoolean
                    },
                    issueGamesServerToMatch: { type: graphql.GraphQLBoolean },
                    tournamentCount: { type: graphql.GraphQLInt },
                    validationMethodTypeId: { type: graphql.GraphQLInt },
                    externalCallbackTemplateId: { type: graphql.GraphQLInt },
                    internalCallbackTemplateId: { type: graphql.GraphQLInt },
                    gameServerModVersion: { type: graphql.GraphQLFloat }
                  }
                })
              },
              gameTitleMode: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentapiTournamentByTournamentIdresponsegameTitleModeResponse',
                  fields: {
                    gameTitleModeId: { type: graphql.GraphQLInt },
                    gameTitleId: { type: graphql.GraphQLInt },
                    gameTitleMode: { type: graphql.GraphQLString },
                    isActive: { type: graphql.GraphQLBoolean }
                  }
                })
              },
              lastUpdatedDateTime: { type: graphql.GraphQLString },
              entryFee: { type: graphql.GraphQLInt },
              serviceFee: { type: graphql.GraphQLInt },
              totalFee: { type: graphql.GraphQLInt }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
