require('dotenv').config()
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github").Strategy;
const User = require("../models/user-model.js");

passport.serializeUser((user,done)=>{
  done(null,user.id);
})
passport.deserializeUser((id,done)=>{
  User.findById(id,(err,user)=>{
    done(null,user);
  })
})

passport.use(new GoogleStrategy({
  callbackURL:"/auth/google/redirect",
  clientID:process.env.GOOGLE_CLIENT_ID,
  clientSecret:process.env.GOOGLE_CLIENT_SECRET
},(accessToken,refreshToken,profile,done)=>{
  User.findOne({googleId:profile.id},(err,currentUser)=>{
    if(currentUser){
      console.log(`found user: ${currentUser}`);
      done(null,currentUser);
    }else{

      new User({
        name:profile.displayName,
        googleId:profile.id,
        picture:profile._json.picture
      }).save().then((newUser)=>{
        console.log(`new user created:${newUser}`);
        done(null,newUser);
      })
    }
  })
})
)
passport.use(new GitHubStrategy({
  clientID:process.env.GITHUB_CLIENT_ID,
  clientSecret:process.env.GITHUB_CLIENT_SECRET,
  callbackURL:"/auth/github/redirect"
},(accessToken,refreshToken,profile,done)=>{
  User.findOne({githubId:profile.id},(err,currentUser)=>{
    if(currentUser){
      console.log(`found user: ${currentUser}`);
      done(null,currentUser);
    }else{
      new User({
        name:profile.username,
        githubId:profile.id,
        picture:profile._json.avatar_url
      }).save().then((newUser)=>{
        console.log(`new user created:${newUser}`);
        done(null,newUser);
      })
    }
  })
})
)
