const graphql = require('graphql')

module.exports = {
  apiRaffleMyPrizes: {
    method: 'GET',
    url: 'api/Raffle/my/prizes',
    response: new graphql.GraphQLObjectType({
      name: 'clientRaffleapiRaffleMyPrizesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientRaffleapiRaffleMyPrizesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientRaffleapiRaffleMyPrizesresponseitemResponse',
                    fields: {
                      raffleWinnerId: { type: graphql.GraphQLInt },
                      raffleDate: { type: graphql.GraphQLString },
                      raffleTicket: { type: graphql.GraphQLString },
                      raffleWinnerEntityId: { type: graphql.GraphQLInt },
                      raffleWinnerProfile: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientRaffleapiRaffleMyPrizesresponseitemraffleWinnerProfileResponse',
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
                            'clientRaffleapiRaffleMyPrizesresponseitemrafflePrizeResponse',
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
                                  'clientRaffleapiRaffleMyPrizesresponseitemrafflePrizerafflePrizeImageResponse',
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
                            'clientRaffleapiRaffleMyPrizesresponseitemprizeAwardedByProfileResponse',
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
  apiRaffleTicketDailyReceived: {
    method: 'GET',
    url: 'api/Raffle/ticket/daily/received',
    response: new graphql.GraphQLObjectType({
      name: 'clientRaffleapiRaffleTicketDailyReceivedResponse',
      fields: {
        response: { type: graphql.GraphQLBoolean },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiRaffleTicketDaily: {
    method: 'POST',
    url: 'api/Raffle/ticket/daily',
    response: new graphql.GraphQLObjectType({
      name: 'clientRaffleapiRaffleTicketDailyResponse',
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
      name: 'clientRaffleapiRaffleWinnersResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientRaffleapiRaffleWinnersresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientRaffleapiRaffleWinnersresponseitemResponse',
                    fields: {
                      raffleWinnerId: { type: graphql.GraphQLInt },
                      raffleDate: { type: graphql.GraphQLString },
                      raffleTicket: { type: graphql.GraphQLString },
                      raffleWinnerEntityId: { type: graphql.GraphQLInt },
                      raffleWinnerProfile: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientRaffleapiRaffleWinnersresponseitemraffleWinnerProfileResponse',
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
                            'clientRaffleapiRaffleWinnersresponseitemrafflePrizeResponse',
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
                                  'clientRaffleapiRaffleWinnersresponseitemrafflePrizerafflePrizeImageResponse',
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
                            'clientRaffleapiRaffleWinnersresponseitemprizeAwardedByProfileResponse',
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
  apiRaffleWinnerBywinnerIdClaimed: {
    method: 'POST',
    url: 'api/Raffle/winner/{winnerId}/claimed',
    response: new graphql.GraphQLObjectType({
      name: 'clientRaffleapiRaffleWinnerBywinnerIdClaimedResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiRafflePrize: {
    method: 'GET',
    url: 'api/Raffle/prize',
    response: new graphql.GraphQLObjectType({
      name: 'clientRaffleapiRafflePrizeResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientRaffleapiRafflePrizeresponseResponse',
            fields: {
              rafflePrizeId: { type: graphql.GraphQLInt },
              rafflePrizeDate: { type: graphql.GraphQLString },
              rafflePrizeTitle: { type: graphql.GraphQLString },
              rafflePrizeDescription: { type: graphql.GraphQLString },
              rafflePrizeUrl: { type: graphql.GraphQLString },
              rafflePrizeImage: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientRaffleapiRafflePrizeresponserafflePrizeImageResponse',
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
