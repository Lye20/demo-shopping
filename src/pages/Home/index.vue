<template>
  <div style="height: 100vh; overflow:auto" @scroll="scrollHandler">
    <HeaderO></HeaderO>
    <HeaderSearch></HeaderSearch>
    <HeaderList></HeaderList>
    <div class="home">
      <div class="home-container container">
        <div class="focus clearfix">
          <div class="aside" @click="goTo">
            <div class="user">
              <div class="user-header">
                <div class="user-avatar" goToTarget="shopCart"></div>
                <div class="user-tip" goToTarget="search">Hi~欢迎逛商城！</div>
                <div class="button" v-if="!account">
                  <div class="user-login" goToTarget="login">登录</div>
                  <div class="spacer"></div>
                  <div class="user-sign" goToTarget="signUp">注册</div>
                </div>
              </div>
              <div class="user-foot">
                <div class="user-profit">新人福利</div>
                <div class="user-plus">PLUS会员</div>
              </div>
            </div>
            <div class="news">
                <div class="news-header">
                  <span class="title">商城快报</span>
                  <span class="rightArror" goToTarget="search" keyword="华为">更多</span>
                </div>
                <ul class="news-content">
                  <li><span class="label" goToTarget="search" keyword="华为">HOT</span><span class="content" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。">气质一绝！Redmi K50晴雪正式来了</span></li>
                  <li><span class="label" goToTarget="search" keyword="联想">推荐</span><span class="content" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。">打破传统手机形态！华为 P50 Pocket比苹果香啊</span></li>
                  <li><span class="label" goToTarget="search" keyword="小米">推荐</span><span class="content" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。">FALANC厚乳拿铁慕斯蛋糕，多吃不腻，健康又美味</span></li>
                  <li><span class="label" goToTarget="search" keyword="戴尔">热门</span><span class="content" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。">4K高刷新时代来临！LG 27GP95R上市</span></li>
                </ul>
            </div>
            <div class="service">
              <div class="service-item service1">话费</div>
              <div class="service-item service2">机票</div>
              <div class="service-item service3">酒店</div>
              <div class="service-item service4">游戏</div>
              <div class="service-item service5">加油卡</div>
              <div class="service-item service6">火车票</div>
              <div class="service-item service7">众筹</div>
              <div class="service-item service8">理财</div>
              <div class="service-item service9">白条</div>
              <div class="service-item service10">电影票</div>
              <div class="service-item service11">企业购</div>
              <div class="service-item service12">礼品卡</div>
            </div>
          </div>
          <div class="focus-swiper swiper-2" @click="goTo">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。" src="@/assets/img/swiper-2/1.png">
                <img goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。" src="@/assets/img/swiper-2/2.png">
                <img goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。" src="@/assets/img/swiper-2/3.png">
              </div>
              <div class="swiper-slide">
                <img goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。" src="@/assets/img/swiper-2/4.png">
                <img goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。" src="@/assets/img/swiper-2/5.png">
                <img goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。" src="@/assets/img/swiper-2/6.png">
              </div>
              <div class="swiper-slide">
                <img goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。" src="@/assets/img/swiper-2/7.png">
                <img goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。" src="@/assets/img/swiper-2/8.png">
                <img goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。" src="@/assets/img/swiper-2/9.png">
              </div>     
            </div>
            <div class="swiper-button-prev swiper-button swiper-2-button-prev"></div>
            <div class="swiper-button-next swiper-button swiper-2-button-next"></div>
          </div>
          <div class="focus-swiper swiper-1" @click="goTo">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。"  src="@/assets/img/swiper-1/1.jpg"></div>
              <div class="swiper-slide"><img goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。" src="@/assets/img/swiper-1/2.jpg"></div>
              <div class="swiper-slide"><img goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。" src="@/assets/img/swiper-1/3.jpg"></div>
              <div class="swiper-slide"><img goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。" src="@/assets/img/swiper-1/4.jpg"></div>
              <div class="swiper-slide"><img goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。" src="@/assets/img/swiper-1/5.jpg"></div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev swiper-button swiper-1-button-prev"></div>
            <div class="swiper-button-next swiper-button swiper-1-button-next"></div>
          </div>
        </div>
        <div class="banner">
          <div class="banner-aside"></div>
          <div class="scroll-bar" @click="goTo">
            <div class="scrolling">
              <div class="item"><img src="@/assets/img/banner/1.png" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。"><div class="text" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。">瑞能 外热式 电烙铁</div></div>
              <div class="item"><img src="@/assets/img/banner/2.png" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。"><div class="text" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。">欧里加 全铜芯 发电机</div></div>
              <div class="item"><img src="@/assets/img/banner/3.png" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。"><div class="text" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。">瑞能 优质钢材 内六角螺丝刀</div></div>
              <div class="item"><img src="@/assets/img/banner/4.png" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。"><div class="text" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。">弗兰是 多功能大功率电钻</div></div>
              <div class="item"><img src="@/assets/img/banner/5.png" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。"><div class="text" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。">瑞能 数显 游标卡尺</div></div>
              <div class="item"><img src="@/assets/img/banner/6.png" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。"><div class="text" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。">瑞能 手动 工具套装</div></div>
              <div class="item"><img src="@/assets/img/banner/7.png" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。"><div class="text" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。">鲜嫩清甜脆 新鲜嫩莲蓬</div></div>
              <div class="item"><img src="@/assets/img/banner/8.png" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。"><div class="text" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。">瑞能 手动 工具套装</div></div>
              <div class="item"><img src="@/assets/img/banner/9.png" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。"><div class="text" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。">ZFC 即插即用式电烙铁</div></div>
              <div class="item"><img src="@/assets/img/banner/10.png" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。"><div class="text" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。">弗兰是 羊毛精钢王 电钻</div></div>
              <div class="item"><img src="@/assets/img/banner/1.png" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。"><div class="text" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。">瑞能 外热式 电烙铁</div></div>
              <div class="item"><img src="@/assets/img/banner/2.png" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。"><div class="text" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。">欧里加 全铜芯 发电机</div></div>
              <div class="item"><img src="@/assets/img/banner/3.png" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。"><div class="text" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。">瑞能 优质钢材 内六角螺丝刀</div></div>
              <div class="item"><img src="@/assets/img/banner/4.png" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。"><div class="text" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。">弗兰是 多功能大功率电钻</div></div>
              <div class="item"><img src="@/assets/img/banner/5.png" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。"><div class="text" goToTarget="detail" name="生死疲劳新版 不看不知道，莫言真幽默！在极度痛苦时笑出声来，获得内心深处的解脱。">瑞能 数显 游标卡尺</div></div>
            </div>
          </div>
        </div>
        <div class="recommand" @click="goTo">
          <div class="recommand-title">
            <img src="@/assets/img/recommand/sprite.png">为你推荐<img src="@/assets/img/recommand/sprite.png">
          </div>
          <div class="recommand-content">
            <div class="recommand-item" v-for="(item, index) of recommandList" :key="index">
              <img :src="item.img">
              <div class="name" v-html="item.name"></div>
              <div class="price">
                ¥
                <span class="l">{{item.price.split(".")[0]}}</span>
                <span>.{{item.price.split(".")[1]}}</span>
              </div>
              <div class="item-mask" goToTarget="detail" :name="item.name"></div>
            </div> 
          </div>
          <div class="loading" v-if="isSending">
            加载中，请稍后...
          </div>
        </div>
      </div>
    </div>
    <CommonFooter></CommonFooter>
  </div>
