<template>
  <div>
    <h2>Send Email</h2>
    <input v-model="email" placeholder="Recipient Email" />
    <input v-model="subject" placeholder="Subject" />
    <textarea v-model="message" placeholder="Message"></textarea>
    <button @click="sendEmailHandler">Send Email</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { sendEmail } from '../sendEmail';

const email = ref('');
const subject = ref('');
const message = ref('');

const sendEmailHandler = () => {
  sendEmail(email.value, subject.value, message.value);
};
</script>
