import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'components/home/home.vue';
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
      // { path: 'About', name: 'About', component: About },
      // { path: 'Jupiter', name: 'Jupiter', component: Jupiter },
    ]
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
