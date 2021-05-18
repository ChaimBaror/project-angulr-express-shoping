const router = require('express').Router();
const crypto = require('crypto');
const validator = require("validator");


router.get("/", (req, res, next) => {
  const users = "data";
  if (users) {
    res.send("users");
    return;
  }
  next();
});


router.post("/", async (req, res) => {
  const { body } = req;
  try {
    const user = validateUser(body, false);
    const newUser = addtojson(user)
    res.json(newUser);
  } catch (e) {
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
    age
  }
}



module.exports = router;