// emailService.js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (recipient, subject, message) => {
  const msg = {
    to: recipient,
    from: 'your-email@example.com', // Use your verified sender
    subject: subject,
    text: message,
    attachments: [
      {
        content: 'BASE64_ENCODED_FILE_CONTENT',
        filename: 'attachment.txt',
        type: 'plain/text',
        disposition: 'attachment',
      },
    ],
  };
  await sgMail.send(msg);
};
