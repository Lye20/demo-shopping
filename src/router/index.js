import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store"

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, resolve, reject) {
  if (resolve, reject) return originalPush.call(this, location, resolve, reject)
  return originalPush.call(this, location).catch(()=>{})
}

const router = new VueRouter({
  mode: "hash",
  routes:[
    {
      name: "home",
      path: "/",
      component: ()=>import("@/pages/Home")
    },
    {
      name: "search",
      path: "/search/:category?",
      component: ()=>import("@/pages/Search")
    },
    {
      name: "detail",
      path: "/detail",
      component: ()=>import("@/pages/Detail"),
      props({query: {name}}){
        return {
          targetName: name
        }
      }
    },
    {
      name: "login",
      path: "/login",
      component: ()=>import("@/pages/Login")
    },
    {
      name: "signUp",
      path: "/signUp",
      component: ()=>import("@/pages/SignUp")
    },
    {
      name: "shopCart",
      path: "/shopCart",
      component: ()=>import("@/pages/ShopCart")
    },
  ]
})

router.beforeEach((to, from, next)=>{
  store.commit("GET_TOKEN")
  const token = store.state.token
  scrollTo(0, 0)
  if (!token && (to.name === "order"||to.name === "shopCart")) next({name:"login"})
  if (token && to.name === "login") next({name:"home"})
  if (token && (!store.state.account || !store.state.shopCartList || !store.state.orderList)) {
    store.dispatch("getUserInfo")
  }
  if (to.name==="login") {
    store.state.loginTo = {name: from.name==="login"||!from.name?"home":from.name, query: from.query, params: from.params}
  }
  next()
})

export default router