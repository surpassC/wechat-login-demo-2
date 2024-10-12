<template>
  <div class="popular">
    <h1>Popular Resources</h1>
    <p>Explore our most popular books and resources loved by our community!</p>

    <!-- 电子邮件表单 -->
    <h2>Contact Us</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Your Name:</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          required
          placeholder="Enter your name"
        />
      </div>

      <div class="form-group">
        <label for="email">Your Email:</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          required
          placeholder="Enter your email"
        />
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea
          id="message"
          v-model="formData.message"
          required
          placeholder="Your message"
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>

    <!-- 表单提交结果 -->
    <div v-if="submitted">
      <h2>Thank you for your message, {{ formData.name }}!</h2>
      <p>We will respond to you at {{ formData.email }} soon.</p>
    </div>

    <!-- 地图显示 -->
    <h2>Visit Our Library</h2>
    <div id="map"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import L from 'leaflet' // 引入 Leaflet 地图库

// 表单数据
const formData = ref({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)

// 表单提交处理
const submitForm = () => {
  submitted.value = true
  sendEmail() // 假设有一个发送邮件的函数
}

// 使用 Leaflet 显示地图
onMounted(() => {
  const map = L.map('map').setView([51.505, -0.09], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map)

  L.marker([51.505, -0.09]).addTo(map)
    .bindPopup('Our Library Location')
    .openPopup()
})

const sendEmail = () => {
  // 这里可以使用 API 发送邮件
  console.log('Sending email:', formData.value)
}
</script>

<style scoped>
.popular {
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1, h2 {
  color: #333;
}

p {
  color: #666;
}

form {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

/* 地图样式 */
#map {
  height: 400px;
  margin-top: 20px;
}
</style>
