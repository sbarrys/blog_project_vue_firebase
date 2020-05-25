import Vue from 'vue'
Vue.config.errorHandler = function (err, vm, info) {
  console.log(`Error: ${err.toString()}\nInfo: ${info}`)
  Vue.prototype.$toast(err.message)
}
