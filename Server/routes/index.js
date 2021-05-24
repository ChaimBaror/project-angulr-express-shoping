const router = require('express').Router();

const users = require('../controllers/users');


router.use('/products', require('../controllers/products'));



router.post('/users', users.create);
// router.get('/users/all', users.retrieveAllCustomers);
// router.get('/users/onebyid/:id', users.getCustomerById);
// router.delete('/users/delete/:id', users.deleteById);


router.get('/router', function(req, res) {
    res.send('Hello from root route.')
  });

module.exports = router;