const nodemailer = require('nodemailer');

const sendmail = (data) => {

    console.log(data)

    let transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
           user: 'testemails9907@gmail.com',
           pass: 'Testemail@9907'
        }
    });
    
    const message = {
        from: 'testemails9907@gmail.com', // Sender address
        to: data.email, // List of recipients
        subject: 'Instatnt Payment Notification', // Subject line
        text: "Acknowledgement of Payment" // Plain text body
    };
     
    transport.sendMail(message, function(err, info) {
        if (err) {
          return 'err.message'
        } else {
          return "Email has been sent!"
        }
    });
}

module.exports = sendmail