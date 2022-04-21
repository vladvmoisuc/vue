import { createApp } from 'vue';

import app from './app.vue';

import router from './router';

import * as ROUTES from './utils/routes';

createApp(app)
  .use(router)
  .use((data: any) => {
    const properties = data;
    properties.config.globalProperties.$routes = ROUTES;
  })
  .mount('#app');
