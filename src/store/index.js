import Vue from "vue"
import Vuex from "vuex"
import Cookies from "js-cookie"
import {requestUserInfo} from "@/api"
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    account: "",
    shopCartList: null,
    orderList: null,
    token: "",
    loginTo: {name:"home"}
  },
  getters: {},
  actions: {
    getUserInfo({commit}){
      requestUserInfo().then(response=>{
        if (response.data.code === 203) Cookies.remove("token")
        else if (response.data.code !== 200) return Promise.reject(response.data.message)
        commit("SET_USER_INFO", response.data.data)
      }).catch(err=>alert(err))
    }
  },
  mutations: {
    GET_TOKEN(state) {
      state.token = Cookies.get("token") || ""
    },
    ADD_TOKEN(state, token){
      Cookies.set("token", token)
    },
    SET_USER_INFO(state, userInfo){
      state.account = userInfo.account
      state.shopCartList = userInfo.shopCartList
      state.orderList = userInfo.orderList
    },
    LOGOUT(state) {
      state.account = "",
      state.shopCartList = "",
      state.orderList = "",
      state.token = ""
      Cookies.remove("token")
    }
  }
})