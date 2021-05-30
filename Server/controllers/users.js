const db = require('../models')
const { validateUser } = require('../validation/validation')
const { CheckEmailIfExists  , CheckCode} = require('../validation/checkValidation')

const emailIfExists = async (req, res) => {
  const { email } = req.body;
  const ifEmail = await CheckEmailIfExists(email)
  res.status(200).json({
    email: email,
    message: "email is Exists in database ? " + ifEmail,
    Exists: ifEmail,
  });
}

const checkCode = async (req, res)=>{
  const {email , code} = req.body;
  console.log(email,code);
  const auth =await CheckCode(email,code)
  res.status(200).json({
    email: email,
    code: code,
    message: "email auth in code ? " + auth.email,
    auth: auth,
  });
}

const getAll = async (req, res) => {
  try {
    users = await db.User.findAll()
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const create = async (req, res) => {
  // console.log(req.body);
  const { body } = req;
  try {
    // Building Customer object from upoading request's body
    const user = validateUser(body, false);
    // Save to Postgres database
    await db.User.create(user).then(result => {
      // send uploading message to client
      res.status(200).json({
        message: "Upload Successfully a User with email = " + result.email,
        user: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "Fail!",
      error: error.message
    });
  }
}

const deleteById = async (req, res) => {
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
  getAll,
  create,
  deleteById,
  emailIfExists,
  checkCode
};