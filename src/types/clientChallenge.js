const graphql = require('graphql')

module.exports = {
  apiChallengeBytournamentId: {
    method: 'DELETE',
    url: 'api/Challenge/{tournamentId}',
    response: new graphql.GraphQLObjectType({
      name: 'clientChallengeapiChallengeBytournamentIdResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiChallengeBytournamentIdOffer: {
    method: 'POST',
    url: 'api/Challenge/{tournamentId}/Offer',
    body: new graphql.GraphQLObjectType({
      name: 'bodyResponse',
      fields: { entryFee: { type: graphql.GraphQLInt } }
    }),
    response: new graphql.GraphQLObjectType({
      name: 'clientChallengeapiChallengeBytournamentIdOfferResponse',
      fields: {
        response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientChallengeapiChallengeBytournamentIdOfferresponseResponse',
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
  apiChallengeBytournamentIdMyOfferByOfferIdAccept: {
    method: 'PUT',
    url: 'api/Challenge/{tournamentId}/My/Offer/{OfferId}/Accept',
    response: new graphql.GraphQLObjectType({
      name:
        'clientChallengeapiChallengeBytournamentIdMyOfferByOfferIdAcceptResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiChallengeBytournamentIdMyOfferByOfferIdReject: {
    method: 'PUT',
    url: 'api/Challenge/{tournamentId}/My/Offer/{OfferId}/Reject',
    response: new graphql.GraphQLObjectType({
      name:
        'clientChallengeapiChallengeBytournamentIdMyOfferByOfferIdRejectResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiChallengeBytournamentIdMyOfferAcceptedByOfferIdAccept: {
    method: 'PUT',
    url: 'api/Challenge/{tournamentId}/My/Offer/Accepted/{OfferId}/Accept',
    response: new graphql.GraphQLObjectType({
      name:
        'clientChallengeapiChallengeBytournamentIdMyOfferAcceptedByOfferIdAcceptResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiChallengeBytournamentIdMyOfferAcceptedByOfferIdReject: {
    method: 'PUT',
    url: 'api/Challenge/{tournamentId}/My/Offer/Accepted/{OfferId}/Reject',
    response: new graphql.GraphQLObjectType({
      name:
        'clientChallengeapiChallengeBytournamentIdMyOfferAcceptedByOfferIdRejectResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
