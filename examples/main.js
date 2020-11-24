// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Vue from 'vue';
import App from './App';
// eslint-disable-next-line
// import VueRouter from 'vue-router';
import router from './router';
import demoBlock from './components/DemoBlock';
// eslint-disable-next-line
import GOVUI from './index';
// eslint-disable-next-line
import './theme/default/index.less';

// Vue.use(VueRouter);
Vue.use(Antd);
Vue.component('demo-block', demoBlock);
Vue.use(GOVUI);


/* const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
}); */

/* eslint-disable no-new */
/* new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
}); */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
