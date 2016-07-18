'use strict';

const express = require('express');
const posts = require('./mock/posts.json');

const app = express();

app.use('/static', express.static(`${__dirname}/public`));

app.set('view engine', 'jade');
app.set('views', `${__dirname}/templates`);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/blog/:title?', (req, res) => {
  const title = req.params.title;
  if ( title === undefined ) {
    res.status(503);
    res.send('This page is under construction');
  } else {
    const post = posts[title] || {};
    res.render('post', { 
      post,
    });
  }
});

app.listen(3000, () => {
  console.log('Node front-end server is running on port 3000!')
});

