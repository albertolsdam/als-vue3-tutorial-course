import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import Home from '../views/Home';
import UserProfile from '../views/UserProfile';
import Admin from '../views/Admin';
import { users } from '../assets/users';

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
    component: Admin,
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
  const user = store.state.User.user;

  if(!user)
  {
    //[Module]/[action]
    await store.dispatch('User/setUser', users[0]);
  }

  const isAdmin = true;
  const requiredAdmin = to.matched.some(record => record.meta.requiredAdmin);

  if(requiredAdmin && !isAdmin)
    next({ name: 'Home' });
  else
    next();
})

export default router
