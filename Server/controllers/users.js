const router = require('express').Router();


router.get('/', function(req, res) {
  res.send('List of APIv1 users.');
});

module.exports = router;