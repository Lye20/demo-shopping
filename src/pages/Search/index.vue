<template>
  <div>
    <HeaderO></HeaderO>
    <HeaderSearch></HeaderSearch>
    <HeaderList></HeaderList>
    <div class="search container">
        <div class="tagBar">
          <div class="clear-tag" @click="$router.push({name: 'search'})">全部结果</div>
          <div class="tag-item" v-if="searchParams.category">
            <div class="rightArror"></div>
            <div class="tag" @click="$route.params.category=undefined">
              类别:{{{"book": "图书", phone: "手机", computer: "电脑"}[searchParams.category]}}
              <span class="remove-tag" @click="$router.push({name: 'search', query: $route.query})">x</span></div>
          </div>
          <div class="tag-item" v-if="searchParams.keyword">
            <div class="rightArror"></div>
            <div class="tag">
              关键词:{{searchParams.keyword}}
              <span class="remove-tag" @click="$router.push({name: 'search', params: $route.params})">x</span>
          </div>
          </div>
        </div>
        <div class="goods-tool">
          <div class="order">
            <div :style="this.searchParams.priceOrder ? activeStyle : null" @click="priceOrderToken+=1">
              价格<span class="iconfont" :class="priceOrderToken%3 === 2 ? 'icon-jiantoushang': 'icon-jiantouxia'"></span>
            </div>
          </div>
          <div class="page-size">
            <div @click="pageSize=10" :style="pageSize===10?activeStyle:null">10</div>
            <div @click="pageSize=20" :style="pageSize===20?activeStyle:null">20</div>
            <div @click="pageSize=40" :style="pageSize===40?activeStyle:null">40</div>
          </div>
        </div>
        <div class="goods-list" @click="goTo">
          <div class="goods-item" v-for="(item, index) of goodsList" :key="index">
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
        <CommonPagination :currentPage="currentPage" :maxPage="maxPage" @changePage="changePage" v-if="maxPage>1"></CommonPagination>
    </div>
    <CommonFooter></CommonFooter>
  </div>
</template>

<script>
  import {search} from "@/api"
  export default {
    name: "SearchPage",
    data(){
      return {
        maxPage: 1,
        goodsList: {},
        pageSize:20,
        currentPage: 1,
        priceOrderToken: 0, 
        activeStyle: {
          "color": "#fff",
          "border": "none",
          "backgroundColor": "#e1251b",
        },
      }
    },
    computed: {
      searchParams(){
        return {
          category: this.$route.params.category,
          keyword: this.$route.query.keyword,
          pageSize: this.pageSize,
          currentPage: this.currentPage,
          priceOrder: ["", "DESC", "ASC"][this.priceOrderToken%3],
        }
      }
    },
    watch: {
      searchParams: {
        deep: true,
        immediate: true,
        handler(val){
          search(val).then(response=>{
            if (response.data.code !== 200) return Promise.reject(response.data.message)
            this.goodsList = response.data.data.results
            this.maxPage = response.data.data.maxPage
            if (this.maxPage < this.currentPage) this.currentPage = this.maxPage || 1
          }).catch(err=>alert(err))
        }
      }
    },
    methods: {
      goTo(event) {
        if (event.target.attributes.goToTarget) {
          const goToTarget = event.target.attributes.goToTarget.value
          const targetName = event.target.attributes.name.value
          this.$router.push({
            name: goToTarget,
            query: {name: targetName}
          })
        }
      },
      changePage(page){
        scrollTo(0, 0)
        this.currentPage = page
      }
    }
  }
</script>

<style lang="less" scoped>
  .search {
    .tagBar {
      display: flex;
      align-items: center;
      height: 30px;
      margin-top: 15px;
      .clear-tag {
        margin-left: 5px;
        cursor: pointer;
        color: #666;
        &:hover {
          color: #f30213;     
        }
      }
      .tag-item {
        display: flex;
        .tag {
          background-color: #fff;
          border: 1px solid #ccc;
          height: 20px;
          color: #666;
          line-height: 20px;
          padding: 0 10px;
          margin-left: 10px;
          .remove-tag {
            margin-left: 5px;
            color: #999;
            line-height: 18px;
            vertical-align: top;
            cursor: pointer;
            &:hover {
              color: #f30213;
            }
          }
        }
      }
    }
    .goods-tool {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 30px;
      background-color: #F1F1F1;
      border: 1px solid #999;
      margin-top: 10px;
      .order {
        margin-left: 10px;
        div {
          box-sizing: border-box;
          height: 25px;
          width: 60px;
          font-size: 14px;
          line-height: 22px;
          padding-left: 8px;
          background-color: #fff;
          border: 1px solid #666;
          cursor: pointer;
          user-select: none;
          span {
            font-size: 5px;
            margin-left: 5px;
          }
        }
      }
      .page-size {
        display: flex;
        height: 25px;
        margin-right: 10px;
        div {
          box-sizing: border-box;
          background-color: #fff;
          width: 25px;
          font-size: 14px;
          line-height: 23px;
          text-align: center;
          border: 1px solid #999;
          margin: 0 3px;
          cursor: pointer;
        }
      }
    }
    .goods-list {
      display: flex;
      flex-wrap: wrap;
      .goods-item {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        width: 20%; 
        background-color: #fff;
        padding: 20px 30px;
        margin: 5px 0 ;
        &:hover {
          .item-mask {
            display: block;
            z-index: 5;
          }
        }
        img {
          width: 100%;
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
          background-color: transparent;
          box-shadow: 0 0 5px #ccc;
          cursor: pointer;
        }
      }
    }
  }
</style>