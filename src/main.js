import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";
import 'lib-flexible/flexible'
import store from "./store/store";

// 全局导入所有组件     main.js文件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false
Vue.prototype.$bu = new Vue()

FastClick.attach(document.body)
Vue.use(VueLazyload)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
