const graphql = require('graphql')

module.exports = {
  apiGameTitleSearch: {
    method: 'GET',
    url: 'api/Game/title/Search',
    response: new graphql.GraphQLObjectType({
      name: 'clientGameapiGameTitleSearchResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientGameapiGameTitleSearchresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientGameapiGameTitleSearchresponseitemResponse',
                    fields: {
                      isValid: { type: graphql.GraphQLBoolean },
                      platforms: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientGameapiGameTitleSearchresponseitemplatformsResponse',
                            fields: {
                              capacity: { type: graphql.GraphQLInt },
                              count: { type: graphql.GraphQLInt },
                              item: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientGameapiGameTitleSearchresponseitemplatformsitemResponse',
                                  fields: {
                                    gamePlatformFranchiseTitleId: {
                                      type: graphql.GraphQLInt
                                    },
                                    platform: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientGameapiGameTitleSearchresponseitemplatformsitemplatformResponse',
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
                                                  'clientGameapiGameTitleSearchresponseitemplatformsitemplatformimageSmallResponse',
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
                                    },
                                    game: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientGameapiGameTitleSearchresponseitemplatformsitemgameResponse',
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
                                                  'clientGameapiGameTitleSearchresponseitemplatformsitemgameimageLargeResponse',
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
                                                  'clientGameapiGameTitleSearchresponseitemplatformsitemgameimageSmallResponse',
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
                                                  'clientGameapiGameTitleSearchresponseitemplatformsitemgameimageBackgroundResponse',
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
                                                  'clientGameapiGameTitleSearchresponseitemplatformsitemgamefranchiseResponse',
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
                                                          'clientGameapiGameTitleSearchresponseitemplatformsitemgamefranchiseimageLargeResponse',
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
                                                          'clientGameapiGameTitleSearchresponseitemplatformsitemgamefranchiseimageSmallResponse',
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
                                                          'clientGameapiGameTitleSearchresponseitemplatformsitemgamefranchiseimageBackgroundResponse',
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
                                          developer: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientGameapiGameTitleSearchresponseitemplatformsitemgamedeveloperResponse',
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
                                          'clientGameapiGameTitleSearchresponseitemplatformsitemimageLargeResponse',
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
                                          'clientGameapiGameTitleSearchresponseitemplatformsitemimageSmallResponse',
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
                                          'clientGameapiGameTitleSearchresponseitemplatformsitemimageBackgroundResponse',
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
                            'clientGameapiGameTitleSearchresponseitemimageLargeResponse',
                          fields: {
                            urlPath: { type: graphql.GraphQLString },
                            relativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      imageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameapiGameTitleSearchresponseitemimageSmallResponse',
                          fields: {
                            urlPath: { type: graphql.GraphQLString },
                            relativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      imageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameapiGameTitleSearchresponseitemimageBackgroundResponse',
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
                            'clientGameapiGameTitleSearchresponseitemfranchiseResponse',
                          fields: {
                            gameFranchiseId: { type: graphql.GraphQLInt },
                            gameFranchise: { type: graphql.GraphQLString },
                            imageLarge: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameapiGameTitleSearchresponseitemfranchiseimageLargeResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameapiGameTitleSearchresponseitemfranchiseimageSmallResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameapiGameTitleSearchresponseitemfranchiseimageBackgroundResponse',
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
                            'clientGameapiGameTitleSearchresponseitemdeveloperResponse',
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
    }),
    uriParam: {
      search: {
        searchTerm: String,
        topGamesCount: Number
      }
    }
  },
  apiGame: {
    method: 'GET',
    url: 'api/Game/',
    response: new graphql.GraphQLObjectType({
      name: 'clientGameapiGameResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientGameapiGameresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientGameapiGameresponseitemResponse',
                    fields: {
                      isValid: { type: graphql.GraphQLBoolean },
                      platforms: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientGameapiGameresponseitemplatformsResponse',
                            fields: {
                              capacity: { type: graphql.GraphQLInt },
                              count: { type: graphql.GraphQLInt },
                              item: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientGameapiGameresponseitemplatformsitemResponse',
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
                                          'clientGameapiGameresponseitemplatformsitemimageSmallResponse',
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
                      sides: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name: 'clientGameapiGameresponseitemsidesResponse',
                            fields: {
                              capacity: { type: graphql.GraphQLInt },
                              count: { type: graphql.GraphQLInt },
                              item: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientGameapiGameresponseitemsidesitemResponse',
                                  fields: {
                                    gameTitleTeamSideId: {
                                      type: graphql.GraphQLInt
                                    },
                                    gameTitleId: { type: graphql.GraphQLInt },
                                    gameTitleTeamSide: {
                                      type: graphql.GraphQLString
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
                            'clientGameapiGameresponseitemimageLargeResponse',
                          fields: {
                            urlPath: { type: graphql.GraphQLString },
                            relativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      imageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameapiGameresponseitemimageSmallResponse',
                          fields: {
                            urlPath: { type: graphql.GraphQLString },
                            relativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      imageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameapiGameresponseitemimageBackgroundResponse',
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
                            'clientGameapiGameresponseitemfranchiseResponse',
                          fields: {
                            gameFranchiseId: { type: graphql.GraphQLInt },
                            gameFranchise: { type: graphql.GraphQLString },
                            imageLarge: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameapiGameresponseitemfranchiseimageLargeResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameapiGameresponseitemfranchiseimageSmallResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameapiGameresponseitemfranchiseimageBackgroundResponse',
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
                            'clientGameapiGameresponseitemdeveloperResponse',
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
  apiGameBygameShortCode: {
    method: 'GET',
    url: 'api/Game/{gameShortCode}',
    response: new graphql.GraphQLObjectType({
      name: 'clientGameapiGameBygameShortCodeResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientGameapiGameBygameShortCoderesponseResponse',
            fields: {
              isValid: { type: graphql.GraphQLBoolean },
              platforms: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientGameapiGameBygameShortCoderesponseplatformsResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameapiGameBygameShortCoderesponseplatformsitemResponse',
                          fields: {
                            gamePlatformId: { type: graphql.GraphQLInt },
                            gamePlatformCode: { type: graphql.GraphQLString },
                            gamePlatform: { type: graphql.GraphQLString },
                            imageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameapiGameBygameShortCoderesponseplatformsitemimageSmallResponse',
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
              sides: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientGameapiGameBygameShortCoderesponsesidesResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameapiGameBygameShortCoderesponsesidesitemResponse',
                          fields: {
                            gameTitleTeamSideId: { type: graphql.GraphQLInt },
                            gameTitleId: { type: graphql.GraphQLInt },
                            gameTitleTeamSide: { type: graphql.GraphQLString },
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
                    'clientGameapiGameBygameShortCoderesponseimageLargeResponse',
                  fields: {
                    urlPath: { type: graphql.GraphQLString },
                    relativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              imageSmall: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientGameapiGameBygameShortCoderesponseimageSmallResponse',
                  fields: {
                    urlPath: { type: graphql.GraphQLString },
                    relativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              imageBackground: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientGameapiGameBygameShortCoderesponseimageBackgroundResponse',
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
                    'clientGameapiGameBygameShortCoderesponsefranchiseResponse',
                  fields: {
                    gameFranchiseId: { type: graphql.GraphQLInt },
                    gameFranchise: { type: graphql.GraphQLString },
                    imageLarge: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientGameapiGameBygameShortCoderesponsefranchiseimageLargeResponse',
                        fields: {
                          urlPath: { type: graphql.GraphQLString },
                          relativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    imageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientGameapiGameBygameShortCoderesponsefranchiseimageSmallResponse',
                        fields: {
                          urlPath: { type: graphql.GraphQLString },
                          relativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    imageBackground: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientGameapiGameBygameShortCoderesponsefranchiseimageBackgroundResponse',
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
                    'clientGameapiGameBygameShortCoderesponsedeveloperResponse',
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
  apiGameBygameShortCodePlatformByplatformCode: {
    method: 'GET',
    url: 'api/Game/{gameShortCode}/Platform/{platformCode}',
    response: new graphql.GraphQLObjectType({
      name: 'clientGameapiGameBygameShortCodePlatformByplatformCodeResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientGameapiGameBygameShortCodePlatformByplatformCoderesponseResponse',
            fields: {
              gamePlatformFranchiseTitleId: { type: graphql.GraphQLInt },
              platform: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientGameapiGameBygameShortCodePlatformByplatformCoderesponseplatformResponse',
                  fields: {
                    gamePlatformId: { type: graphql.GraphQLInt },
                    gamePlatformCode: { type: graphql.GraphQLString },
                    gamePlatform: { type: graphql.GraphQLString },
                    imageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientGameapiGameBygameShortCodePlatformByplatformCoderesponseplatformimageSmallResponse',
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
                    'clientGameapiGameBygameShortCodePlatformByplatformCoderesponsegameResponse',
                  fields: {
                    gameTitleId: { type: graphql.GraphQLInt },
                    gameName: { type: graphql.GraphQLString },
                    gameShortCode: { type: graphql.GraphQLString },
                    gameDescription: { type: graphql.GraphQLString },
                    gameWebsite: { type: graphql.GraphQLString },
                    imageLarge: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientGameapiGameBygameShortCodePlatformByplatformCoderesponsegameimageLargeResponse',
                        fields: {
                          urlPath: { type: graphql.GraphQLString },
                          relativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    imageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientGameapiGameBygameShortCodePlatformByplatformCoderesponsegameimageSmallResponse',
                        fields: {
                          urlPath: { type: graphql.GraphQLString },
                          relativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    imageBackground: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientGameapiGameBygameShortCodePlatformByplatformCoderesponsegameimageBackgroundResponse',
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
                          'clientGameapiGameBygameShortCodePlatformByplatformCoderesponsegamefranchiseResponse',
                        fields: {
                          gameFranchiseId: { type: graphql.GraphQLInt },
                          gameFranchise: { type: graphql.GraphQLString },
                          imageLarge: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'clientGameapiGameBygameShortCodePlatformByplatformCoderesponsegamefranchiseimageLargeResponse',
                              fields: {
                                urlPath: { type: graphql.GraphQLString },
                                relativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          imageSmall: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'clientGameapiGameBygameShortCodePlatformByplatformCoderesponsegamefranchiseimageSmallResponse',
                              fields: {
                                urlPath: { type: graphql.GraphQLString },
                                relativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          imageBackground: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'clientGameapiGameBygameShortCodePlatformByplatformCoderesponsegamefranchiseimageBackgroundResponse',
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
                          'clientGameapiGameBygameShortCodePlatformByplatformCoderesponsegamedeveloperResponse',
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
                    'clientGameapiGameBygameShortCodePlatformByplatformCoderesponseimageLargeResponse',
                  fields: {
                    urlPath: { type: graphql.GraphQLString },
                    relativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              imageSmall: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientGameapiGameBygameShortCodePlatformByplatformCoderesponseimageSmallResponse',
                  fields: {
                    urlPath: { type: graphql.GraphQLString },
                    relativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              imageBackground: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientGameapiGameBygameShortCodePlatformByplatformCoderesponseimageBackgroundResponse',
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
  apiGameFranchises: {
    method: 'GET',
    url: 'api/Game/Franchises',
    response: new graphql.GraphQLObjectType({
      name: 'clientGameapiGameFranchisesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientGameapiGameFranchisesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientGameapiGameFranchisesresponseitemResponse',
                    fields: {
                      gameFranchiseId: { type: graphql.GraphQLInt },
                      gameFranchise: { type: graphql.GraphQLString },
                      imageLarge: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameapiGameFranchisesresponseitemimageLargeResponse',
                          fields: {
                            urlPath: { type: graphql.GraphQLString },
                            relativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      imageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameapiGameFranchisesresponseitemimageSmallResponse',
                          fields: {
                            urlPath: { type: graphql.GraphQLString },
                            relativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      imageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameapiGameFranchisesresponseitemimageBackgroundResponse',
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
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameFranchiseByfranchiseId: {
    method: 'GET',
    url: 'api/Game/Franchise/{franchiseId}',
    response: new graphql.GraphQLObjectType({
      name: 'clientGameapiGameFranchiseByfranchiseIdResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientGameapiGameFranchiseByfranchiseIdresponseResponse',
            fields: {
              gameFranchiseId: { type: graphql.GraphQLInt },
              gameFranchise: { type: graphql.GraphQLString },
              imageLarge: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientGameapiGameFranchiseByfranchiseIdresponseimageLargeResponse',
                  fields: {
                    urlPath: { type: graphql.GraphQLString },
                    relativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              imageSmall: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientGameapiGameFranchiseByfranchiseIdresponseimageSmallResponse',
                  fields: {
                    urlPath: { type: graphql.GraphQLString },
                    relativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              imageBackground: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientGameapiGameFranchiseByfranchiseIdresponseimageBackgroundResponse',
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
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGamePlatforms: {
    method: 'GET',
    url: 'api/Game/Platforms',
    response: new graphql.GraphQLObjectType({
      name: 'clientGameapiGamePlatformsResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientGameapiGamePlatformsresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientGameapiGamePlatformsresponseitemResponse',
                    fields: {
                      gamePlatformId: { type: graphql.GraphQLInt },
                      gamePlatformCode: { type: graphql.GraphQLString },
                      gamePlatform: { type: graphql.GraphQLString },
                      imageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameapiGamePlatformsresponseitemimageSmallResponse',
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
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGamePlatformByplatformCode: {
    method: 'GET',
    url: 'api/Game/Platform/{platformCode}',
    response: new graphql.GraphQLObjectType({
      name: 'clientGameapiGamePlatformByplatformCodeResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientGameapiGamePlatformByplatformCoderesponseResponse',
            fields: {
              gamePlatformId: { type: graphql.GraphQLInt },
              gamePlatformCode: { type: graphql.GraphQLString },
              gamePlatform: { type: graphql.GraphQLString },
              imageSmall: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientGameapiGamePlatformByplatformCoderesponseimageSmallResponse',
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
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameSearch: {
    method: 'GET',
    url: 'api/Game/Search',
    response: new graphql.GraphQLObjectType({
      name: 'clientGameapiGameSearchResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientGameapiGameSearchresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientGameapiGameSearchresponseitemResponse',
                    fields: {
                      gamePlatformFranchiseTitleId: {
                        type: graphql.GraphQLInt
                      },
                      platform: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameapiGameSearchresponseitemplatformResponse',
                          fields: {
                            gamePlatformId: { type: graphql.GraphQLInt },
                            gamePlatformCode: { type: graphql.GraphQLString },
                            gamePlatform: { type: graphql.GraphQLString },
                            imageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameapiGameSearchresponseitemplatformimageSmallResponse',
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
                            'clientGameapiGameSearchresponseitemgameResponse',
                          fields: {
                            gameTitleId: { type: graphql.GraphQLInt },
                            gameName: { type: graphql.GraphQLString },
                            gameShortCode: { type: graphql.GraphQLString },
                            gameDescription: { type: graphql.GraphQLString },
                            gameWebsite: { type: graphql.GraphQLString },
                            imageLarge: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameapiGameSearchresponseitemgameimageLargeResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameapiGameSearchresponseitemgameimageSmallResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameapiGameSearchresponseitemgameimageBackgroundResponse',
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
                                  'clientGameapiGameSearchresponseitemgamefranchiseResponse',
                                fields: {
                                  gameFranchiseId: { type: graphql.GraphQLInt },
                                  gameFranchise: {
                                    type: graphql.GraphQLString
                                  },
                                  imageLarge: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientGameapiGameSearchresponseitemgamefranchiseimageLargeResponse',
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
                                        'clientGameapiGameSearchresponseitemgamefranchiseimageSmallResponse',
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
                                        'clientGameapiGameSearchresponseitemgamefranchiseimageBackgroundResponse',
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
                                  'clientGameapiGameSearchresponseitemgamedeveloperResponse',
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
                            'clientGameapiGameSearchresponseitemimageLargeResponse',
                          fields: {
                            urlPath: { type: graphql.GraphQLString },
                            relativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      imageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameapiGameSearchresponseitemimageSmallResponse',
                          fields: {
                            urlPath: { type: graphql.GraphQLString },
                            relativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      imageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameapiGameSearchresponseitemimageBackgroundResponse',
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
  apiGameSearchByplatformCode: {
    method: 'GET',
    url: 'api/Game/Search/{platformCode}',
    response: new graphql.GraphQLObjectType({
      name: 'clientGameapiGameSearchByplatformCodeResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientGameapiGameSearchByplatformCoderesponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientGameapiGameSearchByplatformCoderesponseitemResponse',
                    fields: {
                      gamePlatformFranchiseTitleId: {
                        type: graphql.GraphQLInt
                      },
                      platform: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameapiGameSearchByplatformCoderesponseitemplatformResponse',
                          fields: {
                            gamePlatformId: { type: graphql.GraphQLInt },
                            gamePlatformCode: { type: graphql.GraphQLString },
                            gamePlatform: { type: graphql.GraphQLString },
                            imageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameapiGameSearchByplatformCoderesponseitemplatformimageSmallResponse',
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
                            'clientGameapiGameSearchByplatformCoderesponseitemgameResponse',
                          fields: {
                            gameTitleId: { type: graphql.GraphQLInt },
                            gameName: { type: graphql.GraphQLString },
                            gameShortCode: { type: graphql.GraphQLString },
                            gameDescription: { type: graphql.GraphQLString },
                            gameWebsite: { type: graphql.GraphQLString },
                            imageLarge: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameapiGameSearchByplatformCoderesponseitemgameimageLargeResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameapiGameSearchByplatformCoderesponseitemgameimageSmallResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameapiGameSearchByplatformCoderesponseitemgameimageBackgroundResponse',
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
                                  'clientGameapiGameSearchByplatformCoderesponseitemgamefranchiseResponse',
                                fields: {
                                  gameFranchiseId: { type: graphql.GraphQLInt },
                                  gameFranchise: {
                                    type: graphql.GraphQLString
                                  },
                                  imageLarge: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientGameapiGameSearchByplatformCoderesponseitemgamefranchiseimageLargeResponse',
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
                                        'clientGameapiGameSearchByplatformCoderesponseitemgamefranchiseimageSmallResponse',
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
                                        'clientGameapiGameSearchByplatformCoderesponseitemgamefranchiseimageBackgroundResponse',
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
                                  'clientGameapiGameSearchByplatformCoderesponseitemgamedeveloperResponse',
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
                            'clientGameapiGameSearchByplatformCoderesponseitemimageLargeResponse',
                          fields: {
                            urlPath: { type: graphql.GraphQLString },
                            relativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      imageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameapiGameSearchByplatformCoderesponseitemimageSmallResponse',
                          fields: {
                            urlPath: { type: graphql.GraphQLString },
                            relativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      imageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameapiGameSearchByplatformCoderesponseitemimageBackgroundResponse',
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
  apiGameBygameShortCodePlatformByplatformCodePlayerByentityName: {
    method: 'DELETE',
    url: 'api/Game/{gameShortCode}/platform/{platformCode}/Player/{entityName}',
    response: new graphql.GraphQLObjectType({
      name:
        'clientGameapiGameBygameShortCodePlatformByplatformCodePlayerByentityNameResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameBygameShortCodePlatformByplatformCodeTeamByentityName: {
    method: 'DELETE',
    url: 'api/Game/{gameShortCode}/platform/{platformCode}/Team/{entityName}',
    response: new graphql.GraphQLObjectType({
      name:
        'clientGameapiGameBygameShortCodePlatformByplatformCodeTeamByentityNameResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameModeBygameTitleModeIdMaps: {
    method: 'GET',
    url: 'api/Game/mode/{gameTitleModeId}/maps',
    response: new graphql.GraphQLObjectType({
      name: 'clientGameapiGameModeBygameTitleModeIdMapsResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'clientGameapiGameModeBygameTitleModeIdMapsresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientGameapiGameModeBygameTitleModeIdMapsresponseitemResponse',
                    fields: {
                      gameTitleModeMapId: { type: graphql.GraphQLInt },
                      gameTitleModeId: { type: graphql.GraphQLInt },
                      mapFileName: { type: graphql.GraphQLString },
                      mapDisplayName: { type: graphql.GraphQLString },
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
  apiGameModeBygameTitleModeIdHearthstoneDecks: {
    method: 'GET',
    url: 'api/Game/mode/{gameTitleModeId}/HearthstoneDecks',
    response: new graphql.GraphQLObjectType({
      name: 'clientGameapiGameModeBygameTitleModeIdHearthstoneDecksResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'clientGameapiGameModeBygameTitleModeIdHearthstoneDecksresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientGameapiGameModeBygameTitleModeIdHearthstoneDecksresponseitemResponse',
                    fields: {
                      gameTitleModeHearthstoneDeckId: {
                        type: graphql.GraphQLInt
                      },
                      gameTitleModeId: { type: graphql.GraphQLInt },
                      hearthstoneDeck: { type: graphql.GraphQLString },
                      hearthstoneDeckImage: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameapiGameModeBygameTitleModeIdHearthstoneDecksresponseitemhearthstoneDeckImageResponse',
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
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameBygameShortCodeRules: {
    method: 'GET',
    url: 'api/Game/{gameShortCode}/rules',
    response: new graphql.GraphQLObjectType({
      name: 'clientGameapiGameBygameShortCodeRulesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientGameapiGameBygameShortCodeRulesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientGameapiGameBygameShortCodeRulesresponseitemResponse',
                    fields: {
                      gameTitleRulesId: { type: graphql.GraphQLInt },
                      gameTitleId: { type: graphql.GraphQLInt },
                      rulesTitle: { type: graphql.GraphQLString },
                      rulesDescription: { type: graphql.GraphQLString },
                      isOfficial: { type: graphql.GraphQLBoolean },
                      isActive: { type: graphql.GraphQLBoolean },
                      entityRulesCreatedById: { type: graphql.GraphQLInt }
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
  apiGameBygameShortCodeModes: {
    method: 'GET',
    url: 'api/Game/{gameShortCode}/modes',
    response: new graphql.GraphQLObjectType({
      name: 'clientGameapiGameBygameShortCodeModesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientGameapiGameBygameShortCodeModesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientGameapiGameBygameShortCodeModesresponseitemResponse',
                    fields: {
                      gameTitleModeId: { type: graphql.GraphQLInt },
                      gameTitleId: { type: graphql.GraphQLInt },
                      gameTitleMode: { type: graphql.GraphQLString },
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
  apiGameModesBygameTitleModeId: {
    method: 'GET',
    url: 'api/Game/modes/{gameTitleModeId}',
    response: new graphql.GraphQLObjectType({
      name: 'clientGameapiGameModesBygameTitleModeIdResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientGameapiGameModesBygameTitleModeIdresponseResponse',
            fields: {
              gameTitleModeId: { type: graphql.GraphQLInt },
              gameTitleId: { type: graphql.GraphQLInt },
              gameTitleMode: { type: graphql.GraphQLString },
              isActive: { type: graphql.GraphQLBoolean }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameBygameShortCodeRulesByruleId: {
    method: 'GET',
    url: 'api/Game/{gameShortCode}/rules/{ruleId}',
    response: new graphql.GraphQLObjectType({
      name: 'clientGameapiGameBygameShortCodeRulesByruleIdResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientGameapiGameBygameShortCodeRulesByruleIdresponseResponse',
            fields: {
              gameTitleRulesId: { type: graphql.GraphQLInt },
              gameTitleId: { type: graphql.GraphQLInt },
              rulesTitle: { type: graphql.GraphQLString },
              rulesDescription: { type: graphql.GraphQLString },
              isOfficial: { type: graphql.GraphQLBoolean },
              isActive: { type: graphql.GraphQLBoolean },
              entityRulesCreatedById: { type: graphql.GraphQLInt }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameDevelopers: {
    method: 'GET',
    url: 'api/Game/Developers',
    response: new graphql.GraphQLObjectType({
      name: 'clientGameapiGameDevelopersResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientGameapiGameDevelopersresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientGameapiGameDevelopersresponseitemResponse',
                    fields: {
                      gameDeveloperId: { type: graphql.GraphQLInt },
                      gameDeveloper: { type: graphql.GraphQLString },
                      website: { type: graphql.GraphQLString },
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
  apiGameDeveloperBydeveloperId: {
    method: 'GET',
    url: 'api/Game/Developer/{developerId}',
    response: new graphql.GraphQLObjectType({
      name: 'clientGameapiGameDeveloperBydeveloperIdResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientGameapiGameDeveloperBydeveloperIdresponseResponse',
            fields: {
              gameDeveloperId: { type: graphql.GraphQLInt },
              gameDeveloper: { type: graphql.GraphQLString },
              website: { type: graphql.GraphQLString },
              isActive: { type: graphql.GraphQLBoolean }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
