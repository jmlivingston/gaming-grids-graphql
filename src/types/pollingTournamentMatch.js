const graphql = require('graphql')

module.exports = {
  apiTournamentMatchByTournamentMatchId: {
    method: 'GET',
    url: 'api/Tournament/Match/{TournamentMatchId}/',
    response: new graphql.GraphQLObjectType({
      name:
        'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseResponse',
            fields: {
              isTournamentAdministrator: { type: graphql.GraphQLBoolean },
              mySession: { type: graphql.GraphQLBoolean },
              isTeamCaptain: { type: graphql.GraphQLBoolean },
              isOnTeamA: { type: graphql.GraphQLBoolean },
              administrators: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseadministratorsResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseadministratorsitemResponse',
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
                      }
                    }
                  })
                )
              },
              tournamentProfile: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsetournamentProfileResponse',
                  fields: {
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
                          'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsetournamentProfileimageLogoResponse',
                        fields: {
                          urlPath: { type: graphql.GraphQLString },
                          relativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    imageBackground: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsetournamentProfileimageBackgroundResponse',
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
                          'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsetournamentProfileplatformGameResponse',
                        fields: {
                          gamePlatformFranchiseTitleId: {
                            type: graphql.GraphQLInt
                          },
                          platform: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsetournamentProfileplatformGameplatformResponse',
                              fields: {
                                gamePlatformId: { type: graphql.GraphQLInt },
                                gamePlatformCode: {
                                  type: graphql.GraphQLString
                                },
                                gamePlatform: { type: graphql.GraphQLString },
                                imageSmall: {
                                  type: new graphql.GraphQLObjectType({
                                    name:
                                      'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsetournamentProfileplatformGameplatformimageSmallResponse',
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
                          game: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsetournamentProfileplatformGamegameResponse',
                              fields: {
                                gameTitleId: { type: graphql.GraphQLInt },
                                gameName: { type: graphql.GraphQLString },
                                gameShortCode: { type: graphql.GraphQLString },
                                gameDescription: {
                                  type: graphql.GraphQLString
                                },
                                gameWebsite: { type: graphql.GraphQLString },
                                imageLarge: {
                                  type: new graphql.GraphQLObjectType({
                                    name:
                                      'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsetournamentProfileplatformGamegameimageLargeResponse',
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
                                      'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsetournamentProfileplatformGamegameimageSmallResponse',
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
                                      'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsetournamentProfileplatformGamegameimageBackgroundResponse',
                                    fields: {
                                      urlPath: { type: graphql.GraphQLString },
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
                                      'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsetournamentProfileplatformGamegamefranchiseResponse',
                                    fields: {
                                      gameFranchiseId: {
                                        type: graphql.GraphQLInt
                                      },
                                      gameFranchise: {
                                        type: graphql.GraphQLString
                                      },
                                      imageLarge: {
                                        type: new graphql.GraphQLObjectType({
                                          name:
                                            'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsetournamentProfileplatformGamegamefranchiseimageLargeResponse',
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
                                            'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsetournamentProfileplatformGamegamefranchiseimageSmallResponse',
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
                                            'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsetournamentProfileplatformGamegamefranchiseimageBackgroundResponse',
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
                                      'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsetournamentProfileplatformGamegamedeveloperResponse',
                                    fields: {
                                      gameDeveloperId: {
                                        type: graphql.GraphQLInt
                                      },
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
                                'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsetournamentProfileplatformGameimageLargeResponse',
                              fields: {
                                urlPath: { type: graphql.GraphQLString },
                                relativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          imageSmall: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsetournamentProfileplatformGameimageSmallResponse',
                              fields: {
                                urlPath: { type: graphql.GraphQLString },
                                relativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          imageBackground: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsetournamentProfileplatformGameimageBackgroundResponse',
                              fields: {
                                urlPath: { type: graphql.GraphQLString },
                                relativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          totalWinnings: { type: graphql.GraphQLInt },
                          thirdPartyApplicationId: {
                            type: graphql.GraphQLString
                          },
                          thirdPartyApiKey: { type: graphql.GraphQLString },
                          gameReleaseVersion: { type: graphql.GraphQLString },
                          gameRevisedDateTime: { type: graphql.GraphQLString },
                          gameVersion: { type: graphql.GraphQLString },
                          gameVersionNeedsVerification: {
                            type: graphql.GraphQLBoolean
                          },
                          issueGamesServerToMatch: {
                            type: graphql.GraphQLBoolean
                          },
                          tournamentCount: { type: graphql.GraphQLInt },
                          validationMethodTypeId: { type: graphql.GraphQLInt },
                          externalCallbackTemplateId: {
                            type: graphql.GraphQLInt
                          },
                          internalCallbackTemplateId: {
                            type: graphql.GraphQLInt
                          },
                          gameServerModVersion: { type: graphql.GraphQLFloat }
                        }
                      })
                    },
                    gameTitleMode: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsetournamentProfilegameTitleModeResponse',
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
              gamingServer: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsegamingServerResponse',
                  fields: {
                    gamingServerId: { type: graphql.GraphQLInt },
                    gamePlatformFranchiseTitleId: { type: graphql.GraphQLInt },
                    gameName: { type: graphql.GraphQLString },
                    gamingServerAddedDateTime: { type: graphql.GraphQLString },
                    gamingServerTypeCode: { type: graphql.GraphQLString },
                    gamingServerTypeId: { type: graphql.GraphQLInt },
                    gamingServerTypeName: { type: graphql.GraphQLString },
                    gamingServerLocationId: { type: graphql.GraphQLInt },
                    gamingServerCityName: { type: graphql.GraphQLString },
                    addressCountryId: { type: graphql.GraphQLInt },
                    addressCountry: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsegamingServeraddressCountryResponse',
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
                    gamingServerRegionId: { type: graphql.GraphQLInt },
                    gamingServerRegionName: { type: graphql.GraphQLString },
                    gamingServerName: { type: graphql.GraphQLString },
                    ipAddress: { type: graphql.GraphQLString },
                    streamingPort: { type: graphql.GraphQLString },
                    gamePort: { type: graphql.GraphQLString },
                    gameQueryPort: { type: graphql.GraphQLString },
                    gamingServerHostingProviderCode: {
                      type: graphql.GraphQLString
                    },
                    gamingServerHostingProviderId: { type: graphql.GraphQLInt },
                    gamingServerHostingProviderName: {
                      type: graphql.GraphQLString
                    },
                    gamingServerModeTypeCode: { type: graphql.GraphQLString },
                    gamingServerModeTypeId: { type: graphql.GraphQLInt },
                    gamingServerModeTypeName: { type: graphql.GraphQLString },
                    joinPassword: { type: graphql.GraphQLString },
                    lastHeartbeatDateTime: { type: graphql.GraphQLString },
                    externalCallbackTemplate: { type: graphql.GraphQLString },
                    internalCallbackTemplate: { type: graphql.GraphQLString },
                    isInUsed: { type: graphql.GraphQLBoolean },
                    gameModVersion: { type: graphql.GraphQLFloat },
                    currentGameModVersion: { type: graphql.GraphQLFloat },
                    isPremiumServer: { type: graphql.GraphQLBoolean },
                    thirdPartyServerIdentifier: { type: graphql.GraphQLString },
                    gameServerVersion: { type: graphql.GraphQLString },
                    isServerOutdated: { type: graphql.GraphQLBoolean },
                    platformCode: { type: graphql.GraphQLString },
                    gameShortCode: { type: graphql.GraphQLString },
                    lanTag: { type: graphql.GraphQLString }
                  }
                })
              },
              teamAPlayers: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseteamAPlayersResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseteamAPlayersitemResponse',
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
                            gamePlayerIdentifier: {
                              type: graphql.GraphQLString
                            },
                            steamId32: { type: graphql.GraphQLString },
                            steamId64: { type: graphql.GraphQLString },
                            profile: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseteamAPlayersitemprofileResponse',
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
                            firstName: { type: graphql.GraphQLString },
                            lastName: { type: graphql.GraphQLString },
                            addressCountry: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseteamAPlayersitemaddressCountryResponse',
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
                            streamingServices: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseteamAPlayersitemstreamingServicesResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseteamAPlayersitemstreamingServicesitemResponse',
                                        fields: {
                                          entityId: {
                                            type: graphql.GraphQLInt
                                          },
                                          streamName: {
                                            type: graphql.GraphQLString
                                          },
                                          streamLink: {
                                            type: graphql.GraphQLString
                                          },
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
                                          sourceName: {
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
                      }
                    }
                  })
                )
              },
              teamBPlayers: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseteamBPlayersResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseteamBPlayersitemResponse',
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
                            gamePlayerIdentifier: {
                              type: graphql.GraphQLString
                            },
                            steamId32: { type: graphql.GraphQLString },
                            steamId64: { type: graphql.GraphQLString },
                            profile: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseteamBPlayersitemprofileResponse',
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
                            firstName: { type: graphql.GraphQLString },
                            lastName: { type: graphql.GraphQLString },
                            addressCountry: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseteamBPlayersitemaddressCountryResponse',
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
                            streamingServices: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseteamBPlayersitemstreamingServicesResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseteamBPlayersitemstreamingServicesitemResponse',
                                        fields: {
                                          entityId: {
                                            type: graphql.GraphQLInt
                                          },
                                          streamName: {
                                            type: graphql.GraphQLString
                                          },
                                          streamLink: {
                                            type: graphql.GraphQLString
                                          },
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
                                          sourceName: {
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
                      }
                    }
                  })
                )
              },
              issuedGamingServerHistory: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseissuedGamingServerHistoryResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseissuedGamingServerHistoryitemResponse',
                          fields: {
                            issuedDateTime: { type: graphql.GraphQLString },
                            requestedServerChange: {
                              type: graphql.GraphQLBoolean
                            },
                            requestedByEntityId: { type: graphql.GraphQLInt },
                            gamingServerId: { type: graphql.GraphQLInt },
                            gamePlatformFranchiseTitleId: {
                              type: graphql.GraphQLInt
                            },
                            gameName: { type: graphql.GraphQLString },
                            gamingServerAddedDateTime: {
                              type: graphql.GraphQLString
                            },
                            gamingServerTypeCode: {
                              type: graphql.GraphQLString
                            },
                            gamingServerTypeId: { type: graphql.GraphQLInt },
                            gamingServerTypeName: {
                              type: graphql.GraphQLString
                            },
                            gamingServerLocationId: {
                              type: graphql.GraphQLInt
                            },
                            gamingServerCityName: {
                              type: graphql.GraphQLString
                            },
                            addressCountryId: { type: graphql.GraphQLInt },
                            addressCountry: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseissuedGamingServerHistoryitemaddressCountryResponse',
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
                            gamingServerRegionId: { type: graphql.GraphQLInt },
                            gamingServerRegionName: {
                              type: graphql.GraphQLString
                            },
                            gamingServerName: { type: graphql.GraphQLString },
                            ipAddress: { type: graphql.GraphQLString },
                            streamingPort: { type: graphql.GraphQLString },
                            gamePort: { type: graphql.GraphQLString },
                            gameQueryPort: { type: graphql.GraphQLString },
                            gamingServerHostingProviderCode: {
                              type: graphql.GraphQLString
                            },
                            gamingServerHostingProviderId: {
                              type: graphql.GraphQLInt
                            },
                            gamingServerHostingProviderName: {
                              type: graphql.GraphQLString
                            },
                            gamingServerModeTypeCode: {
                              type: graphql.GraphQLString
                            },
                            gamingServerModeTypeId: {
                              type: graphql.GraphQLInt
                            },
                            gamingServerModeTypeName: {
                              type: graphql.GraphQLString
                            },
                            joinPassword: { type: graphql.GraphQLString },
                            lastHeartbeatDateTime: {
                              type: graphql.GraphQLString
                            },
                            externalCallbackTemplate: {
                              type: graphql.GraphQLString
                            },
                            internalCallbackTemplate: {
                              type: graphql.GraphQLString
                            },
                            isInUsed: { type: graphql.GraphQLBoolean },
                            gameModVersion: { type: graphql.GraphQLFloat },
                            currentGameModVersion: {
                              type: graphql.GraphQLFloat
                            },
                            isPremiumServer: { type: graphql.GraphQLBoolean },
                            thirdPartyServerIdentifier: {
                              type: graphql.GraphQLString
                            },
                            gameServerVersion: { type: graphql.GraphQLString },
                            isServerOutdated: { type: graphql.GraphQLBoolean },
                            platformCode: { type: graphql.GraphQLString },
                            gameShortCode: { type: graphql.GraphQLString },
                            lanTag: { type: graphql.GraphQLString }
                          }
                        })
                      }
                    }
                  })
                )
              },
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
                    'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseentityOwnerProfileResponse',
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
                    'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseentityParticipantAResponse',
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
                          'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseentityParticipantAregionResponse',
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
                          'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseentityParticipantAprofileResponse',
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
                            'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseentityParticipantAhearthstoneDecksResponse',
                          fields: {
                            capacity: { type: graphql.GraphQLInt },
                            count: { type: graphql.GraphQLInt },
                            item: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseentityParticipantAhearthstoneDecksitemResponse',
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
                                        'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseentityParticipantAhearthstoneDecksitemhearthstoneDeckImageResponse',
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
                    'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseentityParticipantBResponse',
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
                          'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseentityParticipantBregionResponse',
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
                          'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseentityParticipantBprofileResponse',
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
                            'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseentityParticipantBhearthstoneDecksResponse',
                          fields: {
                            capacity: { type: graphql.GraphQLInt },
                            count: { type: graphql.GraphQLInt },
                            item: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseentityParticipantBhearthstoneDecksitemResponse',
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
                                        'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseentityParticipantBhearthstoneDecksitemhearthstoneDeckImageResponse',
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
                      'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsemapsPlayedResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsemapsPlayeditemResponse',
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
                                  'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsemapsPlayeditemmapResponse',
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
                    'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsedisputeResponse',
                  fields: {
                    tournamentMatchDisputeId: { type: graphql.GraphQLInt },
                    tournamentMatchId: { type: graphql.GraphQLInt },
                    disputeState: { type: graphql.GraphQLInt },
                    initiatedByPlayerId: { type: graphql.GraphQLInt },
                    initiatedByPlayerProfile: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsedisputeinitiatedByPlayerProfileResponse',
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
                    'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsestreamingServiceResponse',
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
                      'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseassistanceRequestsResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseassistanceRequestsitemResponse',
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
                      'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseactionLogResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseactionLogitemResponse',
                          fields: {
                            tournamentMatchActionLogId: {
                              type: graphql.GraphQLInt
                            },
                            entityId: { type: graphql.GraphQLInt },
                            entityProfile: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseactionLogitementityProfileResponse',
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
                      'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseplaybackResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponseplaybackitemResponse',
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
                    'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdresponsescoringImageResponse',
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
  apiTournamentMatchByTournamentMatchIdMessaging: {
    method: 'GET',
    url: 'api/Tournament/Match/{TournamentMatchId}/Messaging',
    response: new graphql.GraphQLObjectType({
      name:
        'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdMessagingResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdMessagingresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentMatchapiTournamentMatchByTournamentMatchIdMessagingresponseitemResponse',
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
  }
}
