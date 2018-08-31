const mongoose  = require('mongoose');

const postsSchema = mongoose.Schema({
  title: { type: String, required: true },   //Typscript lowercase, Javascript Uppercase
  content: {type: String, required: true }
});

module.exports = mongoose.model('Post', postsSchema);
