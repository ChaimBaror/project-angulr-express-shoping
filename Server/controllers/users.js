// const router = require('express').Router();

const db = require('../models')
const validateUser = require('../validation/validation')

db.sequelize.sync();

exports.getAll = async (req, res) => {
   users = await db.User.findAll()
   res.status(200).json(users);
}

exports.create = (req, res) => {
    const { body } = req;
  try{
      // Building Customer object from upoading request's body
      const user = validateUser(body, false);
      console.log(user);
      // Save to Postgres database
    db.User.create(user).then(result => {    
          // send uploading message to client
          res.status(200).json({
              message: "Upload Successfully a User with id = " + result.id,
              customer: result,
          });
      });
  }catch(error){
      res.status(500).json({
          message: "Fail!",
          error: error.message
      });
  }
}
