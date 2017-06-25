// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var postSchema = new Schema({
  title: { type: String, required: true },
  introduction: { type: String, required: true },
  body: { type: String, required: true },
  imageUrl: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Post = mongoose.model('Post', postSchema);

// make this available to our users in our Node applications
module.exports = Post;
