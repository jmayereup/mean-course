const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
// app.use(bodyPaser.urlencoded({extended: false}));  //bodyParser can work with other from of data

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS"); // Options method automatically sent before post
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({message: 'Post added successfully.'});  //201 means success, new resource created
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    { id: 'test123', title: "First server side post.", content: "The is stored content from a server json file, but will be replaced by a mongo database."},
    { id: 'ea12342j', title: "Number 2", content: "This is some more dummy post data for post number 2."}
  ];    //backend db structure is decoupled from the client user model
  res.status(200).json({
    message: 'Posts fetched succesfully.',  // optional
    posts: posts
  });
});

module.exports = app;
