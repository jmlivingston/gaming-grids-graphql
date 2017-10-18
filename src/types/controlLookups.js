const graphql = require('graphql')

module.exports = {
  apiLookupsRosterRoles: {
    method: 'GET',
    url: 'api/Lookups/RosterRoles',
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsapiLookupsRosterRolesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlLookupsapiLookupsRosterRolesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlLookupsapiLookupsRosterRolesresponseitemResponse',
                    fields: {
                      rosterRoleId: { type: graphql.GraphQLInt },
                      rosterRoleName: { type: graphql.GraphQLString }
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
  apiLookupsSiteCurrency: {
    method: 'GET',
    url: 'api/Lookups/SiteCurrency',
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsapiLookupsSiteCurrencyResponse',
      fields: {
        response: { type: graphql.GraphQLString },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiLookupsDefaultXperiencePoints: {
    method: 'GET',
    url: 'api/Lookups/DefaultXperiencePoints',
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsapiLookupsDefaultXperiencePointsResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'controlLookupsapiLookupsDefaultXperiencePointsresponseResponse',
            fields: {
              pointsToJoinTournament: { type: graphql.GraphQLInt },
              pointsToWinTournamentRound: { type: graphql.GraphQLInt },
              pointsToTournamentPlace1: { type: graphql.GraphQLInt },
              pointsToTournamentPlace2: { type: graphql.GraphQLInt },
              pointsToTournamentPlace3: { type: graphql.GraphQLInt }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiLookupsXperiencePoints: {
    method: 'GET',
    url: 'api/Lookups/XperiencePoints',
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsapiLookupsXperiencePointsResponse',
      fields: {
        response: { type: graphql.GraphQLBoolean },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiLookupsLolValidationPrefix: {
    method: 'GET',
    url: 'api/Lookups/LolValidationPrefix',
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsapiLookupsLolValidationPrefixResponse',
      fields: {
        response: { type: graphql.GraphQLString },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiLookupsRegistrationRegionRestrictionTypeList: {
    method: 'GET',
    url: 'api/Lookups/RegistrationRegionRestrictionTypeList',
    response: new graphql.GraphQLObjectType({
      name:
        'controlLookupsapiLookupsRegistrationRegionRestrictionTypeListResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsapiLookupsRegistrationRegionRestrictionTypeListresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlLookupsapiLookupsRegistrationRegionRestrictionTypeListresponseitemResponse',
                    fields: {
                      registrationRestrictionTypeId: {
                        type: graphql.GraphQLInt
                      },
                      registrationRestrictionType: {
                        type: graphql.GraphQLString
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
  apiLookupsRegistrationCountryRestrictionTypeList: {
    method: 'GET',
    url: 'api/Lookups/RegistrationCountryRestrictionTypeList',
    response: new graphql.GraphQLObjectType({
      name:
        'controlLookupsapiLookupsRegistrationCountryRestrictionTypeListResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsapiLookupsRegistrationCountryRestrictionTypeListresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlLookupsapiLookupsRegistrationCountryRestrictionTypeListresponseitemResponse',
                    fields: {
                      registrationRestrictionTypeId: {
                        type: graphql.GraphQLInt
                      },
                      registrationRestrictionType: {
                        type: graphql.GraphQLString
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
  apiLookupsFileStorageTypeList: {
    method: 'GET',
    url: 'api/Lookups/FileStorageTypeList',
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsapiLookupsFileStorageTypeListResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsapiLookupsFileStorageTypeListresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlLookupsapiLookupsFileStorageTypeListresponseitemResponse',
                    fields: {
                      fileStorageTypeId: { type: graphql.GraphQLInt },
                      fileStorageType: { type: graphql.GraphQLString }
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
  apiLookupsEmailSubjectList: {
    method: 'GET',
    url: 'api/Lookups/EmailSubjectList',
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsapiLookupsEmailSubjectListResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlLookupsapiLookupsEmailSubjectListresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlLookupsapiLookupsEmailSubjectListresponseitemResponse',
                    fields: {
                      emailSubjectId: { type: graphql.GraphQLInt },
                      emailSubject: { type: graphql.GraphQLString }
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
  apiLookupsCountryList: {
    method: 'GET',
    url: 'api/Lookups/CountryList',
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsapiLookupsCountryListResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlLookupsapiLookupsCountryListresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlLookupsapiLookupsCountryListresponseitemResponse',
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
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiLookupsStateListBycountryId: {
    method: 'GET',
    url: 'api/Lookups/StateList/{countryId}',
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsapiLookupsStateListBycountryIdResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsapiLookupsStateListBycountryIdresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlLookupsapiLookupsStateListBycountryIdresponseitemResponse',
                    fields: {
                      addressStateProvenceId: { type: graphql.GraphQLInt },
                      addressCountryId: { type: graphql.GraphQLInt },
                      addressStateProvenceCode: { type: graphql.GraphQLString },
                      addressStateProvence: { type: graphql.GraphQLString },
                      allowsRealMoney: { type: graphql.GraphQLBoolean }
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
  apiLookupsQualifierTieBreakerTypes: {
    method: 'GET',
    url: 'api/Lookups/QualifierTieBreakerTypes',
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsapiLookupsQualifierTieBreakerTypesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsapiLookupsQualifierTieBreakerTypesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlLookupsapiLookupsQualifierTieBreakerTypesresponseitemResponse',
                    fields: {
                      qualifierTieBreakerTypeId: { type: graphql.GraphQLInt },
                      qualifierTieBreakerType: { type: graphql.GraphQLString },
                      qualifierTieBreakerTypeDescription: {
                        type: graphql.GraphQLString
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
  apiLookupsTournamentPrizeFundingTypes: {
    method: 'GET',
    url: 'api/Lookups/TournamentPrizeFundingTypes',
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsapiLookupsTournamentPrizeFundingTypesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsapiLookupsTournamentPrizeFundingTypesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlLookupsapiLookupsTournamentPrizeFundingTypesresponseitemResponse',
                    fields: {
                      tournamentPrizeFundingTypeId: {
                        type: graphql.GraphQLInt
                      },
                      tournamentPrizeFundingType: {
                        type: graphql.GraphQLString
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
  apiLookupsTournamentSeedingTypes: {
    method: 'GET',
    url: 'api/Lookups/TournamentSeedingTypes',
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsapiLookupsTournamentSeedingTypesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsapiLookupsTournamentSeedingTypesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlLookupsapiLookupsTournamentSeedingTypesresponseitemResponse',
                    fields: {
                      tournamentSeedingTypeId: { type: graphql.GraphQLInt },
                      tournamentSeedingTypeName: { type: graphql.GraphQLString }
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
  apiLookupsTournamentPairingTypes: {
    method: 'GET',
    url: 'api/Lookups/TournamentPairingTypes',
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsapiLookupsTournamentPairingTypesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsapiLookupsTournamentPairingTypesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlLookupsapiLookupsTournamentPairingTypesresponseitemResponse',
                    fields: {
                      tournamentPairingTypeId: { type: graphql.GraphQLInt },
                      tournamentPairingTypeName: { type: graphql.GraphQLString }
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
  apiLookupsStreamingServices: {
    method: 'GET',
    url: 'api/Lookups/StreamingServices',
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsapiLookupsStreamingServicesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlLookupsapiLookupsStreamingServicesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlLookupsapiLookupsStreamingServicesresponseitemResponse',
                    fields: {
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
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiLookupsTournamentTypes: {
    method: 'GET',
    url: 'api/Lookups/TournamentTypes',
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsapiLookupsTournamentTypesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlLookupsapiLookupsTournamentTypesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlLookupsapiLookupsTournamentTypesresponseitemResponse',
                    fields: {
                      tournamentTypeId: { type: graphql.GraphQLInt },
                      tournamentTypeName: { type: graphql.GraphQLString }
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
  apiLookupsGamingServerRegions: {
    method: 'GET',
    url: 'api/Lookups/GamingServerRegions',
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsapiLookupsGamingServerRegionsResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsapiLookupsGamingServerRegionsresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlLookupsapiLookupsGamingServerRegionsresponseitemResponse',
                    fields: {
                      gamingServerRegionId: { type: graphql.GraphQLInt },
                      gamingServerRegionName: { type: graphql.GraphQLString }
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
  apiLookupsGameValidationTypes: {
    method: 'GET',
    url: 'api/Lookups/gameValidationTypes',
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsapiLookupsGameValidationTypesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsapiLookupsGameValidationTypesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlLookupsapiLookupsGameValidationTypesresponseitemResponse',
                    fields: {
                      gamePlatformFranchiseTitleValidationMethodTypeId: {
                        type: graphql.GraphQLInt
                      },
                      gamePlatformFranchiseTitleValidationMethodType: {
                        type: graphql.GraphQLString
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
  }
}
