const router = require('express').Router();

const users = require('../controllers/users');
const products = require('../controllers/products');

// router.use('/products', require('../controllers/products'));


router.post('/usercheckCode', users.checkCode);
router.post('/users', users.create);
router.get('/usersAll', users.getAll);
router.post('/usersEmail', users.emailIfExists);
router.delete('/users/:id', users.deleteById);
router.post('/products', products.createNewProducts);
router.get('/productsAll', products.getAllProducts);
router.delete('/products/:id', products.getAllProducts);


router.get('/router', function (req, res) {
  res.send('Hello from root route.')
});

module.exports = router;