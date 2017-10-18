const graphql = require('graphql')

module.exports = {
  apiInfusionsoftAuthorize: {
    method: 'GET',
    url: 'api/Infusionsoft/authorize',
    response: graphql.GraphQLString,
    uriParam: {
      model: {
        scope: String,
        code: String
      }
    }
  }
}
