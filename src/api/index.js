import axios from "./axios"

export function requestRecommand(rowNum){
  return axios.request({
    url: "recommand",
    method: "GET",
    params: {rowNum}
  })
}

export function signUp(data) {
  return axios.request({
    url: "signUp",
    method: "POST",
    data
  })
}

export function login(data) {
  return axios.request({
    url: "login",
    method: "POST",
    data
  })
}

export function requestUserInfo() {
  return axios.request({
    url: "userInfo",
    method: "GET"
  })
}

export function search(data) {
  return axios.request({
    url: data.category ? `search/${data.category}` : "search",
    method: "GET",
    params: {...data}
  })
}

export function detail(name) {
  return axios.request({
    url: "detail",
    method: "GET",
    params: {name}
  })
}

export function addToShopCart(data){
  return axios.request({
    url: `addToShopCart`,
    method: "POST",
    data
  })
}

export function requestShopCart(){
  return axios.request({
    url: "requestShopCart",
    method: "GET"
  })
}

export function updateShopCart(data){
  return axios.request({
    url: "updateShopCart",
    method: "POST",
    data
  })
}