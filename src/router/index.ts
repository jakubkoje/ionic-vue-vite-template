import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  // routes go he re
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
