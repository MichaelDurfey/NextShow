require('dotenv').config();
const axios = require('axios');
const buildUrl = require('build-url');
// http://api.jambase.com/artists?name=ed+sheeran&page=0&api_key=vny3gbaak9jfvc7ddsrqhgtv

// http://api.jambase.com/events?artistId=2698&zipCode=95128&radius=50&page=0&api_key=vny3gbaak9jfvc7ddsrqhgtv

const getEvents = (artists, cb) => {
  console.log(artists)
  let artistIds = artists.slice().map((artist) => {
    const findArtistId = buildUrl('http://api.jambase.com', {
      path: 'artists',
      queryParams: {
        name: artist.name,
        page: 0,
        api_key: 'vny3gbaak9jfvc7ddsrqhgtv',
      },
    });
    return axios.get(findArtistId);
  });
  return Promise.all([artistIds])
    .then((data) => {
      const artistIds = [];
      data.forEach((item) => {
        if (item.data.artists[0].id) artistIds.push(item.data.artists[0].id);
      });
      return artistIds;
    })
    .then((ids) => {
      const findEvents = ids.slice().map((id) => {
        const event = buildUrl('http://api.jambase.com', {
          path: 'events',
          queryParams: {
            artistId: id,
            page: 0,
            api_key: 'vny3gbaak9jfvc7ddsrqhgtv',
          },
        });
        return axios.get(event);
      });
      return axios.all([findEvents])
        .then(axios.spread((data) => {
          cb(null, data);
        }))
        .catch(err => cb(err, null));
    })
    .catch(err => console.error(err));
  // artists.forEach((artist) => {
  //   axios.get('')
  // });
};


exports.getEvents = getEvents;
