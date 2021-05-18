const router = require('express').Router();

router.get("/", (req, res, next) => {
//   if (products) {
    res.send("products");
    return;
//   }
  next();
});



module.exports = router;