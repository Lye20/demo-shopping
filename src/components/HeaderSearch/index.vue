<template>
  <div class="header-search container" @click="goTo">
    <div class="trade-mark" goToTarget="home">DEMO</div>
    <div class="search">
      <div class="search-form">
        <input class="search-input" type="text" :placeholder=initKeyword v-model="keyword" @keydown.enter="search" @focus="clearPlaceHolder">
        <button class="search-button iconfont icon-search" @click="search"></button>
      </div>
      <div class="hot-words">
        <div class="ttbar focusWord" goToTarget="search" category="computer">笔记本电脑</div>
        <div class="spacer"></div><div class="ttbar" goToTarget="search" category="phone">家具焕新</div>
        <div class="spacer"></div><div class="ttbar" goToTarget="search" category="book">绿色建材</div>
        <div class="spacer"></div><div class="ttbar" goToTarget="search" category="computer">新风空调</div>
        <div class="spacer"></div><div class="ttbar" goToTarget="search" category="phone">冰洗好物</div>
        <div class="spacer"></div><div class="ttbar" goToTarget="search" category="book">清洁纸品</div>
        <div class="spacer"></div><div class="ttbar" goToTarget="search" category="computer">厨房生活</div>
        <div class="spacer"></div><div class="ttbar" goToTarget="search" category="book">清洁纸品</div>
        <div class="spacer"></div><div class="ttbar" goToTarget="search" category="phone">电竞必备</div>
        <div class="spacer"></div><div class="ttbar" goToTarget="search" category="computer">运营商</div>
      </div>
      <div class="shop-cart" goToTarget="shopCart">
        <span class="iconfont icon-cart-full" goToTarget="shopCart"></span>我的购物车
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderSearch",
    data(){
      return {
        keyword: "",
        initKeyword: ["小米","联想","华为","戴尔","书"][Math.floor(Math.random()*5)]
      }
    },
    methods: {
      goTo(event){
        let query = {}
        let params = {}
        if (event.target.attributes.goToTarget) {
          query.keyword = event.target.attributes.keyword ? event.target.attributes.keyword.value : undefined
          params.category = event.target.attributes.category ? event.target.attributes.category.value : undefined
          this.$router.push({
            name: event.target.attributes.goToTarget.value,
            query,
            params
          })
        }
      },
      clearPlaceHolder(){
        this.initKeyword = ""
      },
      search() {
        this.$router.push({
          name: "search",
          query: {keyword: this.keyword || this.initKeyword || undefined},
          params: {category: this.$route.params.category}
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .header-search {
    @mainColor: #f30213;
    @mainBorderColor: #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    .trade-mark {
      height: 50px;
      font-size:50px;
      color: @mainColor;
      cursor: pointer;
    }
    .search {
      display: flex;
      flex-flow: column wrap;
      align-content: flex-start;
      width: 1000px;
      height: 71px;
      .search-form {
        width: 720px;
        height: 36px;
        margin-bottom: 5px;
        .search-input {
          box-sizing: border-box;
          width: 630px;
          height: 36px;
          border: 3px solid @mainColor; 
          padding-left: 10px;
          outline: none;
        }
        .search-button {
          width: 60px;
          height: 36px;
          border: none;
          color: #fff;
          font-size: 30px;
          vertical-align: bottom;
          background-color: @mainColor;
          cursor: pointer;
        }
      }
      .hot-words {
        display: flex;
        align-items: center;
        width: 706px;
        height: 30px;
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
      .shop-cart {
        box-sizing: border-box;
        width: 140px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        color: @mainColor;
        font-size: 14px;
        border: 1px solid @mainBorderColor;
        background-color: #fff;
        cursor: pointer;
        .iconfont {
          font-size: 25px;
          padding-right: 7px;
        }
      }
    }
  }
</style>