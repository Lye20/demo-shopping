<template>
  <div class="footer">
    <div class="mod-copyright container">
      <ul class="link">
        <li>关于我们</li><div class="spacer"></div>
        <li>联系我们</li><div class="spacer"></div>
        <li>联系客服</li><div class="spacer"></div>
        <li>合作招商</li><div class="spacer"></div>
        <li>商家帮助</li><div class="spacer"></div>
        <li>营销中心</li><div class="spacer"></div>
        <li>手机商城</li><div class="spacer"></div>
        <li>友情链接</li><div class="spacer"></div>
        <li>销售联盟</li><div class="spacer"></div>
        <li>风险检测</li><div class="spacer"></div>
        <li>隐私政策</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommonFooter"
  }
</script>

<style lang="less" scoped>
  .footer {
    @mainColor: #c81623;
    .mod-copyright {
      .link {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        border-top: 1px solid #d1d2d3;
        color: #d1d2d3;
        font-size: 12px;
        li {
          color: #999;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
        .spacer {
          margin: 0 20px;
        }
      }
    }
  }
</style>