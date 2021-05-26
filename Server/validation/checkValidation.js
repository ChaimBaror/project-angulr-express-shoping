const db = require('../models')

const CheckEmailIfExists = async (email) => {
    user = await db.User.findOne({ where: { email: email }, })
    return user ? true : false;
}

module.exports = {
    CheckEmailIfExists,
};