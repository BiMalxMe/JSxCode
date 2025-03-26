const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://journeyxbimal:papa9814479922@cluster0.vbila.mongodb.net/newlatest"
);
const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

app.post("/input", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const existinguser=User.findOne({username:username})
  if(existinguser){
    res.json({
        msg:"Sorry but the username already exists"
    })
  }
  else{
  const finalInput = new User( {
    name: name,
    username: username,
    password: password,
  });
  finalInput.save().then(res.json({ msg: "Done" }));
}
});
app.listen(3000);
