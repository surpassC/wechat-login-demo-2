import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import { useUserStore } from '@/stores/userStore'; // Import the user store
import './assets/style.css'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'



const pinia = createPinia();
const app = createApp(App)


app.use(pinia);
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

const userStore = useUserStore();
userStore.checkLoginStatus();



app.mount('#app')

