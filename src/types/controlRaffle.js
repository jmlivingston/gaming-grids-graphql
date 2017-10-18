const graphql = require('graphql')

module.exports = {
  apiRaffleProcess: {
    method: 'GET',
    url: 'api/Raffle/process',
    response: new graphql.GraphQLObjectType({
      name: 'controlRaffleapiRaffleProcessResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiRaffleWinners: {
    method: 'GET',
    url: 'api/Raffle/winners',
    response: new graphql.GraphQLObjectType({
      name: 'controlRaffleapiRaffleWinnersResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlRaffleapiRaffleWinnersresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'controlRaffleapiRaffleWinnersresponseitemResponse',
                    fields: {
                      raffleWinnerId: { type: graphql.GraphQLInt },
                      raffleDate: { type: graphql.GraphQLString },
                      raffleTicket: { type: graphql.GraphQLString },
                      raffleWinnerEntityId: { type: graphql.GraphQLInt },
                      raffleWinnerProfile: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'controlRaffleapiRaffleWinnersresponseitemraffleWinnerProfileResponse',
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
                            entityBackgroundImageUrl: {
                              type: graphql.GraphQLString
                            },
                            entityBackgroundImageUrlIsExternal: {
                              type: graphql.GraphQLBoolean
                            }
                          }
                        })
                      },
                      rafflePrizeId: { type: graphql.GraphQLInt },
                      rafflePrize: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'controlRaffleapiRaffleWinnersresponseitemrafflePrizeResponse',
                          fields: {
                            rafflePrizeId: { type: graphql.GraphQLInt },
                            rafflePrizeDate: { type: graphql.GraphQLString },
                            rafflePrizeTitle: { type: graphql.GraphQLString },
                            rafflePrizeDescription: {
                              type: graphql.GraphQLString
                            },
                            rafflePrizeUrl: { type: graphql.GraphQLString },
                            rafflePrizeImage: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'controlRaffleapiRaffleWinnersresponseitemrafflePrizerafflePrizeImageResponse',
                                fields: {
                                  urlPath: { type: graphql.GraphQLString },
                                  relativePath: { type: graphql.GraphQLString }
                                }
                              })
                            }
                          }
                        })
                      },
                      prizeIsClaimed: { type: graphql.GraphQLBoolean },
                      prizeClaimedDateTime: { type: graphql.GraphQLString },
                      prizeIsAwarded: { type: graphql.GraphQLBoolean },
                      prizeAwardedById: { type: graphql.GraphQLInt },
                      prizeAwardedByProfile: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'controlRaffleapiRaffleWinnersresponseitemprizeAwardedByProfileResponse',
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
                            entityBackgroundImageUrl: {
                              type: graphql.GraphQLString
                            },
                            entityBackgroundImageUrlIsExternal: {
                              type: graphql.GraphQLBoolean
                            }
                          }
                        })
                      },
                      prizeAwardedDateTime: { type: graphql.GraphQLString },
                      prizeHasExpired: { type: graphql.GraphQLBoolean }
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
  apiRafflePrizes: {
    method: 'GET',
    url: 'api/Raffle/prizes',
    response: new graphql.GraphQLObjectType({
      name: 'controlRaffleapiRafflePrizesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlRaffleapiRafflePrizesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'controlRaffleapiRafflePrizesresponseitemResponse',
                    fields: {
                      rafflePrizeId: { type: graphql.GraphQLInt },
                      rafflePrizeDate: { type: graphql.GraphQLString },
                      rafflePrizeTitle: { type: graphql.GraphQLString },
                      rafflePrizeDescription: { type: graphql.GraphQLString },
                      rafflePrizeUrl: { type: graphql.GraphQLString },
                      rafflePrizeImage: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'controlRaffleapiRafflePrizesresponseitemrafflePrizeImageResponse',
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
  apiRaffleWinnerBywinnerIdAwarded: {
    method: 'POST',
    url: 'api/Raffle/winner/{winnerId}/awarded',
    response: new graphql.GraphQLObjectType({
      name: 'controlRaffleapiRaffleWinnerBywinnerIdAwardedResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiRafflePrize: {
    method: 'POST',
    url: 'api/Raffle/prize',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        rafflePrizeDate: { type: graphql.GraphQLString },
        rafflePrizeTitle: { type: graphql.GraphQLString },
        rafflePrizeDescription: { type: graphql.GraphQLString },
        rafflePrizeUrl: { type: graphql.GraphQLString },
        rafflePrizeImageUrl: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlRaffleapiRafflePrizeResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiRafflePrizeByprizeId: {
    method: 'DELETE',
    url: 'api/Raffle/prize/{prizeId}',
    response: new graphql.GraphQLObjectType({
      name: 'controlRaffleapiRafflePrizeByprizeIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
