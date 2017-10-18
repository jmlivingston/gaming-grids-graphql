const graphql = require('graphql')

module.exports = {
  apiWalletBalanceReal: {
    method: 'GET',
    url: 'api/Wallet/Balance/Real',
    response: new graphql.GraphQLObjectType({
      name: 'pollingWalletapiWalletBalanceRealResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiWalletBalanceVirtual: {
    method: 'GET',
    url: 'api/Wallet/Balance/virtual',
    response: new graphql.GraphQLObjectType({
      name: 'pollingWalletapiWalletBalanceVirtualResponse',
      fields: {
        response: { type: graphql.GraphQLInt },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
