
const sgMail = require('@sendgrid/mail');

var Config= require('../config/app-config');

sgMail.setApiKey(Config.SENDGRID_API_KEY);
exports.sendEmail= function(options){
    let opt = {
        to: options.to,
        from: Config.SENDER_EMAIL, // Use the email address or domain you verified above
        subject: options.subject,
        text: options.text,
        html: options.html,
      };
      //ES6
sgMail
.send(opt).then(
    response => {
        console.log(response);
    }
    ,
    error => {
        console.log(error);
    }
)
}


