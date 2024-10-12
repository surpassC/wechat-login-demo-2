<!-- src/views/RegisterView.vue -->
<template>
  <div class="container bg-white shadow p-3 mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="text-center">Register</h2>
        <form @submit.prevent="registerUser">
          <div class="mb-3">
            <label for="username" class="form-label">Username:</label>
            <input type="text" v-model="form.username" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" v-model="form.email" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password:</label>
            <input type="password" v-model="form.password" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="confirm_password" class="form-label">Confirm Password:</label>
            <input type="password" v-model="form.confirm_password" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="real_name" class="form-label">Real Name:</label>
            <input type="text" v-model="form.real_name" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">Phone Number:</label>
            <input type="tel" v-model="form.tel" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="birthday" class="form-label">Birthday:</label>
            <input type="date" v-model="form.birthday" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="career" class="form-label">Occupation:</label>
            <input type="text" v-model="form.career" class="form-control" required />
          </div>
          <div class="mb-3">
            <label class="form-label">Willing to Volunteer:</label>
            <div>
              <input
                type="radio"
                id="volunteer-yes"
                value="true"
                v-model="form.volunteer"
                required
              />
              <label for="volunteer-yes">Yes</label>
            </div>
            <div>
              <input
                type="radio"
                id="volunteer-no"
                value="false"
                v-model="form.volunteer"
                required
              />
              <label for="volunteer-no">No</label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary w-100">Register</button>
        </form>
        <div v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { db } from '@/firebaseConfig.js'
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import router from '@/router'

export default {
  setup() {
    const form = ref({
      username: '213',
      email: '213@qq.com',
      password: '123123',
      confirm_password: '123123',
      real_name: '213',
      tel: '1234567890',
      birthday: '2024-01-01',
      career: 'developer',
      volunteer: true,
      role: 'user'
    })
    const errorMessage = ref('')

    const registerUser = async () => {
      // Data validation
      if (!(await validateForm())) {
        return
      }
      try {
        // Destructure form into a plain object
        const userData = { ...form.value }
        const docRef = await addDoc(collection(db, 'user'), userData)
        console.log('Document written with ID: ', docRef.id)
        alert('Registration successful')

        router.push({ name: 'Login' })

        // Logic after successful registration
      } catch (error) {
        errorMessage.value = 'Registration failed: ' + error.message
      }
    }

    const validateForm = async () => {
      if (
        !form.value.username ||
        !form.value.email ||
        !form.value.password ||
        !form.value.confirm_password ||
        !form.value.real_name ||
        !form.value.tel ||
        !form.value.birthday ||
        !form.value.career ||
        !form.value.volunteer
      ) {
        errorMessage.value = 'All fields are required'
        return false
      }

      // Check email format
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(form.value.email)) {
        errorMessage.value = 'Email format is incorrect'
        return false
      }

      // Check phone number format
      const telPattern = /^\d{10}$/
      if (!telPattern.test(form.value.tel)) {
        errorMessage.value = 'Phone number format is incorrect, should be 10 digits'
        return false
      }

      // Check if password and confirm password match
      if (form.value.password !== form.value.confirm_password) {
        errorMessage.value = 'Password and confirm password do not match'
        return false
      }

      // Check if email is already registered
      const q = query(collection(db, 'user'), where('email', '==', form.value.email))
      const querySnapshot = await getDocs(q)
      if (!querySnapshot.empty) {
        errorMessage.value = 'This email is already registered'
        return false
      }

      errorMessage.value = ''
      return true
    }

    return { form, errorMessage, registerUser }
  }
}
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.error {
  color: red;
}
</style>