</template>

<script>
  import Swiper from "swiper"
  import {requestRecommand} from "@/api"
  import {mapState} from "vuex"
  export default {
    name: "HomePage",
    data() {
      return {
        recommandList: [],
        isSending: false,
        rowNum: 1
      }
    },
    computed: {
      ...mapState(["account"])
    },
    methods: {
      goTo(event){
        let query = {}
        if (event.target.attributes.goToTarget) {
          query.keyword = event.target.attributes.keyword ? event.target.attributes.keyword.value || undefined : undefined
          query.name = event.target.attributes.name ? event.target.attributes.name.value || undefined : undefined
          this.$router.push({
            name: event.target.attributes.goToTarget.value,
            query
          })
        }
      },
      scrollHandler(event) {
        const {scrollHeight, scrollTop, clientHeight} = event.target
        const distance = scrollHeight - scrollTop - clientHeight
        if (this.rowNum <= 5 && distance <= 350) {
          this.getRecommand()
        }
      },
      getRecommand() {
        if (this.isSending) return
        else {
          this.isSending = true
          requestRecommand(this.rowNum).then(response=>{
            this.isSending = false
            if (response.data.code !== 200) return Promise.reject(response.data.message)
            this.recommandList.push(...response.data.data)
            this.rowNum += 1   
          }).catch(err=>{
            this.isSending = false
            console.log(err)
          })
        }
      }
    },
    mounted(){
      const defaultSwiperConfig = {
        direction: "horizontal",
        autoplay: {
          delay: 3000
        },
        loop: true,
        speed: 1000,
        spaceBetween: 10
      }
      new Swiper(".swiper-1", {
        ...defaultSwiperConfig,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-1-button-next',
          prevEl: '.swiper-1-button-prev',
        }
      })
      new Swiper(".swiper-2", {
        ...defaultSwiperConfig,
        autoplay: {
          delay: 5000
        },
        navigation: {
          nextEl: '.swiper-2-button-next',
          prevEl: '.swiper-2-button-prev',
        }
      })
      this.getRecommand()
    }
  }
