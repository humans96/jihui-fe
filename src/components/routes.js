import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'components/home.vue';
import Product from 'components/product.vue';
import Rift from 'components/product/rift.vue';
import Demo from 'components/product/demo.vue';
import Login from 'components/login.vue';
import Support from 'components/support.vue';
import Register from 'components/register.vue';
import About from 'components/about.vue';
import Container from 'components/container.vue';
import Ucenter from 'components/user/ucenter.vue';
import Cart from 'components/cart.vue';
import Buy from 'components/buy.vue';
import Order from 'components/order.vue';
Vue.use(VueRouter);

const routes =  [
  {
    path: '/',
    components: {
      container: Container,
    },
    children: [
      { path: '/', component: Home },
      // { path: '/product', component: Product },
      { path: '/rift', component: Rift },
      { path: '/support', component: Support },
      { path: '/about', component: About },
      { path: '/ucenter', component: Ucenter},
      { path: '/product/:name', component: Demo },
      { path: '/cart', component: Cart },
      { path: '/buy', component: Buy },
      { path: '/order', component: Order }
    ]
  },
  {
    path:'/login',
    components: {
      container: Login
    }
  },
  {
    path:'/register',
    components: {
      container: Register
    }
  }
];

export default new VueRouter({
  // mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
