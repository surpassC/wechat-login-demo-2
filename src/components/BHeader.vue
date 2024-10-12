<!-- src/components/BHeader.vue -->
<template>
  <div class="container bg-white">
    <header class="d-flex flex-column align-items-start py-3">
      <nav class="navbar navbar-expand-lg navbar-light w-100">
        <div class="container">
          <ul class="d-flex w-100 navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active" aria-current="page"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/popular" class="nav-link" active-class="active"
                >Popular activity</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/orga" class="nav-link" active-class="active">Organizer</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/donate" class="nav-link" active-class="active"
                >Donate us</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" active-class="active">About us</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn && !isUser">
              <router-link to="/manager" class="nav-link" active-class="active"
                >Manager</router-link
              >
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link to="/register" class="nav-link" active-class="active"
                >Register</router-link
              >
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <span class="nav-link">Welcome, {{ userEmail }}</span>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <button class="nav-link btn btn-danger" @click="logouts">Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'

const store = useUserStore()
const isLoggedIn = computed(() => store.isLoggedIn)
const userEmail = computed(() => store.user.email)
const isUser = computed(() => store.user.role ) // 检测用户角色是否为 manager
const logouts = () => {
  alert('logout success')
  store.logout()
  router.push({ name: 'Home' })
}
</script>

<style scoped>
.logo {
  font-size: 1.5rem;
  font-weight: bold;
}
.nav-link {
  transition: color 0.3s;
}
.nav-link:hover {
  color: #007bff;
}
.collapse {
  /* 保持折叠样式 */
}
@media (max-width: 576px) {
  .navbar {
    flex-direction: column; /* 在移动端时垂直排列 */
  }
}
</style>
