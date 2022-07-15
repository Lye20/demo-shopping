<template>
  <div class="footer">
    <div class="mod-service-unit">
      <div class="container">
        <div><img src="@/assets/img/footer/duo.png"><span>品类齐全，轻松购物</span></div>
        <div><img src="@/assets/img/footer/kuai.png"><span>多仓直发，急速配送</span></div>
        <div><img src="@/assets/img/footer/hao.png"><span>正品行货，精致服务</span></div>
        <div><img src="@/assets/img/footer/shen.png"><span>天天低价，畅选无忧</span></div>
      </div>
    </div>
    <div class="mod-help container">
      <dl>
        <dt>购物指南</dt>
        <dd>购物流程</dd>
        <dd>会员介绍</dd>
        <dd>生活旅行</dd>
        <dd>常见问题</dd>
        <dd>大家电</dd>
      </dl>
      <dl>
        <dt>配送方式</dt>
        <dd>上门自提</dd>
        <dd>211限时达</dd>
        <dd>配送服务查询</dd>
        <dd>配送费收取标准</dd>
        <dd>海外配送</dd>
      </dl>
      <dl>
        <dt>支付方式</dt>
        <dd>货到付款</dd>
        <dd>在线支付</dd>
        <dd>分期付款</dd>
        <dd>公司转账</dd>
        <dd>免费领取</dd>
      </dl>
      <dl>
        <dt>售后服务</dt>
        <dd>售后政策</dd>
        <dd>价格保护</dd>
        <dd>退款说明</dd>
        <dd>返修/退货单</dd>
        <dd>取消订单</dd>
      </dl>
      <dl>
        <dt>特色服务</dt>
        <dd>夺宝岛</dd>
        <dd>DIY装机</dd>
        <dd>延保服务</dd>
        <dd>通信</dd>
        <dd>智能</dd>
      </dl>
    </div>
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
      <div class="info">
        <ul>
          <li>京网公安备 11999992999999988号</li><div class="spacer"></div>
          <li>京CPI备11888888号</li><div class="spacer"></div>
          <li>CIP</li><div class="spacer"></div>
          <li>互联网品药信息资格服务证号编(京)-经营性-0008-9999</li><div class="spacer"></div>
          <li>新出发零京-大第字721110号</li>
        </ul>
        <ul>
          <li>护粮网出办可许正编号新出网证(经)字520号</li><div class="spacer"></div>
          <li>初版五经营许可证</li><div class="spacer"></div>
          <li>网络经营文化可许正京网文[2222]6888-1111号</li><div class="spacer"></div>
          <li>违法和不良信息举报电话: 4006561155</li>
        </ul>
        <ul>
          <li>Rightcopy @ 4002 - 2202 东京DE.com全版有所</li><div class="spacer"></div>
          <li>消费者维权热线: 4006067733</li><div class="spacer"></div>
          <li>征兆经营</li><div class="spacer"></div>
          <li>(经)王城平台被子(2018)第30000号</li><div class="spacer"></div>
          <li>执照营业</li><div class="spacer"></div>
          <li>增值新店也五经营可许正</li>
        </ul>
      </div>
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
    background: #f1f2f3;
    .mod-service-unit {
      border-bottom: 1px solid #ddd;
      .container {
        display: flex;
        justify-content: space-around;
        height: 42px;
        padding: 30px 0;
        line-height: 42px;
        color: #333;
        font-size: 18px;
        font-weight: 700;
        img {
          vertical-align: bottom;
          margin: 0 20px;
        }
      }
    }
    .mod-help {
      display: flex;
      justify-content: space-around;
      height: 120px;
      padding: 20px 0;
      border-bottom: 1px solid #ddd;
      dt {
        color: #333;
        font-size: 14px;
        font-weight: 700;
      }
      dd {
        color: #666;
        font-size: 12px;
        margin: 8px 0px;
        cursor: pointer;
        &:hover {
          color: @mainColor;
        }
      }
    }
    .mod-copyright {
      height: 130px;
      li {
        cursor: pointer;
        &:hover {
          color: @mainColor;
        }
      }
      .link {
        display: flex;
        justify-content: center;
        color: #666;
        font-size: 12px;
        margin-top: 20px;
        .spacer {
          margin: 0 20px;
        }
      }
      .info {
        color: #999;
        font-size: 12px;
        margin-top: 15px;
        .spacer {
          margin: 0 10px;
        }
        ul {
          display: flex;
          justify-content: center;
          margin-top: 5px;
        }
      }
    }
  }
</style>