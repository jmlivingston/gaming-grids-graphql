const graphql = require('graphql')

module.exports = {
  apiAuthenticateGOWSSO: {
    method: 'POST',
    url: 'api/Authenticate/GOW/SSO',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { token: { type: graphql.GraphQLString } }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientAuthenticateapiAuthenticateGOWSSOResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientAuthenticateapiAuthenticateGOWSSOresponseResponse',
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
                    'clientAuthenticateapiAuthenticateGOWSSOresponsemuutResponse',
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
  apiAuthenticateGOWToken: {
    method: 'POST',
    url: 'api/Authenticate/GOW/Token',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { token: { type: graphql.GraphQLString } }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientAuthenticateapiAuthenticateGOWTokenResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientAuthenticateapiAuthenticateGOWTokenresponseResponse',
            fields: {
              iss: { type: graphql.GraphQLString },
              aud: { type: graphql.GraphQLString },
              userId: { type: graphql.GraphQLString },
              usereMail: { type: graphql.GraphQLString },
              userFirstName: { type: graphql.GraphQLString },
              userLastName: { type: graphql.GraphQLString },
              userStore: { type: graphql.GraphQLString },
              userGamerTag: { type: graphql.GraphQLString },
              userCountry: { type: graphql.GraphQLString },
              userLanguage: { type: graphql.GraphQLString }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiAuthenticatePLayer: {
    method: 'POST',
    url: 'api/Authenticate/PLayer',
    response: new graphql.GraphQLObjectType({
      name: 'clientAuthenticateapiAuthenticatePLayerResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientAuthenticateapiAuthenticatePLayerresponseResponse',
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
                    'clientAuthenticateapiAuthenticatePLayerresponsemuutResponse',
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
  apiAuthenticateOrganization: {
    method: 'POST',
    url: 'api/Authenticate/Organization',
    response: new graphql.GraphQLObjectType({
      name: 'clientAuthenticateapiAuthenticateOrganizationResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientAuthenticateapiAuthenticateOrganizationresponseResponse',
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
                    'clientAuthenticateapiAuthenticateOrganizationresponsemuutResponse',
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
  apiAuthenticateTokenValidate: {
    method: 'GET',
    url: 'api/Authenticate/Token/Validate',
    response: new graphql.GraphQLObjectType({
      name: 'clientAuthenticateapiAuthenticateTokenValidateResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiAuthenticatePasswordForgot: {
    method: 'POST',
    url: 'api/Authenticate/Password/Forgot',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { emailAddress: { type: graphql.GraphQLString } }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientAuthenticateapiAuthenticatePasswordForgotResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiAuthenticatePasswordChange: {
    method: 'POST',
    url: 'api/Authenticate/Password/Change',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: {
        token: { type: graphql.GraphQLString },
        oldPwd: { type: graphql.GraphQLString },
        pwd: { type: graphql.GraphQLString },
        confirmPwd: { type: graphql.GraphQLString },
        emailAddress: { type: graphql.GraphQLString }
      }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientAuthenticateapiAuthenticatePasswordChangeResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiAuthenticateAdminImpersonateByentityName: {
    method: 'GET',
    url: 'api/Authenticate/Admin/Impersonate/{entityName}',
    response: new graphql.GraphQLObjectType({
      name:
        'clientAuthenticateapiAuthenticateAdminImpersonateByentityNameResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientAuthenticateapiAuthenticateAdminImpersonateByentityNameresponseResponse',
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
                    'clientAuthenticateapiAuthenticateAdminImpersonateByentityNameresponsemuutResponse',
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
