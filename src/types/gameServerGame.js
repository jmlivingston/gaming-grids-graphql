const graphql = require('graphql')

module.exports = {
  apiGameByGameShortCodePlatformByPlatformShortCodePlayerByplayerIdentifierUpdateNickname: {
    method: 'POST',
    url:
      'api/Game/{GameShortCode}/Platform/{PlatformShortCode}/Player/{playerIdentifier}/UpdateNickname',
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerGameapiGameByGameShortCodePlatformByPlatformShortCodePlayerByplayerIdentifierUpdateNicknameResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  },
  apiGameByGameShortCodePlatformByPlatformShortCodePlayerConfirmPlayer: {
    method: 'POST',
    url:
      'api/Game/{GameShortCode}/Platform/{PlatformShortCode}/Player/ConfirmPlayer',
    urlParams: {
      entityPlayerId: {
        type: graphql.GraphQLInt
      },
      entityPlayerEmailAddress: {
        type: graphql.GraphQLString
      },
      entityPlayerName: {
        type: graphql.GraphQLString
      },
      playerNickname: {
        type: graphql.GraphQLString
      },
      playerIdentifier: {
        type: graphql.GraphQLString
      },
      thirdPartyApiRegion: {
        type: graphql.GraphQLString
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerGameapiGameByGameShortCodePlatformByPlatformShortCodePlayerConfirmPlayerResponse',
      fields: {
        success: { type: graphql.GraphQLBoolean },
        message: { type: graphql.GraphQLString }
      }
    })
  }
}
