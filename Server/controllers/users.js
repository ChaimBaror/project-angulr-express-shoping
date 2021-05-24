// const router = require('express').Router();

const db = require('../models/users')
const validateUser = require('../validation/validation')

console.log( db.User);


exports.create = (req, res) => {
  console.log("post create " ,req);
    const { body } = req;
  
  try{
      // Building Customer object from upoading request's body
      const user = validateUser(body, false);
      console.log(user);
      // Save to MySQL database
    
     db.User.create(user).then(result => {    
          // send uploading message to client
          res.status(200).json({
              message: "Upload Successfully a Customer with id = " + result.id,
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



// module.exports = router;