<template>
  <div>
    <div class="header clearfix">
      <div class="container" @click="goTo">
        <div class="left">
          <span goToTarget="home">DEMO</span><i>欢迎登录</i>
        </div>
        <div class="right">
          没有账号？<span class="rightArror" goToTarget="signUp">去注册</span>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="container">
        <form class="login-form">
          <div class="login-item" :style="{borderColor: color.account}">
            <label for="account" class="iconfont icon-tongxunlu"></label>
            <input type="text" id="account" v-model="loginData.account" @focus="focusHandler" autocomplete='off'>
          </div>
          <div class="login-item" :style="{borderColor: color.password}">
            <label for="password" class="iconfont icon-password"></label>
            <input type="password" id="password" v-model="loginData.password" @focus="focusHandler" autocomplete='off'>
          </div>
          <div class="forget-password" @click="forgetPWDHandler">忘记密码?</div>
          <button @click.prevent="submit">登录</button>
        </form>
      </div>
    </div>
    <div class="container">
      <SimpleFooter></SimpleFooter>
    </div>
  </div>
</template>

<script>
  import {login} from "@/api"
  export default {
    name: "SignUpPage",
    data(){
      return {
        loginData: {
          account: "",
          password: ""
        },
        color: {
          account: "#999",
          password: "#999"
        },
        colorList: ["#999", "#e2231a"]
      }
    },
    methods: {
      goTo(event){
        if (event.target.attributes.goToTarget) {
          this.$router.push({
            name: event.target.attributes.goToTarget.value,
          })
        }
      },
      forgetPWDHandler(){
        alert("再想想！")
      },
      focusHandler(event){
        const focusingid = event.target.id
        this.color[focusingid] = this.colorList[0]
      },
      validator(){
        let result = true
        if (!this.loginData.password) {
          this.color.password = this.colorList[1]
          result = false
        }
        if (!this.loginData.account) {
          this.color.account = this.colorList[1]
          result = false
        }
        return result
      },
      submit(){
        if (!this.validator()) return
        login(this.loginData).then(response=>{
          if (response.data.code !== 200) return Promise.reject(response.data.message)
          this.$store.commit("ADD_TOKEN", response.data.token)
          this.$router.replace({...this.$store.state.loginTo})
        }).catch(err=>alert(err))
      }
    }
  }
</script>

<style lang="less" scoped>
  .header {
    height: 110px;
    background-color: #fff;
    box-shadow: 0px 2px 10px #ddd;
    .left {
      float: left;
      font-size: 24px;
      color: #666;
      line-height: 90px;
      span {
        color: #f30213;
        font-size: 50px;
        vertical-align: middle;
        margin: 0 20px;
        cursor: pointer;
      }
      i {
        vertical-align: middle;
      }
    }
    .right {
      float: right;
      color: #999;
      line-height: 90px;
      span {
        color: #e22;
        cursor: pointer;
        &:after {
          border-color: #c81623;
        }
        &:hover {
          color: #c81623;
          text-decoration: undeline;
          &:after {
            border-color: #c81623;
          }
        }
      }
    }
  }
  .body {
    height: 500px;
    // background: -webkit-linear-gradient(left, #e50505, #cc7427) ;
    background: url("@/assets/img/login-bg.png") center center;
    background-size: cover;
    .login-form{
      box-sizing: border-box;
      width: 350px;
      height: 280px;
      float: right;
      background-color: #fff;
      box-shadow: 2px 2px 5px #fff;
      padding: 30px;
      margin-top: 80px;
      margin-right: 50px;
      border-radius: 5px;
      .login-item {
        width: 290px;
        height: 50px;
        line-height: 50px;
        margin-bottom: 20px;
        border: 2px solid #999;
        label {
          height: 100%;
          width: 50px;
          display: inline-block;
          text-align: center;
          font-size: 25px;
          background-color: #ccc;
          border-right: 2px solid #999;
          vertical-align: top;
        }
        input {
          box-sizing: border-box;
          height: 50px;
          width: 238px;
          color: #333;
          font-size: 16px;
          line-height: 50px;
          vertical-align: bottom;
          padding: 0 10px;
          border: none;
          outline: none;
        }
      }
      .forget-password {
        float: right;
        color: red;
        margin-top: -10px;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      button {
        width: 290px;
        height: 50px;
        color: #fff;
        font-size: 16px;
        margin-top: 15px;
        border: none;
        background-color: #e2231a;
        cursor: pointer;
      }
    }
  }
</style>