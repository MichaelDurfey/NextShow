const SpotifyWebApi = require('spotify-web-api-node');
console.log(process.env.SPOTIFYCLIENTID)
const spotifyApi = new SpotifyWebApi({
  clientId: `'${process.env.SPOTIFYCLIENTID}'`,
  clientSecret: `'${process.env.SPOTIFYSECRET}'`,
  redirectUri: 'http://localhost:3000/callback',
});

const getArtists = () => (
  spotifyApi.getMyTopArtists()
    .then(artists => console.log(artists))
    .catch(err => console.log(err))
);

module.exports = getArtists;
