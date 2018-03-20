var express = require('express');
var router = express.Router();
var passport = require('passport');  
var LocalStrategy = require('passport-local').Strategy;

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.redirect('/admin/login');
});

router.get('/login', function(req,res){
  res.render('login');
});


router.post('/login', function(req, res){
  console.log('trig');
  if((req.body.username == "edu@1") && (req.body.passw == 123456) && (req.body.dept == "education")){
    console.log('edu logged');
    res.render('dashboard', {min: 'Education'});
  }
  else if((req.body.username == "elec@1") && (req.body.passw == 123456) && (req.body.dept == "election")){
    console.log('elec logged');
    res.render('dashboard', {min: 'Election'});
  }
  else{
    console.log('incorect');
    res.redirect('/admin/login');
    //res.render('login', {nMsg: 'Incorrect Login Details'});
  }
});

/*router.post('/signup', passport.authenticate('local-signup', {  
  successRedirect: '/admin/profile',
  failureRedirect: '/admin/signup',
  failureFlash: true,
}));*/

/*router.post('/login', passport.authenticate('local-login', {  
  successRedirect: '/admin/dashboard',
  failureRedirect: '/admin/login',
  failureFlash: true,
}));

function isLoggedIn(req, res, next) {  
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}*/

module.exports = router;