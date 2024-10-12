import axios from 'axios';

const sendEmail = async () => {
  const emailData = {
    recipient: formData.value.username, // Assuming email is stored in username
    subject: "Welcome to our app!",
    message: "Thank you for registering!",
  };
  await axios.post('/api/send-email', emailData);
};
