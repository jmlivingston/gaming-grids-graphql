const graphql = require('graphql')

module.exports = {
  apiPlatformSearch: {
    method: 'GET',
    url: 'api/Platform/Search',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlatformapiPlatformSearchResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientPlatformapiPlatformSearchresponseResponse',
            fields: {
              tournaments: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlatformapiPlatformSearchresponsetournamentsResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlatformapiPlatformSearchresponsetournamentsitemResponse',
                          fields: {
                            entityOwnerId: { type: graphql.GraphQLInt },
                            isChallenge: { type: graphql.GraphQLBoolean },
                            hasPassword: { type: graphql.GraphQLBoolean },
                            tournamentTypeId: { type: graphql.GraphQLInt },
                            hasConsolationRound: {
                              type: graphql.GraphQLBoolean
                            },
                            estimatedPrizePool: { type: graphql.GraphQLInt },
                            organizer: { type: graphql.GraphQLString },
                            prizePoolAmount: { type: graphql.GraphQLInt },
                            entryFee: { type: graphql.GraphQLInt },
                            serviceFee: { type: graphql.GraphQLInt },
                            totalFee: { type: graphql.GraphQLInt },
                            isTournamentSpecificAdministrator: {
                              type: graphql.GraphQLBoolean
                            },
                            isPublic: { type: graphql.GraphQLBoolean },
                            challengeMinEntryFee: { type: graphql.GraphQLInt },
                            challengeMaxEntryFee: { type: graphql.GraphQLInt },
                            isPublished: { type: graphql.GraphQLBoolean },
                            gameName: { type: graphql.GraphQLString },
                            gameTournamentCount: { type: graphql.GraphQLInt },
                            doesCycle: { type: graphql.GraphQLBoolean },
                            maxCycleCount: { type: graphql.GraphQLInt },
                            cycleCount: { type: graphql.GraphQLInt },
                            canOnlyRegisterFromRegionId: {
                              type: graphql.GraphQLInt
                            },
                            canOnlyRegisterFromRegionName: {
                              type: graphql.GraphQLString
                            },
                            registrationCutoffDateTime: {
                              type: graphql.GraphQLString
                            },
                            tournamentStartDateTime: {
                              type: graphql.GraphQLString
                            },
                            tournamentEndDateTime: {
                              type: graphql.GraphQLString
                            },
                            tournamentIsLive: { type: graphql.GraphQLBoolean },
                            tournamentTypeName: { type: graphql.GraphQLString },
                            tournamentIsComplete: {
                              type: graphql.GraphQLBoolean
                            },
                            tournamentTitle: { type: graphql.GraphQLString },
                            imageLogo: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlatformapiPlatformSearchresponsetournamentsitemimageLogoResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlatformapiPlatformSearchresponsetournamentsitemimageBackgroundResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            teamSize: { type: graphql.GraphQLInt },
                            currentNumberOfParticipants: {
                              type: graphql.GraphQLInt
                            },
                            maximumNumberOfEntities: {
                              type: graphql.GraphQLInt
                            },
                            tournamentId: { type: graphql.GraphQLInt },
                            platformGame: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlatformapiPlatformSearchresponsetournamentsitemplatformGameResponse',
                                fields: {
                                  gamePlatformFranchiseTitleId: {
                                    type: graphql.GraphQLInt
                                  },
                                  platform: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlatformapiPlatformSearchresponsetournamentsitemplatformGameplatformResponse',
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
                                              'clientPlatformapiPlatformSearchresponsetournamentsitemplatformGameplatformimageSmallResponse',
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
                                        'clientPlatformapiPlatformSearchresponsetournamentsitemplatformGamegameResponse',
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
                                              'clientPlatformapiPlatformSearchresponsetournamentsitemplatformGamegameimageLargeResponse',
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
                                              'clientPlatformapiPlatformSearchresponsetournamentsitemplatformGamegameimageSmallResponse',
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
                                              'clientPlatformapiPlatformSearchresponsetournamentsitemplatformGamegameimageBackgroundResponse',
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
                                              'clientPlatformapiPlatformSearchresponsetournamentsitemplatformGamegamefranchiseResponse',
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
                                                      'clientPlatformapiPlatformSearchresponsetournamentsitemplatformGamegamefranchiseimageLargeResponse',
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
                                                      'clientPlatformapiPlatformSearchresponsetournamentsitemplatformGamegamefranchiseimageSmallResponse',
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
                                                      'clientPlatformapiPlatformSearchresponsetournamentsitemplatformGamegamefranchiseimageBackgroundResponse',
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
                                              'clientPlatformapiPlatformSearchresponsetournamentsitemplatformGamegamedeveloperResponse',
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
                                        'clientPlatformapiPlatformSearchresponsetournamentsitemplatformGameimageLargeResponse',
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
                                        'clientPlatformapiPlatformSearchresponsetournamentsitemplatformGameimageSmallResponse',
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
                                        'clientPlatformapiPlatformSearchresponsetournamentsitemplatformGameimageBackgroundResponse',
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
                            gameTitleMode: { type: graphql.GraphQLString },
                            keepAlive: { type: graphql.GraphQLString },
                            allowPreCheckin: { type: graphql.GraphQLBoolean },
                            bracketsBuilt: { type: graphql.GraphQLBoolean }
                          }
                        })
                      }
                    }
                  })
                )
              },
              games: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlatformapiPlatformSearchresponsegamesResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlatformapiPlatformSearchresponsegamesitemResponse',
                          fields: {
                            isValid: { type: graphql.GraphQLBoolean },
                            platforms: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlatformapiPlatformSearchresponsegamesitemplatformsResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlatformapiPlatformSearchresponsegamesitemplatformsitemResponse',
                                        fields: {
                                          gamePlatformFranchiseTitleId: {
                                            type: graphql.GraphQLInt
                                          },
                                          platform: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlatformapiPlatformSearchresponsegamesitemplatformsitemplatformResponse',
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
                                                          'clientPlatformapiPlatformSearchresponsegamesitemplatformsitemplatformimageSmallResponse',
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
                                          },
                                          game: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlatformapiPlatformSearchresponsegamesitemplatformsitemgameResponse',
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
                                                          'clientPlatformapiPlatformSearchresponsegamesitemplatformsitemgameimageLargeResponse',
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
                                                          'clientPlatformapiPlatformSearchresponsegamesitemplatformsitemgameimageSmallResponse',
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
                                                          'clientPlatformapiPlatformSearchresponsegamesitemplatformsitemgameimageBackgroundResponse',
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
                                                          'clientPlatformapiPlatformSearchresponsegamesitemplatformsitemgamefranchiseResponse',
                                                        fields: {
                                                          gameFranchiseId: {
                                                            type:
                                                              graphql.GraphQLInt
                                                          },
                                                          gameFranchise: {
                                                            type:
                                                              graphql.GraphQLString
                                                          },
                                                          imageLarge: {
                                                            type: new graphql.GraphQLObjectType(
                                                              {
                                                                name:
                                                                  'clientPlatformapiPlatformSearchresponsegamesitemplatformsitemgamefranchiseimageLargeResponse',
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
                                                                  'clientPlatformapiPlatformSearchresponsegamesitemplatformsitemgamefranchiseimageSmallResponse',
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
                                                                  'clientPlatformapiPlatformSearchresponsegamesitemplatformsitemgamefranchiseimageBackgroundResponse',
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
                                                          'clientPlatformapiPlatformSearchresponsegamesitemplatformsitemgamedeveloperResponse',
                                                        fields: {
                                                          gameDeveloperId: {
                                                            type:
                                                              graphql.GraphQLInt
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
                                              }
                                            )
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
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlatformapiPlatformSearchresponsegamesitemplatformsitemimageLargeResponse',
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
                                          imageSmall: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlatformapiPlatformSearchresponsegamesitemplatformsitemimageSmallResponse',
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
                                          imageBackground: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlatformapiPlatformSearchresponsegamesitemplatformsitemimageBackgroundResponse',
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
                                  'clientPlatformapiPlatformSearchresponsegamesitemimageLargeResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlatformapiPlatformSearchresponsegamesitemimageSmallResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlatformapiPlatformSearchresponsegamesitemimageBackgroundResponse',
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
                                  'clientPlatformapiPlatformSearchresponsegamesitemfranchiseResponse',
                                fields: {
                                  gameFranchiseId: { type: graphql.GraphQLInt },
                                  gameFranchise: {
                                    type: graphql.GraphQLString
                                  },
                                  imageLarge: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlatformapiPlatformSearchresponsegamesitemfranchiseimageLargeResponse',
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
                                        'clientPlatformapiPlatformSearchresponsegamesitemfranchiseimageSmallResponse',
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
                                        'clientPlatformapiPlatformSearchresponsegamesitemfranchiseimageBackgroundResponse',
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
                                  'clientPlatformapiPlatformSearchresponsegamesitemdeveloperResponse',
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
              players: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlatformapiPlatformSearchresponseplayersResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlatformapiPlatformSearchresponseplayersitemResponse',
                          fields: {
                            entityPlayerId: { type: graphql.GraphQLInt },
                            isOnline: { type: graphql.GraphQLBoolean },
                            parentOrganizationId: { type: graphql.GraphQLInt },
                            genderId: { type: graphql.GraphQLInt },
                            gender: { type: graphql.GraphQLString },
                            birthDate: { type: graphql.GraphQLString },
                            lastActivityDateTime: {
                              type: graphql.GraphQLString
                            },
                            numberOfTeams: { type: graphql.GraphQLInt },
                            lastLoginDateTime: { type: graphql.GraphQLString },
                            gameNicknames: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlatformapiPlatformSearchresponseplayersitemgameNicknamesResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlatformapiPlatformSearchresponseplayersitemgameNicknamesitemResponse',
                                        fields: {
                                          isTeam: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          nickname: {
                                            type: graphql.GraphQLString
                                          },
                                          gameShortCode: {
                                            type: graphql.GraphQLString
                                          }
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
                                    'clientPlatformapiPlatformSearchresponseplayersitemstreamingServicesResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlatformapiPlatformSearchresponseplayersitemstreamingServicesitemResponse',
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
                            },
                            isSystemAdministrator: {
                              type: graphql.GraphQLBoolean
                            },
                            systemAdministratorIssuedDateTime: {
                              type: graphql.GraphQLString
                            },
                            firstName: { type: graphql.GraphQLString },
                            lastName: { type: graphql.GraphQLString },
                            companyName: { type: graphql.GraphQLString },
                            registrationIp: { type: graphql.GraphQLString },
                            registrationDateTime: {
                              type: graphql.GraphQLString
                            },
                            clientApiId: { type: graphql.GraphQLString },
                            entityMembershipTypeId: {
                              type: graphql.GraphQLInt
                            },
                            entityMembershipId: { type: graphql.GraphQLString },
                            entityMembershipToken: {
                              type: graphql.GraphQLString
                            },
                            emailAddress: { type: graphql.GraphQLString },
                            teamMatchPlayStatisticsId: {
                              type: graphql.GraphQLInt
                            },
                            tournamentManagementPolicyId: {
                              type: graphql.GraphQLInt
                            },
                            lanModeEnabled: { type: graphql.GraphQLBoolean },
                            lanSeatLocation: { type: graphql.GraphQLString },
                            playerSubscriptionTypeId: {
                              type: graphql.GraphQLInt
                            },
                            playerSubscriptionExpirationDate: {
                              type: graphql.GraphQLString
                            },
                            isSkrillAuthorized: {
                              type: graphql.GraphQLBoolean
                            },
                            raffleTickets: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlatformapiPlatformSearchresponseplayersitemraffleTicketsResponse',
                                  fields: {
                                    capacity: { type: graphql.GraphQLInt },
                                    count: { type: graphql.GraphQLInt },
                                    item: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlatformapiPlatformSearchresponseplayersitemraffleTicketsitemResponse',
                                        fields: {
                                          raffleTicketId: {
                                            type: graphql.GraphQLInt
                                          },
                                          entityId: {
                                            type: graphql.GraphQLInt
                                          },
                                          raffleTicket: {
                                            type: graphql.GraphQLString
                                          },
                                          isDailyTicket: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          raffleTicketDate: {
                                            type: graphql.GraphQLString
                                          }
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
              teams: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlatformapiPlatformSearchresponseteamsResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlatformapiPlatformSearchresponseteamsitemResponse',
                          fields: {
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
              }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    }),
    uriParam: {
      search: {
        topPlayersCount: Number,
        topTeamsCount: Number,
        topTournamentCount: Number,
        searchTerm: String,
        topGamesCount: Number
      }
    }
  },
  apiPlatformSummaryPlayerWinners: {
    method: 'GET',
    url: 'api/Platform/summary/player/winners',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlatformapiPlatformSummaryPlayerWinnersResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'clientPlatformapiPlatformSummaryPlayerWinnersresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientPlatformapiPlatformSummaryPlayerWinnersresponseitemResponse',
                    fields: {
                      tournamentId: { type: graphql.GraphQLInt },
                      tournamentName: { type: graphql.GraphQLString },
                      tournamentDate: { type: graphql.GraphQLString },
                      entityId: { type: graphql.GraphQLInt },
                      displayName: { type: graphql.GraphQLString }
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
  apiPlatformSummaryPlayerRankingDaily: {
    method: 'GET',
    url: 'api/Platform/summary/player/ranking/daily',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlatformapiPlatformSummaryPlayerRankingDailyResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'clientPlatformapiPlatformSummaryPlayerRankingDailyresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientPlatformapiPlatformSummaryPlayerRankingDailyresponseitemResponse',
                    fields: {
                      powerRankingPoints: { type: graphql.GraphQLInt },
                      entityParticipantId: { type: graphql.GraphQLInt },
                      displayName: { type: graphql.GraphQLString },
                      rankingPosition: { type: graphql.GraphQLInt }
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
  apiPlatformSummaryPlayerRankingMonthlyByyearBymonth: {
    method: 'GET',
    url: 'api/Platform/summary/player/ranking/monthly/{year}/{month}',
    response: new graphql.GraphQLObjectType({
      name:
        'clientPlatformapiPlatformSummaryPlayerRankingMonthlyByyearBymonthResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'clientPlatformapiPlatformSummaryPlayerRankingMonthlyByyearBymonthresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientPlatformapiPlatformSummaryPlayerRankingMonthlyByyearBymonthresponseitemResponse',
                    fields: {
                      powerRankingPoints: { type: graphql.GraphQLInt },
                      entityParticipantId: { type: graphql.GraphQLInt },
                      displayName: { type: graphql.GraphQLString },
                      rankingPosition: { type: graphql.GraphQLInt }
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
  apiPlatformHomeContent: {
    method: 'GET',
    url: 'api/Platform/home/content',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlatformapiPlatformHomeContentResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientPlatformapiPlatformHomeContentresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientPlatformapiPlatformHomeContentresponseitemResponse',
                    fields: {
                      marketingBannerId: { type: graphql.GraphQLInt },
                      marketingBannerTitle: { type: graphql.GraphQLString },
                      marketingBannerLinkUrl: { type: graphql.GraphQLString },
                      marketingBannerImageUrl: { type: graphql.GraphQLString }
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
  apiPlatformFAQ: {
    method: 'GET',
    url: 'api/Platform/FAQ',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlatformapiPlatformFAQResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientPlatformapiPlatformFAQresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientPlatformapiPlatformFAQresponseitemResponse',
                    fields: {
                      frequentlyAskedQuestionId: { type: graphql.GraphQLInt },
                      languageId: { type: graphql.GraphQLInt },
                      question: { type: graphql.GraphQLString },
                      answer: { type: graphql.GraphQLString }
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
  apiPlatformVersion: {
    method: 'GET',
    url: 'api/Platform/Version',
    response: new graphql.GraphQLObjectType({
      name: 'clientPlatformapiPlatformVersionResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientPlatformapiPlatformVersionresponseResponse',
            fields: {
              releaseDate: { type: graphql.GraphQLString },
              version: { type: graphql.GraphQLString },
              releaseNotesLink: { type: graphql.GraphQLString },
              updateVersion: { type: graphql.GraphQLString },
              fullVersion: { type: graphql.GraphQLString }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
