const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name:String,
  googleId:String
})
const User = new mongoose.model("user",userSchema);
module.exports = User;
