import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'components/home/home.vue';
import Product from 'components/product/product.vue';
import Login from 'components/login/login.vue';
import Support from 'components/support.vue';
import About from 'components/about.vue';
import Container from 'components/default/container.vue';
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
      { path: '/support', component: Support },
      { path: '/about', component: About },
    ]
  },
  {
    path:'/login',
    components: {
      body: Login
    }
  }
];

export default new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
