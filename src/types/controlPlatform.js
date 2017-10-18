const graphql = require('graphql')

module.exports = {
  apiPlatformMaintenance: {
    method: 'PUT',
    url: 'api/Platform/Maintenance',
    urlParams: {
      maintenanceMode: {
        type: graphql.GraphQLBoolean
      },
      administratorOnlyAccess: {
        type: graphql.GraphQLBoolean
      },
      statusNoticeText: {
        type: graphql.GraphQLString
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformapiPlatformMaintenanceResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlatformAdministrator: {
    method: 'POST',
    url: 'api/Platform/Administrator',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        entityName: { type: graphql.GraphQLString },
        emailAddress: { type: graphql.GraphQLString },
        company: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformapiPlatformAdministratorResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlatformAdministratorByentityName: {
    method: 'DELETE',
    url: 'api/Platform/Administrator/{entityName}/',
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformapiPlatformAdministratorByentityNameResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlatformMetrics: {
    method: 'GET',
    url: 'api/Platform/Metrics',
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformapiPlatformMetricsResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlPlatformapiPlatformMetricsresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlPlatformapiPlatformMetricsresponseitemResponse',
                    fields: {
                      platformMetricSnapshotId: { type: graphql.GraphQLInt },
                      snapshotDateTime: { type: graphql.GraphQLString },
                      userCount: { type: graphql.GraphQLInt },
                      userUniqueLoginCount: { type: graphql.GraphQLInt },
                      premiumUserCount: { type: graphql.GraphQLInt },
                      verifiedIdUserCount: { type: graphql.GraphQLInt },
                      activeTeamCount: { type: graphql.GraphQLInt },
                      disbandedTeamCount: { type: graphql.GraphQLInt },
                      fivePlayersOrMoreTeamCount: { type: graphql.GraphQLInt },
                      pendingBetaWhitelistCount: { type: graphql.GraphQLInt },
                      betaNotificationCount: { type: graphql.GraphQLInt },
                      developerCount: { type: graphql.GraphQLInt },
                      approvedDeveloperApiCount: { type: graphql.GraphQLInt },
                      pendingDeveloperApiCount: { type: graphql.GraphQLInt },
                      developerCollaboratorCount: { type: graphql.GraphQLInt },
                      publishedGameTitleCount: { type: graphql.GraphQLInt },
                      unpublishedGameTitleCount: { type: graphql.GraphQLInt },
                      totalGamingServerCount: { type: graphql.GraphQLInt },
                      onlineGamingServerCount: { type: graphql.GraphQLInt },
                      offlineGamingServerCount: { type: graphql.GraphQLInt },
                      liveTournamentCount: { type: graphql.GraphQLInt },
                      completedTournamentCount: { type: graphql.GraphQLInt },
                      upcomingTournamentCount: { type: graphql.GraphQLInt },
                      totalFeedbackRating5: { type: graphql.GraphQLInt },
                      totalFeedbackRating4: { type: graphql.GraphQLInt },
                      totalFeedbackRating3: { type: graphql.GraphQLInt },
                      totalFeedbackRating2: { type: graphql.GraphQLInt },
                      totalFeedbackRating1: { type: graphql.GraphQLInt },
                      tournamentMatchCount: { type: graphql.GraphQLInt },
                      disputedTournamentMatchCount: {
                        type: graphql.GraphQLInt
                      },
                      forfeitTournamentMatchCount: { type: graphql.GraphQLInt },
                      entityStreamingServiceCount: { type: graphql.GraphQLInt },
                      liveEntityStreamingServiceCount: {
                        type: graphql.GraphQLInt
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
  apiPlatformConfiguration: {
    method: 'PUT',
    url: 'api/Platform/Configuration',
    body: new graphql.GraphQLList(
      new graphql.GraphQLObjectType({
        name: 'bodyResponse',
        fields: {
          item: { type: graphql.GraphQLString },
          keys: {
            type: new graphql.GraphQLList(
              new graphql.GraphQLObjectType({
                name: 'bodykeysResponse',
                fields: {
                  count: { type: graphql.GraphQLInt },
                  isReadOnly: { type: graphql.GraphQLBoolean }
                }
              })
            )
          },
          values: {
            type: new graphql.GraphQLList(
              new graphql.GraphQLObjectType({
                name: 'bodyvaluesResponse',
                fields: {
                  count: { type: graphql.GraphQLInt },
                  isReadOnly: { type: graphql.GraphQLBoolean }
                }
              })
            )
          }
        }
      })
    ),
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformapiPlatformConfigurationResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlatformConfigurationRaffleAvailable: {
    method: 'GET',
    url: 'api/Platform/Configuration/RaffleAvailable',
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformapiPlatformConfigurationRaffleAvailableResponse',
      fields: {
        response: { type: graphql.GraphQLBoolean },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlatformFeatureTournamentPolicyList: {
    method: 'PUT',
    url: 'api/Platform/Feature/Tournament/PolicyList',
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
                tournamentManagementPolicyId: { type: graphql.GraphQLInt },
                tournamentManagementPolicyName: { type: graphql.GraphQLString },
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
                allowFormatSingleElimination: { type: graphql.GraphQLBoolean },
                allowFormatDoubleElimination: { type: graphql.GraphQLBoolean },
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
                      name: 'bodyitemauthorizedGameTitlesResponse',
                      fields: {
                        capacity: { type: graphql.GraphQLInt },
                        count: { type: graphql.GraphQLInt },
                        item: { type: graphql.GraphQLInt }
                      }
                    })
                  )
                },
                authorizedGamePlatformsList: { type: graphql.GraphQLString },
                authorizedGamePlatofrms: {
                  type: new graphql.GraphQLList(
                    new graphql.GraphQLObjectType({
                      name: 'bodyitemauthorizedGamePlatofrmsResponse',
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
          }
        }
      })
    ),
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformapiPlatformFeatureTournamentPolicyListResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlatformFeatureTournamentPolicyBypolicyIdAssignedList: {
    method: 'GET',
    url: 'api/Platform/Feature/Tournament/Policy/{policyId}/AssignedList',
    response: new graphql.GraphQLObjectType({
      name:
        'controlPlatformapiPlatformFeatureTournamentPolicyBypolicyIdAssignedListResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlPlatformapiPlatformFeatureTournamentPolicyBypolicyIdAssignedListresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlPlatformapiPlatformFeatureTournamentPolicyBypolicyIdAssignedListresponseitemResponse',
                    fields: {
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
  apiPlatformLogging: {
    method: 'GET',
    url: 'api/Platform/Logging',
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformapiPlatformLoggingResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlPlatformapiPlatformLoggingresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlPlatformapiPlatformLoggingresponseitemResponse',
                    fields: {
                      isError: { type: graphql.GraphQLBoolean },
                      sourceName: { type: graphql.GraphQLString },
                      stackTrace: { type: graphql.GraphQLString },
                      message: { type: graphql.GraphQLString },
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
