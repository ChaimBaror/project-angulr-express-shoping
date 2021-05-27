const validator = require('validator');
const crypto = require('crypto');

function validateUser(body, enforce) {
  if (!body) {
    throw new Error("Invalid body");
  }
  const { email, name, id ,PhoneNumber } = body;
  if (!email || email && !validator.isEmail(email)) {
    throw new Error("Invalid email");
  }
  if (!name || name && "string" !== typeof name) {
    throw new Error("Invalid name");
  }

  return {
    id: id || crypto.randomBytes(8).toString("hex"),
    name,
    email,
    PhoneNumber,
  }
}
function validateProducts(body){
  const {id,category,title,text,price,amount,active,Pictures} = body;
  return {
    id: id || crypto.randomBytes(8).toString("hex"),
    category,
    title,
    text,
    price,
    Pictures,
    amount,
    active

  }
}
module.exports ={
  validateUser,
  validateProducts

} 
