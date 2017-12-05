import Vue from 'vue'
import App from './App.vue'
import vueTableExport from './lib/index.js'
 Vue.use(vueTableExport)

new Vue({
  el: '#app',
  render: h => h(App)
})
