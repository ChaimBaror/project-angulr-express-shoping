"use strict";
const nodemailer = require("nodemailer");

let toEmail = 'chbaror@gmail.com'
let toSubject = "Hello ✔";
let toText ="Hello Hi "

const sendMail = (Email,subjec, text) =>  {
  toEmail = Email;
  // toSubject = subjec;
  toText = text;
  main().catch(console.error);
}



// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'noabaror2020@gmail.com',
        pass: 'noa0527158077'
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'noabaror2020@gmail.com',
    to: toEmail,
    subject:toSubject, // Subject line
    text: toText, // plain text body
    // html: "<b>hi chaim baror</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}


 module.exports ={
    sendMail
  
  } 
  
