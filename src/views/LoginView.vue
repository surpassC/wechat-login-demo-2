<!-- src/views/LoginView.vue -->
<template>
  <div class="container bg-white shadow p-3 mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-sm-12">
        <div class="login-container" role="form" aria-labelledby="login-title">
          <h1 class="text-center">Login</h1>
          <div class="auth-methods mb-3">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                v-model="authMethod"
                value="normal"
                id="normalLogin"
                aria-label="Normal Login"
              />
              <label class="form-check-label" for="normalLogin">Firebase Cloud Login</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                v-model="authMethod"
                value="firebase"
                id="firebaseLogin"
                aria-label="Firebase Login"
              />
              <label class="form-check-label" for="firebaseLogin"
                >Firebase Authentication Login</label
              >
            </div>
          </div>

          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                class="form-control"
                required
                aria-required="true"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                id="password"
                v-model="formData.password"
                class="form-control"
                required
                aria-required="true"
              />
            </div>
            <button type="submit" class="w-100 btn btn-primary" :disabled="loading">
              {{ loading ? 'Loading...' : 'Login' }}
            </button>
            <p v-if="errorMessage" class="text-danger" aria-live="assertive">{{ errorMessage }}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import router from '@/router'
import { fireBase, db } from '@/firebaseConfig' // Import Firebase configuration
import { collection, query, where, getDocs } from 'firebase/firestore'
import { useUserStore } from '@/stores/userStore' // Import Pinia Store

const formData = ref({
  email: '223@qq.com',
  password: '123123'
})
const loading = ref(false)
const errorMessage = ref('')
const authMethod = ref('firebase') // New login method selection
const userStore = useUserStore() // Use Pinia Store

const handleLogin = async () => {
  errorMessage.value = ''

  if (!formData.value.email || !formData.value.password) {
    errorMessage.value = 'Please enter email and password.'
    return
  }

  loading.value = true

  if (authMethod.value === 'firebase') {
    const auth = getAuth(fireBase)
    signInWithEmailAndPassword(auth, formData.value.email, formData.value.password)
      .then((userCredential) => {
        console.log(userCredential)
        alert('Login successful')
        userStore.login(userCredential.user) // Save user login state

        router.push({ name: 'Home' })
      })
      .catch((error) => {
        console.log(error.message)
        errorMessage.value = 'Wrong email or password'
      })
      .finally(() => {
        loading.value = false
      })
  } else {
    try {
      // Query Firestore to find the user
      const q = query(collection(db, 'user'), where('email', '==', formData.value.email))
      const querySnapshot = await getDocs(q)

      if (querySnapshot.empty) {
        errorMessage.value = 'No user found with this email.'
        return
      }

      let userFound = null
      querySnapshot.forEach((doc) => {
        userFound = doc.data()
      })

      // Check if the password matches
      if (userFound && userFound.password === formData.value.password) {
        alert('Login successful')
        userStore.login(userFound) // Save user login state
        router.push({ name: 'Home' }) // Redirect to home page
      } else {
        errorMessage.value = 'Wrong email or password'
      }
    } catch (error) {
      console.error('Error logging in:', error)
      errorMessage.value = 'Login failed: ' + error.message
    } finally {
      loading.value = false
    }
  }
}
</script>

<style scoped></style>
