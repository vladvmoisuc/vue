import type { Router } from 'vue-router';

declare module '@vue/runtime-core' {
  interface Routes {
    [key: string]: string;
  }

  interface ComponentCustomProperties {
    $routes: Routes;
    $router: Router;
  }
}
