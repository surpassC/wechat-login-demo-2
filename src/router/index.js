import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import { userLogin } from '@/router/loginInfor'
import OrganizerView from '@/views/OrganizerView.vue'
import RatingView from '@/views/RatingView.vue'
import DonateView from '@/views/DonateView.vue'
import QuenaireView from '@/views/QuenaireView.vue'
import RegistView from '@/views/RegisterView.vue'
import PopularView from '@/views/PopularView.vue'
import ChatroomView from '@/views/ChatroomView.vue'
import ActivityView from '@/views/ActivityView.vue'
import ActivityListView from '@/views/ActivityListView.vue'
import Acitivity01View from '@/views/Acitivity01View.vue'
import Activity02View from '@/views/Activity02View.vue'
import { useUserStore } from '@/stores/userStore' // 导入 Pinia Store

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/orga',
    name: 'Organizer',
    component: OrganizerView,
    meta: { requiresLogin: true, roles: ['admin'] }
  },
  {
    path: '/rating',
    name: 'Rating',
    component: RatingView
  },
  {
    path: '/donate',
    name: 'Donate',
    component: DonateView
  },
  {
    path: '/popular',
    name: 'Popular',
    component: PopularView
  },
  {
    path: '/question',
    name: 'Question',
    component: QuenaireView,
    meta: { requiresLogin: true }
  },
  {
    path: '/regist',
    name: 'Regist',
    component: RegistView
  },
  {
    path: '/chatroom',
    name: 'ChatRoom',
    component: ChatroomView,
    meta: { requiresLogin: true }
  },
  {
    path: '/1',
    name: '1',
    component: Acitivity01View,
    meta: { requiresLogin: true }
  },
  {
    path: '/2',
    name: '2',
    component: Activity02View,
    meta: { requiresLogin: true }
  },
  {
    path: '/activity',
    name: 'Activity',
    component: ActivityView
  },
  {
    path: '/activitylist',
    name: 'Activitylist',
    component: ActivityListView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  
  
  const userStore = useUserStore() // 创建用户 Store 实例
  const { isLoggedIn } = userStore // 从 Store 中获取登录状态和角色

  const { isLogin, currentRole } = userLogin()

  // 新增的检查逻辑
  if (to.name === 'Login' || to.name === 'Regist') {
    if (isLoggedIn) {
      next({ name: 'Home' }) // 已登录，重定向到首页
      return
    }
  }

  if (to.meta.roles && to.meta.roles.includes('admin')) {
    if (currentRole.value === 'admin') {
      next()
    } else {
      alert('Admins only.')
      next({ name: 'Login' })
    }
  } else if (to.matched.some((record) => record.meta.requiresLogin)) {
    if (!isLogin.value) {
      alert('need login.')
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
