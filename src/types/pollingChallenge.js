const graphql = require('graphql')

module.exports = {
  apiChallengeCancelledByid: {
    method: 'GET',
    url: 'api/Challenge/cancelled/{id}',
    response: new graphql.GraphQLObjectType({
      name: 'pollingChallengeapiChallengeCancelledByidResponse',
      fields: {
        response: { type: graphql.GraphQLBoolean },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiChallengeMyOffer: {
    method: 'GET',
    url: 'api/Challenge/My/Offer',
    response: new graphql.GraphQLObjectType({
      name: 'pollingChallengeapiChallengeMyOfferResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'pollingChallengeapiChallengeMyOfferresponseResponse',
            fields: {
              challengeOfferId: { type: graphql.GraphQLInt },
              entryFee: { type: graphql.GraphQLInt },
              serviceFee: { type: graphql.GraphQLInt },
              totalFee: { type: graphql.GraphQLInt },
              tournamentId: { type: graphql.GraphQLInt },
              tournamentDescription: { type: graphql.GraphQLString },
              tournamentTitle: { type: graphql.GraphQLString },
              creatorEntityId: { type: graphql.GraphQLInt },
              challengerEntityId: { type: graphql.GraphQLInt },
              offerDateTime: { type: graphql.GraphQLString },
              creatorStateId: { type: graphql.GraphQLInt },
              creatorStateDateTime: { type: graphql.GraphQLString },
              challengerStateId: { type: graphql.GraphQLInt },
              challengerStateDateTime: { type: graphql.GraphQLString },
              hasPendingRegistration: { type: graphql.GraphQLBoolean },
              tournamentMatchId: { type: graphql.GraphQLInt },
              challengeComplete: { type: graphql.GraphQLBoolean },
              challengeCompleteDateTime: { type: graphql.GraphQLString },
              challengerNeedsRegistration: { type: graphql.GraphQLBoolean },
              creatorNeedsRegistration: { type: graphql.GraphQLBoolean },
              challengeCancelled: { type: graphql.GraphQLBoolean }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiChallengeMyOfferAccepted: {
    method: 'GET',
    url: 'api/Challenge/My/Offer/Accepted',
    response: new graphql.GraphQLObjectType({
      name: 'pollingChallengeapiChallengeMyOfferAcceptedResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name: 'pollingChallengeapiChallengeMyOfferAcceptedresponseResponse',
            fields: {
              challengeOfferId: { type: graphql.GraphQLInt },
              entryFee: { type: graphql.GraphQLInt },
              serviceFee: { type: graphql.GraphQLInt },
              totalFee: { type: graphql.GraphQLInt },
              tournamentId: { type: graphql.GraphQLInt },
              tournamentDescription: { type: graphql.GraphQLString },
              tournamentTitle: { type: graphql.GraphQLString },
              creatorEntityId: { type: graphql.GraphQLInt },
              challengerEntityId: { type: graphql.GraphQLInt },
              offerDateTime: { type: graphql.GraphQLString },
              creatorStateId: { type: graphql.GraphQLInt },
              creatorStateDateTime: { type: graphql.GraphQLString },
              challengerStateId: { type: graphql.GraphQLInt },
              challengerStateDateTime: { type: graphql.GraphQLString },
              hasPendingRegistration: { type: graphql.GraphQLBoolean },
              tournamentMatchId: { type: graphql.GraphQLInt },
              challengeComplete: { type: graphql.GraphQLBoolean },
              challengeCompleteDateTime: { type: graphql.GraphQLString },
              challengerNeedsRegistration: { type: graphql.GraphQLBoolean },
              creatorNeedsRegistration: { type: graphql.GraphQLBoolean },
              challengeCancelled: { type: graphql.GraphQLBoolean }
            }
          })
        },
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
