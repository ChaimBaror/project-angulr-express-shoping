const db = require('../models')

const CheckEmailIfExists = async (email) => {
    user = await db.User.findOne({where: { email: email },})
    if(user){
        console.log("CheckEmailIfExists",user);
    }
    else{
        return false;
    }
}

module.exports = {
    CheckEmailIfExists,
};