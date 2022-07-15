import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import store from "@/store"
import HeaderO from "@/components/HeaderO"
import HeaderSearch from "@/components/HeaderSearch"
import HeaderList from "@/components/HeaderList"
import CommonFooter from "@/components/CommonFooter"
import SimpleFooter from "@/components/SimpleFooter"
import CommonPagination from "@/components/CommonPagination"
import "@/assets/css/index.css"
import "swiper/css/swiper.css"
Vue.config.productionTip = false

Vue.component("HeaderO", HeaderO)
Vue.component("HeaderSearch", HeaderSearch)
Vue.component("HeaderList", HeaderList)
Vue.component("CommonFooter", CommonFooter)
Vue.component("SimpleFooter", SimpleFooter)
Vue.component("CommonPagination", CommonPagination)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
