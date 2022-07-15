<template>
  <div>
    <HeaderO></HeaderO>
    <HeaderSearch></HeaderSearch>
    <HeaderList></HeaderList>
    <div class="detail">
      <div class="detail-container container">
        <div class="preview" ref="preview">
          <div class="swiper" @mousemove="moveMask" @mouseleave="maskPosition.display='none'">
            <div class="swiper-wrapper" ref="swiper">
              <div class="swiper-slide" v-for="(item, index) of goodsData" :key="index">
                <img :src="item.img" ref="previewImg">
              </div>
            </div>
            <div class="yellow-mask" ref="mask" :style="maskPosition"></div>
          </div>
          <div class="thumbs">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, index) of goodsData" :key="index">
                <img :src="item.img" :style="{'border-color': realIndex===index ?'#999':'#fff'}">
              </div>
            </div>
            <div class="swiper-button-prev swiper-button"></div>
            <div class="swiper-button-next swiper-button"></div>
          </div>
          <div class="magnifier" v-if="swiper" :style="{'display': maskPosition.display}">
            <img :src="goodsData[swiper.activeIndex].img" :style="magnifierPosition">
          </div>
        </div>
        <div class="good-info">
         <div class="good-name" v-html="goodsName"></div>
          <div class="good-price">惊喜价 <span class="price">¥<span class="price-number">{{goodsPrice}}</span></span></div>
          <div class="service">
            <div class="service-title">选 择 类 别</div>
            <div class="service-item" v-for="(item, index) of goodsItem" 
            :key="index" :for="item" @click="showingItemIndex=index" :style="showingItemIndex===index ? active : ''">{{item}}</div>
          </div>
          <div class="service">
            <div class="service-title">增 值 保 障</div>
            <label class="service-item" for="7d" :style="service.includes('7d')?active:''">7天试用换新</label>
            <input type="checkbox" id="7d" v-model="service" value="7d" style="display:none">
            <label class="service-item" for="2y" :style="service.includes('2y')?active:''">2年过期换新</label>
            <input type="checkbox" id="2y" v-model="service" value="2y" style="display:none">
          </div>
          <div class="service">
            <div class="service-title">商 城 服 务</div>
            <label class="service-item" for="3y" :style="service.includes('3y')?active:''">3年过期换新</label>
            <input type="checkbox" id="3y" v-model="service" value="3y" style="display:none">
          </div>
          <div class="service">
            <div class="service-title">欠 条 分 期</div>
            <div class="service-item" @click="staging=0" :style="staging===0 ? active:''">不分期</div>
            <div class="service-item" v-for="(p, index) of 4" :key="index" 
            @click="staging=(index+1)" :style="staging===(index+1) ? active:''">
              ¥{{(goodsPrice/(3*2**index)).toFixed(2)}} x {{3*2**index}}期
            </div>
          </div>
          <div class="add">
            <input type="number" class="add-input" v-model="number">
            <div class="button" @click="number+=1">+</div>
            <div class="button" @click="number-=1">-</div>
            <button class="submit-button" @click="submit">加入购物车</button>
          </div> 
        </div>
      </div>
    </div>
    <CommonFooter></CommonFooter>
  </div>
</template>

<script>
  import Swiper from "swiper"
  import {detail, addToShopCart} from "@/api"
  export default {
    name: "DetailPage",
    props: ['targetName'],
    data(){
      return {
        previewIndex: 0,
        infoIndex: 0,
        goodsData: [],
        swiper: null,
        maskPosition: {display:"none", top: "", left: ""},
        showingItemIndex: 0,
        active: {borderColor: "#df3033"},
        service: [],
        staging: 0,
        number: 1
      }
    },
    computed: {
      magnifierPosition(){
        let {top, left} = this.maskPosition
        return {top: -1.5*parseFloat(top)+'px', left: -1.5*parseFloat(left)+"px"}
      },
      realIndex(){
        return this.swiper ? this.swiper.realIndex : 0
      },
      goodsName(){
        let name = this.goodsData[0] ? this.goodsData[0].name : ""
        return name
      },
      goodsPrice(){
        let price = this.goodsData[0] ? this.goodsData[this.showingItemIndex].price.toFixed(2) : ""
        return price
      },
      goodsItem(){
        let item = this.goodsData[0] ? this.goodsData.map(i => i.item) : []
        return item
      },
      submitForm(){
        return {
          id: this.goodsData[this.showingItemIndex].id,
          number: this.number,
          service: this.service,
          staging: this.staging,
        }
      }
    },
    methods: {
      moveMask(event){
        this.maskPosition.display = "block"
        let currentX = event.pageX - this.$refs.preview.offsetLeft - this.$refs.mask.offsetWidth / 2
        let currentY = event.pageY - this.$refs.preview.offsetTop - this.$refs.mask.offsetHeight / 2
        let maxX = this.$refs.swiper.offsetWidth - this.$refs.mask.offsetWidth
        let maxY = this.$refs.swiper.offsetHeight - this.$refs.mask.offsetHeight
        if (currentX > maxX) currentX = maxX
        else if (currentX < 0) currentX = 0
        if (currentY > maxY) currentY = maxY
        else if (currentY < 0) currentY = 0
        this.maskPosition.left = currentX + "px"
        this.maskPosition.top = currentY + "px"
      },
      submit(){
        if (this.$store.state.account === "") this.$router.push({name: "login"})
        else addToShopCart(this.submitForm).then(response=>{
          if (response.data.code !== 200) return Promise.reject(response.data.message)
          else this.$router.push({name: "shopCart"})
        }).catch(err=>alert(err))
      },
      getDetail(){
        detail(this.targetName).then(response=>{
          if (response.data.code !== 200) return Promise.reject(response.data.message)
          this.goodsData = response.data.data
        }).catch(()=>setTimeout(()=>{
          this.getDetail()
        }, 3000))
      }
    },
    watch: {
      number(newVal){
        if (newVal <= 0) this.number = 1
      },
      goodsData(){
        this.$nextTick(()=>{
          const swiperConfig = {
            direction: "horizontal",
            speed: 1000,
          }
          let thumbsSwiper = new Swiper(".thumbs", {
            ...swiperConfig,
            slidesPerView: 3,
            spaceBetween: 10,
            watchSlidesVisibility: true,
          })
          this.swiper = new Swiper(".swiper", {
            ...swiperConfig,
            speed: 1,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            thumbs: {
              swiper: thumbsSwiper
            }
          })
        })
      }
    },
    mounted(){
      this.getDetail()
    }
  }
