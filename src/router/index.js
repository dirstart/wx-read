import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '../views/notFound.vue';
import List from '../views/list.vue';

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
      },
      // 如果没有后续的参数想要跳转 404，在嵌套路由需要配置 ''
      {
        path: '',
        component: NotFound
      }
    ]
  },
  {
    path: '/list',
    component: List
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
