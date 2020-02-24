require('dotenv').config()
const express = require("express");
const ejs = require("ejs");
const authRoutes = require("./routes/auth-routes.js");
const app = express();

app.set("view engine","ejs");
app.use("/auth",authRoutes);
app.get("/",(req,res)=>{
  res.render("home")
})

app.listen(3000,()=>{
  console.log("Server started on port 3000")
})
