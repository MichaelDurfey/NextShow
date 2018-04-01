const SpotifyWebApi = require('spotify-web-api-node');
console.log(process.env.SPOTIFYCLIENTID);
const spotifyApi = new SpotifyWebApi({
  clientId: `'${process.env.SPOTIFYCLIENTID}'`,
  clientSecret: `'${process.env.SPOTIFYSECRET}'`,
  redirectUri: 'http://localhost:3000/callback',
});

spotifyApi.setAccessToken('BQBovy-EVAIFnfxzpkYXRhW9CGw8uKuieyw9smV-vHz9t6gHvISo1FB1sQtW1qQqArmw-NiwW1d2kCHZrN2fgz_IokdCyLxG9EGqBmqwTW6VMAZ1doI0_KEcTDVb4Dlme2jbjhQWUWID2-yS9Ck');

const setAccessToken = token => (
  spotifyApi.setAccessToken(token)
);

const getArtists = () => (
  spotifyApi.getUserPlaylists()
    .then(data => {
      data.body.items.forEach(item => console.log(item));
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
);

exports.getArtists = getArtists;
exports.setAccessToken = setAccessToken;
