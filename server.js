const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 80;
const cors = require('cors');
const bodyParser = require('body-parser');
const FutureUser = require('./futureUser.model');
mongoose.connect('mongodb+srv://liamjabir:Cleaningme133@cluster1.pxgt2.mongodb.net/?retryWrites=true&w=majority')
let stat = mongoose.connection;

stat.once('open', () => {
  console.log('Connected to MongoDB');
});

stat.on('error', (err) => {
  console.log(err);
});
const corsConfig = {
    origin: `*`,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaaders: ['Content-Type', 'Authorization', 'Set-Cookie']
  }

  
app.use(cors(corsConfig));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json({limit: '10000mb'}));

app.post('/saveFutureUser', async (req, res) => {
    console.log('request body', req.body);
    let futureUser = new FutureUser({
        firstName: req.body.firstName,
        email: req.body.email
    })

    await futureUser.save();

    return res.json(futureUser);
})

app.listen(PORT, (error) => {
    if (!error) {
      console.log('server is running on port ' + PORT);
    } else {
      console.log('Error occurred, server cant start', error);
    }
  })