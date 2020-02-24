const router = require("express").Router();

router.get("/login",(req,res)=>{
  res.render("login")
})
router.get("/logout",(req,res)=>{
  res.send("log out")
})
router.get("/google",(req,res)=>{
  //passport
  res.send("login using google")
})
module.exports = router;
