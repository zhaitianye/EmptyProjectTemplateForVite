import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: true,
    },
    component: () => import('../views/home/home.vue'),
  },
  {
    path: '/deal',
    name: 'Deal',
    meta: {
      title: '交易',
      keepAlive: true,
    },
    component: () => import('../views/deal/deal.vue'),
  },
  {
    path: '/market',
    name: 'Market',
    meta: {
      title: '市场',
      keepAlive: true,
    },
    component: () => import('../views/market/market.vue'),
  },
  {
    path: '/quotation',
    name: 'Quotation',
    meta: {
      title: '行情',
      keepAlive: true,
    },
    component: () => import('../views/quotation/quotation.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
