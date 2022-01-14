import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
// Vue.config.devtools = false;

Vue.use(ElementUI);

new Vue({
  beforeCreate: function () {
    console.log(11111);
  },
  Created: function () {
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
