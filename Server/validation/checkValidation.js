const db = require('../models')
const { sendMail } = require('../sendEmail/nodemailer')

const CheckEmailIfExists = async (email) => {
    user = await db.User.findOne({ where: { email: email }, })
        if (user) {
         const codeRandom = Math.floor(Math.random() * 10000);
         sendMail(email , "hi is test ?" , `this is code Random: ${ codeRandom } `)   
            db.User.update(
                { codeRandom: codeRandom},
                { where: { email : email }}
                )
        }
    return user ? true : false;
}

const CheckCode = async (email ,code ) => {
    user = await db.User.findOne({
         where: { email: email , codeRandom: code}
        })
console.log(user);
    return user 

}




module.exports = {
    CheckEmailIfExists,
    CheckCode
};