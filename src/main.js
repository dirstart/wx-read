import Vue from 'vue';
import FastClick from 'fastclick'; // 引入插件
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './lang';
import myPlugins from './plugin';
import './icons';
import '@/assets/styles/icon.css';
import '@/assets/styles/global.less';

Vue.use(myPlugins)
FastClick.attach(document.body); // 使用 fastclick

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
