const router = require("express").Router();
const passport = require("passport");

router.get("/login",(req,res)=>{
  res.render("login")
})
router.get("/logout",(req,res)=>{
  res.send("log out")
})
router.get("/google",passport.authenticate("google",{scope:["profile"]}));
router.get("/google/redirect",(req,res)=>{
  res.send("callback")
})
module.exports = router;