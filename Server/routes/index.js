const router = require('express').Router();

const users = require('../controllers/users');


router.use('/products', require('../controllers/products'));



router.post('/users', users.create);
router.get('/usersAll', users.getAll);
router.post('/usersEmail', users.emailIfExists);
router.delete('/users/:id', users.deleteById);


router.get('/router', function(req, res) {
    res.send('Hello from root route.')
  });

module.exports = router;