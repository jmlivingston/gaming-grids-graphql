const graphql = require('graphql')

module.exports = {
  apiPlatformMarketingBanner: {
    method: 'POST',
    url: 'api/Platform/Marketing/Banner',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        marketingBannerTitle: { type: graphql.GraphQLString },
        marketingBannerLinkUrl: { type: graphql.GraphQLString },
        marketingBannerImageUrl: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlMarketingapiPlatformMarketingBannerResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiPlatformMarketingBannerBybannerId: {
    method: 'DELETE',
    url: 'api/Platform/Marketing/Banner/{bannerId}/',
    response: new graphql.GraphQLObjectType({
      name: 'controlMarketingapiPlatformMarketingBannerBybannerIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
