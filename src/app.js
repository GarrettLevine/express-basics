'use strict';

const express = require('express');
const posts = require('./mock/posts.json');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>I REALLY love Express!</h1>');
});

app.get('/blog/:title?', (req, res) => {
  const title = req.params.title;
  if ( title === undefined ) {
    res.status(503);
    res.send('This page is under construction');
  } else {
    const post = posts[title];

    res.send(post);
  }
});

app.listen(3000, () => {
  console.log('Node front-end server is running on port 3000!')
});

