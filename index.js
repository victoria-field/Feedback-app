const express = require('express');
const mongoose = require ('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
const path = require('path');




mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    // maxAge allows the cookie to last for 30 days
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, '/public')));

require('./routes/authroutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
