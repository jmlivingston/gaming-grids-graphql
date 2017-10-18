const graphql = require('graphql')

module.exports = {
  apiLocation: {
    method: 'POST',
    url: 'api/Location/',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
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
    }),
    response: new graphql.GraphQLObjectType({
      name: 'controlLocationapiLocationResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'controlLocationapiLocationresponseResponse',
            fields: {
              locationId: { type: graphql.GraphQLInt },
              stateProvence: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlLocationapiLocationresponsestateProvenceResponse',
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
                  name: 'controlLocationapiLocationresponsecountryResponse',
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
                  name: 'controlLocationapiLocationresponseregionResponse',
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
  apiLocationBylocationId: {
    method: 'POST',
    url: 'api/Location/{locationId}',
    response: new graphql.GraphQLObjectType({
      name: 'controlLocationapiLocationBylocationIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
