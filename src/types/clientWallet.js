const graphql = require('graphql')

module.exports = {
  apiWalletTransactionProviders: {
    method: 'GET',
    url: 'api/Wallet/Transaction/Providers',
    response: new graphql.GraphQLObjectType({
      name: 'clientWalletapiWalletTransactionProvidersResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientWalletapiWalletTransactionProvidersresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientWalletapiWalletTransactionProvidersresponseitemResponse',
                    fields: {
                      walletTransactionProviderGroupId: {
                        type: graphql.GraphQLInt
                      },
                      walletTransactionProviderGroup: {
                        type: graphql.GraphQLString
                      },
                      displayInListing: { type: graphql.GraphQLBoolean },
                      orderBy: { type: graphql.GraphQLInt },
                      providers: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientWalletapiWalletTransactionProvidersresponseitemprovidersResponse',
                            fields: {
                              capacity: { type: graphql.GraphQLInt },
                              count: { type: graphql.GraphQLInt },
                              item: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientWalletapiWalletTransactionProvidersresponseitemprovidersitemResponse',
                                  fields: {
                                    countryTransactionRate: {
                                      type: graphql.GraphQLInt
                                    },
                                    walletTransactionProviderId: {
                                      type: graphql.GraphQLInt
                                    },
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
                                    transactionRate: {
                                      type: graphql.GraphQLInt
                                    },
                                    transactionFee: {
                                      type: graphql.GraphQLInt
                                    },
                                    brandImageUrl: {
                                      type: graphql.GraphQLString
                                    },
                                    isInternal: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    displayInListing: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    orderBy: { type: graphql.GraphQLInt }
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
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiWalletTransactionSkrillBegin: {
    method: 'POST',
    url: 'api/Wallet/Transaction/skrill/begin',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        amount: { type: graphql.GraphQLInt },
        total: { type: graphql.GraphQLInt },
        providerCode: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientWalletapiWalletTransactionSkrillBeginResponse',
      fields: {
        response: { type: graphql.GraphQLString },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiWalletPaypalPayment: {
    method: 'POST',
    url: 'api/Wallet/paypal/payment',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        payPalId: { type: graphql.GraphQLString },
        emailAddress: { type: graphql.GraphQLString },
        firstName: { type: graphql.GraphQLString },
        lastName: { type: graphql.GraphQLString },
        payerId: { type: graphql.GraphQLString },
        amount: { type: graphql.GraphQLInt },
        fee: { type: graphql.GraphQLInt },
        currency: { type: graphql.GraphQLString },
        createTime: { type: graphql.GraphQLString },
        state: { type: graphql.GraphQLString },
        paymentMethod: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientWalletapiWalletPaypalPaymentResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiWalletTransactionEkashuHashcode: {
    method: 'POST',
    url: 'api/Wallet/transaction/ekashu/hashcode',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        hashKey: { type: graphql.GraphQLString },
        terminalId: { type: graphql.GraphQLString },
        referenceId: { type: graphql.GraphQLString },
        amount: { type: graphql.GraphQLFloat }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientWalletapiWalletTransactionEkashuHashcodeResponse',
      fields: {
        response: { type: graphql.GraphQLString },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiWalletTransactionEaclBegin: {
    method: 'POST',
    url: 'api/Wallet/Transaction/eacl/begin',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        amount: { type: graphql.GraphQLInt },
        serviceFeeAmount: { type: graphql.GraphQLInt },
        externalId: { type: graphql.GraphQLString },
        transactionTypeId: { type: graphql.GraphQLInt },
        isGiftCertificate: { type: graphql.GraphQLBoolean },
        completionCallbackUrl: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientWalletapiWalletTransactionEaclBeginResponse',
      fields: {
        response: { type: graphql.GraphQLString },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiWalletTransactionEaclGiftcertificateBycode: {
    method: 'POST',
    url: 'api/Wallet/transaction/eacl/giftcertificate/{code}',
    response: new graphql.GraphQLObjectType({
      name: 'clientWalletapiWalletTransactionEaclGiftcertificateBycodeResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiWalletTransactions: {
    method: 'GET',
    url: 'api/Wallet/Transactions',
    response: new graphql.GraphQLObjectType({
      name: 'clientWalletapiWalletTransactionsResponse',
      fields: {
        response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientWalletapiWalletTransactionsresponseResponse',
              fields: {
                capacity: { type: graphql.GraphQLInt },
                count: { type: graphql.GraphQLInt },
                item: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientWalletapiWalletTransactionsresponseitemResponse',
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
  apiWalletWithdraw: {
    method: 'POST',
    url: 'api/Wallet/Withdraw',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        amount: { type: graphql.GraphQLInt },
        serviceFeeAmount: { type: graphql.GraphQLInt },
        externalId: { type: graphql.GraphQLString },
        transactionTypeId: { type: graphql.GraphQLInt },
        isGiftCertificate: { type: graphql.GraphQLBoolean },
        completionCallbackUrl: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientWalletapiWalletWithdrawResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
