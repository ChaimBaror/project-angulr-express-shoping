
const db = require('../models')
const { validateProducts } = require('../validation/validation')



const getAllProducts = async (req, res) => {
  try {
    Products = await db.Product.findAll()
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const createNewProducts = async (req, res) => {
  const { body } = req;
  try {
    // Building Customer object from upoading request's body
    const product = validateProducts(body, false);
    console.log("console.log",product);
    // Save to Postgres database
    await db.Product.create(product).then(result => {
      // send uploading message to client
      res.status(200).json({
        message: "Upload Successfully a Product = " + result,
        Product: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "Fail!",
      error: error.message
    });
  }
}

const deleteByIdProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await db.User.destroy({
      where: { id: id }
    });
    if (deleted) {
      return res.status(204).send("User deleted");
    }
    throw new Error("User not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllProducts,
  createNewProducts,
  deleteByIdProducts,
};



// const router = require('express').Router();

// router.get("/", (req, res, next) => {
// //   if (products) {
//     res.send('<h1>Log in Failed :(</h1>');
//     return;
// //   }
//   next();
// });



// module.exports = router;