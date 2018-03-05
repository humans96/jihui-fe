import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from 'components/Index.vue';
Vue.use(VueRouter);

const routes =  [
  {
    path: '/',
    components: { body:Index}
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
