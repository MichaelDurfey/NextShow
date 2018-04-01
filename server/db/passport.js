const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;

passport.use(new SpotifyStrategy(
  {
    clientID: process.env.SPOTIFYCLIENTID,
    clientSecret: process.env.SPOTIFYSECRET,
    callbackURL: 'http://localhost:3000/callback',
  },
  (accessToken, refreshToken, profile, done) => {
    user.findOrCreate({ spotifyId: profile.id }, (err, userProfile) => {
      return done(err, userProfile);
    });
  },
));

module.exports = passport;
