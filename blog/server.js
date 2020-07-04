const express = require('express');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const path = require('path');

const blogposts = require('./server/routes/api/blogposts');

const app = express();
//Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./server/config/keys').mongoURI;
// Connect to Mongo
mongoose.connect(db)
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

//Use Routes
app.use('/api/blogposts', blogposts);

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => { //unless we're hitting the api/items, serve static page
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5005; //env.PORT is Heroku env var
app.listen(port, () => console.log(`Server started on port ${port}`));