const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({

    usernameField : 'email',
    passwordField: 'password'
        
},

function(email, password, cb){

     return 

}));