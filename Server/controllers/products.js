const router = require('express').Router();

router.get("/", (req, res, next) => {
//   if (products) {
    res.send('<h1>Log in Failed :(</h1>');
    return;
//   }
  next();
});



module.exports = router;