const graphql = require('graphql')

module.exports = {
  apiTournamentSeries: {
    method: 'GET',
    url: 'api/Tournament/Series/',
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentSeriesapiTournamentSeriesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientTournamentSeriesapiTournamentSeriesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientTournamentSeriesapiTournamentSeriesresponseitemResponse',
                    fields: {
                      tournamentSeriesId: { type: graphql.GraphQLInt },
                      tournamentSeriesStateId: { type: graphql.GraphQLInt },
                      tournamentCount: { type: graphql.GraphQLInt },
                      openPlayerCount: { type: graphql.GraphQLInt },
                      premiumlayerCount: { type: graphql.GraphQLInt },
                      platformGame: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTournamentSeriesapiTournamentSeriesresponseitemplatformGameResponse',
                          fields: {
                            gamePlatformFranchiseTitleId: {
                              type: graphql.GraphQLInt
                            },
                            platform: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTournamentSeriesapiTournamentSeriesresponseitemplatformGameplatformResponse',
                                fields: {
                                  gamePlatformId: { type: graphql.GraphQLInt },
                                  gamePlatformCode: {
                                    type: graphql.GraphQLString
                                  },
                                  gamePlatform: { type: graphql.GraphQLString },
                                  imageSmall: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientTournamentSeriesapiTournamentSeriesresponseitemplatformGameplatformimageSmallResponse',
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
                            game: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTournamentSeriesapiTournamentSeriesresponseitemplatformGamegameResponse',
                                fields: {
                                  gameTitleId: { type: graphql.GraphQLInt },
                                  gameName: { type: graphql.GraphQLString },
                                  gameShortCode: {
                                    type: graphql.GraphQLString
                                  },
                                  gameDescription: {
                                    type: graphql.GraphQLString
                                  },
                                  gameWebsite: { type: graphql.GraphQLString },
                                  imageLarge: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientTournamentSeriesapiTournamentSeriesresponseitemplatformGamegameimageLargeResponse',
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
                                        'clientTournamentSeriesapiTournamentSeriesresponseitemplatformGamegameimageSmallResponse',
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
                                        'clientTournamentSeriesapiTournamentSeriesresponseitemplatformGamegameimageBackgroundResponse',
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
                                        'clientTournamentSeriesapiTournamentSeriesresponseitemplatformGamegamefranchiseResponse',
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
                                              'clientTournamentSeriesapiTournamentSeriesresponseitemplatformGamegamefranchiseimageLargeResponse',
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
                                              'clientTournamentSeriesapiTournamentSeriesresponseitemplatformGamegamefranchiseimageSmallResponse',
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
                                              'clientTournamentSeriesapiTournamentSeriesresponseitemplatformGamegamefranchiseimageBackgroundResponse',
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
                                  developer: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientTournamentSeriesapiTournamentSeriesresponseitemplatformGamegamedeveloperResponse',
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
                                  'clientTournamentSeriesapiTournamentSeriesresponseitemplatformGameimageLargeResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTournamentSeriesapiTournamentSeriesresponseitemplatformGameimageSmallResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTournamentSeriesapiTournamentSeriesresponseitemplatformGameimageBackgroundResponse',
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
                            gameServerModVersion: { type: graphql.GraphQLFloat }
                          }
                        })
                      },
                      tournamentSeriesName: { type: graphql.GraphQLString },
                      gamePlatformFranchiseTitleId: {
                        type: graphql.GraphQLInt
                      },
                      tournamentSubscriptionTypeId: {
                        type: graphql.GraphQLInt
                      },
                      registrationOpenDateTIme: { type: graphql.GraphQLString },
                      tournamentStartDateTime: { type: graphql.GraphQLString },
                      tournamentSerieseDoesCycle: {
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
  apiTournamentSeriesByseriesId: {
    method: 'GET',
    url: 'api/Tournament/Series/{seriesId}',
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentSeriesapiTournamentSeriesByseriesIdResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientTournamentSeriesapiTournamentSeriesByseriesIdresponseResponse',
            fields: {
              tournamentSeriesId: { type: graphql.GraphQLInt },
              tournamentSeriesStateId: { type: graphql.GraphQLInt },
              tournamentCount: { type: graphql.GraphQLInt },
              openPlayerCount: { type: graphql.GraphQLInt },
              premiumlayerCount: { type: graphql.GraphQLInt },
              platformGame: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientTournamentSeriesapiTournamentSeriesByseriesIdresponseplatformGameResponse',
                  fields: {
                    gamePlatformFranchiseTitleId: { type: graphql.GraphQLInt },
                    platform: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientTournamentSeriesapiTournamentSeriesByseriesIdresponseplatformGameplatformResponse',
                        fields: {
                          gamePlatformId: { type: graphql.GraphQLInt },
                          gamePlatformCode: { type: graphql.GraphQLString },
                          gamePlatform: { type: graphql.GraphQLString },
                          imageSmall: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'clientTournamentSeriesapiTournamentSeriesByseriesIdresponseplatformGameplatformimageSmallResponse',
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
                          'clientTournamentSeriesapiTournamentSeriesByseriesIdresponseplatformGamegameResponse',
                        fields: {
                          gameTitleId: { type: graphql.GraphQLInt },
                          gameName: { type: graphql.GraphQLString },
                          gameShortCode: { type: graphql.GraphQLString },
                          gameDescription: { type: graphql.GraphQLString },
                          gameWebsite: { type: graphql.GraphQLString },
                          imageLarge: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'clientTournamentSeriesapiTournamentSeriesByseriesIdresponseplatformGamegameimageLargeResponse',
                              fields: {
                                urlPath: { type: graphql.GraphQLString },
                                relativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          imageSmall: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'clientTournamentSeriesapiTournamentSeriesByseriesIdresponseplatformGamegameimageSmallResponse',
                              fields: {
                                urlPath: { type: graphql.GraphQLString },
                                relativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          imageBackground: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'clientTournamentSeriesapiTournamentSeriesByseriesIdresponseplatformGamegameimageBackgroundResponse',
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
                                'clientTournamentSeriesapiTournamentSeriesByseriesIdresponseplatformGamegamefranchiseResponse',
                              fields: {
                                gameFranchiseId: { type: graphql.GraphQLInt },
                                gameFranchise: { type: graphql.GraphQLString },
                                imageLarge: {
                                  type: new graphql.GraphQLObjectType({
                                    name:
                                      'clientTournamentSeriesapiTournamentSeriesByseriesIdresponseplatformGamegamefranchiseimageLargeResponse',
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
                                      'clientTournamentSeriesapiTournamentSeriesByseriesIdresponseplatformGamegamefranchiseimageSmallResponse',
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
                                      'clientTournamentSeriesapiTournamentSeriesByseriesIdresponseplatformGamegamefranchiseimageBackgroundResponse',
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
                                'clientTournamentSeriesapiTournamentSeriesByseriesIdresponseplatformGamegamedeveloperResponse',
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
                          'clientTournamentSeriesapiTournamentSeriesByseriesIdresponseplatformGameimageLargeResponse',
                        fields: {
                          urlPath: { type: graphql.GraphQLString },
                          relativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    imageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientTournamentSeriesapiTournamentSeriesByseriesIdresponseplatformGameimageSmallResponse',
                        fields: {
                          urlPath: { type: graphql.GraphQLString },
                          relativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    imageBackground: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientTournamentSeriesapiTournamentSeriesByseriesIdresponseplatformGameimageBackgroundResponse',
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
              tournamentSeriesName: { type: graphql.GraphQLString },
              gamePlatformFranchiseTitleId: { type: graphql.GraphQLInt },
              tournamentSubscriptionTypeId: { type: graphql.GraphQLInt },
              registrationOpenDateTIme: { type: graphql.GraphQLString },
              tournamentStartDateTime: { type: graphql.GraphQLString },
              tournamentSerieseDoesCycle: { type: graphql.GraphQLBoolean }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
