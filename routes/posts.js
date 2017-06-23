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

router.post('/', function(req, res, next) {
  var post = new Post({
    title: req.body.title,
    body: req.body.body,
    created_at : req.body.created_at
  })
  post.save(function(err, post) {
    if (err) {
      return next(err)
    }
    res.json(201, post)
  })
});


module.exports = router;
