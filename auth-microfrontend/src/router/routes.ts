import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

import { LOGIN_ROUTE, REGISTER_ROUTE } from '../utils/routes';

export default [
  { path: LOGIN_ROUTE, component: Login },
  { path: REGISTER_ROUTE, component: Register },
  { path: '/', redirect: LOGIN_ROUTE },
];
