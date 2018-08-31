const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const mongoose = require('mongoose');

const Post = require('./models/post'); //imports Mongoose model

const app = express();

mongoose.connect(config.db_uri, config.options);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log("Connected");
  });

app.use(bodyParser.json());
// app.use(bodyPaser.urlencoded({extended: false}));  //bodyParser can work with other from of data

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS"); // Options method automatically sent before post
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({message: 'Post added successfully.'});  //201 means success, new resource created
});

app.delete("/api/posts/:id", (req, res, next) => {
  console.log(req.params.id);
  Post.deleteOne({_id: req.params.id})
    .then((result) => {
      console.log(result);
      res.status(200).json({message: "Deleted"});
    })
});

app.get('/api/posts', (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: 'Posts fetched succesfully.',  // optional
      posts: documents
    })
  });    //backend db structure is decoupled from the client user model

});

module.exports = app;
