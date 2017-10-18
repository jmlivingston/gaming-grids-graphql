const graphql = require('graphql')

module.exports = {
  apiTournament: {
    method: 'POST',
    url: 'api/Tournament/',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        tournamentTitle: { type: graphql.GraphQLString },
        tournamentDescription: { type: graphql.GraphQLString },
        ownerEntityName: { type: graphql.GraphQLString },
        gamePlatformFranchiseTitleId: { type: graphql.GraphQLInt },
        gameTitleModeId: { type: graphql.GraphQLInt },
        tournamentSeriesId: { type: graphql.GraphQLInt },
        powerRankingProfileId: { type: graphql.GraphQLInt },
        restrictPowerRankingStartDivisionId: { type: graphql.GraphQLInt },
        restrictPowerRankingEndDivisionId: { type: graphql.GraphQLInt },
        tournamentTypeId: { type: graphql.GraphQLInt },
        isChallenge: { type: graphql.GraphQLBoolean },
        enableMatchLobby: { type: graphql.GraphQLBoolean },
        tournamentStartDateTime: { type: graphql.GraphQLString },
        tournamentEndDateTime: { type: graphql.GraphQLString },
        registrationCutoffDateTime: { type: graphql.GraphQLString },
        isTeamTournament: { type: graphql.GraphQLBoolean },
        gameTitleRulesId: { type: graphql.GraphQLInt },
        minimumNumberOfEntities: { type: graphql.GraphQLInt },
        maximumNumberOfEntities: { type: graphql.GraphQLInt },
        teamSize: { type: graphql.GraphQLInt },
        sponsors: {
          type: new graphql.GraphQLObjectType({
            name: 'bodysponsorsResponse',
            fields: {
              hasSponsor: { type: graphql.GraphQLBoolean },
              titleSponsor: {
                type: new graphql.GraphQLObjectType({
                  name: 'bodysponsorstitleSponsorResponse',
                  fields: {
                    sponsorName: { type: graphql.GraphQLString },
                    sponsorImageRelativeUrl: { type: graphql.GraphQLString },
                    sponsorLink: { type: graphql.GraphQLString }
                  }
                })
              },
              mainSponsors: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name: 'bodysponsorsmainSponsorsResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name: 'bodysponsorsmainSponsorsitemResponse',
                          fields: {
                            sponsorName: { type: graphql.GraphQLString },
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
                    name: 'bodysponsorspartnersResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name: 'bodysponsorspartnersitemResponse',
                          fields: {
                            sponsorName: { type: graphql.GraphQLString },
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
        isRealCurrency: { type: graphql.GraphQLBoolean },
        tournamentPassword: { type: graphql.GraphQLString },
        isPublic: { type: graphql.GraphQLBoolean },
        isPublished: { type: graphql.GraphQLBoolean },
        doesCycle: { type: graphql.GraphQLBoolean },
        cycleLengthInMinutes: { type: graphql.GraphQLInt },
        cycleMinutesBeforeStart: { type: graphql.GraphQLInt },
        maxCycleCount: { type: graphql.GraphQLInt },
        prizePoolAmount: { type: graphql.GraphQLInt },
        tournamentPrizeFundingTypeId: { type: graphql.GraphQLInt },
        canOnlyRegisterFromRegionId: { type: graphql.GraphQLInt },
        isFavorite: { type: graphql.GraphQLBoolean },
        hasConsolationRound: { type: graphql.GraphQLBoolean },
        tournamentSeedingTypeId: { type: graphql.GraphQLInt },
        tournamentPairingTypeId: { type: graphql.GraphQLInt },
        automaticGoLiveOnSchedule: { type: graphql.GraphQLBoolean },
        minutesAfterStartToForfeit: { type: graphql.GraphQLInt },
        minutesBeforeStartToAllowCheckin: { type: graphql.GraphQLInt },
        allMatchesRunManualMode: { type: graphql.GraphQLBoolean },
        logoRelativeUrl: { type: graphql.GraphQLString },
        backgroundRelativeUrl: { type: graphql.GraphQLString },
        thirdPartyApiRegion: { type: graphql.GraphQLString },
        thirdPartyTournamentConfiguration: { type: graphql.GraphQLString },
        serverConfigurationFileName: { type: graphql.GraphQLString },
        allowPreCheckin: { type: graphql.GraphQLBoolean },
        preCheckinMinutesBeforeStart: { type: graphql.GraphQLInt },
        predefinedStreamedMatches: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'bodypredefinedStreamedMatchesResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'bodypredefinedStreamedMatchesitemResponse',
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
        payouts: {
          type: new graphql.GraphQLObjectType({
            name: 'bodypayoutsResponse',
            fields: {
              isFixedPayouts: { type: graphql.GraphQLBoolean },
              payoutCount: { type: graphql.GraphQLInt },
              places: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name: 'bodypayoutsplacesResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name: 'bodypayoutsplacesitemResponse',
                          fields: {
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
        roundRules: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'bodyroundRulesResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'bodyroundRulesitemResponse',
                    fields: {
                      roundNumber: { type: graphql.GraphQLInt },
                      minimumStartDateTime: { type: graphql.GraphQLString },
                      maximumStartDateTime: { type: graphql.GraphQLString },
                      roundLevelTypeId: { type: graphql.GraphQLInt },
                      maps: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name: 'bodyroundRulesitemmapsResponse',
                            fields: {
                              capacity: { type: graphql.GraphQLInt },
                              count: { type: graphql.GraphQLInt },
                              item: {
                                type: new graphql.GraphQLObjectType({
                                  name: 'bodyroundRulesitemmapsitemResponse',
                                  fields: {
                                    mapPositionNumber: {
                                      type: graphql.GraphQLInt
                                    },
                                    gameTitleModeMapId: {
                                      type: graphql.GraphQLInt
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
        qualifier: {
          type: new graphql.GraphQLObjectType({
            name: 'bodyqualifierResponse',
            fields: {
              numberOfGroups: { type: graphql.GraphQLInt },
              qualifierWinPoints: { type: graphql.GraphQLInt },
              qualifierLossPoints: { type: graphql.GraphQLInt },
              qualifierTiePoints: { type: graphql.GraphQLInt },
              qualifierScoreMultiplierPoints: { type: graphql.GraphQLInt },
              qualifierSortTypeId: { type: graphql.GraphQLInt },
              league: {
                type: new graphql.GraphQLObjectType({
                  name: 'bodyqualifierleagueResponse',
                  fields: {
                    endDateTime: { type: graphql.GraphQLString },
                    minimumNumberOfMatches: { type: graphql.GraphQLInt },
                    numberOfPlays: { type: graphql.GraphQLInt },
                    allowRegistrationAfterTournamentStart: {
                      type: graphql.GraphQLBoolean
                    },
                    groupPlacementOnJoin: { type: graphql.GraphQLBoolean }
                  }
                })
              },
              groups: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name: 'bodyqualifiergroupsResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name: 'bodyqualifiergroupsitemResponse',
                          fields: {
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
                    name: 'bodyqualifiertieBreakersResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name: 'bodyqualifiertieBreakersitemResponse',
                          fields: {
                            tieBreakerLevelId: { type: graphql.GraphQLInt },
                            tieBreakerTypeId: { type: graphql.GraphQLInt }
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
        lanModeEnabled: { type: graphql.GraphQLBoolean },
        enableLanTagging: { type: graphql.GraphQLBoolean },
        allowedCountryIds: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'bodyallowedCountryIdsResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: { type: graphql.GraphQLInt }
              }
            })
          )
        },
        pauseIfQualifierEndsInTie: { type: graphql.GraphQLBoolean },
        entryFee: { type: graphql.GraphQLInt },
        serviceFee: { type: graphql.GraphQLInt },
        skipMatchmaking: { type: graphql.GraphQLBoolean },
        challengeMinEntryFee: { type: graphql.GraphQLInt },
        challengeMaxEntryFee: { type: graphql.GraphQLInt },
        matchCountdownMinutes: { type: graphql.GraphQLInt },
        locationIds: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'bodylocationIdsResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: { type: graphql.GraphQLInt }
              }
            })
          )
        },
        xperiencePointsForJoining: { type: graphql.GraphQLInt },
        xperiencePointsPerRound: { type: graphql.GraphQLInt },
        trophyGroupId: { type: graphql.GraphQLInt },
        directChallengeOpponent: { type: graphql.GraphQLString },
        useCommunitySteamAccounts: { type: graphql.GraphQLBoolean }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentapiTournamentResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentId: {
    method: 'DELETE',
    url: 'api/Tournament/{tournamentId}',
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentapiTournamentBytournamentIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdQualifierPlayoff: {
    method: 'POST',
    url: 'api/Tournament/{tournamentId}/Qualifier/Playoff',
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentapiTournamentBytournamentIdQualifierPlayoffResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdQualifierByentityNameRescore: {
    method: 'PUT',
    url: 'api/Tournament/{tournamentId}/Qualifier/{entityName}/Rescore',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        qualifierGroupNumber: { type: graphql.GraphQLInt },
        totalPoints: { type: graphql.GraphQLInt },
        comment: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentapiTournamentBytournamentIdQualifierByentityNameRescoreResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdParticipantByentityNameCheckin: {
    method: 'PUT',
    url: 'api/Tournament/{tournamentId}/Participant/{entityName}/Checkin',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { checkedIn: { type: graphql.GraphQLBoolean } }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentapiTournamentBytournamentIdParticipantByentityNameCheckinResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdStreamPredefined: {
    method: 'PUT',
    url: 'api/Tournament/{tournamentId}/Stream/Predefined',
    body: new graphql.GraphQLList(
      new graphql.GraphQLObjectType({
        name: 'bodyResponse',
        fields: {
          capacity: { type: graphql.GraphQLInt },
          count: { type: graphql.GraphQLInt },
          item: {
            type: new graphql.GraphQLObjectType({
              name: 'bodyitemResponse',
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
    ),
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentapiTournamentBytournamentIdStreamPredefinedResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdStandByPromote: {
    method: 'PUT',
    url: 'api/Tournament/{tournamentId}/StandBy/Promote',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        entityToPromote: { type: graphql.GraphQLString },
        entityToDemote: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentapiTournamentBytournamentIdStandByPromoteResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdSendSummaryEmails: {
    method: 'POST',
    url: 'api/Tournament/{tournamentId}/send/summary/emails',
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentapiTournamentBytournamentIdSendSummaryEmailsResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdParticipantByentityNameQualifier: {
    method: 'PUT',
    url: 'api/Tournament/{tournamentId}/Participant/{entityName}/Qualifier',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        qualifierGroupNumber: { type: graphql.GraphQLInt },
        qualifierGroupSeedNumber: { type: graphql.GraphQLInt }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentapiTournamentBytournamentIdParticipantByentityNameQualifierResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdParticipantQualifiers: {
    method: 'PUT',
    url: 'api/Tournament/{tournamentId}/Participant/Qualifiers',
    body: new graphql.GraphQLList(
      new graphql.GraphQLObjectType({
        name: 'bodyResponse',
        fields: {
          capacity: { type: graphql.GraphQLInt },
          count: { type: graphql.GraphQLInt },
          item: {
            type: new graphql.GraphQLObjectType({
              name: 'bodyitemResponse',
              fields: {
                entityName: { type: graphql.GraphQLString },
                qualifierGroupNumber: { type: graphql.GraphQLInt },
                qualifierGroupSeedNumber: { type: graphql.GraphQLInt }
              }
            })
          }
        }
      })
    ),
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentapiTournamentBytournamentIdParticipantQualifiersResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdPublish: {
    method: 'PUT',
    url: 'api/Tournament/{tournamentId}/Publish/',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { isPublished: { type: graphql.GraphQLBoolean } }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentapiTournamentBytournamentIdPublishResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdAdministrator: {
    method: 'POST',
    url: 'api/Tournament/{tournamentId}/Administrator',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { entityName: { type: graphql.GraphQLString } }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentapiTournamentBytournamentIdAdministratorResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdAdministratorByentityName: {
    method: 'DELETE',
    url: 'api/Tournament/{tournamentId}/Administrator/{entityName}',
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentapiTournamentBytournamentIdAdministratorByentityNameResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdScheduleDelayByminutes: {
    method: 'PUT',
    url: 'api/Tournament/{tournamentId}/Schedule/Delay/{minutes}',
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentapiTournamentBytournamentIdScheduleDelayByminutesResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdAnnouncement: {
    method: 'POST',
    url: 'api/Tournament/{tournamentId}/Announcement/',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { announcement: { type: graphql.GraphQLString } }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentapiTournamentBytournamentIdAnnouncementResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdParticipantByentityidScoreByscore: {
    method: 'POST',
    url: 'api/Tournament/{tournamentId}/participant/{entityid}/score/{score}',
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentapiTournamentBytournamentIdParticipantByentityidScoreByscoreResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdParticipantByentityidScoreByscoreId: {
    method: 'DELETE',
    url: 'api/Tournament/{tournamentId}/participant/{entityid}/score/{scoreId}',
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentapiTournamentBytournamentIdParticipantByentityidScoreByscoreIdResponse',
      fields: {
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
        'controlTournamentapiTournamentBytournamentIdParticipantStatusResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'controlTournamentapiTournamentBytournamentIdParticipantStatusresponseResponse',
            fields: {
              participantCount: { type: graphql.GraphQLInt },
              scoreSortTypeId: { type: graphql.GraphQLInt },
              bestScore: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlTournamentapiTournamentBytournamentIdParticipantStatusresponsebestScoreResponse',
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
                      'controlTournamentapiTournamentBytournamentIdParticipantStatusresponsescoresResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'controlTournamentapiTournamentBytournamentIdParticipantStatusresponsescoresitemResponse',
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
    }),
    uriParam: {
      data: {
        emailAddress: String
      }
    }
  },
  apiTournamentBytournamentIdAnnouncementByannouncementId: {
    method: 'DELETE',
    url: 'api/Tournament/{tournamentId}/Announcement/{announcementId}/',
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentapiTournamentBytournamentIdAnnouncementByannouncementIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdBracketSeeding: {
    method: 'PUT',
    url: 'api/Tournament/{tournamentId}/Bracket/Seeding',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { seeding: { type: graphql.GraphQLString } }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentapiTournamentBytournamentIdBracketSeedingResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentChallengeStatistics: {
    method: 'GET',
    url: 'api/Tournament/challenge/statistics',
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentapiTournamentChallengeStatisticsResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlTournamentapiTournamentChallengeStatisticsresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlTournamentapiTournamentChallengeStatisticsresponseitemResponse',
                    fields: {
                      gamePlatform: { type: graphql.GraphQLString },
                      gameName: { type: graphql.GraphQLString },
                      gameTitleMode: { type: graphql.GraphQLString },
                      mapDisplayName: { type: graphql.GraphQLString },
                      numberOfChallenges: { type: graphql.GraphQLInt },
                      amountWagered: { type: graphql.GraphQLInt }
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
  apiTournamentBytournamentIdStatusLive: {
    method: 'POST',
    url: 'api/Tournament/{tournamentId}/Status/Live',
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentapiTournamentBytournamentIdStatusLiveResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdMatchesAutoFill: {
    method: 'POST',
    url: 'api/Tournament/{tournamentId}/Matches/AutoFill',
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentapiTournamentBytournamentIdMatchesAutoFillResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentBytournamentIdParticipantByentityName: {
    method: 'DELETE',
    url: 'api/Tournament/{tournamentId}/Participant/{entityName}',
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentapiTournamentBytournamentIdParticipantByentityNameResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentTrophyGroup: {
    method: 'POST',
    url: 'api/Tournament/TrophyGroup',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        trophyGroup: { type: graphql.GraphQLString },
        firstPlaceImageUrl: { type: graphql.GraphQLString },
        secondPlaceImageUrl: { type: graphql.GraphQLString },
        thirdPlaceImageUrl: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentapiTournamentTrophyGroupResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiTournamentTrophyGroupBytrophyGroupId: {
    method: 'DELETE',
    url: 'api/Tournament/TrophyGroup/{trophyGroupId}',
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentapiTournamentTrophyGroupBytrophyGroupIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
