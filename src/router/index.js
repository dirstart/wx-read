import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '../views/notFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/ebook'
  },
  {
    path: '/ebook',
    component: () => import('../views/ebook/index.vue'),
    children: [
      {
        path: ':fileUrl',
        component: () => import('../components/ebook/ebook-reader.vue'),
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
