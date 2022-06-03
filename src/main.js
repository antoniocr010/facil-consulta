import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueTheMask from 'vue-the-mask';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueTheMask);

Vue.config.productionTip = false;

Vue.filter('currency', function (value) {
  if (typeof value !== 'number') {
    return value;
  }
  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return formatter.format(value);
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
