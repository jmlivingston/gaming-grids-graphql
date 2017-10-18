const graphql = require('graphql')

module.exports = {
  apiGame: {
    method: 'POST',
    url: 'api/Game/',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        gameShortCode: { type: graphql.GraphQLString },
        gameFranchiseId: { type: graphql.GraphQLInt },
        gameDeveloperId: { type: graphql.GraphQLInt },
        gameName: { type: graphql.GraphQLString },
        gameDescription: { type: graphql.GraphQLString },
        gameWebsite: { type: graphql.GraphQLString },
        minimumMinutesBetweenTournamentRounds: { type: graphql.GraphQLInt },
        maximumPlayersAllowed: { type: graphql.GraphQLInt },
        imageLargeUrl: { type: graphql.GraphQLString },
        imageSmallUrl: { type: graphql.GraphQLString },
        imageBackgroundUrl: { type: graphql.GraphQLString },
        hasTeamSides: { type: graphql.GraphQLBoolean },
        isActive: { type: graphql.GraphQLBoolean }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlGameapiGameResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'controlGameapiGameresponseResponse',
            fields: {
              gameTitleId: { type: graphql.GraphQLInt },
              gameName: { type: graphql.GraphQLString },
              gameShortCode: { type: graphql.GraphQLString },
              gameDescription: { type: graphql.GraphQLString },
              gameWebsite: { type: graphql.GraphQLString },
              imageLarge: {
                type: new graphql.GraphQLObjectType({
                  name: 'controlGameapiGameresponseimageLargeResponse',
                  fields: {
                    urlPath: { type: graphql.GraphQLString },
                    relativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              imageSmall: {
                type: new graphql.GraphQLObjectType({
                  name: 'controlGameapiGameresponseimageSmallResponse',
                  fields: {
                    urlPath: { type: graphql.GraphQLString },
                    relativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              imageBackground: {
                type: new graphql.GraphQLObjectType({
                  name: 'controlGameapiGameresponseimageBackgroundResponse',
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
                  name: 'controlGameapiGameresponsefranchiseResponse',
                  fields: {
                    gameFranchiseId: { type: graphql.GraphQLInt },
                    gameFranchise: { type: graphql.GraphQLString },
                    imageLarge: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'controlGameapiGameresponsefranchiseimageLargeResponse',
                        fields: {
                          urlPath: { type: graphql.GraphQLString },
                          relativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    imageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'controlGameapiGameresponsefranchiseimageSmallResponse',
                        fields: {
                          urlPath: { type: graphql.GraphQLString },
                          relativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    imageBackground: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'controlGameapiGameresponsefranchiseimageBackgroundResponse',
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
                  name: 'controlGameapiGameresponsedeveloperResponse',
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
  apiGameBygameShortCode: {
    method: 'DELETE',
    url: 'api/Game/{gameShortCode}',
    response: new graphql.GraphQLObjectType({
      name: 'controlGameapiGameBygameShortCodeResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameBygameShortCodePlatformByplatformCodeStatus: {
    method: 'PUT',
    url: 'api/Game/{gameShortCode}/platform/{platformCode}/Status',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { stateId: { type: graphql.GraphQLInt } }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'controlGameapiGameBygameShortCodePlatformByplatformCodeStatusResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameModeBygameTitleModeIdHearthstoneDeck: {
    method: 'POST',
    url: 'api/Game/mode/{gameTitleModeId}/HearthstoneDeck',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        hearthstoneDeck: { type: graphql.GraphQLString },
        hearthstoneDeckImage: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlGameapiGameModeBygameTitleModeIdHearthstoneDeckResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameModeBygameTitleModeIdHearthstoneDeckBydeckId: {
    method: 'DELETE',
    url: 'api/Game/mode/{gameTitleModeId}/HearthstoneDeck/{deckId}/',
    response: new graphql.GraphQLObjectType({
      name:
        'controlGameapiGameModeBygameTitleModeIdHearthstoneDeckBydeckIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameModeBygameTitleModeIdMap: {
    method: 'POST',
    url: 'api/Game/mode/{gameTitleModeId}/Map',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        mapFileName: { type: graphql.GraphQLString },
        mapDisplayName: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlGameapiGameModeBygameTitleModeIdMapResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameModeBygameTitleModeIdMapBymapId: {
    method: 'DELETE',
    url: 'api/Game/mode/{gameTitleModeId}/Map/{mapId}',
    response: new graphql.GraphQLObjectType({
      name: 'controlGameapiGameModeBygameTitleModeIdMapBymapIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameBygameShortCodeRules: {
    method: 'POST',
    url: 'api/Game/{gameShortCode}/Rules',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        ruleTitle: { type: graphql.GraphQLString },
        rule: { type: graphql.GraphQLString },
        isOfficial: { type: graphql.GraphQLBoolean }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlGameapiGameBygameShortCodeRulesResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameBygameShortCodeRulesByruleId: {
    method: 'DELETE',
    url: 'api/Game/{gameShortCode}/Rules/{ruleId}',
    response: new graphql.GraphQLObjectType({
      name: 'controlGameapiGameBygameShortCodeRulesByruleIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGamePlatform: {
    method: 'POST',
    url: 'api/Game/Platform',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        platformCode: { type: graphql.GraphQLString },
        platformName: { type: graphql.GraphQLString },
        imageUrl: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlGameapiGamePlatformResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGamePlatformByplatformCode: {
    method: 'DELETE',
    url: 'api/Game/Platform/{platformCode}',
    response: new graphql.GraphQLObjectType({
      name: 'controlGameapiGamePlatformByplatformCodeResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameFranchise: {
    method: 'POST',
    url: 'api/Game/Franchise',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        gameFranchise: { type: graphql.GraphQLString },
        imageLargeUrl: { type: graphql.GraphQLString },
        imageSmallUrl: { type: graphql.GraphQLString },
        imageBackgroundUrl: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlGameapiGameFranchiseResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameFranchiseByfranchiseId: {
    method: 'DELETE',
    url: 'api/Game/Franchise/{franchiseId}',
    response: new graphql.GraphQLObjectType({
      name: 'controlGameapiGameFranchiseByfranchiseIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameBygameShortCodeSide: {
    method: 'POST',
    url: 'api/Game/{gameShortCode}/Side',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { teamSideName: { type: graphql.GraphQLString } }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlGameapiGameBygameShortCodeSideResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameSideByteamSideId: {
    method: 'DELETE',
    url: 'api/Game/Side/{teamSideId}',
    response: new graphql.GraphQLObjectType({
      name: 'controlGameapiGameSideByteamSideIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameDeveloper: {
    method: 'POST',
    url: 'api/Game/Developer',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        gameDeveloper: { type: graphql.GraphQLString },
        website: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlGameapiGameDeveloperResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameDeveloperBydeveloperId: {
    method: 'DELETE',
    url: 'api/Game/Developer/{developerId}',
    response: new graphql.GraphQLObjectType({
      name: 'controlGameapiGameDeveloperBydeveloperIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameBygameShortCodeMode: {
    method: 'POST',
    url: 'api/Game/{gameShortCode}/Mode',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { gameMode: { type: graphql.GraphQLString } }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlGameapiGameBygameShortCodeModeResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameModeBygameTitleModeId: {
    method: 'DELETE',
    url: 'api/Game/Mode/{gameTitleModeId}',
    response: new graphql.GraphQLObjectType({
      name: 'controlGameapiGameModeBygameTitleModeIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameBygameShortCodePlatformByplatformCode: {
    method: 'PUT',
    url: 'api/Game/{gameShortCode}/platform/{platformCode}',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        gamePlatformFranchiseTitleStateId: { type: graphql.GraphQLInt },
        gameDownloadLink: { type: graphql.GraphQLString },
        validationMethodTypeId: { type: graphql.GraphQLInt },
        imageLargeUrl: { type: graphql.GraphQLString },
        imageSmallUrl: { type: graphql.GraphQLString },
        imageBackgroundUrl: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlGameapiGameBygameShortCodePlatformByplatformCodeResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'controlGameapiGameBygameShortCodePlatformByplatformCoderesponseResponse',
            fields: {
              gamePlatformFranchiseTitleId: { type: graphql.GraphQLInt },
              platform: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlGameapiGameBygameShortCodePlatformByplatformCoderesponseplatformResponse',
                  fields: {
                    gamePlatformId: { type: graphql.GraphQLInt },
                    gamePlatformCode: { type: graphql.GraphQLString },
                    gamePlatform: { type: graphql.GraphQLString },
                    imageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'controlGameapiGameBygameShortCodePlatformByplatformCoderesponseplatformimageSmallResponse',
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
                    'controlGameapiGameBygameShortCodePlatformByplatformCoderesponsegameResponse',
                  fields: {
                    gameTitleId: { type: graphql.GraphQLInt },
                    gameName: { type: graphql.GraphQLString },
                    gameShortCode: { type: graphql.GraphQLString },
                    gameDescription: { type: graphql.GraphQLString },
                    gameWebsite: { type: graphql.GraphQLString },
                    imageLarge: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'controlGameapiGameBygameShortCodePlatformByplatformCoderesponsegameimageLargeResponse',
                        fields: {
                          urlPath: { type: graphql.GraphQLString },
                          relativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    imageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'controlGameapiGameBygameShortCodePlatformByplatformCoderesponsegameimageSmallResponse',
                        fields: {
                          urlPath: { type: graphql.GraphQLString },
                          relativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    imageBackground: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'controlGameapiGameBygameShortCodePlatformByplatformCoderesponsegameimageBackgroundResponse',
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
                          'controlGameapiGameBygameShortCodePlatformByplatformCoderesponsegamefranchiseResponse',
                        fields: {
                          gameFranchiseId: { type: graphql.GraphQLInt },
                          gameFranchise: { type: graphql.GraphQLString },
                          imageLarge: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'controlGameapiGameBygameShortCodePlatformByplatformCoderesponsegamefranchiseimageLargeResponse',
                              fields: {
                                urlPath: { type: graphql.GraphQLString },
                                relativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          imageSmall: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'controlGameapiGameBygameShortCodePlatformByplatformCoderesponsegamefranchiseimageSmallResponse',
                              fields: {
                                urlPath: { type: graphql.GraphQLString },
                                relativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          imageBackground: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'controlGameapiGameBygameShortCodePlatformByplatformCoderesponsegamefranchiseimageBackgroundResponse',
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
                          'controlGameapiGameBygameShortCodePlatformByplatformCoderesponsegamedeveloperResponse',
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
              gamePlatformFranchiseTitleStateId: { type: graphql.GraphQLInt },
              gameAddedDateTime: { type: graphql.GraphQLString },
              gameDownloadLink: { type: graphql.GraphQLString },
              chatPanelGuid: { type: graphql.GraphQLString },
              imageLarge: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlGameapiGameBygameShortCodePlatformByplatformCoderesponseimageLargeResponse',
                  fields: {
                    urlPath: { type: graphql.GraphQLString },
                    relativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              imageSmall: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlGameapiGameBygameShortCodePlatformByplatformCoderesponseimageSmallResponse',
                  fields: {
                    urlPath: { type: graphql.GraphQLString },
                    relativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              imageBackground: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlGameapiGameBygameShortCodePlatformByplatformCoderesponseimageBackgroundResponse',
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
              gameVersionNeedsVerification: { type: graphql.GraphQLBoolean },
              issueGamesServerToMatch: { type: graphql.GraphQLBoolean },
              tournamentCount: { type: graphql.GraphQLInt },
              validationMethodTypeId: { type: graphql.GraphQLInt },
              externalCallbackTemplateId: { type: graphql.GraphQLInt },
              internalCallbackTemplateId: { type: graphql.GraphQLInt },
              gameServerModVersion: { type: graphql.GraphQLFloat }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameBygameShortCodePlatformByplatformCodeMetrics: {
    method: 'GET',
    url: 'api/Game/{gameShortCode}/Platform/{platformCode}/Metrics',
    response: new graphql.GraphQLObjectType({
      name:
        'controlGameapiGameBygameShortCodePlatformByplatformCodeMetricsResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlGameapiGameBygameShortCodePlatformByplatformCodeMetricsresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlGameapiGameBygameShortCodePlatformByplatformCodeMetricsresponseitemResponse',
                    fields: {
                      gamePlatformFranchiseTitleMetricSnapshotId: {
                        type: graphql.GraphQLInt
                      },
                      gamePlatformFranchiseTitleId: {
                        type: graphql.GraphQLInt
                      },
                      snapshotDateTime: { type: graphql.GraphQLString },
                      unconfirmedPlayerCount: { type: graphql.GraphQLInt },
                      confirmedPlayerCount: { type: graphql.GraphQLInt },
                      activeTeamCount: { type: graphql.GraphQLInt },
                      disbanedTeamCount: { type: graphql.GraphQLInt },
                      fivePlayersOrMoreTeamCount: { type: graphql.GraphQLInt },
                      onlineGamingServerCount: { type: graphql.GraphQLInt },
                      offlineGamingServerCount: { type: graphql.GraphQLInt },
                      liveTournamentCount: { type: graphql.GraphQLInt },
                      completedTournamentCount: { type: graphql.GraphQLInt },
                      upcomingTournamentCount: { type: graphql.GraphQLInt },
                      tournamentMatchCount: { type: graphql.GraphQLInt },
                      disputedTournamentMatchCount: {
                        type: graphql.GraphQLInt
                      },
                      forfeitTournamentMatchCount: { type: graphql.GraphQLInt }
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
