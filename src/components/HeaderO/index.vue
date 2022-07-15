<template>
  <div class="header-o">
    <div class="container" @click="goTo">
      <div class="container-left ttbar" goToTarget="home">
        <span class="iconfont icon-home"></span>商城首页
      </div>
      <div class="container-right">
        <div class="ttbar" goToTarget="shopCart" v-if="account">欢迎您，{{account}}</div>
        <div class="ttbar" @click="logout" v-if="account">退出登录</div>
        <div class="ttbar" goToTarget="login" v-if="!account">您好，请登录</div>
        <div class="ttbar focusWord" goToTarget="signUp" v-if="!account">免费注册</div>
        <div class="spacer"></div>
        <div class="ttbar" goToTarget="shopCart">我的订单</div>
        <div class="spacer"></div>
        <div class="ttbar downArror">我的商城</div>
        <div class="dropDown ddMyMall">
          <div class="ddTitle downArror" goToTarget="shopCart">我的商城</div>
          <ul>
            <li goToTarget="shopCart">待处理订单</li>
            <li goToTarget="shopCart">返修退换货</li>
            <li goToTarget="shopCart">降价商品</li>
            <li goToTarget="shopCart">我的问答</li>
            <li goToTarget="shopCart">我的关注</li>
          </ul>
          <ul>
            <li goToTarget="shopCart">我的优惠卷</li>
            <li goToTarget="shopCart">我的理财</li>
          </ul>
        </div>
        <div class="spacer"></div>
        <div class="ttbar" goToTarget="shopCart">商城会员</div>
        <div class="spacer"></div>
        <div class="ttbar" goToTarget="shopCart">企业采购</div>
        <div class="spacer"></div>
        <div class="ttbar" goToTarget="shopCart">客户服务</div>
        <div class="spacer"></div>
        <div class="ttbar" goToTarget="shopCart">网站导航</div>
        <div class="spacer"></div>
        <div class="ttbar" goToTarget="shopCart">手机商城</div>
        <div class="spacer"></div>
        <div class="ttbar" goToTarget="shopCart">网站无障碍</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    name: "HeaderO",
    computed: {
      ...mapState(["account"])
    },
    methods: {
      goTo(){
        if (event.target.attributes.goToTarget) {
          this.$router.push({
            name: event.target.attributes.goToTarget.value,
          })
        }
      },
      logout(){
        this.$store.commit("LOGOUT")
      }
    }
  }
</script>

<style lang="less" scoped>
  .header-o{
    @mainColor: #f30213;
    @mainBorderColor: #ccc;
    background-color: #e3e4e5;
    .container {
      display: flex;
      justify-content: space-between;
      .container-left {
        .iconfont {
          font-size: 18px;
          margin-right: 5px;
        }
      }
      .container-right {
        display: flex;
        position: relative;
        justify-content: flex-end;
        align-items: center;
        .ddMyMall {
          position: absolute;
          width: 150px;
          height: 135px;
          top: 30px;
          right: 355px;
          background-color: #fff;
          &:hover {
            display:block;
          }
          .ddTitle {
            position: absolute;
            top: -30px;        
            width: 63px;
            height: 31px;
            text-align: center;
            line-height: 30px;
            font-size: 12px;
            color: #999;
            padding: 0 10px;
            background-color: #fff;
            border-left: 1px solid @mainBorderColor;
            border-right: 1px solid @mainBorderColor;
            cursor: pointer;
            &:hover {
              color: @mainColor;
            }
          }
          ul {
            display: flex;
            flex-flow: column wrap;
            font-size: 14px;
            width: 150px;
            border-left: 1px solid @mainBorderColor;
            border-right: 1px solid @mainBorderColor;
            li {
              padding: 10px 10px;
              color: #999;
              font-size: 12px;
              cursor: pointer;
              &:hover {
                color: @mainColor;
              }
            }
            &:nth-child(2) {
                height: 100px;
                border-top: 1px solid @mainBorderColor;
                border-bottom: #e3e4e5 1px solid;
              }
            &:nth-child(3) {
              height: 34px;
              border-bottom: 1px solid @mainBorderColor;
            }
          }
        }
      }
      .ttbar {
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        color: #999;
        padding: 0 5px;
        &:hover {
          color: @mainColor;
          cursor: pointer;
        }
      }
    }
    .dropDown {
      display: none;
      z-index: 10;
      &:hover {
        display: block;
      }
    }
    .downArror:hover+.dropDown {
      display: block;
    }
  }

</style>