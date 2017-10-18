const graphql = require('graphql')

module.exports = {
  apiNotifications: {
    method: 'GET',
    url: 'api/Notifications/',
    response: new graphql.GraphQLObjectType({
      name: 'pollingNotificationsapiNotificationsResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'pollingNotificationsapiNotificationsresponseResponse',
            fields: {
              dismissedNotifications: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingNotificationsapiNotificationsresponsedismissedNotificationsResponse',
                  fields: {
                    notifications: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLObjectType({
                          name:
                            'pollingNotificationsapiNotificationsresponsedismissedNotificationsnotificationsResponse',
                          fields: {
                            capacity: { type: graphql.GraphQLInt },
                            count: { type: graphql.GraphQLInt },
                            item: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingNotificationsapiNotificationsresponsedismissedNotificationsnotificationsitemResponse',
                                fields: {
                                  notificationStateName: {
                                    type: graphql.GraphQLString
                                  },
                                  displayName: { type: graphql.GraphQLString },
                                  linkAttribute: {
                                    type: graphql.GraphQLString
                                  },
                                  linkType: { type: graphql.GraphQLString },
                                  logoUrl: { type: graphql.GraphQLString },
                                  message: { type: graphql.GraphQLString },
                                  messageAttributes: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'pollingNotificationsapiNotificationsresponsedismissedNotificationsnotificationsitemmessageAttributesResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'pollingNotificationsapiNotificationsresponsedismissedNotificationsnotificationsitemmessageAttributesitemResponse',
                                                fields: {
                                                  attributeId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  displayName: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  linkType: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  linkAttribute: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  },
                                  actions: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'pollingNotificationsapiNotificationsresponsedismissedNotificationsnotificationsitemactionsResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'pollingNotificationsapiNotificationsresponsedismissedNotificationsnotificationsitemactionsitemResponse',
                                                fields: {
                                                  action: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  isPreferredAction: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  actionAttribute: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  },
                                  notificationId: { type: graphql.GraphQLInt },
                                  userNotifiedEntityId: {
                                    type: graphql.GraphQLInt
                                  },
                                  messageId: { type: graphql.GraphQLInt },
                                  createdDateTime: {
                                    type: graphql.GraphQLString
                                  },
                                  notificationStateId: {
                                    type: graphql.GraphQLInt
                                  },
                                  actionDateTime: {
                                    type: graphql.GraphQLString
                                  }
                                }
                              })
                            }
                          }
                        })
                      )
                    },
                    returnedNoticationsCount: { type: graphql.GraphQLInt },
                    totalNoticationsCount: { type: graphql.GraphQLInt }
                  }
                })
              },
              pendingNotifications: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingNotificationsapiNotificationsresponsependingNotificationsResponse',
                  fields: {
                    notifications: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLObjectType({
                          name:
                            'pollingNotificationsapiNotificationsresponsependingNotificationsnotificationsResponse',
                          fields: {
                            capacity: { type: graphql.GraphQLInt },
                            count: { type: graphql.GraphQLInt },
                            item: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingNotificationsapiNotificationsresponsependingNotificationsnotificationsitemResponse',
                                fields: {
                                  notificationStateName: {
                                    type: graphql.GraphQLString
                                  },
                                  displayName: { type: graphql.GraphQLString },
                                  linkAttribute: {
                                    type: graphql.GraphQLString
                                  },
                                  linkType: { type: graphql.GraphQLString },
                                  logoUrl: { type: graphql.GraphQLString },
                                  message: { type: graphql.GraphQLString },
                                  messageAttributes: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'pollingNotificationsapiNotificationsresponsependingNotificationsnotificationsitemmessageAttributesResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'pollingNotificationsapiNotificationsresponsependingNotificationsnotificationsitemmessageAttributesitemResponse',
                                                fields: {
                                                  attributeId: {
                                                    type: graphql.GraphQLInt
                                                  },
                                                  displayName: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  linkType: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  linkAttribute: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  },
                                  actions: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'pollingNotificationsapiNotificationsresponsependingNotificationsnotificationsitemactionsResponse',
                                        fields: {
                                          capacity: {
                                            type: graphql.GraphQLInt
                                          },
                                          count: { type: graphql.GraphQLInt },
                                          item: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'pollingNotificationsapiNotificationsresponsependingNotificationsnotificationsitemactionsitemResponse',
                                                fields: {
                                                  action: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  isPreferredAction: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  actionAttribute: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          }
                                        }
                                      })
                                    )
                                  },
                                  notificationId: { type: graphql.GraphQLInt },
                                  userNotifiedEntityId: {
                                    type: graphql.GraphQLInt
                                  },
                                  messageId: { type: graphql.GraphQLInt },
                                  createdDateTime: {
                                    type: graphql.GraphQLString
                                  },
                                  notificationStateId: {
                                    type: graphql.GraphQLInt
                                  },
                                  actionDateTime: {
                                    type: graphql.GraphQLString
                                  }
                                }
                              })
                            }
                          }
                        })
                      )
                    },
                    returnedNoticationsCount: { type: graphql.GraphQLInt },
                    totalNoticationsCount: { type: graphql.GraphQLInt }
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
