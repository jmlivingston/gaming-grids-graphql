const graphql = require('graphql')

module.exports = {
  apiWalletBalanceRealByentityName: {
    method: 'GET',
    url: 'api/Wallet/Balance/Real/{entityName}',
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletapiWalletBalanceRealByentityNameResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiWalletBalanceVirtualByentityName: {
    method: 'GET',
    url: 'api/Wallet/Balance/virtual/{entityName}',
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletapiWalletBalanceVirtualByentityNameResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiWalletTransactionByentityName: {
    method: 'POST',
    url: 'api/Wallet/Transaction/{entityName}',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        isRealCurrency: { type: graphql.GraphQLBoolean },
        walletTransactionTypeId: { type: graphql.GraphQLInt },
        walletTransactionProviderId: { type: graphql.GraphQLInt },
        entityPlayerTransactionAmount: { type: graphql.GraphQLInt },
        entityPlayerTransactionFee: { type: graphql.GraphQLInt },
        transactionDescription: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletapiWalletTransactionByentityNameResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiWalletTransactionBytransId: {
    method: 'DELETE',
    url: 'api/Wallet/Transaction/{transId}',
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletapiWalletTransactionBytransIdResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiWalletTransactions: {
    method: 'GET',
    url: 'api/Wallet/Transactions',
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletapiWalletTransactionsResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlWalletapiWalletTransactionsresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlWalletapiWalletTransactionsresponseitemResponse',
                    fields: {
                      entityPlayerWalletTransactionId: {
                        type: graphql.GraphQLInt
                      },
                      entityPlayerId: { type: graphql.GraphQLInt },
                      tournamentId: { type: graphql.GraphQLInt },
                      displayName: { type: graphql.GraphQLString },
                      entityName: { type: graphql.GraphQLString },
                      accountBalance: { type: graphql.GraphQLInt },
                      currentAccountBalance: { type: graphql.GraphQLInt },
                      walletTransactionType: { type: graphql.GraphQLString },
                      walletTransactionTypeMultiplier: {
                        type: graphql.GraphQLInt
                      },
                      walletTransactionProvider: {
                        type: graphql.GraphQLString
                      },
                      entityPlayerTransactionTotal: {
                        type: graphql.GraphQLInt
                      },
                      isGiftCertificate: { type: graphql.GraphQLBoolean },
                      externalId: { type: graphql.GraphQLString },
                      completionCallback: { type: graphql.GraphQLString },
                      isTransacted: { type: graphql.GraphQLBoolean },
                      entityPlayerTransactionDateTime: {
                        type: graphql.GraphQLString
                      },
                      isRealCurrency: { type: graphql.GraphQLBoolean },
                      walletTransactionTypeId: { type: graphql.GraphQLInt },
                      walletTransactionProviderId: { type: graphql.GraphQLInt },
                      entityPlayerTransactionAmount: {
                        type: graphql.GraphQLInt
                      },
                      entityPlayerTransactionFee: { type: graphql.GraphQLInt },
                      transactionDescription: { type: graphql.GraphQLString }
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
        entityName: String,
        fromDate: String,
        toDate: String,
        isRealCurrency: Boolean
      }
    }
  },
  apiWalletTransactionsReportingDetails: {
    method: 'GET',
    url: 'api/Wallet/Transactions/reporting/details',
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletapiWalletTransactionsReportingDetailsResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlWalletapiWalletTransactionsReportingDetailsresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlWalletapiWalletTransactionsReportingDetailsresponseitemResponse',
                    fields: {
                      transactionId: { type: graphql.GraphQLInt },
                      transactionDateTime: { type: graphql.GraphQLString },
                      firstName: { type: graphql.GraphQLString },
                      lastName: { type: graphql.GraphQLString },
                      emailAddress: { type: graphql.GraphQLString },
                      transactionType: { type: graphql.GraphQLString },
                      transactionProvider: { type: graphql.GraphQLString },
                      transactionAmount: { type: graphql.GraphQLInt },
                      transactionFee: { type: graphql.GraphQLInt },
                      transactionTotal: { type: graphql.GraphQLInt },
                      transactionDescription: { type: graphql.GraphQLString },
                      addressCountryCode: { type: graphql.GraphQLString }
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
        entityName: String,
        fromDate: String,
        toDate: String,
        isRealCurrency: Boolean
      }
    }
  },
  apiWalletTransactionsReportingFees: {
    method: 'GET',
    url: 'api/Wallet/Transactions/reporting/fees',
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletapiWalletTransactionsReportingFeesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlWalletapiWalletTransactionsReportingFeesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlWalletapiWalletTransactionsReportingFeesresponseitemResponse',
                    fields: {
                      addressCountryCode: { type: graphql.GraphQLString },
                      numberOfTransactions: { type: graphql.GraphQLInt },
                      totalFees: { type: graphql.GraphQLInt }
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
        entityName: String,
        fromDate: String,
        toDate: String,
        isRealCurrency: Boolean
      }
    }
  },
  apiWalletTransactionTypes: {
    method: 'GET',
    url: 'api/Wallet/TransactionTypes',
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletapiWalletTransactionTypesResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlWalletapiWalletTransactionTypesresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlWalletapiWalletTransactionTypesresponseitemResponse',
                    fields: {
                      walletTransactionTypeId: { type: graphql.GraphQLInt },
                      isActive: { type: graphql.GraphQLBoolean },
                      walletTransactionType: { type: graphql.GraphQLString },
                      walletTransactionTypeMultiplier: {
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
  apiWalletTransactionType: {
    method: 'POST',
    url: 'api/Wallet/TransactionType',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        walletTransactionType: { type: graphql.GraphQLString },
        walletTransactionTypeMultiplier: { type: graphql.GraphQLInt }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletapiWalletTransactionTypeResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'controlWalletapiWalletTransactionTyperesponseResponse',
            fields: {
              walletTransactionTypeId: { type: graphql.GraphQLInt },
              isActive: { type: graphql.GraphQLBoolean },
              walletTransactionType: { type: graphql.GraphQLString },
              walletTransactionTypeMultiplier: { type: graphql.GraphQLInt }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiWalletTransactionTypeBytypeId: {
    method: 'DELETE',
    url: 'api/Wallet/TransactionType/{typeId}',
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletapiWalletTransactionTypeBytypeIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiWalletTransactionProviders: {
    method: 'GET',
    url: 'api/Wallet/TransactionProviders',
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletapiWalletTransactionProvidersResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlWalletapiWalletTransactionProvidersresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlWalletapiWalletTransactionProvidersresponseitemResponse',
                    fields: {
                      walletTransactionProviderId: { type: graphql.GraphQLInt },
                      isActive: { type: graphql.GraphQLBoolean },
                      walletTransactionProviderGroupId: {
                        type: graphql.GraphQLInt
                      },
                      walletTransactionProvider: {
                        type: graphql.GraphQLString
                      },
                      walletTransactionProviderPaymentCode: {
                        type: graphql.GraphQLString
                      },
                      transactionRate: { type: graphql.GraphQLInt },
                      transactionFee: { type: graphql.GraphQLInt },
                      brandImageUrl: { type: graphql.GraphQLString },
                      isInternal: { type: graphql.GraphQLBoolean },
                      displayInListing: { type: graphql.GraphQLBoolean },
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
  apiWalletTransactionProvider: {
    method: 'POST',
    url: 'api/Wallet/TransactionProvider',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        walletTransactionProviderGroupId: { type: graphql.GraphQLInt },
        walletTransactionProvider: { type: graphql.GraphQLString },
        walletTransactionProviderPaymentCode: { type: graphql.GraphQLString },
        transactionRate: { type: graphql.GraphQLInt },
        transactionFee: { type: graphql.GraphQLInt },
        brandImageUrl: { type: graphql.GraphQLString },
        isInternal: { type: graphql.GraphQLBoolean },
        displayInListing: { type: graphql.GraphQLBoolean },
        orderBy: { type: graphql.GraphQLInt }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletapiWalletTransactionProviderResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'controlWalletapiWalletTransactionProviderresponseResponse',
            fields: {
              walletTransactionProviderId: { type: graphql.GraphQLInt },
              isActive: { type: graphql.GraphQLBoolean },
              walletTransactionProviderGroupId: { type: graphql.GraphQLInt },
              walletTransactionProvider: { type: graphql.GraphQLString },
              walletTransactionProviderPaymentCode: {
                type: graphql.GraphQLString
              },
              transactionRate: { type: graphql.GraphQLInt },
              transactionFee: { type: graphql.GraphQLInt },
              brandImageUrl: { type: graphql.GraphQLString },
              isInternal: { type: graphql.GraphQLBoolean },
              displayInListing: { type: graphql.GraphQLBoolean },
              orderBy: { type: graphql.GraphQLInt }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiWalletTransactionProviderByproviderId: {
    method: 'DELETE',
    url: 'api/Wallet/TransactionProvider/{providerId}',
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletapiWalletTransactionProviderByproviderIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
