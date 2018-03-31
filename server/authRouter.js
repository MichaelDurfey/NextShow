const express = require('express');

const router = express.Router();

router.get('/auth', () => {
  console.log('auth!')
})