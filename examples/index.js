import Button from '../packages/button/index';
import Alert from '../packages/alert/index';
// import Drawer from '../packages/drawer/govDrawer';
import Drawer from '../packages/drawer/index';
// import GovButton from '../packages/button/index';


const components = [
  Button,
  Alert,
  Drawer,
];

const install = (Vue) => {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  ...components,
};
