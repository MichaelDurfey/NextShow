const axios = require('axios');

const getFollowedArtists = id => (
  axios(`/spotify/followedArtists/${id}`)
);

const getUser = () => (
  axios(`spotify/getUser`)
)

export { getFollowedArtists, getUser };
