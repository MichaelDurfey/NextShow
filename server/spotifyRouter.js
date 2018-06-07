const express = require('express');

const router = express.Router();
const spotify = require('./spotify');

// router.get('/followedArtists', (req, res) => {
//   return spotify.getFollowedArtists()
//     .then(artists => console.log(artists))
//     .catch(err => console.error(err));
// })

router.get('/getUser', () => {
  spotify.getUser();
});

module.exports = router;
