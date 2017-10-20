const passport = require('passport');


module.exports = app =>{

  // user being sent to google
  app.get('/auth/google',
    passport.authenticate('google',{
      scope: ['profile', 'email']
    })
  );

  // user being sent back from google. this is middleware
  app.get('/auth/google/callback', passport.authenticate('google'),
    (req,res) => {

      res.redirect('/dashboard');
    }

);

  app.get('/api/logout', (req, res) =>{
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) =>{
    res.send(req.user);

  });
};
