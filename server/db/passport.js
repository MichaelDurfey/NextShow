const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const User = require('./user');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(new SpotifyStrategy(
  {
    clientID: process.env.SPOTIFYCLIENTID,
    clientSecret: process.env.SPOTIFYSECRET,
    callbackURL: 'http://localhost:3000/callback',
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOrCreate(
      { spotifyId: profile.id },
      (err, userProfile) => {
        userProfile.spotifyAccessToken = accessToken;
        return done(null, userProfile);
      },
    );
  },
));

module.exports = passport;
