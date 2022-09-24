const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get("/", (req, res) => {
  res.send("we are on post");
});

router.get("/specific", (req, res) => {
  res.send("we are on specific post");
});

module.exports = router;