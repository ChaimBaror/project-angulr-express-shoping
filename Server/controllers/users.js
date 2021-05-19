const router = require('express').Router();
const crypto = require('crypto');
const validator = require("validator");
const user = require('../models/users')



router.get("/", (req, res, next) => {
  const users = user;
  if (users) {
    res.send(users);
    return;
  }
  next();
});


  
router.post("/", async (req, res) => {
  const { body } = req;
  try {
  const userData = validateUser(body, false);
    console.log(userData);
    const u = await user.create(userData);
    res.json("user", u);
  } catch(e) {
    res.status(422).json({
      error: e.message,
    })
  }
})



function validateUser(body, enforce) {
  if (!body) {
    throw new Error("Invalid body");
  }
  const { email, name, id } = body;
  if (!email || email && !validator.isEmail(email)) {
    throw new Error("Invalid email");
  }
  if (!name || name && "string" !== typeof name) {
    throw new Error("Invalid name");
  }

  return {
    id: id || crypto.randomBytes(8).toString("hex"),
    name,
    email,
  }
}



module.exports = router;