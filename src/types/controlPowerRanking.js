const graphql = require('graphql')

module.exports = {
  apiPowerRankingProfile: {
    method: 'POST',
    url: 'api/PowerRanking/Profile',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        powerRankingProfile: { type: graphql.GraphQLString },
        joiningTournamentPoints: { type: graphql.GraphQLInt },
        joiningTournamentSizeMultiplier: { type: graphql.GraphQLBoolean },
        pointsForWin: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'bodypointsForWinResponse',
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
              name: 'bodypointsForLossResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: { type: graphql.GraphQLInt }
              }
            })
          )
        }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlPowerRankingapiPowerRankingProfileResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPowerRankingProfileBypowerRankingProfileId: {
    method: 'DELETE',
    url: 'api/PowerRanking/Profile/{powerRankingProfileId}',
    response: new graphql.GraphQLObjectType({
      name:
        'controlPowerRankingapiPowerRankingProfileBypowerRankingProfileIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPowerRankingDivision: {
    method: 'POST',
    url: 'api/PowerRanking/Division',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        powerRankingDivision: { type: graphql.GraphQLString },
        topPoints: { type: graphql.GraphQLInt },
        bottomPoints: { type: graphql.GraphQLInt },
        powerRankingImageLogoUrl: { type: graphql.GraphQLString },
        powerRankingLevels: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'bodypowerRankingLevelsResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'bodypowerRankingLevelsitemResponse',
                    fields: {
                      powerRankingLevelNumber: { type: graphql.GraphQLInt },
                      topPoints: { type: graphql.GraphQLInt },
                      bottomPoints: { type: graphql.GraphQLInt }
                    }
                  })
                }
              }
            })
          )
        }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlPowerRankingapiPowerRankingDivisionResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPowerRankingDivisionBypowerRankingDivisionId: {
    method: 'PUT',
    url: 'api/PowerRanking/Division/{powerRankingDivisionId}',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        powerRankingDivision: { type: graphql.GraphQLString },
        topPoints: { type: graphql.GraphQLInt },
        bottomPoints: { type: graphql.GraphQLInt },
        powerRankingImageLogoUrl: { type: graphql.GraphQLString },
        powerRankingLevels: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'bodypowerRankingLevelsResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'bodypowerRankingLevelsitemResponse',
                    fields: {
                      powerRankingLevelNumber: { type: graphql.GraphQLInt },
                      topPoints: { type: graphql.GraphQLInt },
                      bottomPoints: { type: graphql.GraphQLInt }
                    }
                  })
                }
              }
            })
          )
        }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name:
        'controlPowerRankingapiPowerRankingDivisionBypowerRankingDivisionIdResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'controlPowerRankingapiPowerRankingDivisionBypowerRankingDivisionIdresponseResponse',
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
                      'controlPowerRankingapiPowerRankingDivisionBypowerRankingDivisionIdresponsepowerRankingLevelsResponse',
                    fields: {
                      capacity: { type: graphql.GraphQLInt },
                      count: { type: graphql.GraphQLInt },
                      item: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'controlPowerRankingapiPowerRankingDivisionBypowerRankingDivisionIdresponsepowerRankingLevelsitemResponse',
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
                    'controlPowerRankingapiPowerRankingDivisionBypowerRankingDivisionIdresponsepowerRankingImageLogoResponse',
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
