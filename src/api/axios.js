import axios from "axios"
import Cookies from "js-cookie"
import store from "../store"
import router from "../router"
class CreateHttpRequest {
  constructor(){
    this.defaultConfig = {
      baseURL: process.env.NODE_ENV === "production" ? "http://81.71.159.103:8081/api" : "http://localhost:8083/api",
      timeout: 2000
    }
  }

  interceptors(instance) {
    instance.interceptors.request.use(config=>{
      const token = Cookies.get("token")
      if (token) config.headers.Authorization = `Bearer ${token}`
      return config
    })
    instance.interceptors.response.use(response=>{
      if (response.data.code === 205) {
        store.commit("LOGOUT")
        if (response.data.message === "登录状态失效，请重新登录") router.replace({name: "login"})
        return Promise.reject(response.data.message)
      }
      return response
    })
  }
  request(config){
    const ins = axios.create()
    this.interceptors(ins)
    return ins({...this.defaultConfig, ...config})
  }
}

export default new CreateHttpRequest()