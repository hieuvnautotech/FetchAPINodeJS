const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get("/", (req, res) => {
  res.send("we are on post");
});

router.post("/", async (req, res) => {
  // console.log(req.body);
  const post = new Post({
    title : req.body.title,
    description : req.body.description
  });
  // post.save()
  //     .then(data => {
  //       res.json(data);
  //     })
  //     .catch(err=> {
  //       res.json({massage: err});
  //     });
  try
  {
    const savedPost = await post.save();
    res.json(savedPost);
  }
  catch(err){
    res.json({message: err});
  }
});

router.get("/specific", (req, res) => {
  res.send("we are on specific post");
});

module.exports = router;