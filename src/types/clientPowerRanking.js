const graphql = require('graphql')

module.exports = {
  apiPowerRankingProfiles: {
    method: 'GET',
    url: 'api/PowerRanking/Profiles',
    response: new graphql.GraphQLObjectType({
      name: 'clientPowerRankingapiPowerRankingProfilesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientPowerRankingapiPowerRankingProfilesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientPowerRankingapiPowerRankingProfilesresponseitemResponse',
                    fields: {
                      powerRankingProfileId: { type: graphql.GraphQLInt },
                      powerRankingProfile: { type: graphql.GraphQLString },
                      joiningTournamentPoints: { type: graphql.GraphQLInt },
                      joiningTournamentSizeMultiplier: {
                        type: graphql.GraphQLBoolean
                      },
                      pointsForWin: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPowerRankingapiPowerRankingProfilesresponseitempointsForWinResponse',
                            fields: {
                              capacity: { type: graphql.GraphQLInt },
                              count: { type: graphql.GraphQLInt },
                              item: { type: graphql.GraphQLInt }
                            }
                          })
                        )
                      },
                      pointsForLoss: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPowerRankingapiPowerRankingProfilesresponseitempointsForLossResponse',
                            fields: {
                              capacity: { type: graphql.GraphQLInt },
                              count: { type: graphql.GraphQLInt },
                              item: { type: graphql.GraphQLInt }
                            }
                          })
                        )
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
  apiPowerRankingProfileBypowerankingProfileId: {
    method: 'GET',
    url: 'api/PowerRanking/Profile/{powerankingProfileId}',
    response: new graphql.GraphQLObjectType({
      name:
        'clientPowerRankingapiPowerRankingProfileBypowerankingProfileIdResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientPowerRankingapiPowerRankingProfileBypowerankingProfileIdresponseResponse',
            fields: {
              powerRankingProfileId: { type: graphql.GraphQLInt },
              powerRankingProfile: { type: graphql.GraphQLString },
              joiningTournamentPoints: { type: graphql.GraphQLInt },
              joiningTournamentSizeMultiplier: { type: graphql.GraphQLBoolean },
              pointsForWin: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPowerRankingapiPowerRankingProfileBypowerankingProfileIdresponsepointsForWinResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: { type: graphql.GraphQLInt }
                    }
                  })
                )
              },
              pointsForLoss: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPowerRankingapiPowerRankingProfileBypowerankingProfileIdresponsepointsForLossResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: { type: graphql.GraphQLInt }
                    }
                  })
                )
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
  apiPowerRankingDivisions: {
    method: 'GET',
    url: 'api/PowerRanking/Divisions',
    response: new graphql.GraphQLObjectType({
      name: 'clientPowerRankingapiPowerRankingDivisionsResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'clientPowerRankingapiPowerRankingDivisionsresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientPowerRankingapiPowerRankingDivisionsresponseitemResponse',
                    fields: {
                      powerRankingDivisionId: { type: graphql.GraphQLInt },
                      powerRankingDivision: { type: graphql.GraphQLString },
                      topPoints: { type: graphql.GraphQLInt },
                      bottomPoints: { type: graphql.GraphQLInt },
                      numberOfLevels: { type: graphql.GraphQLInt },
                      powerRankingLevels: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPowerRankingapiPowerRankingDivisionsresponseitempowerRankingLevelsResponse',
                            fields: {
                              capacity: { type: graphql.GraphQLInt },
                              count: { type: graphql.GraphQLInt },
                              item: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPowerRankingapiPowerRankingDivisionsresponseitempowerRankingLevelsitemResponse',
                                  fields: {
                                    powerRankingLevelNumber: {
                                      type: graphql.GraphQLInt
                                    },
                                    topPoints: { type: graphql.GraphQLInt },
                                    bottomPoints: { type: graphql.GraphQLInt }
                                  }
                                })
                              }
                            }
                          })
                        )
                      },
                      powerRankingImageLogo: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPowerRankingapiPowerRankingDivisionsresponseitempowerRankingImageLogoResponse',
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
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPowerRankingDivisionBypoweRankingDivisionId: {
    method: 'GET',
    url: 'api/PowerRanking/Division/{poweRankingDivisionId}',
    response: new graphql.GraphQLObjectType({
      name:
        'clientPowerRankingapiPowerRankingDivisionBypoweRankingDivisionIdResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientPowerRankingapiPowerRankingDivisionBypoweRankingDivisionIdresponseResponse',
            fields: {
              powerRankingDivisionId: { type: graphql.GraphQLInt },
              powerRankingDivision: { type: graphql.GraphQLString },
              topPoints: { type: graphql.GraphQLInt },
              bottomPoints: { type: graphql.GraphQLInt },
              numberOfLevels: { type: graphql.GraphQLInt },
              powerRankingLevels: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPowerRankingapiPowerRankingDivisionBypoweRankingDivisionIdresponsepowerRankingLevelsResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPowerRankingapiPowerRankingDivisionBypoweRankingDivisionIdresponsepowerRankingLevelsitemResponse',
                          fields: {
                            powerRankingLevelNumber: {
                              type: graphql.GraphQLInt
                            },
                            topPoints: { type: graphql.GraphQLInt },
                            bottomPoints: { type: graphql.GraphQLInt }
                          }
                        })
                      }
                    }
                  })
                )
              },
              powerRankingImageLogo: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPowerRankingapiPowerRankingDivisionBypoweRankingDivisionIdresponsepowerRankingImageLogoResponse',
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
  }
}
