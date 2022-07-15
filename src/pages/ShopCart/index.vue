<template>
  <div>
    <HeaderO></HeaderO>
    <HeaderSearch></HeaderSearch>
    <HeaderList></HeaderList>
    <div class="shopcart">
      <div class="shopcart-container container">
        <div class="shopcart-table">
          <div class="s-title">全部商品{{shopCart.length}}</div>
          <div class="shopcart-title">
            <input type="checkbox" v-model="selectAll" id="selectAll"><label for="selectAll"> 全选</label>
            <span>商品</span>
            <span>类别</span>
            <span>单价</span>
            <span>服务</span>
            <span>数量</span>
            <span>小计</span>
            <span>操作</span>
          </div>
          <div class="shopcart-item" v-for="(item, index) of shopCart" :key="index">
            <input type="checkbox" v-model="selectItem" :value="item">
            <div class="preview"><img :src="item.img" @click="$router.push({name: 'detail', query: {name:item.name}})"></div>
            <div class="name" v-html="item.name" @click="$router.push({name: 'detail', query: {name:item.name}})"></div>
            <div class="item" v-html="item.item"></div>
            <div class="price">¥{{item.price.toFixed(2)}}</div>
            <div class="service">
              <div class="service-item" v-for="(s, index) of item.service" :key="index">
                {{{"7d": "七天试用换新", "2y": "两年过期换新", "3y": "三年过期换新"}[s]}}
              </div>
            </div>
            <div class="number">
              <button class="reduce" @click="reduceNum(item.id)">-</button>
              <input type="number" v-model.lazy="item.number">
              <button class="add" @click="item.number+=1">+</button>
            </div>
            <div class="sub-total">¥{{(item.price * item.number).toFixed(2)}}</div>
            <div class="delete" @click="deleteGood(item.id)">删除</div>
          </div>
          
          <div class="footer">
            <div class="clearSelected" @click="delSelected">删除选中商品</div>
            <div class="submit-bar">            
              <div class="selected">已选择<span>{{selectItem.length}}</span>件商品</div>
              <div class="total">总价:<span>¥{{total}}</span></div>
              <button class="submit">去结算</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CommonFooter></CommonFooter>
  </div>
</template>

<script>
  import {requestShopCart, updateShopCart} from "@/api"
  export default {
    name: "ShopCart",
    data(){
      return {
        shopCart: [],
        selectItem: [],
        unwatch: [],
        selectAll: false
      }
    },
    computed: {
      total(){
        return this.selectItem.reduce((sum, item)=>sum+item.price*item.number, 0).toFixed(2)
      },
    },
    watch: {
      selectAll(val){
        if (val) this.selectItem = this.shopCart
        else if (this.selectItem.length === this.shopCart.length) this.selectItem = []
      },
      selectItem(val){
        if (val.length !== this.shopCart.length || !val.length) this.selectAll = false
        else this.selectAll = true
      },
    },
    methods: {
      deleteGood(id){
        this.shopCart = this.shopCart.filter(good=>good.id !== id)
        this.selectItem = this.selectItem.filter(good=>good.id !== id)
      },
      delSelected(){
        this.selectItem.forEach(item=>{
          this.shopCart = this.shopCart.filter(good=>good.id !== item.id)
          this.selectItem = this.selectItem.filter(good=>good.id !== item.id)
        })
      },
      reduceNum(id) {
        this.shopCart.forEach(item=>{
          if (item.id === id) {
            if (item.number <= 1) return
            else item.number -= 1
          }
        })
      },
      getShopCart(){
        requestShopCart().then(response=>{
          if (response.data.code !== 200) return Promise.reject(response.data.message)
          this.shopCart = response.data.data
          this.$watch('shopCart', {
            deep: true,
            handler(val) {
              updateShopCart(val).catch(()=>{})
            } 
          })
        }).catch(()=>setTimeout(()=>{
          this.getShopCart()
        }, 3000))
      }
    },
    mounted(){
      this.getShopCart()
    }
  }
</script>

<style lang="less" scoped>
  .shopcart-table {
    margin: 20px;
    .s-title {
      color: #e2231a;
      font-size: 16px;
      font-weight: 700;
      line-height: 28px;
      margin-bottom: 10px;
    }
    .shopcart-title {
      height: 40px;
      line-height: 40px;
      color: #555;
      background-color: #f1f2f3;
      margin-bottom: 20px;
      padding: 0 20px;
      span:nth-child(3) {margin-left: 110px;}
      span:nth-child(4) {margin-left: 346px;}
      span:nth-child(5) {margin-left: 77px;}
      span:nth-child(6) {margin-left: 130px;}
      span:nth-child(7) {margin-left: 155px;}
      span:nth-child(8) {margin-left: 130px;}
      span:nth-child(9) {margin-left: 70px;}
    }
    .shopcart-item {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #333;
      text-align: center;
      border-top: 1px solid #ccc;
      padding: 15px 20px;
      background-color: #fff4e8;
      .preview {
        margin-left: 10px;
        img {
          width: 100px;
          height: 100px;
          vertical-align: bottom;
          margin-left: 10px;
          cursor: pointer;
        }
      }
      .name {
        width: 300px;
        font-size: 14px;
        line-height: 20px;
        margin-left: 30px;
        margin-right: 50px;
        text-align: justify;
        cursor: pointer;
        ::v-deep .p-tag {
          color: #fff;
        }
        &:hover {
          color: #e2231a;
        }
      }
      .item {
        width: 80px;
        margin-right: 10px;
      }
      .price {
        width: 120px;
      }
      .service {
        width: 120px;
        margin-left: 50px;
        .service-item {
          text-align: left;
          margin: 15px;
        }
      }
      .number {
        width: 200px;
        margin-left: 20px;
        input {
          width: 45px;
          text-align: center;
          padding: 0;
          border: none;
          border-top: 1px solid #999;
          border-bottom: 1px solid #999;
          outline: none;
        }
        button {
          border: 1px solid #999;
          cursor: pointer;
        }
        input,button {
          box-sizing: border-box;
          height: 30px;
          border-radius: 0;
          vertical-align: top;
        }
      }
      .sub-total {
        width: 120px;
        margin-right: 30px;
        font-weight: 700;
      }
      .delete {
        cursor: pointer;
        &:hover {
          color: #e2231a;
        }
      }
    }
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #666;
      font-size: 14px;
      margin-top: 20px;
      .clearSelected:hover {
        color: #e2231a;
        cursor: pointer;
      }
      .submit-bar {
        display: flex;
        align-items: center;
        span {
          color: #e2231a;
        }
        .selected {
          line-height: 52px;
          span {
            margin: 0 5px;
          }
        }
        .total {
          margin-left: 20px;
          line-height: 52px;
          span {
            font-size: 18px;
            font-weight: 700;
            margin-left: 5px;
          }
        }
        .submit {
          width: 94px;
          height: 52px;
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          background-color: #e2231a;
          border: none;
          margin-left: 20px;
          cursor: pointer;
        }
      }
    }
  }
</style>