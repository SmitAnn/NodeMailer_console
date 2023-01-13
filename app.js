"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'smitamanikandan2221@gmail.com',
      pass: 'juolzmbbxoedbkyu'
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'smitamanikandan2221@gmail.com',
    to: 'smita0817@gmail.com',
    subject: "NodeMailer-Assignment",

    html: '<html><body><div><p><b>Hello My dear friend,</b></p><p><b>Greetings,</b></p><p>Hope you are doing well.</p><p>This is my first mail by using nodemailer.</p><p><b>Thanks & Regards,</b></p><p><b>Smita</b></p></div> </body></html>'
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}

main().catch(console.error);