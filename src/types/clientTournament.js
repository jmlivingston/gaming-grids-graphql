const graphql = require('graphql')

module.exports = {
  apiTournamentSearch: {
    method: 'GET',
    url: 'api/Tournament/Search',
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentapiTournamentSearchResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientTournamentapiTournamentSearchresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientTournamentapiTournamentSearchresponseitemResponse',
                    fields: {
                      entityOwnerId: { type: graphql.GraphQLInt },
                      isChallenge: { type: graphql.GraphQLBoolean },
                      hasPassword: { type: graphql.GraphQLBoolean },
                      tournamentTypeId: { type: graphql.GraphQLInt },
                      hasConsolationRound: { type: graphql.GraphQLBoolean },
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
                      canOnlyRegisterFromRegionId: { type: graphql.GraphQLInt },
                      canOnlyRegisterFromRegionName: {
                        type: graphql.GraphQLString
                      },
                      registrationCutoffDateTime: {
                        type: graphql.GraphQLString
                      },
                      tournamentStartDateTime: { type: graphql.GraphQLString },
                      tournamentEndDateTime: { type: graphql.GraphQLString },
                      tournamentIsLive: { type: graphql.GraphQLBoolean },
                      tournamentTypeName: { type: graphql.GraphQLString },
                      tournamentIsComplete: { type: graphql.GraphQLBoolean },
                      tournamentTitle: { type: graphql.GraphQLString },
                      imageLogo: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTournamentapiTournamentSearchresponseitemimageLogoResponse',
                          fields: {
                            urlPath: { type: graphql.GraphQLString },
                            relativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      imageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTournamentapiTournamentSearchresponseitemimageBackgroundResponse',
                          fields: {
                            urlPath: { type: graphql.GraphQLString },
                            relativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      teamSize: { type: graphql.GraphQLInt },
                      currentNumberOfParticipants: { type: graphql.GraphQLInt },
                      maximumNumberOfEntities: { type: graphql.GraphQLInt },
                      tournamentId: { type: graphql.GraphQLInt },
                      platformGame: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTournamentapiTournamentSearchresponseitemplatformGameResponse',
                          fields: {
                            gamePlatformFranchiseTitleId: {
                              type: graphql.GraphQLInt
                            },
                            platform: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTournamentapiTournamentSearchresponseitemplatformGameplatformResponse',
                                fields: {
                                  gamePlatformId: { type: graphql.GraphQLInt },
                                  gamePlatformCode: {
                                    type: graphql.GraphQLString
                                  },
                                  gamePlatform: { type: graphql.GraphQLString },
                                  imageSmall: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientTournamentapiTournamentSearchresponseitemplatformGameplatformimageSmallResponse',
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
                                  'clientTournamentapiTournamentSearchresponseitemplatformGamegameResponse',
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
                                        'clientTournamentapiTournamentSearchresponseitemplatformGamegameimageLargeResponse',
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
                                        'clientTournamentapiTournamentSearchresponseitemplatformGamegameimageSmallResponse',
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
                                        'clientTournamentapiTournamentSearchresponseitemplatformGamegameimageBackgroundResponse',
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
                                        'clientTournamentapiTournamentSearchresponseitemplatformGamegamefranchiseResponse',
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
                                              'clientTournamentapiTournamentSearchresponseitemplatformGamegamefranchiseimageLargeResponse',
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
                                              'clientTournamentapiTournamentSearchresponseitemplatformGamegamefranchiseimageSmallResponse',
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
                                              'clientTournamentapiTournamentSearchresponseitemplatformGamegamefranchiseimageBackgroundResponse',
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
                                        'clientTournamentapiTournamentSearchresponseitemplatformGamegamedeveloperResponse',
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
                                  'clientTournamentapiTournamentSearchresponseitemplatformGameimageLargeResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTournamentapiTournamentSearchresponseitemplatformGameimageSmallResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            imageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTournamentapiTournamentSearchresponseitemplatformGameimageBackgroundResponse',
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
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    }),
    uriParam: {
      search: {
        isChallenge: Boolean,
        platformCode: String,
        gameShortCode: String,
        tournamentRegionId: Number,
        listType: String,
        favoritesOnly: Boolean,
        includeGameInSearchTerms: Boolean,
        searchTerms: String,
        locationId: Number,
        addressCountryId: Number,
        openTournamentsOnly: Boolean,
        myTournamentsOnly: Boolean,
        participantTypeId: Number,
        powerRankingId: Number,
        minimumPrizePool: Number,
        maximumEntryFee: Number,
        startDate: String,
        endDate: String
      }
    }
  },
  apiTournamentBytournamentIdFeedback: {
    method: 'GET',
    url: 'api/Tournament/{tournamentId}/Feedback',
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentapiTournamentBytournamentIdFeedbackResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientTournamentapiTournamentBytournamentIdFeedbackresponseResponse',
            fields: {
              summary: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientTournamentapiTournamentBytournamentIdFeedbackresponsesummaryResponse',
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
                      'clientTournamentapiTournamentBytournamentIdFeedbackresponsefeedbackResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTournamentapiTournamentBytournamentIdFeedbackresponsefeedbackitemResponse',
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
                                  'clientTournamentapiTournamentBytournamentIdFeedbackresponsefeedbackitementityProfileResponse',
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
  apiTournamentBytournamentIdBracket: {
    method: 'GET',
    url: 'api/Tournament/{tournamentId}/Bracket',
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentapiTournamentBytournamentIdBracketResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientTournamentapiTournamentBytournamentIdBracketresponseResponse',
            fields: {
              lastUpdatedDateTime: { type: graphql.GraphQLString },
              teams: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientTournamentapiTournamentBytournamentIdBracketresponseteamsResponse',
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
  apiTournamentBytournamentIdTeamByentityNameRoster: {
    method: 'PUT',
    url: 'api/Tournament/{tournamentId}/team/{entityName}/roster',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        starters: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'bodystartersResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: { type: graphql.GraphQLString }
              }
            })
          )
        }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentapiTournamentBytournamentIdTeamByentityNameRosterResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdAcceptPayment: {
    method: 'PUT',
    url: 'api/Tournament/{tournamentId}/AcceptPayment',
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentapiTournamentBytournamentIdAcceptPaymentResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdTeamByentityNameComplete: {
    method: 'POST',
    url: 'api/Tournament/{tournamentId}/team/{entityName}/complete',
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentapiTournamentBytournamentIdTeamByentityNameCompleteResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdCheckin: {
    method: 'POST',
    url: 'api/Tournament/{tournamentId}/Checkin',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { checkedIn: { type: graphql.GraphQLBoolean } }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentapiTournamentBytournamentIdCheckinResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdParticipant: {
    method: 'DELETE',
    url: 'api/Tournament/{tournamentId}/Participant',
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentapiTournamentBytournamentIdParticipantResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdMessagingSendAdministrator: {
    method: 'POST',
    url: 'api/Tournament/{tournamentId}/Messaging/Send/Administrator',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        sendToEntityName: { type: graphql.GraphQLString },
        messageBody: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentapiTournamentBytournamentIdMessagingSendAdministratorResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdMessagingSendParticipant: {
    method: 'POST',
    url: 'api/Tournament/{tournamentId}/Messaging/Send/Participant',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        sendToEntityNames: { type: graphql.GraphQLString },
        teamCaptainsOnly: { type: graphql.GraphQLBoolean },
        messageBody: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentapiTournamentBytournamentIdMessagingSendParticipantResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientTournamentapiTournamentBytournamentIdMessagingSendParticipantresponseResponse',
            fields: {
              messagesSentCount: { type: graphql.GraphQLInt },
              messagesSuccessfulCount: { type: graphql.GraphQLInt },
              messagesFailureCount: { type: graphql.GraphQLInt }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdLeagueScheduleProposed: {
    method: 'POST',
    url: 'api/Tournament/{tournamentId}/League/Schedule/Proposed',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { proposedDateTime: { type: graphql.GraphQLString } }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentapiTournamentBytournamentIdLeagueScheduleProposedResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdScoreByscore: {
    method: 'POST',
    url: 'api/Tournament/{tournamentId}/score/{score}',
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentapiTournamentBytournamentIdScoreByscoreResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdParticipantsBycount: {
    method: 'GET',
    url: 'api/Tournament/{tournamentId}/Participants/{count}',
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentapiTournamentBytournamentIdParticipantsBycountResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'clientTournamentapiTournamentBytournamentIdParticipantsBycountresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientTournamentapiTournamentBytournamentIdParticipantsBycountresponseitemResponse',
                    fields: {
                      score: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTournamentapiTournamentBytournamentIdParticipantsBycountresponseitemscoreResponse',
                          fields: {
                            tournamentGroupParticipantScoreId: {
                              type: graphql.GraphQLInt
                            },
                            score: { type: graphql.GraphQLInt },
                            scoreDateTime: { type: graphql.GraphQLString }
                          }
                        })
                      },
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
  apiTournamentBytournamentIdParticipantStatus: {
    method: 'GET',
    url: 'api/Tournament/{tournamentId}/Participant/Status',
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentapiTournamentBytournamentIdParticipantStatusResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientTournamentapiTournamentBytournamentIdParticipantStatusresponseResponse',
            fields: {
              participantCount: { type: graphql.GraphQLInt },
              scoreSortTypeId: { type: graphql.GraphQLInt },
              bestScore: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientTournamentapiTournamentBytournamentIdParticipantStatusresponsebestScoreResponse',
                  fields: {
                    tournamentGroupParticipantScoreId: {
                      type: graphql.GraphQLInt
                    },
                    score: { type: graphql.GraphQLInt },
                    scoreDateTime: { type: graphql.GraphQLString }
                  }
                })
              },
              scores: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientTournamentapiTournamentBytournamentIdParticipantStatusresponsescoresResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTournamentapiTournamentBytournamentIdParticipantStatusresponsescoresitemResponse',
                          fields: {
                            tournamentGroupParticipantScoreId: {
                              type: graphql.GraphQLInt
                            },
                            score: { type: graphql.GraphQLInt },
                            scoreDateTime: { type: graphql.GraphQLString }
                          }
                        })
                      }
                    }
                  })
                )
              },
              entityParticipantId: { type: graphql.GraphQLInt },
              displayName: { type: graphql.GraphQLString },
              rankingPosition: { type: graphql.GraphQLInt }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdLeagueScheduleByscheduleId: {
    method: 'POST',
    url: 'api/Tournament/{tournamentId}/League/Schedule/{scheduleId}',
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentapiTournamentBytournamentIdLeagueScheduleByscheduleIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentTrophyGroups: {
    method: 'GET',
    url: 'api/Tournament/TrophyGroups',
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentapiTournamentTrophyGroupsResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientTournamentapiTournamentTrophyGroupsresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientTournamentapiTournamentTrophyGroupsresponseitemResponse',
                    fields: {
                      trophyGroupId: { type: graphql.GraphQLInt },
                      trophyGroup: { type: graphql.GraphQLString },
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
  }
}
