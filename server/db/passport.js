const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;

passport.use(new SpotifyStrategy({
  clientID: process.env.SPOTIFYCLIENTID,
  clientSecret: process.env.SPOTIFYSECRET,
  callbackURL: 'http://localhost:3000/callback',
}));
