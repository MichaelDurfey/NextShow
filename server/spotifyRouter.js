const express = require('express');

const router = express.Router();
const spotify = require('./spotify');

router.get('/followedArtists', (req, res) => {
  console.log(req);
  return spotify.getFollowedArtists()
    .then(artists => console.log(artists))
    .catch(err => console.error(err));
})
  .get('/getUser', (req, res) => {
    spotify.getUser();
  });

module.exports = router;
