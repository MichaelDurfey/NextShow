const SpotifyWebApi = require('spotify-web-api-node');
const axios = require('axios');

const scopes = ['user-follow-read', 'user-top-read']
const spotifyApi = new SpotifyWebApi({
  clientId: `'${process.env.SPOTIFYCLIENTID}'`,
  clientSecret: `'${process.env.SPOTIFYSECRET}'`,
  redirectUri: 'http://localhost:3000/callback',
});

const setAccessToken = (token) => {
  spotifyApi.setAccessToken(token);
};

const getArtists = () => (
  spotifyApi.getUserPlaylists()
    .then((data) => {
      data.body.items.forEach(item => console.log(item));
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
);

const getFollowedArtists = () => (
  spotifyApi.getFollowedArtists({ limit: 10 })
);

const getUser = () => (
  spotifyApi.getMe()
);

exports.getArtists = getArtists;
exports.getFollowedArtists = getFollowedArtists;
exports.setAccessToken = setAccessToken;
exports.getUser = getUser;
