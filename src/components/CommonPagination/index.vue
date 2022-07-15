<template>
  <div class="pagination">
   <div class="prev button" @click="jumpPage(currentPage-1)">上一页</div>
    <div class="button" v-if="pageRange[0]>1" @click="jumpPage(1)">1</div>
    <div v-if="pageRange[0]>2">...</div>
    <div class="button" v-for="(i, index) of (pageRange[1]-pageRange[0]+1)" 
      :key="index" @click="jumpPage(index+pageRange[0])" 
      :style="index+pageRange[0] === currentPage ? currentPageStyle : null">
      {{index+pageRange[0]}}
    </div>
    <div v-if="pageRange[1]<maxPage-1">...</div>
    <div class="button" v-if="pageRange[1]<maxPage" @click="jumpPage(maxPage)">{{maxPage}}</div>
    <div class="next button" @click="jumpPage(currentPage+1)">下一页</div>
    <div class="info">共<span>{{maxPage}}</span>页</div>
    <div class="jump">到第<input type="text" v-model.number="jumpTarget" @input="numberHandler">页</div>
    <div class="confirm button" @click="jumpPage(jumpTarget)">确定</div>
  </div>
</template>

<script>
  export default {
    name: "CommonPagination",
    props: {currentPage: Number, maxPage: Number},
    data(){
      return {
        jumpTarget: "",
        currentPageStyle: {
          "backgroundColor": "#c33b20",
          "border": "none",
          "color": "#fff",
          "box-shadow": "0 0 2px #666"
        }
      }
    },
    computed: {
      pageRange(){
        let startPage, endPage
        startPage = this.currentPage - 2
        endPage = this.currentPage + 2
        if (startPage < 1) {
          let dif = 1 - startPage
          startPage = 1
          if (endPage < this.maxPage) {
            let newEndPage = endPage + dif
            endPage = (newEndPage>this.maxPage) ? this.maxPage : newEndPage
          }
        }
        if (endPage > this.maxPage) {
          let dif = endPage - this.maxPage
          endPage = this.maxPage
          if (startPage > 1) {
            let newStartPage = startPage - dif
            startPage = (newStartPage<1) ? 1 : newStartPage
          }
        }
        return [startPage, endPage]
      }
    },
    methods: {
      numberHandler({target: {value}}){
        if (value) {
          value = value.replace(/\D/g, "")
          if (value < 1) value = 1
          else if (value > this.maxPage) value = this.maxPage
          event.target.value = value
          this.jumpTarget = value
        }
      },
      jumpPage(page){
        if (page < 1) page = 1
        else if (page>this.maxPage) page=this.maxPage
        this.$emit("changePage", page*1)
      }
    }
  }
  
</script>

<style lang="less" scoped>
  .pagination {
    display: flex;
    justify-content: center;
    width: 900px;
    margin: 10px auto;
    div {
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
    }
    .button {
      box-sizing: border-box;
      margin: 0 5px;
      border: 1px solid #999;
      cursor: pointer;
      background-color: #f7f7f8;
      user-select: none;
    }
    .jump {
      input {
        width: 25px;
        height: 25px;
        text-align: center;
        margin: 0 5px;
        outline: none;
      }
    }
  }
</style>