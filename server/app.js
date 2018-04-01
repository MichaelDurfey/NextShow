require('dotenv').config();
const express = require('express');

const passport = require('./db/passport');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const axios = require('axios');
const path = require('path');
const db = require('./db/user');

app.use(bodyparser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist')));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth', passport.authenticate('spotify'), (req, res) => {
  console.log(req, res)
});

app.get(
  '/callback', passport.authenticate('spotify', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  },
);

app.listen(3000, () => console.log('listening on 3000!'));