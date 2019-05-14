const path = require('path');
require('dotenv').config();

const express = require('express');
const {post} = require('./models');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(require('body-parser').json());

app.get('/posts', async (req, res) => {
  const posts = await post.findAll();
  res.json(posts);
});

app.post('/posts', async(req,res,next) => {
  try {
    const {body} = req;
    const createdPost = await post.create(body);
    return res.json(createdPost);
  } catch(e) {
    res.error(e);
  }

})

app.listen(process.env.PORT, () => {
  console.log('litening on port ', process.env.PORT);
});
