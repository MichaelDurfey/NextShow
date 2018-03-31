require('dotenv').config();
const express = require('express');

const app = express();
const axios = require('axios');
const path = require('path');
const db = require('./db/user');

app.use(express.static(path.join(__dirname, '../dist')));


app.listen(3000, () => console.log('listening on 3000!'));