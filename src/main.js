import Vue from 'vue'
import '@/assets/css/common.css'
export default function (App, ele = '#app') {
  Vue.config.productionTip = false
  /* eslint-disable no-new */
  new Vue({
    el: ele,
    template: '<App/>',
    components: { App }
  })
}
