const router = require("express").Router();
const passport = require("passport");

router.get("/login",(req,res)=>{
  res.render("login",{user:req.user})
})
router.get("/logout",(req,res)=>{
  req.logout();
  res.redirect("/")
})
router.get("/google",passport.authenticate("google",{scope:["profile"]}));
router.get("/google/redirect",passport.authenticate("google"),(req,res)=>{
  res.redirect("/profile/")
})
router.get("/github",passport.authenticate("github",{scope:["profile"]}));
router.get("/github/redirect",passport.authenticate("github"),(req,res)=>{
  res.redirect("/profile/")
})
module.exports = router;
