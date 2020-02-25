require('dotenv').config()
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user-model.js");

passport.use(new GoogleStrategy({
  callbackURL:"/auth/google/redirect",
  clientID:process.env.CLIENT_ID,
  clientSecret:process.env.CLIENT_SECRET
},(accessToken,refreshToken,profile,done)=>{
  console.log(profile);
  new User({
    name:profile.displayName,
    googleId:profile.id
  }).save().then((newUser)=>{
    console.log(`new user created:${newUser}`);
  })
})
)
