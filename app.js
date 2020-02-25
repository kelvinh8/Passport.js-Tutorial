require('dotenv').config()
const express = require("express");
const ejs = require("ejs");
const authRoutes = require("./routes/auth-routes.js");
const app = express();
const passportSetup = require("./config/passport.js");
const mongoose = require("mongoose");

app.set("view engine","ejs");
app.use("/auth",authRoutes);
mongoose.connect("mongodb://localhost:27017/userDB2",{useUnifiedTopology:true,useNewUrlParser:true});
app.get("/",(req,res)=>{
  res.render("home")
})

app.listen(3000,()=>{
  console.log("Server started on port 3000")
})
