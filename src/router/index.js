import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'Admin',
    component: 'Admin',
    meta: {
      requiredAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const isAdmin = true;
  const requiredAdmin = to.matched.some(record => record.meta.requiredAdmin);

  if(requiredAdmin && !isAdmin)
    next({ name: 'Home' });
  else
    next();
})

export default router
