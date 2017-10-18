const graphql = require('graphql')

module.exports = {
  apiAccountEmail: {
    method: 'POST',
    url: 'api/Account/Email',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        membershipTypeId: { type: graphql.GraphQLInt },
        firstName: { type: graphql.GraphQLString },
        lastName: { type: graphql.GraphQLString },
        customData: { type: graphql.GraphQLString },
        emailAddress: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientAccountapiAccountEmailResponse',
      fields: {
        response: { type: graphql.GraphQLString },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiAccountEmailRegisterBytoken: {
    method: 'POST',
    url: 'api/Account/Email/Register/{token}',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        birthDate: { type: graphql.GraphQLString },
        entityGenderId: { type: graphql.GraphQLInt },
        authenticateSkrill: { type: graphql.GraphQLBoolean },
        displayName: { type: graphql.GraphQLString },
        firstName: { type: graphql.GraphQLString },
        lastName: { type: graphql.GraphQLString },
        pwd: { type: graphql.GraphQLString },
        address: { type: graphql.GraphQLString },
        city: { type: graphql.GraphQLString },
        addressStateProvenceId: { type: graphql.GraphQLInt },
        otherAddressStateProvence: { type: graphql.GraphQLString },
        postalCode: { type: graphql.GraphQLString },
        addressCountryId: { type: graphql.GraphQLInt }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientAccountapiAccountEmailRegisterBytokenResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientAccountapiAccountEmailRegisterBytokenresponseResponse',
            fields: {
              entityId: { type: graphql.GraphQLInt },
              userLoginToken: { type: graphql.GraphQLString },
              entityMembershipId: { type: graphql.GraphQLString },
              entityMembershipToken: { type: graphql.GraphQLString },
              emailAddress: { type: graphql.GraphQLString },
              firstName: { type: graphql.GraphQLString },
              lastName: { type: graphql.GraphQLString },
              entityName: { type: graphql.GraphQLString },
              displayName: { type: graphql.GraphQLString },
              isAdministrator: { type: graphql.GraphQLBoolean },
              registrationDateTime: { type: graphql.GraphQLString },
              lastLoginDateTime: { type: graphql.GraphQLString },
              entityImageUrl: { type: graphql.GraphQLString },
              playerSubscriptionTypeId: { type: graphql.GraphQLInt },
              muut: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientAccountapiAccountEmailRegisterBytokenresponsemuutResponse',
                  fields: {
                    timestamp: { type: graphql.GraphQLInt },
                    message: { type: graphql.GraphQLString },
                    signature: { type: graphql.GraphQLString }
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
  },
  apiAccountEmailConfirmationBytoken: {
    method: 'GET',
    url: 'api/Account/Email/Confirmation/{token}',
    response: new graphql.GraphQLObjectType({
      name: 'clientAccountapiAccountEmailConfirmationBytokenResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientAccountapiAccountEmailConfirmationBytokenresponseResponse',
            fields: {
              token: { type: graphql.GraphQLString },
              membershipId: { type: graphql.GraphQLString },
              emailAddress: { type: graphql.GraphQLString },
              membershipTypeId: { type: graphql.GraphQLInt },
              ipAddress: { type: graphql.GraphQLString },
              firstName: { type: graphql.GraphQLString },
              lastName: { type: graphql.GraphQLString },
              addressCountryId: { type: graphql.GraphQLInt },
              addressCountry: { type: graphql.GraphQLString },
              addressStateId: { type: graphql.GraphQLInt },
              addressState: { type: graphql.GraphQLString },
              regionId: { type: graphql.GraphQLInt },
              tempPassword: { type: graphql.GraphQLString },
              customData: { type: graphql.GraphQLString },
              createdDateTime: { type: graphql.GraphQLString }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiAccountConfirmationBytoken: {
    method: 'POST',
    url: 'api/Account/Confirmation/{token}',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { emailAddress: { type: graphql.GraphQLString } }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientAccountapiAccountConfirmationBytokenResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiAccount: {
    method: 'POST',
    url: 'api/Account/',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        token: { type: graphql.GraphQLString },
        membershipTypeId: { type: graphql.GraphQLInt },
        displayName: { type: graphql.GraphQLString },
        emailAddress: { type: graphql.GraphQLString },
        pwd: { type: graphql.GraphQLString },
        firstName: { type: graphql.GraphQLString },
        lastName: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientAccountapiAccountResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientAccountapiAccountresponseResponse',
            fields: {
              entityId: { type: graphql.GraphQLInt },
              userLoginToken: { type: graphql.GraphQLString },
              entityMembershipId: { type: graphql.GraphQLString },
              entityMembershipToken: { type: graphql.GraphQLString },
              emailAddress: { type: graphql.GraphQLString },
              firstName: { type: graphql.GraphQLString },
              lastName: { type: graphql.GraphQLString },
              entityName: { type: graphql.GraphQLString },
              displayName: { type: graphql.GraphQLString },
              isAdministrator: { type: graphql.GraphQLBoolean },
              registrationDateTime: { type: graphql.GraphQLString },
              lastLoginDateTime: { type: graphql.GraphQLString },
              entityImageUrl: { type: graphql.GraphQLString },
              playerSubscriptionTypeId: { type: graphql.GraphQLInt },
              muut: {
                type: new graphql.GraphQLObjectType({
                  name: 'clientAccountapiAccountresponsemuutResponse',
                  fields: {
                    timestamp: { type: graphql.GraphQLInt },
                    message: { type: graphql.GraphQLString },
                    signature: { type: graphql.GraphQLString }
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
