const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {BlogPosts} = require('./models');

BlogPosts.create('existing post 1');
BlogPosts.create('existing post 2');