const router = require('express').Router();

router.use('/users', require('../controllers/users'));

router.get('/router', function(req, res) {
    res.send('Hello from root route.')
  });

module.exports = router;