</script>

<style lang="less" scoped>
  .home{
    @mainColor: #f30213;
    background-color: #f1f2f3;
    .focus {
      margin-top: 7px;
      .focus-swiper {
        float: right;
        height: 543px;
        margin-right: 20px;
        overflow: hidden;
        box-shadow: -1px 3px 12px -1px rgba(0,0,0,.3);
        img {
          width: 100%;
        }
        .swiper-button {
          width: 50px;
          height: 40px;
          border-radius: 25px;
          background-color: rgba(0,0,0,0.2);
          &:after {
            content: "";
            width: 12px;
            height: 12px;
            border-left: 1px solid #fff;
            border-bottom: 1px solid #fff;
          }
        }
        .swiper-button-prev {
          transform: translateX(-28px);
          &:after {
            transform: translateX(7px) rotate(45deg);
          }
        }
        .swiper-button-next {
          transform: translateX(28px);
          &:after {
            transform: translateX(-7px) rotate(-135deg);
          }
        }
        /deep/.swiper-pagination-bullet {
          background-color: #fff;
          cursor: pointer;
        }
        &.swiper-1 {
          position: relative;
          width: 650px;
          img {
            height: 100%;
            cursor: pointer;
          }
        }
        &.swiper-2 {
          position: relative;
          width: 210px;
          .swiper-slide {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img {
              height: 33%;
              cursor: pointer;
            }
          }
          .swiper-button {
            visibility: hidden;
          }
          &:hover .swiper-button{
            visibility: visible;
          }
        }
      }
      .aside {
        float: right;
        width: 270px;
        height: 543px;
        background-color: #fff;
        box-shadow: -1px 3px 12px -1px rgba(0,0,0,.3);
        .user {
          box-sizing: border-box;;
          height: 103px;
          margin-top: 10px;
          font-size: 14px;
          .user-header {   
            display: flex;
            flex-flow: column wrap;
            justify-content: center;
            align-content: center;
            height: 60px;        
            .user-avatar {
              width: 50px;
              height: 50px;
              border-radius: 20px;
              background: url("@/assets/img/user-profile.jpg") no-repeat;
              background-size: cover;
              margin-right: 10px;
              cursor: pointer;
            }
            .user-tip {
              color: #999;
              margin-bottom: 5px;
              &:hover {
                cursor: pointer;
                color: @mainColor;
              }
            }
            .button {
              display: flex;
              color: #666;
              .user-login:hover {
                cursor: pointer;
                color: @mainColor
              }
              .user-sign:hover {
                cursor: pointer;
                color: @mainColor
              }
            }
          }
          .user-foot {
            display: flex;
            justify-content: center;
            margin-top: 7px;
            .user-profit {
              width: 90px;
              height: 28px;
              border-radius: 14px;
              background-color: #e1251b;
              color: #fff;
              text-align: center;
              line-height: 28px;
              cursor: pointer;
              &:hover {
                background-color: #c81623;
              }
            }
            .user-plus {
              width: 90px;
              height: 28px;
              border-radius: 14px;
              background-color: #363634;;
              color: #e5d790;
              text-align: center;
              line-height: 28px;
              margin-left: 15px;
              cursor: pointer;
              &:hover {
                color: #fff;
                background-color: #c81623;
              }
            }
          }
        }
        .news {
          height: 140px;
          background-color: #fff;
          border-top: 1px solid #e1e2e3;
          border-bottom: 1px solid #e1e2e3;
          padding: 5px 15px;
          .news-header {
            height: 32px;
            line-height: 30px;
            .title {
              color: #333;
              font-size: 16px;
              font-weight: 700;
            }
            .rightArror {
              float: right;
              color: #999;
              vertical-align: bottom;
              font-size: 12px;
              cursor: pointer;
            }
          }
          .news-content {
            line-height: 26px;
            .label {
              color: #e1251b;
              font-size: 14px;
              background-color: rgba(225,37,27,.08);
              margin-right: 10px;
              cursor: pointer;
            }
            .content {
              display: inline-block;
              width: 200px;
              color: #666;
              vertical-align: bottom;
              font-size: 14px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              cursor: pointer;
              &:hover {
                color: @mainColor;
              }
            }
          }
        }
        .service {
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-content: space-around;
          height: 270px;
          margin-top: 5px;
          .service-item{
            width: 20%;
            height: 22%;
            font-size: 14px;
            color: #666;
            margin-bottom: 5px;
            cursor: pointer;
            line-height: 105px;
            text-align: center;
            margin: 0 12px;
            background-color: pink;
          }
          .mountImg(@n) when (@n>0){
            @h: @n * 2;
            @c: -1 + @n * 2;
            .service@{n} {
              background: url("@/assets/img/service/@{c}.png") no-repeat center top;
              background-size: auto 70%;
              &:hover {
                color: @mainColor;
                background: url("@/assets/img/service/@{h}.png") no-repeat center top;
                background-size: auto 70%;
              }
            }
            .mountImg(-1+@n)
          }
          .mountImg(12);
        }
      }
    }
    .banner {
      position: relative;
      height: 260px;
      background-color: #fff;
      margin-top: 30px;
      box-shadow: -1px 3px 12px -1px rgba(0,0,0,.3);
      .banner-aside {
        position: absolute;
        height: 260px;
        width: 190px;
        background: url("@/assets/img/banner/aside.png") no-repeat;
        background-size: cover;
        z-index: 10;
      }
      .scroll-bar {
        @keyframes scroll {
          100% {transform: translate(-2400px)}
        }
        .animation(@name,@duration,@timing-function,@iteration-count){
          animation: @arguments;
        }
        width: 1200px;  
        height: 260px;
        margin-left: 190px;
        overflow: hidden;
        .scrolling {
          width: 3600px;
          .animation(scroll,15s,linear,infinite);
          &:hover {
            animation-play-state: paused;
          }
          .item {
            display: flex;
            justify-content: center;
            align-items: center;
            float: left;
            width: 240px;
            height: 260px;
            font-size: 16px;

            img {
              width: 80%;
              height: 70%;
              cursor: pointer;
              &:hover+.text {
                color: @mainColor;
              }
            }
            .text {
              width: 80%;
              white-space: nowrap;
              overflow: hidden;
              text-align: center;
              text-overflow: ellipsis;
              cursor: pointer;
              &:hover {
                color: @mainColor;
              }
            }
            &:nth-child(even) {
              flex-direction: column;
            }
            &:nth-child(odd) {
              flex-direction: column-reverse;
            }
          }
        }
      }
    }
    .recommand {
      .recommand-title {
        margin: 50px;
        text-align: center;
        font-size:30px;
        font-weight: 700;
        img {
          margin: 0 20px;
        }
      }
      .recommand-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .recommand-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
          width: 18%; 
          background-color: #fff;
          padding: 20px 15px;
          margin: 5px 0 ;
          img {
            width: 80%;
          }
          .name {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow : hidden;
            color: #666;
            font-size: 14px;
            line-height: 20px;
            margin-top: 30px;
            margin-bottom: 5px;
            /deep/.p-tag {
              color: #fff;
            }
          }
          .price {
            width: 100%;
            color: #e1251b;
            font-size: 12px;
            .l {
              font-weight: 700;
              font-size: 16px;
            }
          }
          .item-mask {
            display: none;
            position: absolute;
            top: -2px;
            width: 100%;
            height: 100%;
            background-color: rgba(255,255,255,0.3);
            cursor: pointer;
          }
          &:hover {
            .item-mask {
              display: block;
            }
          }
        }
      }
      .loading {
        width: 500px;
        padding: 30px 0;
        margin: 0 auto;
        font-size: 30px;
        text-align: center;
        color: #666;
      }
    }
  }
</style>