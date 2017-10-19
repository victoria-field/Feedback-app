const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys');


const User = mongoose.model('users');

passport.serializeUser((user, done) =>{
// user.id is the id from mongodb
  done(null, user.id);
});

// id from cookie to usermodel
passport.deserializeUser((id, done)=>{

  User.find("_id").then(user =>{
      done(null, user);
    });
  });

// setting up passport
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
    (accessToken, refreshToken, profile, done) =>{

      User.findOne({ googleId: profile.id })
        .then((existingUser) =>{
          if(existingUser){
            // we already have a record with the given profile ID
            done(null, existingUser);
          }else{
            // we don't have a user record with this ID, make a new record
            new User ({googleId: profile.id})
              .save()
              .then(user => done(null, user));
          }

        });

    }
  )
);
