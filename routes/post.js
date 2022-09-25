const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get("/", async (req, res) => {
  // res.send("we are on post");
  try{
    const post = await Post.find(); 
    res.json(post);
  }catch(err){
    res.json({message:err});
  }
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

router.get("/:postId", async (req, res) => {
  // res.send("we are on specific post");
  try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
  }catch(err){
    res.json({message: err})
  }
});

router.delete("/:postId", async (req, res) => {
  // res.send("we are on specific post");
  try{
    const removePost = await Post.remove({_id: req.params.postId});
    res.json(removePost);
  }catch(err){
    res.json({message: err})
  }
});

router.patch("/:postId", async (req, res) => {
  // res.send("we are on specific post");
  try{
    const updatePost = await Post.updateOne(
      {_id: req.params.postId},
      {$set: {title:req.body.title}},
      );
    res.json(updatePost);
  }catch(err){
    res.json({message: err})
  }
});

module.exports = router;