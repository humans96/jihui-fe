import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'components/home.vue';
import Product from 'components/product.vue';
import Rift from 'components/product/rift.vue';
import Login from 'components/login.vue';
import Support from 'components/support.vue';
import Register from 'components/register.vue';
import About from 'components/about.vue';
import Container from 'components/container.vue';
Vue.use(VueRouter);

const routes =  [
  {
    path: '/',
    components: {
      body: Container,
    },
    children: [
      { path: '/', component: Home },
      { path: '/product', component: Product },
      { path: '/rift', component: Rift },
      { path: '/support', component: Support },
      { path: '/about', component: About },
    ]
  },
  {
    path:'/login',
    components: {
      body: Login
    }
  },
  {
    path:'/register',
    components: {
      body: Register
    }
  }
];

export default new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