</script>

<style lang="less" scoped>
  .detail-container {
    display: flex;
    box-sizing: border-box;
    padding: 20px 20px;
    .preview {
      position: relative;
      width: 360px;
      .swiper {
        position: relative;
        overflow: hidden;
        width: 360px;
        height: 360px;
        border: 2px solid #ccc;
        img {
          width: 100%;
          height: 100%;
          vertical-align: bottom;
        }
        .yellow-mask {
         position: absolute;
         top: 0px;
         left: 0px;
         width: 270px;
         height: 270px;
         background-color: rgba(255, 231, 49, 0.4);
         z-index: 10;
         cursor: move;
        }
      }
      .thumbs {
        box-sizing: border-box;
        width: 270px;
        height: 80px;;
        overflow:hidden;
        margin: 15px auto;
        .swiper-wrapper{
          .swiper-slide{
            img {
              box-sizing: border-box;
              height: 100%;
              border: 2px solid;
              vertical-align: bottom;
              cursor: pointer;
            }
          }
        }
        .swiper-button {
          top: 420px;
          color: #999;
        }
      }
      .magnifier {
        position: absolute;
        top: 0;
        left: 361px;
        width: 450px;
        height: 450px;
        border: 2px solid #ccc;
        overflow: hidden;
        img {
          position: absolute;
          width: 600px;
          height: 600px;
        }
      }
    }
    .good-info {
      margin: 10px 25px;
      width: 800px;
      .good-name {
        color: #666;
        font-size: 18px;
        line-height: 25px;
        font-weight: 700;
        :deep(.p-tag) {
          color: #fff;
          font-size: 16px;
          padding: 0 5px;
        }
      }
      .good-price {
        background-color: #f1f2f3;
        height: 35px;
        line-height: 35px;
        color: #666;
        margin: 10px 0;
        padding: 5px 10px;
        .price {
          display: inline-block;
          color: #e4393c;
          font-size: 16px;
          vertical-align: top;
          margin-left: 15px;
          .price-number {
            font-size: 25px;
            margin-left: 5px;
          }
        }
      }
      .service {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 15px;
        .service-title {
          color: #666;
          font-size: 14px;
          line-height: 30px;
          padding: 0 5px;
        }
        .service-item {
          height: 25px;
          color: #444;
          font-size: 14px;
          line-height: 25px;
          border: 1px solid #999;
          padding: 0 10px;
          margin: 0 5px;
          cursor: pointer;
        }
      }
      .add {
        display: flex;
        flex-flow: column wrap;
        align-content: flex-start;
        height: 50px;
        padding-top: 15px;
        border-top: 1px solid #ccc;
        .add-input {
          width: 40px;
          height: 50px;
          border-radius: 0;
          outline: none;
          color: #666;
          border: 1px solid #ccc;
          text-align: center;
        }
        .button {
          box-sizing: border-box;
          height: 25px;
          width: 20px;
          text-align: center;
          border-top: 1px solid #ccc;
          border-right: 1px solid #ccc;
          background-color: #f1f1f1;
          cursor: pointer;
          &:nth-child(3) {
            border-bottom: 1px solid #ccc;
          }
        }
        .submit-button {
          width: 140px;
          height: 50px;
          border: none;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          background-color: #df3033;
          margin-left: 10px;
          cursor: pointer;
        }
      }
    }
  }
</style>