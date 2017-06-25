var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* GET posts listing. */
router.get('/', function(req, res, next) {
  Post.find(function(err, posts) {
    if (err) return console.error(err);
    console.log("posts" + posts);
    res.send(posts);
  })

});

router.get('/:idPost', function(req, res, next) {
  Post.findOne({
      _id: req.params.idPost
    })
    .exec(function(err, post) {
      if (err) return console.error(err);
      console.log("post" + post);
      res.send(post);
    })

});

router.post('/', function(req, res, next) {
  var post = new Post({
    title: req.body.title,
    body: req.body.body,
    introduction: req.body.introduction,
    created_at: req.body.created_at
  })
  post.save(function(err, post) {
    if (err) {
      return next(err)
    }
    res.json(201, post)
  })
});

router.delete('/', function(req, res, next) {
  Post.remove({}, function(err) {
    if (!err) {
      console.log("err" + err);
    }
    res.send("ok");
  })
});

module.exports = router;
