import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Record from './views/Record.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/record',
      name: 'record',
      component: Record,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    }
  ]
})