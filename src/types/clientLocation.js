const graphql = require('graphql')

module.exports = {
  apiLocationBylocationId: {
    method: 'GET',
    url: 'api/Location/{locationId}',
    response: new graphql.GraphQLObjectType({
      name: 'clientLocationapiLocationBylocationIdResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientLocationapiLocationBylocationIdresponseResponse',
            fields: {
              locationId: { type: graphql.GraphQLInt },
              stateProvence: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientLocationapiLocationBylocationIdresponsestateProvenceResponse',
                  fields: {
                    addressStateProvenceId: { type: graphql.GraphQLInt },
                    addressCountryId: { type: graphql.GraphQLInt },
                    addressStateProvenceCode: { type: graphql.GraphQLString },
                    addressStateProvence: { type: graphql.GraphQLString },
                    allowsRealMoney: { type: graphql.GraphQLBoolean }
                  }
                })
              },
              country: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientLocationapiLocationBylocationIdresponsecountryResponse',
                  fields: {
                    addressCountryId: { type: graphql.GraphQLInt },
                    addressCountryCode: { type: graphql.GraphQLString },
                    addressCountry3LetterCode: { type: graphql.GraphQLString },
                    addressCountry: { type: graphql.GraphQLString },
                    allowsRealMoney: { type: graphql.GraphQLBoolean },
                    flagSmallImageUrl: { type: graphql.GraphQLString },
                    flagLargeImageUrl: { type: graphql.GraphQLString },
                    showInList: { type: graphql.GraphQLBoolean },
                    orderBy: { type: graphql.GraphQLInt }
                  }
                })
              },
              region: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientLocationapiLocationBylocationIdresponseregionResponse',
                  fields: {
                    gamingServerRegionId: { type: graphql.GraphQLInt },
                    gamingServerRegionName: { type: graphql.GraphQLString }
                  }
                })
              },
              isActive: { type: graphql.GraphQLBoolean },
              location: { type: graphql.GraphQLString },
              streetAddress: { type: graphql.GraphQLString },
              city: { type: graphql.GraphQLString },
              addressStateProvenceId: { type: graphql.GraphQLInt },
              addressCountryId: { type: graphql.GraphQLInt },
              postalCode: { type: graphql.GraphQLString },
              gamingServerRegionId: { type: graphql.GraphQLInt },
              phoneNumber: { type: graphql.GraphQLString },
              emailAddress: { type: graphql.GraphQLString },
              hours: { type: graphql.GraphQLString },
              description: { type: graphql.GraphQLString }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiLocationSearch: {
    method: 'GET',
    url: 'api/Location/Search',
    response: new graphql.GraphQLObjectType({
      name: 'clientLocationapiLocationSearchResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientLocationapiLocationSearchresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientLocationapiLocationSearchresponseitemResponse',
                    fields: {
                      locationId: { type: graphql.GraphQLInt },
                      stateProvence: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientLocationapiLocationSearchresponseitemstateProvenceResponse',
                          fields: {
                            addressStateProvenceId: {
                              type: graphql.GraphQLInt
                            },
                            addressCountryId: { type: graphql.GraphQLInt },
                            addressStateProvenceCode: {
                              type: graphql.GraphQLString
                            },
                            addressStateProvence: {
                              type: graphql.GraphQLString
                            },
                            allowsRealMoney: { type: graphql.GraphQLBoolean }
                          }
                        })
                      },
                      country: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientLocationapiLocationSearchresponseitemcountryResponse',
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
                      },
                      region: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientLocationapiLocationSearchresponseitemregionResponse',
                          fields: {
                            gamingServerRegionId: { type: graphql.GraphQLInt },
                            gamingServerRegionName: {
                              type: graphql.GraphQLString
                            }
                          }
                        })
                      },
                      isActive: { type: graphql.GraphQLBoolean },
                      location: { type: graphql.GraphQLString },
                      streetAddress: { type: graphql.GraphQLString },
                      city: { type: graphql.GraphQLString },
                      addressStateProvenceId: { type: graphql.GraphQLInt },
                      addressCountryId: { type: graphql.GraphQLInt },
                      postalCode: { type: graphql.GraphQLString },
                      gamingServerRegionId: { type: graphql.GraphQLInt },
                      phoneNumber: { type: graphql.GraphQLString },
                      emailAddress: { type: graphql.GraphQLString },
                      hours: { type: graphql.GraphQLString },
                      description: { type: graphql.GraphQLString }
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
        stateProvenceId: Number,
        countryId: Number,
        regionId: Number
      }
    }
  },
  apiLocationByRegion: {
    method: 'GET',
    url: 'api/Location/byRegion',
    response: new graphql.GraphQLObjectType({
      name: 'clientLocationapiLocationByRegionResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientLocationapiLocationByRegionresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientLocationapiLocationByRegionresponseitemResponse',
                    fields: {
                      locationId: { type: graphql.GraphQLInt },
                      stateProvence: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientLocationapiLocationByRegionresponseitemstateProvenceResponse',
                          fields: {
                            addressStateProvenceId: {
                              type: graphql.GraphQLInt
                            },
                            addressCountryId: { type: graphql.GraphQLInt },
                            addressStateProvenceCode: {
                              type: graphql.GraphQLString
                            },
                            addressStateProvence: {
                              type: graphql.GraphQLString
                            },
                            allowsRealMoney: { type: graphql.GraphQLBoolean }
                          }
                        })
                      },
                      country: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientLocationapiLocationByRegionresponseitemcountryResponse',
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
                      },
                      region: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientLocationapiLocationByRegionresponseitemregionResponse',
                          fields: {
                            gamingServerRegionId: { type: graphql.GraphQLInt },
                            gamingServerRegionName: {
                              type: graphql.GraphQLString
                            }
                          }
                        })
                      },
                      isActive: { type: graphql.GraphQLBoolean },
                      location: { type: graphql.GraphQLString },
                      streetAddress: { type: graphql.GraphQLString },
                      city: { type: graphql.GraphQLString },
                      addressStateProvenceId: { type: graphql.GraphQLInt },
                      addressCountryId: { type: graphql.GraphQLInt },
                      postalCode: { type: graphql.GraphQLString },
                      gamingServerRegionId: { type: graphql.GraphQLInt },
                      phoneNumber: { type: graphql.GraphQLString },
                      emailAddress: { type: graphql.GraphQLString },
                      hours: { type: graphql.GraphQLString },
                      description: { type: graphql.GraphQLString }
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
