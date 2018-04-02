require('dotenv').config();
const axios = require('axios');
const buildUrl = require('build-url');
const Promise = require('bluebird');
import moment from 'moment';

const getEvents = (artists, cb) => {
  console.log('getEvents');
  const startDate = moment(new Date()).format('YYYY-MM-DD');
  const endDate = moment(new Date()).add(10, 'months').format('YYYY-MM-DD');
  let artistIds = artists.slice().map((artist) => {
    const findArtistId = buildUrl('http://api.jambase.com', {
      path: 'artists',
      queryParams: {
        name: artist.name,
        page: 0,
        api_key: 'pxxf3h47djt5r9zxzeu9fttd',
      },
    });
    return Promise.resolve(axios.get(findArtistId));
  });
  return Promise.all([...artistIds])
    .then(result => result.map((i) => {
      const event = buildUrl('http://api.jambase.com', {
        path: 'events',
        queryParams: {
          artistId: i.data.Artists[0].Id,
          page: 0,
          api_key: 'pxxf3h47djt5r9zxzeu9fttd',
          zipCode: 94118,
          radius: 50,
          startDate,
          endDate,
        },
      });
      return axios.get(event);
    }))
    .then(result => Promise.all([...result]))
    .then(final => cb(null, final))
    .catch(error => cb(error, null));
};


exports.getEvents = getEvents;
