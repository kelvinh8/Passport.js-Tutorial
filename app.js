require('dotenv').config()
const express = require("express");
const ejs = require("ejs");
const authRoutes = require("./routes/auth-routes.js");
const profileRoutes = require("./routes/profile-routes.js");
const app = express();
const passport = require("passport");
const passportSetup = require("./config/passport.js");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");

app.use(cookieSession({
  maxAge:24 * 60 * 60 * 1000,
  keys:[process.env.MY_KEY]
}));
app.use(passport.initialize());
app.use(passport.session());
app.set("view engine","ejs");
app.use("/auth",authRoutes);
app.use("/profile",profileRoutes);
mongoose.connect("mongodb://localhost:27017/userDB2",{useUnifiedTopology:true,useNewUrlParser:true});
app.get("/",(req,res)=>{
  res.render("home")
})

app.listen(3000,()=>{
  console.log("Server started on port 3000")
})
