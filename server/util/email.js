const nodemailer = require('nodemailer');

const sendEmail = ({ to, subject, text }) => {
  return new Promise((resolve, reject) => {
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.FROM_EMAIL,
        pass: process.env.FROM_PASS,
      },
    });

    transport.sendMail(
      {
        to,
        subject,
        text,
        html: text,
      },
      (err) => {
        if (err) {
          reject('Unable to send email: ' + err.message);
        } else {
          resolve(true);
        }
      }
    );
  });
};

module.exports = { sendEmail };
