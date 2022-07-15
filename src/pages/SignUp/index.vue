<template>
  <div>
    <div class="header clearfix">
      <div class="container" @click="goTo">
        <div class="left">
          <span goToTarget="home">DEMO</span><i>欢迎注册</i>
        </div>
        <div class="right">
          已有账号？<span class="rightArror" goToTarget="login">请登录</span>
        </div>
      </div>
    </div>
    <div class="container">
      <form class="body">
        <div class="form-item" :style="{borderColor: color.account, color: color.account}">
          <label for="account">账 号：</label>
          <input type="text" id="account" @focus="focusHandler" @input="inputHandler" 
          @blur="inputHandler" v-model="signUpData.account" :style="{color: color.account}" autocomplete="off">
        </div>
        <div class="info">
          <span v-if="focusing==='account' && !errMsg.account"><i class="iconfont icon-help"></i>支持中文、英文、数字，4-20个字符</span>
          <span v-if="errMsg.account"><span class="iconfont icon-reduce" style="color: #ff1a1a"></span><span v-text="errMsg.account"></span></span>
        </div>
        <div class="form-item" :style="{borderColor: color.password, color: color.password}">
          <label for="password">设 置 密 码：</label>
          <input type="password" id="password" @focus="focusHandler" @input="inputHandler" 
          @blur="inputHandler" v-model="signUpData.password" :style="{ color: color.password}" autocomplete="off">
        </div>
        <div class="info">
          <span v-if="focusing==='password' && !errMsg.password"><i class="iconfont icon-help"></i>支持字母、数字两种或以上的组合，8-20位</span>
          <span v-if="errMsg.password"><i class="iconfont icon-reduce" style="color: #ff1a1a"></i><span v-text="errMsg.password"></span></span>
        </div>
        <div class="form-item" :style="{borderColor: color.confirmPWD, color: color.confirmPWD}">
          <label for="confirmPWD">确 认 密 码：</label>
          <input type="password" id="confirmPWD" @focus="focusHandler" @input="inputHandler" 
          @blur="inputHandler" v-model="signUpData.confirmPWD" :style="{color: color.confirmPWD}" autocomplete="off">
        </div>
        <div class="info">
          <span v-if="focusing==='confirmPWD' && !errMsg.confirmPWD"><i class="iconfont icon-help"></i>请再次输入密码</span>
          <span v-if="errMsg.confirmPWD"><i class="iconfont icon-reduce" style="color: #ff1a1a"></i><span v-text="errMsg.confirmPWD"></span></span>
        </div>
        <button @click="submit" :disabled="disableSubmit" :style="buttonStyle">立即注册</button>
      </form>
      <SimpleFooter></SimpleFooter>
    </div>
  </div>
</template>

<script>
  import {signUp, login} from "@/api"
  export default {
    name: "LoginPage",
    data() {
      return {
        focusing: "",
        signUpData: {
          account: "",
          password: "",
          confirmPWD: ""
        },
        errMsg: {
          account: "",
          password: "",
          confirmPWD: ""
        },
        color: {
          account: "#666",
          password: "#666",
          confirmPWD: "#666"
        },
        disableSubmit: true,
        colorList: ["#666", "#00c600", "#ff1a1a"]
      }
    },
    computed:{
      buttonStyle() {
        return {
          "background-color": this.disableSubmit ? "#666" : "#e2231a",
          "cursor": this.disableSubmit ? "text" : "pointer"
        }
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
      focusHandler(event){
        const focusingId = event.target.id
        this.focusing = focusingId
        this.color[focusingId] = this.colorList[0]
      },
      inputHandler(event){
        this.focusing = ""
        const {id, value} = event.target
        this.validator(id, value)
      },
      validAccount(value){
        if (!/^.{4,20}$/.test(value)) {
          this.color.account = this.colorList[2] 
          this.errMsg.account = "用户名应为4到20个字符"
        }
        else {
          this.errMsg.account = ""
          this.color.account = this.colorList[1] 
        }
      },
      validPassword(value){
        if (!/^.{8,20}$/.test(value)) {
          this.color.password = this.colorList[2] 
          this.errMsg.password = "密码应为8到20位"
        }
        else {
          this.errMsg.password = ""
          this.color.password = this.colorList[1] 
        }
        if (this.signUpData.confirmPWD) this.validConfirmPWD(this.signUpData.confirmPWD)
      },
      validConfirmPWD(value){
        if (!/^.{8,20}$/.test(value)) {
          this.color.confirmPWD = this.colorList[2] 
          this.errMsg.confirmPWD = "密码应为8到20位"
        }
        else if (value !== this.signUpData.password) {
          this.color.confirmPWD = this.colorList[2]
          this.errMsg.confirmPWD = "两次输入密码不一致"
        }
        else {
          this.errMsg.confirmPWD = ""
          this.color.confirmPWD = this.colorList[1] 
        }
      },
      validComplete(){
        const {account, password, confirmPWD} = this.signUpData
        const {account:accountErr, password:passwordErr, confirmPWD:confirmPWDErr} = this.errMsg
        if (account && password && confirmPWD) {
          if (!accountErr && !passwordErr && !confirmPWDErr) {
            this.disableSubmit = false
            return true
          }
        }
        return false
      },
      validator(id, value) {
        this.disableSubmit = true
        if (id === "account") this.validAccount(value)
        else if (id === "password") this.validPassword(value)
        else if (id === "confirmPWD") this.validConfirmPWD(value)
        this.validComplete()
      },
      submit(){
        if (this.validComplete()){
          this.disableSubmit = true
          signUp(this.signUpData).then(response=>{
            if (response.data.code !== 200) return Promise.reject(response.data.message)
            alert(response.data.message)
            login({account: this.signUpData.account, password: this.signUpData.password}).then(response=>{
              if (response.data.code !== 200) return Promise.reject(response.data.message)
              this.$store.commit("ADD_TOKEN", response.data.token)
              this.$router.replace({
                name: "home"
              })
            })
          }).catch(err=>{
            this.validComplete()
            alert(err)
          })
        }
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
    height: 300px;
    width: 400px;
    margin: 100px auto 150px;
    .form-item {
      border: 1px solid;
      label {
        display: inline-block;
        width: 100px;
        height: 50px;
        line-height: 50px;
        text-align: justify;
        overflow: hidden;
        vertical-align: bottom;
        padding-left: 12px;
        &:after {
          display: inline-block;
          content: "";
          width: 100%;
        }
      }
      input {
        box-sizing: border-box;
        font-size: 16px;
        width: 270px;
        line-height: 50px;
        vertical-align: bottom;
        padding: 0 5px;
        border: none;
        outline: none;
      }
    }
    .info {
      box-sizing: border-box;
      color: #aaa;
      height: 40px;
      line-height: 30px;
      padding-left: 10px;
      i {
        margin-right: 5px;
      }
      span:nth-child(2) {
        color: #ff1a1a;
      }
    }
    button {
      width: 400px;
      height: 50px;
      color: #fff;
      font-size: 16px;
      border: none;
      margin: 15px 0;
    }
  }
</style>