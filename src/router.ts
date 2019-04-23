import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/components/Login.vue';
import Profile from '@/components/Profile.vue';
import Index from '@/components/Index.vue';
import DsPostSake from '@/components/DsPostSake.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/profile/edit',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
    },
    {
      path: '/post/sake',
      name: 'DsPostSake',
      component: DsPostSake,
    },
  ],
});
