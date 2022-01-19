import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;
// Vue.config.devtools = false;

import TDesign from 'tdesign-vue';
// 引入组件库全局样式资源
import 'tdesign-vue/es/style/index.css';

Vue.use(TDesign);

new Vue({
  beforeCreate: function () {
    console.log(11111);
  },
  created: function () {
    console.log(22222);
  },
  beforeMount: function () {
    console.log(33333);
  },
  mounted() {
    console.log(44444);
  },
  beforeUpdate() {
    console.log(555555);
  },
  updated() {
    console.log(6666666);
  },
  activated() {
    console.log(7777);
  },
  deactivated() {
    console.log(888888);
  },
  render: h => h(App),
}).$mount('#app')
