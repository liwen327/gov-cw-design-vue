import Vue from 'vue';
import Router from 'vue-router';
import navConf from '../nav.config.json';

Vue.use(Router);
let routes = [];

Object.keys(navConf).forEach((header) => {
  routes = routes.concat(navConf[header]);
});

const addComponent = (router) => {
  router.forEach((route) => {
    if (route.items) {
      addComponent(route.items);
      routes = routes.concat(route.items);
    } else {
      if (route.type === 'pages') {
        // eslint-disable-next-line
        route.component = r => require.ensure([], () =>
          // eslint-disable-next-line
          r(require(`../components/${route.name}.vue`)));
        return;
      }
      // eslint-disable-next-line
      route.component = r => require.ensure([], () =>
        // eslint-disable-next-line
        r(require(`../docs/${route.name}.md`)));
    }
  });
};
addComponent(routes);

export default new Router({
  routes,
  /* routes: [
    {
      path: '/button',
      name: 'button',
      component: () => import('@/docs/govButton.md'),
    },
    {
      path: '/alert',
      name: 'alert',
      component: () => import('@/docs/govAlert.md'),
    },
    {
      path: '/drawer',
      name: 'alert',
      component: () => import('@/docs/govDrawer.md'),
    },
  ], */
});
