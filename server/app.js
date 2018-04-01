require('dotenv').config();
const express = require('express');

const passport = require('./db/passport');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const session = require('express-session');

const cors = require('cors');
const app = express();
const axios = require('axios');
const path = require('path');
const db = require('./db/user');
const swig = require('swig');
const spotify = require('./spotify');

const consolidate = require('consolidate');

app.set('views', path.join(__dirname, '../dist/views'));
app.set('view engine', 'ejs');

app.use(cors());

app.options('*', cors());
app.use(cookieParser());
app.use(bodyparser.json());
app.use(methodOverride());
app.use(session({
  secret: process.env.SECRET,
  saveUninitialized: true,
  resave: false,
}));

app.use(express.static(path.join(__dirname, '../dist')));

app.use(passport.initialize());
app.use(passport.session());
app.engine('html', consolidate.swig);

app.get('/user', (req, res) => {
  res.render('index.html', { user: req.user });
})

app.get('/auth/spotify', passport.authenticate('spotify', {showDialog: true}), 
(req, res) => {

});

app.get('/login', (req, res) => {
  res.render('login.html', { user: req.user });
});

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

app.get('/auth', ensureAuthenticated, (req, res) => {
  // spotify.setAccessToken(req.user.spotifyAccessToken);
  spotify.getArtists();
  res.render('account.html', { user: req.user });
});

app.get(
  '/callback', passport.authenticate('spotify', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/auth');
  },
);

app.listen(3000, () => console.log('listening on 3000!'));
