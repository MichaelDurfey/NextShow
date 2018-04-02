const SpotifyWebApi = require('spotify-web-api-node');
const axios = require('axios');

const callbackUrl = 'http://localhost:3000/callback'
const spotifyApi = new SpotifyWebApi({
  clientId: `'${process.env.SPOTIFYCLIENTID}'`,
  clientSecret: `'${process.env.SPOTIFYSECRET}'`,
  redirectUri: `${process.env.CALLBACKURL}`,
});

const setAccessToken = (token) => {
  spotifyApi.setAccessToken(token);
};

const getArtists = () => (
  spotifyApi.getUserPlaylists()
    .then((data) => {
      data.body.items.forEach(item => item);
    })
    .then(data => data)
    .catch(err => err)
);

const getFollowedArtists = () => (
  spotifyApi.getFollowedArtists({ limit: 2 })
);

const getUser = () => (
  spotifyApi.getMe()
);

exports.getArtists = getArtists;
exports.getFollowedArtists = getFollowedArtists;
exports.setAccessToken = setAccessToken;
exports.getUser = getUser;
