<template>
  <div class="header-list clearfix">
    <div class="container">
      <div class="all-category" @mouseover="categoryId=0" @mouseleave="categoryId=initCategoryId">全部商品分类</div>
      <div class="category">时尚</div>
      <div class="category">美妆馆</div>
      <div class="category">超市</div>
      <div class="category">生鲜</div>
      <div class="category">闪购</div>
      <div class="category">拍卖</div>
      <div class="category">金融</div>
      <div class="dropdown-list" :style='{"display": categoryId!==-1? "block" : "none"}' categoryId="0" 
      @mouseover="changeCategoryId" @mouseleave="categoryId=initCategoryId" @click="goTo">
        <ul class="category-list-1">
          <li categoryId="1"><span>手机</span>/<span>运营商</span>/<span>数码</span></li>
          <li categoryId="2"><span>电脑</span>/<span>办公</span></li> 
          <li categoryId="3"><span>图书</span>/<span>文娱</span>/<span>教育</span>/<span>电子书</span></li>
          <li categoryId="4"><span>家居</span>/<span>家具</span>/<span>家装</span></li>
          <li categoryId="5"><span>美妆</span>/<span>个护清洁</span>/<span>教育</span></li>
          <li categoryId="6"><span>图书</span>/<span>运动</span>/<span>户外</span>/<span>男鞋</span></li>
          <li categoryId="7"><span>食品</span>/<span>酒类</span>/<span>生鲜</span>/<span>特产</span></li>
          <li categoryId="8"><span>机票</span>/<span>酒店</span>/<span>旅游</span>/<span>生活</span></li>
          <li categoryId="9"><span>图书</span>/<span>文娱</span>/<span>教育</span>/<span>数码</span></li>
          <li categoryId="10"><span>办公</span>/<span>电脑</span>/<span>女鞋</span>/<span>运营商</span></li>
          <li categoryId="11"><span>食品</span>/<span>酒类</span>/<span>生鲜</span>/<span>特产</span></li>
          <li categoryId="12"><span>图书</span>/<span>文娱</span>/<span>教育</span>/<span>电子书</span></li>
          <li categoryId="13"><span>图书</span>/<span>文娱</span>/<span>教育</span>/<span>数码</span></li>
          <li categoryId="14"><span>电脑</span>/<span>办公</span></li>
          <li categoryId="15"><span>美妆</span>/<span>个护清洁</span>/<span>教育</span></li>
          <li categoryId="16"><span>食品</span>/<span>酒类</span>/<span>生鲜</span>/<span>特产</span></li>
          <li categoryId="17"><span>办公</span>/<span>电脑</span>/<span>女鞋</span>/<span>运营商</span></li>
          <li categoryId="18"><span>电脑</span>/<span>办公</span></li>
        </ul>
        <div class="sub-list sub-1" :style='{"display": categoryId===1? "block" : "none"}'>
          <ul class="category-list-2">
            <li>
              <span class="title rightArror">手机通讯</span>
              <div class="spacer"></div>
              <span>手机</span>
              <div class="spacer"></div>
              <span>游戏手机</span>
              <div class="spacer"></div>
              <span>5G手机</span>
              <div class="spacer"></div>
              <span>拍照手机</span>
              <div class="spacer"></div>
              <span>全面屏手机</span>
              <div class="spacer"></div>
              <span>对讲机</span>
              <div class="spacer"></div>
              <span>以旧换新</span>
              <div class="spacer"></div>
              <span>手机维修</span>
            </li>
            <li>
              <span class="title rightArror">运营商</span>
              <div class="spacer"></div>
              <span>合约机</span>
              <div class="spacer"></div>
              <span>手机卡</span>
              <div class="spacer"></div>
              <span>宽带</span>
              <div class="spacer"></div>
              <span>充话费/流量</span>
              <div class="spacer"></div>
              <span>中国电信</span>
              <div class="spacer"></div>
              <span>中国联通</span>
              <div class="spacer"></div>
              <span>中国移动</span>
              <div class="spacer"></div>
              <span>挑靓号</span>
            </li>
            <li>
              <span class="title rightArror">手机配件</span>
              <div class="spacer"></div>
              <span>手机壳</span>
              <div class="spacer"></div>
              <span>贴膜</span>
              <div class="spacer"></div>
              <span>手机存储卡</span>
              <div class="spacer"></div>
              <span>数据线</span>
              <div class="spacer"></div>
              <span>充电器</span>
              <div class="spacer"></div>
              <span>手机耳机</span>
              <div class="spacer"></div>
              <span>创意配件</span>
              <div class="spacer"></div>
              <span>手机饰品</span>
            </li>
            <li>
              <span class="title rightArror">摄影摄像</span>
              <div class="spacer"></div>
              <span>数码相机</span>
              <div class="spacer"></div>
              <span>微单相机</span>
              <div class="spacer"></div>
              <span>单反相机</span>
              <div class="spacer"></div>
              <span>拍立得</span>
              <div class="spacer"></div>
              <span>运动相机</span>
              <div class="spacer"></div>
              <span>摄像机</span>
              <div class="spacer"></div>
              <span>镜头</span>
              <div class="spacer"></div>
              <span>户外器材</span>
            </li>
            <li>
              <span class="title rightArror">数码配件</span>
              <div class="spacer"></div>
              <span>存储卡</span>
              <div class="spacer"></div>
              <span>三脚架/云台</span>
              <div class="spacer"></div>
              <span>相机包</span>
              <div class="spacer"></div>
              <span>滤镜</span>
              <div class="spacer"></div>
              <span>闪光灯/手柄</span>
              <div class="spacer"></div>
              <span>相机清洁/贴膜</span>
              <div class="spacer"></div>
              <span>机身附件</span>
              <div class="spacer"></div>
              <span>镜头附件</span>
            </li>
            <li>
              <span class="title rightArror">影音娱乐</span>
              <div class="spacer"></div>
              <span>耳机/耳麦</span>
              <div class="spacer"></div>
              <span>音箱/音响</span>
              <div class="spacer"></div>
              <span>智能音箱</span>
              <div class="spacer"></div>
              <span>收音机</span>
              <div class="spacer"></div>
              <span>麦克风</span>
              <div class="spacer"></div>
              <span>MP3/MP4</span>
              <div class="spacer"></div>
              <span>专业音频</span>
              <div class="spacer"></div>
              <span>音频线</span>
            </li>
            <li>
              <span class="title rightArror">智能设备</span>
              <div class="spacer"></div>
              <span>智能手表</span>
              <div class="spacer"></div>
              <span>智能手环</span>
              <div class="spacer"></div>
              <span>监控摄像</span>
              <div class="spacer"></div>
              <span>智能出行</span>
              <div class="spacer"></div>
              <span>智能眼镜</span>
              <div class="spacer"></div>
              <span>智能家居</span>
              <div class="spacer"></div>
              <span>健康检测</span>
              <div class="spacer"></div>
              <span>无人机</span>
            </li>
            <li>
              <span class="title rightArror">电子教育</span>
              <div class="spacer"></div>
              <span>学生平板</span>
              <div class="spacer"></div>
              <span>点读机</span>
              <div class="spacer"></div>
              <span>早教</span>
              <div class="spacer"></div>
              <span>录音笔</span>
              <div class="spacer"></div>
              <span>电子书</span>
              <div class="spacer"></div>
              <span>电子词典</span>
              <div class="spacer"></div>
              <span>复读机</span>
              <div class="spacer"></div>
              <span>翻译机</span>
            </li>
          </ul>
        </div>
        <div class="sub-list sub-2" :style='{"display": categoryId===2? "block" : "none"}'>
          <ul class="category-list-2">
            <li>
              <span class="title rightArror">手机通讯</span>
              <div class="spacer"></div>
              <span>手机</span>
              <div class="spacer"></div>
              <span>游戏手机</span>
              <div class="spacer"></div>
              <span>5G手机</span>
              <div class="spacer"></div>
              <span>拍照手机</span>
              <div class="spacer"></div>
              <span>全面屏手机</span>
              <div class="spacer"></div>
              <span>对讲机</span>
              <div class="spacer"></div>
              <span>以旧换新</span>
              <div class="spacer"></div>
              <span>手机维修</span>
            </li>
            <li>
              <span class="title rightArror">运营商</span>
              <div class="spacer"></div>
              <span>合约机</span>
              <div class="spacer"></div>
              <span>手机卡</span>
              <div class="spacer"></div>
              <span>宽带</span>
              <div class="spacer"></div>
              <span>充话费/流量</span>
              <div class="spacer"></div>
              <span>中国电信</span>
              <div class="spacer"></div>
              <span>中国联通</span>
              <div class="spacer"></div>
              <span>中国移动</span>
              <div class="spacer"></div>
              <span>挑靓号</span>
            </li>
            <li>
              <span class="title rightArror">手机配件</span>
              <div class="spacer"></div>
              <span>手机壳</span>
              <div class="spacer"></div>
              <span>贴膜</span>
              <div class="spacer"></div>
              <span>手机存储卡</span>
              <div class="spacer"></div>
              <span>数据线</span>
              <div class="spacer"></div>
              <span>充电器</span>
              <div class="spacer"></div>
              <span>手机耳机</span>
              <div class="spacer"></div>
              <span>创意配件</span>
              <div class="spacer"></div>
              <span>手机饰品</span>
            </li>
            <li>
              <span class="title rightArror">摄影摄像</span>
              <div class="spacer"></div>
              <span>数码相机</span>
              <div class="spacer"></div>
              <span>微单相机</span>
              <div class="spacer"></div>
              <span>单反相机</span>
              <div class="spacer"></div>
              <span>拍立得</span>
              <div class="spacer"></div>
              <span>运动相机</span>
              <div class="spacer"></div>
              <span>摄像机</span>
              <div class="spacer"></div>
              <span>镜头</span>
              <div class="spacer"></div>
              <span>户外器材</span>
            </li>
            <li>
              <span class="title rightArror">数码配件</span>
              <div class="spacer"></div>
              <span>存储卡</span>
              <div class="spacer"></div>
              <span>三脚架/云台</span>
              <div class="spacer"></div>
              <span>相机包</span>
              <div class="spacer"></div>
              <span>滤镜</span>
              <div class="spacer"></div>
              <span>闪光灯/手柄</span>
              <div class="spacer"></div>
              <span>相机清洁/贴膜</span>
              <div class="spacer"></div>
              <span>机身附件</span>
              <div class="spacer"></div>
              <span>镜头附件</span>
            </li>
            <li>
              <span class="title rightArror">影音娱乐</span>
              <div class="spacer"></div>
              <span>耳机/耳麦</span>
              <div class="spacer"></div>
              <span>音箱/音响</span>
              <div class="spacer"></div>
              <span>智能音箱</span>
              <div class="spacer"></div>
              <span>收音机</span>
              <div class="spacer"></div>
              <span>麦克风</span>
              <div class="spacer"></div>
              <span>MP3/MP4</span>
              <div class="spacer"></div>
              <span>专业音频</span>
              <div class="spacer"></div>
              <span>音频线</span>
            </li>
            <li>
              <span class="title rightArror">智能设备</span>
              <div class="spacer"></div>
              <span>智能手表</span>
              <div class="spacer"></div>
              <span>智能手环</span>
              <div class="spacer"></div>
              <span>监控摄像</span>
              <div class="spacer"></div>
              <span>智能出行</span>
              <div class="spacer"></div>
              <span>智能眼镜</span>
              <div class="spacer"></div>
              <span>智能家居</span>
              <div class="spacer"></div>
              <span>健康检测</span>
              <div class="spacer"></div>
              <span>无人机</span>
            </li>
            <li>
              <span class="title rightArror">电子教育</span>
              <div class="spacer"></div>
              <span>学生平板</span>
              <div class="spacer"></div>
              <span>点读机</span>
              <div class="spacer"></div>
              <span>早教</span>
              <div class="spacer"></div>
              <span>录音笔</span>
              <div class="spacer"></div>
              <span>电子书</span>
              <div class="spacer"></div>
              <span>电子词典</span>
              <div class="spacer"></div>
              <span>复读机</span>
              <div class="spacer"></div>
              <span>翻译机</span>
            </li>
          </ul>
        </div>
        <div class="sub-list sub-3" :style='{"display": categoryId===3? "block" : "none"}'>
          <ul class="category-list-2">
            <li>
              <span class="title rightArror">手机通讯</span>
              <div class="spacer"></div>
              <span>手机</span>
              <div class="spacer"></div>
              <span>游戏手机</span>
              <div class="spacer"></div>
              <span>5G手机</span>
              <div class="spacer"></div>
              <span>拍照手机</span>
              <div class="spacer"></div>
              <span>全面屏手机</span>
              <div class="spacer"></div>
              <span>对讲机</span>
              <div class="spacer"></div>
              <span>以旧换新</span>
              <div class="spacer"></div>
              <span>手机维修</span>
            </li>
            <li>
              <span class="title rightArror">运营商</span>
              <div class="spacer"></div>
              <span>合约机</span>
              <div class="spacer"></div>
              <span>手机卡</span>
              <div class="spacer"></div>
              <span>宽带</span>
              <div class="spacer"></div>
              <span>充话费/流量</span>
              <div class="spacer"></div>
              <span>中国电信</span>
              <div class="spacer"></div>
              <span>中国联通</span>
              <div class="spacer"></div>
              <span>中国移动</span>
              <div class="spacer"></div>
              <span>挑靓号</span>
            </li>
            <li>
              <span class="title rightArror">手机配件</span>
              <div class="spacer"></div>
              <span>手机壳</span>
              <div class="spacer"></div>
              <span>贴膜</span>
              <div class="spacer"></div>
              <span>手机存储卡</span>
              <div class="spacer"></div>
              <span>数据线</span>
              <div class="spacer"></div>
              <span>充电器</span>
              <div class="spacer"></div>
              <span>手机耳机</span>
              <div class="spacer"></div>
              <span>创意配件</span>
              <div class="spacer"></div>
              <span>手机饰品</span>
            </li>
            <li>
              <span class="title rightArror">摄影摄像</span>
              <div class="spacer"></div>
              <span>数码相机</span>
              <div class="spacer"></div>
              <span>微单相机</span>
              <div class="spacer"></div>
              <span>单反相机</span>
              <div class="spacer"></div>
              <span>拍立得</span>
              <div class="spacer"></div>
              <span>运动相机</span>
              <div class="spacer"></div>
              <span>摄像机</span>
              <div class="spacer"></div>
              <span>镜头</span>
              <div class="spacer"></div>
              <span>户外器材</span>
            </li>
            <li>
              <span class="title rightArror">数码配件</span>
              <div class="spacer"></div>
              <span>存储卡</span>
              <div class="spacer"></div>
              <span>三脚架/云台</span>
              <div class="spacer"></div>
              <span>相机包</span>
              <div class="spacer"></div>
              <span>滤镜</span>
              <div class="spacer"></div>
              <span>闪光灯/手柄</span>
              <div class="spacer"></div>
              <span>相机清洁/贴膜</span>
              <div class="spacer"></div>
              <span>机身附件</span>
              <div class="spacer"></div>
              <span>镜头附件</span>
            </li>
            <li>
              <span class="title rightArror">影音娱乐</span>
              <div class="spacer"></div>
              <span>耳机/耳麦</span>
              <div class="spacer"></div>
              <span>音箱/音响</span>
              <div class="spacer"></div>
              <span>智能音箱</span>
              <div class="spacer"></div>
              <span>收音机</span>
              <div class="spacer"></div>
              <span>麦克风</span>
              <div class="spacer"></div>
              <span>MP3/MP4</span>
              <div class="spacer"></div>
              <span>专业音频</span>
              <div class="spacer"></div>
              <span>音频线</span>
            </li>
            <li>
              <span class="title rightArror">智能设备</span>
              <div class="spacer"></div>
              <span>智能手表</span>
              <div class="spacer"></div>
              <span>智能手环</span>
              <div class="spacer"></div>
              <span>监控摄像</span>
              <div class="spacer"></div>
              <span>智能出行</span>
              <div class="spacer"></div>
              <span>智能眼镜</span>
              <div class="spacer"></div>
              <span>智能家居</span>
              <div class="spacer"></div>
              <span>健康检测</span>
              <div class="spacer"></div>
              <span>无人机</span>
            </li>
            <li>
              <span class="title rightArror">电子教育</span>
              <div class="spacer"></div>
              <span>学生平板</span>
              <div class="spacer"></div>
              <span>点读机</span>
              <div class="spacer"></div>
              <span>早教</span>
              <div class="spacer"></div>
              <span>录音笔</span>
              <div class="spacer"></div>
              <span>电子书</span>
              <div class="spacer"></div>
              <span>电子词典</span>
              <div class="spacer"></div>
              <span>复读机</span>
              <div class="spacer"></div>
              <span>翻译机</span>
            </li>
          </ul>
        </div>
        <div class="sub-list sub-4" :style='{"display": categoryId===4? "block" : "none"}'>
          <ul class="category-list-2">
            <li>
              <span class="title rightArror">手机通讯</span>
              <div class="spacer"></div>
              <span>手机</span>
              <div class="spacer"></div>
              <span>游戏手机</span>
              <div class="spacer"></div>
              <span>5G手机</span>
              <div class="spacer"></div>
              <span>拍照手机</span>
              <div class="spacer"></div>
              <span>全面屏手机</span>
              <div class="spacer"></div>
              <span>对讲机</span>
              <div class="spacer"></div>
              <span>以旧换新</span>
              <div class="spacer"></div>
              <span>手机维修</span>
            </li>
            <li>
              <span class="title rightArror">运营商</span>
              <div class="spacer"></div>
              <span>合约机</span>
              <div class="spacer"></div>
              <span>手机卡</span>
              <div class="spacer"></div>
              <span>宽带</span>
              <div class="spacer"></div>
              <span>充话费/流量</span>
              <div class="spacer"></div>
              <span>中国电信</span>
              <div class="spacer"></div>
              <span>中国联通</span>
              <div class="spacer"></div>
              <span>中国移动</span>
              <div class="spacer"></div>
              <span>挑靓号</span>
            </li>
            <li>
              <span class="title rightArror">手机配件</span>
              <div class="spacer"></div>
              <span>手机壳</span>
              <div class="spacer"></div>
              <span>贴膜</span>
              <div class="spacer"></div>
              <span>手机存储卡</span>
              <div class="spacer"></div>
              <span>数据线</span>
              <div class="spacer"></div>
              <span>充电器</span>
              <div class="spacer"></div>
              <span>手机耳机</span>
              <div class="spacer"></div>
              <span>创意配件</span>
              <div class="spacer"></div>
              <span>手机饰品</span>
            </li>
            <li>
              <span class="title rightArror">摄影摄像</span>
              <div class="spacer"></div>
              <span>数码相机</span>
              <div class="spacer"></div>
              <span>微单相机</span>
              <div class="spacer"></div>
              <span>单反相机</span>
              <div class="spacer"></div>
              <span>拍立得</span>
              <div class="spacer"></div>
              <span>运动相机</span>
              <div class="spacer"></div>
              <span>摄像机</span>
              <div class="spacer"></div>
              <span>镜头</span>
              <div class="spacer"></div>
              <span>户外器材</span>
            </li>
            <li>
              <span class="title rightArror">数码配件</span>
              <div class="spacer"></div>
              <span>存储卡</span>
              <div class="spacer"></div>
              <span>三脚架/云台</span>
              <div class="spacer"></div>
              <span>相机包</span>
              <div class="spacer"></div>
              <span>滤镜</span>
              <div class="spacer"></div>
              <span>闪光灯/手柄</span>
              <div class="spacer"></div>
              <span>相机清洁/贴膜</span>
              <div class="spacer"></div>
              <span>机身附件</span>
              <div class="spacer"></div>
              <span>镜头附件</span>
            </li>
            <li>
              <span class="title rightArror">影音娱乐</span>
              <div class="spacer"></div>
              <span>耳机/耳麦</span>
              <div class="spacer"></div>
              <span>音箱/音响</span>
              <div class="spacer"></div>
              <span>智能音箱</span>
              <div class="spacer"></div>
              <span>收音机</span>
              <div class="spacer"></div>
              <span>麦克风</span>
              <div class="spacer"></div>
              <span>MP3/MP4</span>
              <div class="spacer"></div>
              <span>专业音频</span>
              <div class="spacer"></div>
              <span>音频线</span>
            </li>
            <li>
              <span class="title rightArror">智能设备</span>
              <div class="spacer"></div>
              <span>智能手表</span>
              <div class="spacer"></div>
              <span>智能手环</span>
              <div class="spacer"></div>
              <span>监控摄像</span>
              <div class="spacer"></div>
              <span>智能出行</span>
              <div class="spacer"></div>
              <span>智能眼镜</span>
              <div class="spacer"></div>
              <span>智能家居</span>
              <div class="spacer"></div>
              <span>健康检测</span>
              <div class="spacer"></div>
              <span>无人机</span>
            </li>
            <li>
              <span class="title rightArror">电子教育</span>
              <div class="spacer"></div>
              <span>学生平板</span>
              <div class="spacer"></div>
              <span>点读机</span>
              <div class="spacer"></div>
              <span>早教</span>
              <div class="spacer"></div>
              <span>录音笔</span>
              <div class="spacer"></div>
              <span>电子书</span>
              <div class="spacer"></div>
              <span>电子词典</span>
              <div class="spacer"></div>
              <span>复读机</span>
              <div class="spacer"></div>
              <span>翻译机</span>
            </li>
          </ul>
        </div>
        <div class="sub-list sub-5" :style='{"display": categoryId===5? "block" : "none"}'>
          <ul class="category-list-2">
            <li>
              <span class="title rightArror">手机通讯</span>
              <div class="spacer"></div>
              <span>手机</span>
              <div class="spacer"></div>
              <span>游戏手机</span>
              <div class="spacer"></div>
              <span>5G手机</span>
              <div class="spacer"></div>
              <span>拍照手机</span>
              <div class="spacer"></div>
              <span>全面屏手机</span>
              <div class="spacer"></div>
              <span>对讲机</span>
              <div class="spacer"></div>
              <span>以旧换新</span>
              <div class="spacer"></div>
              <span>手机维修</span>
            </li>
            <li>
              <span class="title rightArror">运营商</span>
              <div class="spacer"></div>
              <span>合约机</span>
              <div class="spacer"></div>
              <span>手机卡</span>
              <div class="spacer"></div>
              <span>宽带</span>
              <div class="spacer"></div>
              <span>充话费/流量</span>
              <div class="spacer"></div>
              <span>中国电信</span>
              <div class="spacer"></div>
              <span>中国联通</span>
              <div class="spacer"></div>
              <span>中国移动</span>
              <div class="spacer"></div>
              <span>挑靓号</span>
            </li>
            <li>
              <span class="title rightArror">手机配件</span>
              <div class="spacer"></div>
              <span>手机壳</span>
              <div class="spacer"></div>
              <span>贴膜</span>
              <div class="spacer"></div>
              <span>手机存储卡</span>
              <div class="spacer"></div>
              <span>数据线</span>
              <div class="spacer"></div>
              <span>充电器</span>
              <div class="spacer"></div>
              <span>手机耳机</span>
              <div class="spacer"></div>
              <span>创意配件</span>
              <div class="spacer"></div>
              <span>手机饰品</span>
            </li>
            <li>
              <span class="title rightArror">摄影摄像</span>
              <div class="spacer"></div>
              <span>数码相机</span>
              <div class="spacer"></div>
              <span>微单相机</span>
              <div class="spacer"></div>
              <span>单反相机</span>
              <div class="spacer"></div>
              <span>拍立得</span>
              <div class="spacer"></div>
              <span>运动相机</span>
              <div class="spacer"></div>
              <span>摄像机</span>
              <div class="spacer"></div>
              <span>镜头</span>
              <div class="spacer"></div>
              <span>户外器材</span>
            </li>
            <li>
              <span class="title rightArror">数码配件</span>
              <div class="spacer"></div>
              <span>存储卡</span>
              <div class="spacer"></div>
              <span>三脚架/云台</span>
              <div class="spacer"></div>
              <span>相机包</span>
              <div class="spacer"></div>
              <span>滤镜</span>
              <div class="spacer"></div>
              <span>闪光灯/手柄</span>
              <div class="spacer"></div>
              <span>相机清洁/贴膜</span>
              <div class="spacer"></div>
              <span>机身附件</span>
              <div class="spacer"></div>
              <span>镜头附件</span>
            </li>
            <li>
              <span class="title rightArror">影音娱乐</span>
              <div class="spacer"></div>
              <span>耳机/耳麦</span>
              <div class="spacer"></div>
              <span>音箱/音响</span>
              <div class="spacer"></div>
              <span>智能音箱</span>
              <div class="spacer"></div>
              <span>收音机</span>
              <div class="spacer"></div>
              <span>麦克风</span>
              <div class="spacer"></div>
              <span>MP3/MP4</span>
              <div class="spacer"></div>
              <span>专业音频</span>
              <div class="spacer"></div>
              <span>音频线</span>
            </li>
            <li>
              <span class="title rightArror">智能设备</span>
              <div class="spacer"></div>
              <span>智能手表</span>
              <div class="spacer"></div>
              <span>智能手环</span>
              <div class="spacer"></div>
              <span>监控摄像</span>
              <div class="spacer"></div>
              <span>智能出行</span>
              <div class="spacer"></div>
              <span>智能眼镜</span>
              <div class="spacer"></div>
              <span>智能家居</span>
              <div class="spacer"></div>
              <span>健康检测</span>
              <div class="spacer"></div>
              <span>无人机</span>
            </li>
            <li>
              <span class="title rightArror">电子教育</span>
              <div class="spacer"></div>
              <span>学生平板</span>
              <div class="spacer"></div>
              <span>点读机</span>
              <div class="spacer"></div>
              <span>早教</span>
              <div class="spacer"></div>
              <span>录音笔</span>
              <div class="spacer"></div>
              <span>电子书</span>
              <div class="spacer"></div>
              <span>电子词典</span>
              <div class="spacer"></div>
              <span>复读机</span>
              <div class="spacer"></div>
              <span>翻译机</span>
            </li>
          </ul>
        </div>
        <div class="sub-list sub-6" :style='{"display": categoryId===6? "block" : "none"}'>
          <ul class="category-list-2">
            <li>
              <span class="title rightArror">手机通讯</span>
              <div class="spacer"></div>
              <span>手机</span>
              <div class="spacer"></div>
              <span>游戏手机</span>
              <div class="spacer"></div>
              <span>5G手机</span>
              <div class="spacer"></div>
              <span>拍照手机</span>
              <div class="spacer"></div>
              <span>全面屏手机</span>
              <div class="spacer"></div>
              <span>对讲机</span>
              <div class="spacer"></div>
              <span>以旧换新</span>
              <div class="spacer"></div>
              <span>手机维修</span>
            </li>
            <li>
              <span class="title rightArror">运营商</span>
              <div class="spacer"></div>
              <span>合约机</span>
              <div class="spacer"></div>
              <span>手机卡</span>
              <div class="spacer"></div>
              <span>宽带</span>
              <div class="spacer"></div>
              <span>充话费/流量</span>
              <div class="spacer"></div>
              <span>中国电信</span>
              <div class="spacer"></div>
              <span>中国联通</span>
              <div class="spacer"></div>
              <span>中国移动</span>
              <div class="spacer"></div>
              <span>挑靓号</span>
            </li>
            <li>
              <span class="title rightArror">手机配件</span>
              <div class="spacer"></div>
              <span>手机壳</span>
              <div class="spacer"></div>
              <span>贴膜</span>
              <div class="spacer"></div>
              <span>手机存储卡</span>
              <div class="spacer"></div>
              <span>数据线</span>
              <div class="spacer"></div>
              <span>充电器</span>
              <div class="spacer"></div>
              <span>手机耳机</span>
              <div class="spacer"></div>
              <span>创意配件</span>
              <div class="spacer"></div>
              <span>手机饰品</span>
            </li>
            <li>
              <span class="title rightArror">摄影摄像</span>
              <div class="spacer"></div>
              <span>数码相机</span>
              <div class="spacer"></div>
              <span>微单相机</span>
              <div class="spacer"></div>
              <span>单反相机</span>
              <div class="spacer"></div>
              <span>拍立得</span>
              <div class="spacer"></div>
              <span>运动相机</span>
              <div class="spacer"></div>
              <span>摄像机</span>
              <div class="spacer"></div>
              <span>镜头</span>
              <div class="spacer"></div>
              <span>户外器材</span>
            </li>
            <li>
              <span class="title rightArror">数码配件</span>
              <div class="spacer"></div>
              <span>存储卡</span>
              <div class="spacer"></div>
              <span>三脚架/云台</span>
              <div class="spacer"></div>
              <span>相机包</span>
              <div class="spacer"></div>
              <span>滤镜</span>
              <div class="spacer"></div>
              <span>闪光灯/手柄</span>
              <div class="spacer"></div>
              <span>相机清洁/贴膜</span>
              <div class="spacer"></div>
              <span>机身附件</span>
              <div class="spacer"></div>
              <span>镜头附件</span>
            </li>
            <li>
              <span class="title rightArror">影音娱乐</span>
              <div class="spacer"></div>
              <span>耳机/耳麦</span>
              <div class="spacer"></div>
              <span>音箱/音响</span>
              <div class="spacer"></div>
              <span>智能音箱</span>
              <div class="spacer"></div>
              <span>收音机</span>
              <div class="spacer"></div>
              <span>麦克风</span>
              <div class="spacer"></div>
              <span>MP3/MP4</span>
              <div class="spacer"></div>
              <span>专业音频</span>
              <div class="spacer"></div>
              <span>音频线</span>
            </li>
            <li>
              <span class="title rightArror">智能设备</span>
              <div class="spacer"></div>
              <span>智能手表</span>
              <div class="spacer"></div>
              <span>智能手环</span>
              <div class="spacer"></div>
              <span>监控摄像</span>
              <div class="spacer"></div>
              <span>智能出行</span>
              <div class="spacer"></div>
              <span>智能眼镜</span>
              <div class="spacer"></div>
              <span>智能家居</span>
              <div class="spacer"></div>
              <span>健康检测</span>
              <div class="spacer"></div>
              <span>无人机</span>
            </li>
            <li>
              <span class="title rightArror">电子教育</span>
              <div class="spacer"></div>
              <span>学生平板</span>
              <div class="spacer"></div>
              <span>点读机</span>
              <div class="spacer"></div>
              <span>早教</span>
              <div class="spacer"></div>
              <span>录音笔</span>
              <div class="spacer"></div>
              <span>电子书</span>
              <div class="spacer"></div>
              <span>电子词典</span>
              <div class="spacer"></div>
              <span>复读机</span>
              <div class="spacer"></div>
              <span>翻译机</span>
            </li>
          </ul>
        </div>
        <div class="sub-list sub-7" :style='{"display": categoryId===7? "block" : "none"}'>
          <ul class="category-list-2">
            <li>
              <span class="title rightArror">手机通讯</span>
              <div class="spacer"></div>
              <span>手机</span>
              <div class="spacer"></div>
              <span>游戏手机</span>
              <div class="spacer"></div>
              <span>5G手机</span>
              <div class="spacer"></div>
              <span>拍照手机</span>
              <div class="spacer"></div>
              <span>全面屏手机</span>
              <div class="spacer"></div>
              <span>对讲机</span>
              <div class="spacer"></div>
              <span>以旧换新</span>
              <div class="spacer"></div>
              <span>手机维修</span>
            </li>
            <li>
              <span class="title rightArror">运营商</span>
              <div class="spacer"></div>
              <span>合约机</span>
              <div class="spacer"></div>
              <span>手机卡</span>
              <div class="spacer"></div>
              <span>宽带</span>
              <div class="spacer"></div>
              <span>充话费/流量</span>
              <div class="spacer"></div>
              <span>中国电信</span>
              <div class="spacer"></div>
              <span>中国联通</span>
              <div class="spacer"></div>
              <span>中国移动</span>
              <div class="spacer"></div>
              <span>挑靓号</span>
            </li>
            <li>
              <span class="title rightArror">手机配件</span>
              <div class="spacer"></div>
              <span>手机壳</span>
              <div class="spacer"></div>
              <span>贴膜</span>
              <div class="spacer"></div>
              <span>手机存储卡</span>
              <div class="spacer"></div>
              <span>数据线</span>
              <div class="spacer"></div>
              <span>充电器</span>
              <div class="spacer"></div>
              <span>手机耳机</span>
              <div class="spacer"></div>
              <span>创意配件</span>
              <div class="spacer"></div>
              <span>手机饰品</span>
            </li>
            <li>
              <span class="title rightArror">摄影摄像</span>
              <div class="spacer"></div>
              <span>数码相机</span>
              <div class="spacer"></div>
              <span>微单相机</span>
              <div class="spacer"></div>
              <span>单反相机</span>
              <div class="spacer"></div>
              <span>拍立得</span>
              <div class="spacer"></div>
              <span>运动相机</span>
              <div class="spacer"></div>
              <span>摄像机</span>
              <div class="spacer"></div>
              <span>镜头</span>
              <div class="spacer"></div>
              <span>户外器材</span>
            </li>
            <li>
              <span class="title rightArror">数码配件</span>
              <div class="spacer"></div>
              <span>存储卡</span>
              <div class="spacer"></div>
              <span>三脚架/云台</span>
              <div class="spacer"></div>
              <span>相机包</span>
              <div class="spacer"></div>
              <span>滤镜</span>
              <div class="spacer"></div>
              <span>闪光灯/手柄</span>
              <div class="spacer"></div>
              <span>相机清洁/贴膜</span>
              <div class="spacer"></div>
              <span>机身附件</span>
              <div class="spacer"></div>
              <span>镜头附件</span>
            </li>
            <li>
              <span class="title rightArror">影音娱乐</span>
              <div class="spacer"></div>
              <span>耳机/耳麦</span>
              <div class="spacer"></div>
              <span>音箱/音响</span>
              <div class="spacer"></div>
              <span>智能音箱</span>
              <div class="spacer"></div>
              <span>收音机</span>
              <div class="spacer"></div>
              <span>麦克风</span>
              <div class="spacer"></div>
              <span>MP3/MP4</span>
              <div class="spacer"></div>
              <span>专业音频</span>
              <div class="spacer"></div>
              <span>音频线</span>
            </li>
            <li>
              <span class="title rightArror">智能设备</span>
              <div class="spacer"></div>
              <span>智能手表</span>
              <div class="spacer"></div>
              <span>智能手环</span>
              <div class="spacer"></div>
              <span>监控摄像</span>
              <div class="spacer"></div>
              <span>智能出行</span>
              <div class="spacer"></div>
              <span>智能眼镜</span>
              <div class="spacer"></div>
              <span>智能家居</span>
              <div class="spacer"></div>
              <span>健康检测</span>
              <div class="spacer"></div>
              <span>无人机</span>
            </li>
            <li>
              <span class="title rightArror">电子教育</span>
              <div class="spacer"></div>
              <span>学生平板</span>
              <div class="spacer"></div>
              <span>点读机</span>
              <div class="spacer"></div>
              <span>早教</span>
              <div class="spacer"></div>
              <span>录音笔</span>
              <div class="spacer"></div>
              <span>电子书</span>
              <div class="spacer"></div>
              <span>电子词典</span>
              <div class="spacer"></div>
              <span>复读机</span>
              <div class="spacer"></div>
              <span>翻译机</span>
            </li>
          </ul>
        </div>
        <div class="sub-list sub-8" :style='{"display": categoryId===8? "block" : "none"}'>
          <ul class="category-list-2">
            <li>
              <span class="title rightArror">手机通讯</span>
              <div class="spacer"></div>
              <span>手机</span>
              <div class="spacer"></div>
              <span>游戏手机</span>
              <div class="spacer"></div>
              <span>5G手机</span>
              <div class="spacer"></div>
              <span>拍照手机</span>
              <div class="spacer"></div>
              <span>全面屏手机</span>
              <div class="spacer"></div>
              <span>对讲机</span>
              <div class="spacer"></div>
              <span>以旧换新</span>
              <div class="spacer"></div>
              <span>手机维修</span>
            </li>
            <li>
              <span class="title rightArror">运营商</span>
              <div class="spacer"></div>
              <span>合约机</span>
              <div class="spacer"></div>
              <span>手机卡</span>
              <div class="spacer"></div>
              <span>宽带</span>
              <div class="spacer"></div>
              <span>充话费/流量</span>
              <div class="spacer"></div>
              <span>中国电信</span>
              <div class="spacer"></div>
              <span>中国联通</span>
              <div class="spacer"></div>
              <span>中国移动</span>
              <div class="spacer"></div>
              <span>挑靓号</span>
            </li>
            <li>
              <span class="title rightArror">手机配件</span>
              <div class="spacer"></div>
              <span>手机壳</span>
              <div class="spacer"></div>
              <span>贴膜</span>
              <div class="spacer"></div>
              <span>手机存储卡</span>
              <div class="spacer"></div>
              <span>数据线</span>
              <div class="spacer"></div>
              <span>充电器</span>
              <div class="spacer"></div>
              <span>手机耳机</span>
              <div class="spacer"></div>
              <span>创意配件</span>
              <div class="spacer"></div>
              <span>手机饰品</span>
            </li>
            <li>
              <span class="title rightArror">摄影摄像</span>
              <div class="spacer"></div>
              <span>数码相机</span>
              <div class="spacer"></div>
              <span>微单相机</span>
              <div class="spacer"></div>
              <span>单反相机</span>
              <div class="spacer"></div>
              <span>拍立得</span>
              <div class="spacer"></div>
              <span>运动相机</span>
              <div class="spacer"></div>
              <span>摄像机</span>
              <div class="spacer"></div>
              <span>镜头</span>
              <div class="spacer"></div>
              <span>户外器材</span>
            </li>
            <li>
              <span class="title rightArror">数码配件</span>
              <div class="spacer"></div>
              <span>存储卡</span>
              <div class="spacer"></div>
              <span>三脚架/云台</span>
              <div class="spacer"></div>
              <span>相机包</span>
              <div class="spacer"></div>
              <span>滤镜</span>
              <div class="spacer"></div>
              <span>闪光灯/手柄</span>
              <div class="spacer"></div>
              <span>相机清洁/贴膜</span>
              <div class="spacer"></div>
              <span>机身附件</span>
              <div class="spacer"></div>
              <span>镜头附件</span>
            </li>
            <li>
              <span class="title rightArror">影音娱乐</span>
              <div class="spacer"></div>
              <span>耳机/耳麦</span>
              <div class="spacer"></div>
              <span>音箱/音响</span>
              <div class="spacer"></div>
              <span>智能音箱</span>
              <div class="spacer"></div>
              <span>收音机</span>
              <div class="spacer"></div>
              <span>麦克风</span>
              <div class="spacer"></div>
              <span>MP3/MP4</span>
              <div class="spacer"></div>
              <span>专业音频</span>
              <div class="spacer"></div>
              <span>音频线</span>
            </li>
            <li>
              <span class="title rightArror">智能设备</span>
              <div class="spacer"></div>
              <span>智能手表</span>
              <div class="spacer"></div>
              <span>智能手环</span>
              <div class="spacer"></div>
              <span>监控摄像</span>
              <div class="spacer"></div>
              <span>智能出行</span>
              <div class="spacer"></div>
              <span>智能眼镜</span>
              <div class="spacer"></div>
              <span>智能家居</span>
              <div class="spacer"></div>
              <span>健康检测</span>
              <div class="spacer"></div>
              <span>无人机</span>
            </li>
            <li>
              <span class="title rightArror">电子教育</span>
              <div class="spacer"></div>
              <span>学生平板</span>
              <div class="spacer"></div>
              <span>点读机</span>
              <div class="spacer"></div>
              <span>早教</span>
              <div class="spacer"></div>
              <span>录音笔</span>
              <div class="spacer"></div>
              <span>电子书</span>
              <div class="spacer"></div>
              <span>电子词典</span>
              <div class="spacer"></div>
              <span>复读机</span>
              <div class="spacer"></div>
              <span>翻译机</span>
            </li>
          </ul>
        </div>
        <div class="sub-list sub-9" :style='{"display": categoryId===9? "block" : "none"}'>
          <ul class="category-list-2">
            <li>
              <span class="title rightArror">手机通讯</span>
              <div class="spacer"></div>
              <span>手机</span>
              <div class="spacer"></div>
              <span>游戏手机</span>
              <div class="spacer"></div>
              <span>5G手机</span>
              <div class="spacer"></div>
              <span>拍照手机</span>
              <div class="spacer"></div>
              <span>全面屏手机</span>
              <div class="spacer"></div>
              <span>对讲机</span>
              <div class="spacer"></div>
              <span>以旧换新</span>
              <div class="spacer"></div>
              <span>手机维修</span>
            </li>
            <li>
              <span class="title rightArror">运营商</span>
              <div class="spacer"></div>
              <span>合约机</span>
              <div class="spacer"></div>
              <span>手机卡</span>
              <div class="spacer"></div>
              <span>宽带</span>
              <div class="spacer"></div>
              <span>充话费/流量</span>
              <div class="spacer"></div>
              <span>中国电信</span>
              <div class="spacer"></div>
              <span>中国联通</span>
              <div class="spacer"></div>
              <span>中国移动</span>
              <div class="spacer"></div>
              <span>挑靓号</span>
            </li>
            <li>
              <span class="title rightArror">手机配件</span>
              <div class="spacer"></div>
              <span>手机壳</span>
              <div class="spacer"></div>
              <span>贴膜</span>
              <div class="spacer"></div>
              <span>手机存储卡</span>
              <div class="spacer"></div>
              <span>数据线</span>
              <div class="spacer"></div>
              <span>充电器</span>
              <div class="spacer"></div>
              <span>手机耳机</span>
              <div class="spacer"></div>
              <span>创意配件</span>
              <div class="spacer"></div>
              <span>手机饰品</span>
            </li>
            <li>
              <span class="title rightArror">摄影摄像</span>
              <div class="spacer"></div>
              <span>数码相机</span>
              <div class="spacer"></div>
              <span>微单相机</span>
              <div class="spacer"></div>
              <span>单反相机</span>
              <div class="spacer"></div>
              <span>拍立得</span>
              <div class="spacer"></div>
              <span>运动相机</span>
              <div class="spacer"></div>
              <span>摄像机</span>
              <div class="spacer"></div>
              <span>镜头</span>
              <div class="spacer"></div>
              <span>户外器材</span>
            </li>
            <li>
              <span class="title rightArror">数码配件</span>
              <div class="spacer"></div>
              <span>存储卡</span>
              <div class="spacer"></div>
              <span>三脚架/云台</span>
              <div class="spacer"></div>
              <span>相机包</span>
              <div class="spacer"></div>
              <span>滤镜</span>
              <div class="spacer"></div>
              <span>闪光灯/手柄</span>
              <div class="spacer"></div>
              <span>相机清洁/贴膜</span>
              <div class="spacer"></div>
              <span>机身附件</span>
              <div class="spacer"></div>
              <span>镜头附件</span>
            </li>
            <li>
              <span class="title rightArror">影音娱乐</span>
              <div class="spacer"></div>
              <span>耳机/耳麦</span>
              <div class="spacer"></div>
              <span>音箱/音响</span>
              <div class="spacer"></div>
              <span>智能音箱</span>
              <div class="spacer"></div>
              <span>收音机</span>
              <div class="spacer"></div>
              <span>麦克风</span>
              <div class="spacer"></div>
              <span>MP3/MP4</span>
              <div class="spacer"></div>
              <span>专业音频</span>
              <div class="spacer"></div>
              <span>音频线</span>
            </li>
            <li>
              <span class="title rightArror">智能设备</span>
              <div class="spacer"></div>
              <span>智能手表</span>
              <div class="spacer"></div>
              <span>智能手环</span>
              <div class="spacer"></div>
              <span>监控摄像</span>
              <div class="spacer"></div>
              <span>智能出行</span>
              <div class="spacer"></div>
              <span>智能眼镜</span>
              <div class="spacer"></div>
              <span>智能家居</span>
              <div class="spacer"></div>
              <span>健康检测</span>
              <div class="spacer"></div>
              <span>无人机</span>
            </li>
            <li>
              <span class="title rightArror">电子教育</span>
              <div class="spacer"></div>
              <span>学生平板</span>
              <div class="spacer"></div>
              <span>点读机</span>
              <div class="spacer"></div>
              <span>早教</span>
              <div class="spacer"></div>
              <span>录音笔</span>
              <div class="spacer"></div>
              <span>电子书</span>
              <div class="spacer"></div>
              <span>电子词典</span>
              <div class="spacer"></div>
              <span>复读机</span>
              <div class="spacer"></div>
              <span>翻译机</span>
            </li>
          </ul>
        </div>
        <div class="sub-list sub-10" :style='{"display": categoryId===10? "block" : "none"}'>
          <ul class="category-list-2">
            <li>
              <span class="title rightArror">手机通讯</span>
              <div class="spacer"></div>
              <span>手机</span>
              <div class="spacer"></div>
              <span>游戏手机</span>
              <div class="spacer"></div>
              <span>5G手机</span>
              <div class="spacer"></div>
              <span>拍照手机</span>
              <div class="spacer"></div>
              <span>全面屏手机</span>
              <div class="spacer"></div>
              <span>对讲机</span>
              <div class="spacer"></div>
              <span>以旧换新</span>
              <div class="spacer"></div>
              <span>手机维修</span>
            </li>
            <li>
              <span class="title rightArror">运营商</span>
              <div class="spacer"></div>
              <span>合约机</span>
              <div class="spacer"></div>
              <span>手机卡</span>
              <div class="spacer"></div>
              <span>宽带</span>
              <div class="spacer"></div>
              <span>充话费/流量</span>
              <div class="spacer"></div>
              <span>中国电信</span>
              <div class="spacer"></div>
              <span>中国联通</span>
              <div class="spacer"></div>
              <span>中国移动</span>
              <div class="spacer"></div>
              <span>挑靓号</span>
            </li>
            <li>
              <span class="title rightArror">手机配件</span>
              <div class="spacer"></div>
              <span>手机壳</span>
              <div class="spacer"></div>
              <span>贴膜</span>
              <div class="spacer"></div>
              <span>手机存储卡</span>
              <div class="spacer"></div>
              <span>数据线</span>
              <div class="spacer"></div>
              <span>充电器</span>
              <div class="spacer"></div>
              <span>手机耳机</span>
              <div class="spacer"></div>
              <span>创意配件</span>
              <div class="spacer"></div>
              <span>手机饰品</span>
            </li>
            <li>
              <span class="title rightArror">摄影摄像</span>
              <div class="spacer"></div>
              <span>数码相机</span>
              <div class="spacer"></div>
              <span>微单相机</span>
              <div class="spacer"></div>
              <span>单反相机</span>
              <div class="spacer"></div>
              <span>拍立得</span>
              <div class="spacer"></div>
              <span>运动相机</span>
              <div class="spacer"></div>
              <span>摄像机</span>
              <div class="spacer"></div>
              <span>镜头</span>
              <div class="spacer"></div>
              <span>户外器材</span>
            </li>
            <li>
              <span class="title rightArror">数码配件</span>
              <div class="spacer"></div>
              <span>存储卡</span>
              <div class="spacer"></div>
              <span>三脚架/云台</span>
              <div class="spacer"></div>
              <span>相机包</span>
              <div class="spacer"></div>
              <span>滤镜</span>
              <div class="spacer"></div>
              <span>闪光灯/手柄</span>
              <div class="spacer"></div>
              <span>相机清洁/贴膜</span>
              <div class="spacer"></div>
              <span>机身附件</span>
              <div class="spacer"></div>
              <span>镜头附件</span>
            </li>
            <li>
              <span class="title rightArror">影音娱乐</span>
              <div class="spacer"></div>
              <span>耳机/耳麦</span>
              <div class="spacer"></div>
              <span>音箱/音响</span>
              <div class="spacer"></div>
              <span>智能音箱</span>
              <div class="spacer"></div>
              <span>收音机</span>
              <div class="spacer"></div>
              <span>麦克风</span>
              <div class="spacer"></div>
              <span>MP3/MP4</span>
              <div class="spacer"></div>
              <span>专业音频</span>
              <div class="spacer"></div>
              <span>音频线</span>
            </li>
            <li>
              <span class="title rightArror">智能设备</span>
              <div class="spacer"></div>
              <span>智能手表</span>
              <div class="spacer"></div>
              <span>智能手环</span>
              <div class="spacer"></div>
              <span>监控摄像</span>
              <div class="spacer"></div>
              <span>智能出行</span>
              <div class="spacer"></div>
              <span>智能眼镜</span>
              <div class="spacer"></div>
              <span>智能家居</span>
              <div class="spacer"></div>
              <span>健康检测</span>
              <div class="spacer"></div>
              <span>无人机</span>
            </li>
            <li>
              <span class="title rightArror">电子教育</span>
              <div class="spacer"></div>
              <span>学生平板</span>
              <div class="spacer"></div>
              <span>点读机</span>
              <div class="spacer"></div>
              <span>早教</span>
              <div class="spacer"></div>
              <span>录音笔</span>
              <div class="spacer"></div>
              <span>电子书</span>
              <div class="spacer"></div>
              <span>电子词典</span>
              <div class="spacer"></div>
              <span>复读机</span>
              <div class="spacer"></div>
              <span>翻译机</span>
            </li>
          </ul>
        </div>
        <div class="sub-list sub-11" :style='{"display": categoryId===11? "block" : "none"}'>
          <ul class="category-list-2">
            <li>
              <span class="title rightArror">手机通讯</span>
              <div class="spacer"></div>
              <span>手机</span>
              <div class="spacer"></div>
              <span>游戏手机</span>
              <div class="spacer"></div>
              <span>5G手机</span>
              <div class="spacer"></div>
              <span>拍照手机</span>
              <div class="spacer"></div>
              <span>全面屏手机</span>
              <div class="spacer"></div>
              <span>对讲机</span>
              <div class="spacer"></div>
              <span>以旧换新</span>
              <div class="spacer"></div>
              <span>手机维修</span>
            </li>
            <li>
              <span class="title rightArror">运营商</span>
              <div class="spacer"></div>
              <span>合约机</span>
              <div class="spacer"></div>
              <span>手机卡</span>
              <div class="spacer"></div>
              <span>宽带</span>
              <div class="spacer"></div>
              <span>充话费/流量</span>
              <div class="spacer"></div>
              <span>中国电信</span>
              <div class="spacer"></div>
              <span>中国联通</span>
              <div class="spacer"></div>
              <span>中国移动</span>
              <div class="spacer"></div>
              <span>挑靓号</span>
            </li>
            <li>
              <span class="title rightArror">手机配件</span>
              <div class="spacer"></div>
              <span>手机壳</span>
              <div class="spacer"></div>
              <span>贴膜</span>
              <div class="spacer"></div>
              <span>手机存储卡</span>
              <div class="spacer"></div>
              <span>数据线</span>
              <div class="spacer"></div>
              <span>充电器</span>
              <div class="spacer"></div>
              <span>手机耳机</span>
              <div class="spacer"></div>
              <span>创意配件</span>
              <div class="spacer"></div>
              <span>手机饰品</span>
            </li>
            <li>
              <span class="title rightArror">摄影摄像</span>
              <div class="spacer"></div>
              <span>数码相机</span>
              <div class="spacer"></div>
              <span>微单相机</span>
              <div class="spacer"></div>
              <span>单反相机</span>
              <div class="spacer"></div>
              <span>拍立得</span>
              <div class="spacer"></div>
              <span>运动相机</span>
              <div class="spacer"></div>
              <span>摄像机</span>
              <div class="spacer"></div>
              <span>镜头</span>
              <div class="spacer"></div>
              <span>户外器材</span>
            </li>
            <li>
              <span class="title rightArror">数码配件</span>
              <div class="spacer"></div>
              <span>存储卡</span>
              <div class="spacer"></div>
              <span>三脚架/云台</span>
              <div class="spacer"></div>
              <span>相机包</span>
              <div class="spacer"></div>
              <span>滤镜</span>
              <div class="spacer"></div>
              <span>闪光灯/手柄</span>
              <div class="spacer"></div>
              <span>相机清洁/贴膜</span>
              <div class="spacer"></div>
              <span>机身附件</span>
              <div class="spacer"></div>
              <span>镜头附件</span>
            </li>
            <li>
              <span class="title rightArror">影音娱乐</span>
              <div class="spacer"></div>
              <span>耳机/耳麦</span>
              <div class="spacer"></div>
              <span>音箱/音响</span>
              <div class="spacer"></div>
              <span>智能音箱</span>
              <div class="spacer"></div>
              <span>收音机</span>
              <div class="spacer"></div>
              <span>麦克风</span>
              <div class="spacer"></div>
              <span>MP3/MP4</span>
              <div class="spacer"></div>
              <span>专业音频</span>
              <div class="spacer"></div>
              <span>音频线</span>
            </li>
            <li>
              <span class="title rightArror">智能设备</span>
              <div class="spacer"></div>
              <span>智能手表</span>
              <div class="spacer"></div>
              <span>智能手环</span>
              <div class="spacer"></div>
              <span>监控摄像</span>
              <div class="spacer"></div>
              <span>智能出行</span>
              <div class="spacer"></div>
              <span>智能眼镜</span>
              <div class="spacer"></div>
              <span>智能家居</span>
              <div class="spacer"></div>
              <span>健康检测</span>
              <div class="spacer"></div>
              <span>无人机</span>
            </li>
            <li>
              <span class="title rightArror">电子教育</span>
              <div class="spacer"></div>
              <span>学生平板</span>
              <div class="spacer"></div>
              <span>点读机</span>
              <div class="spacer"></div>
              <span>早教</span>
              <div class="spacer"></div>
              <span>录音笔</span>
              <div class="spacer"></div>
              <span>电子书</span>
              <div class="spacer"></div>
              <span>电子词典</span>
              <div class="spacer"></div>
              <span>复读机</span>
              <div class="spacer"></div>
              <span>翻译机</span>
            </li>
          </ul>
        </div>
        <div class="sub-list sub-12" :style='{"display": categoryId===12? "block" : "none"}'>
          <ul class="category-list-2">
            <li>
              <span class="title rightArror">手机通讯</span>
              <div class="spacer"></div>
              <span>手机</span>
              <div class="spacer"></div>
              <span>游戏手机</span>
              <div class="spacer"></div>
              <span>5G手机</span>
              <div class="spacer"></div>
              <span>拍照手机</span>
              <div class="spacer"></div>
              <span>全面屏手机</span>
              <div class="spacer"></div>
              <span>对讲机</span>
              <div class="spacer"></div>
              <span>以旧换新</span>
              <div class="spacer"></div>
              <span>手机维修</span>
            </li>
            <li>
              <span class="title rightArror">运营商</span>
              <div class="spacer"></div>
              <span>合约机</span>
              <div class="spacer"></div>
              <span>手机卡</span>
              <div class="spacer"></div>
              <span>宽带</span>
              <div class="spacer"></div>
              <span>充话费/流量</span>
              <div class="spacer"></div>
              <span>中国电信</span>
              <div class="spacer"></div>
              <span>中国联通</span>
              <div class="spacer"></div>
              <span>中国移动</span>
              <div class="spacer"></div>
              <span>挑靓号</span>
            </li>
            <li>
              <span class="title rightArror">手机配件</span>
              <div class="spacer"></div>
              <span>手机壳</span>
              <div class="spacer"></div>
              <span>贴膜</span>
              <div class="spacer"></div>
              <span>手机存储卡</span>
              <div class="spacer"></div>
              <span>数据线</span>
              <div class="spacer"></div>
              <span>充电器</span>
              <div class="spacer"></div>
              <span>手机耳机</span>
              <div class="spacer"></div>
              <span>创意配件</span>
              <div class="spacer"></div>
              <span>手机饰品</span>
            </li>
            <li>
              <span class="title rightArror">摄影摄像</span>
              <div class="spacer"></div>
              <span>数码相机</span>
              <div class="spacer"></div>
              <span>微单相机</span>
              <div class="spacer"></div>
              <span>单反相机</span>
              <div class="spacer"></div>
              <span>拍立得</span>
              <div class="spacer"></div>
              <span>运动相机</span>
              <div class="spacer"></div>
              <span>摄像机</span>
              <div class="spacer"></div>
              <span>镜头</span>
              <div class="spacer"></div>
              <span>户外器材</span>
            </li>
            <li>
              <span class="title rightArror">数码配件</span>
              <div class="spacer"></div>
              <span>存储卡</span>
              <div class="spacer"></div>
              <span>三脚架/云台</span>
              <div class="spacer"></div>
              <span>相机包</span>
              <div class="spacer"></div>
              <span>滤镜</span>
              <div class="spacer"></div>
              <span>闪光灯/手柄</span>
              <div class="spacer"></div>
              <span>相机清洁/贴膜</span>
              <div class="spacer"></div>
              <span>机身附件</span>
              <div class="spacer"></div>
              <span>镜头附件</span>
            </li>
            <li>
              <span class="title rightArror">影音娱乐</span>
              <div class="spacer"></div>
              <span>耳机/耳麦</span>
              <div class="spacer"></div>
              <span>音箱/音响</span>
              <div class="spacer"></div>
              <span>智能音箱</span>
              <div class="spacer"></div>
              <span>收音机</span>
              <div class="spacer"></div>
              <span>麦克风</span>
              <div class="spacer"></div>
              <span>MP3/MP4</span>
              <div class="spacer"></div>
              <span>专业音频</span>
              <div class="spacer"></div>
              <span>音频线</span>
            </li>
            <li>
              <span class="title rightArror">智能设备</span>
              <div class="spacer"></div>
              <span>智能手表</span>
              <div class="spacer"></div>
              <span>智能手环</span>
              <div class="spacer"></div>
              <span>监控摄像</span>
              <div class="spacer"></div>
              <span>智能出行</span>
              <div class="spacer"></div>
              <span>智能眼镜</span>
              <div class="spacer"></div>
              <span>智能家居</span>
              <div class="spacer"></div>
              <span>健康检测</span>
              <div class="spacer"></div>
              <span>无人机</span>
            </li>
            <li>
              <span class="title rightArror">电子教育</span>
              <div class="spacer"></div>
              <span>学生平板</span>
              <div class="spacer"></div>
              <span>点读机</span>
              <div class="spacer"></div>
              <span>早教</span>
              <div class="spacer"></div>
              <span>录音笔</span>
              <div class="spacer"></div>
              <span>电子书</span>
              <div class="spacer"></div>
              <span>电子词典</span>
              <div class="spacer"></div>
              <span>复读机</span>
              <div class="spacer"></div>
              <span>翻译机</span>
            </li>
          </ul>
        </div>
        <div class="sub-list sub-13" :style='{"display": categoryId===13? "block" : "none"}'>
          <ul class="category-list-2">
            <li>
              <span class="title rightArror">手机通讯</span>
              <div class="spacer"></div>
              <span>手机</span>
              <div class="spacer"></div>
              <span>游戏手机</span>
              <div class="spacer"></div>
              <span>5G手机</span>
              <div class="spacer"></div>
              <span>拍照手机</span>
              <div class="spacer"></div>
              <span>全面屏手机</span>
              <div class="spacer"></div>
              <span>对讲机</span>
              <div class="spacer"></div>
              <span>以旧换新</span>
              <div class="spacer"></div>
              <span>手机维修</span>
            </li>
            <li>
              <span class="title rightArror">运营商</span>
              <div class="spacer"></div>
              <span>合约机</span>
              <div class="spacer"></div>
              <span>手机卡</span>
              <div class="spacer"></div>
              <span>宽带</span>
              <div class="spacer"></div>
              <span>充话费/流量</span>
              <div class="spacer"></div>
              <span>中国电信</span>
              <div class="spacer"></div>
              <span>中国联通</span>
              <div class="spacer"></div>
              <span>中国移动</span>
              <div class="spacer"></div>
              <span>挑靓号</span>
            </li>
            <li>
              <span class="title rightArror">手机配件</span>
              <div class="spacer"></div>
              <span>手机壳</span>
              <div class="spacer"></div>
              <span>贴膜</span>
              <div class="spacer"></div>
              <span>手机存储卡</span>
              <div class="spacer"></div>
              <span>数据线</span>
              <div class="spacer"></div>
              <span>充电器</span>
              <div class="spacer"></div>
              <span>手机耳机</span>
              <div class="spacer"></div>
              <span>创意配件</span>
              <div class="spacer"></div>
              <span>手机饰品</span>
            </li>
            <li>
              <span class="title rightArror">摄影摄像</span>
              <div class="spacer"></div>
              <span>数码相机</span>
              <div class="spacer"></div>
              <span>微单相机</span>
              <div class="spacer"></div>
              <span>单反相机</span>
              <div class="spacer"></div>
              <span>拍立得</span>
              <div class="spacer"></div>
              <span>运动相机</span>
              <div class="spacer"></div>
              <span>摄像机</span>
              <div class="spacer"></div>
              <span>镜头</span>
              <div class="spacer"></div>
              <span>户外器材</span>
            </li>
            <li>
              <span class="title rightArror">数码配件</span>
              <div class="spacer"></div>
              <span>存储卡</span>
              <div class="spacer"></div>
              <span>三脚架/云台</span>
              <div class="spacer"></div>
              <span>相机包</span>
              <div class="spacer"></div>
              <span>滤镜</span>
              <div class="spacer"></div>
              <span>闪光灯/手柄</span>
              <div class="spacer"></div>
              <span>相机清洁/贴膜</span>
              <div class="spacer"></div>
              <span>机身附件</span>
              <div class="spacer"></div>
              <span>镜头附件</span>
            </li>
            <li>
              <span class="title rightArror">影音娱乐</span>
              <div class="spacer"></div>
              <span>耳机/耳麦</span>
              <div class="spacer"></div>
              <span>音箱/音响</span>
              <div class="spacer"></div>
              <span>智能音箱</span>
              <div class="spacer"></div>
              <span>收音机</span>
              <div class="spacer"></div>
              <span>麦克风</span>
              <div class="spacer"></div>
              <span>MP3/MP4</span>
              <div class="spacer"></div>
              <span>专业音频</span>
              <div class="spacer"></div>
              <span>音频线</span>
            </li>
            <li>
              <span class="title rightArror">智能设备</span>
              <div class="spacer"></div>
              <span>智能手表</span>
              <div class="spacer"></div>
              <span>智能手环</span>
              <div class="spacer"></div>
              <span>监控摄像</span>
              <div class="spacer"></div>
              <span>智能出行</span>
              <div class="spacer"></div>
              <span>智能眼镜</span>
              <div class="spacer"></div>
              <span>智能家居</span>
              <div class="spacer"></div>
              <span>健康检测</span>
              <div class="spacer"></div>
              <span>无人机</span>
            </li>
            <li>
              <span class="title rightArror">电子教育</span>
              <div class="spacer"></div>
              <span>学生平板</span>
              <div class="spacer"></div>
              <span>点读机</span>
              <div class="spacer"></div>
              <span>早教</span>
              <div class="spacer"></div>
              <span>录音笔</span>
              <div class="spacer"></div>
              <span>电子书</span>
              <div class="spacer"></div>
              <span>电子词典</span>
              <div class="spacer"></div>
              <span>复读机</span>
              <div class="spacer"></div>
              <span>翻译机</span>
            </li>
          </ul>
        </div>
        <div class="sub-list sub-14" :style='{"display": categoryId===14? "block" : "none"}'>
          <ul class="category-list-2">
            <li>
              <span class="title rightArror">手机通讯</span>
              <div class="spacer"></div>
              <span>手机</span>
              <div class="spacer"></div>
              <span>游戏手机</span>
              <div class="spacer"></div>
              <span>5G手机</span>
              <div class="spacer"></div>
              <span>拍照手机</span>
              <div class="spacer"></div>
              <span>全面屏手机</span>
              <div class="spacer"></div>
              <span>对讲机</span>
              <div class="spacer"></div>
              <span>以旧换新</span>
              <div class="spacer"></div>
              <span>手机维修</span>
            </li>
            <li>
              <span class="title rightArror">运营商</span>
              <div class="spacer"></div>
              <span>合约机</span>
              <div class="spacer"></div>
              <span>手机卡</span>
              <div class="spacer"></div>
              <span>宽带</span>
              <div class="spacer"></div>
              <span>充话费/流量</span>
              <div class="spacer"></div>
              <span>中国电信</span>
              <div class="spacer"></div>
              <span>中国联通</span>
              <div class="spacer"></div>
              <span>中国移动</span>
              <div class="spacer"></div>
              <span>挑靓号</span>
            </li>
            <li>
              <span class="title rightArror">手机配件</span>
              <div class="spacer"></div>
              <span>手机壳</span>
              <div class="spacer"></div>
              <span>贴膜</span>
              <div class="spacer"></div>
              <span>手机存储卡</span>
              <div class="spacer"></div>
              <span>数据线</span>
              <div class="spacer"></div>
              <span>充电器</span>
              <div class="spacer"></div>
              <span>手机耳机</span>
              <div class="spacer"></div>
              <span>创意配件</span>
              <div class="spacer"></div>
              <span>手机饰品</span>
            </li>
            <li>
              <span class="title rightArror">摄影摄像</span>
              <div class="spacer"></div>
              <span>数码相机</span>
              <div class="spacer"></div>
              <span>微单相机</span>
              <div class="spacer"></div>
              <span>单反相机</span>
              <div class="spacer"></div>
              <span>拍立得</span>
              <div class="spacer"></div>
              <span>运动相机</span>
              <div class="spacer"></div>
              <span>摄像机</span>
              <div class="spacer"></div>
              <span>镜头</span>
              <div class="spacer"></div>
              <span>户外器材</span>
            </li>
            <li>
              <span class="title rightArror">数码配件</span>
              <div class="spacer"></div>
              <span>存储卡</span>
              <div class="spacer"></div>
              <span>三脚架/云台</span>
              <div class="spacer"></div>
              <span>相机包</span>
              <div class="spacer"></div>
              <span>滤镜</span>
              <div class="spacer"></div>
              <span>闪光灯/手柄</span>
              <div class="spacer"></div>
              <span>相机清洁/贴膜</span>
              <div class="spacer"></div>
              <span>机身附件</span>
              <div class="spacer"></div>
              <span>镜头附件</span>
            </li>
            <li>
              <span class="title rightArror">影音娱乐</span>
              <div class="spacer"></div>
              <span>耳机/耳麦</span>
              <div class="spacer"></div>
              <span>音箱/音响</span>
              <div class="spacer"></div>
              <span>智能音箱</span>
              <div class="spacer"></div>
              <span>收音机</span>
              <div class="spacer"></div>
              <span>麦克风</span>
              <div class="spacer"></div>
              <span>MP3/MP4</span>
              <div class="spacer"></div>
              <span>专业音频</span>
              <div class="spacer"></div>
              <span>音频线</span>
            </li>
            <li>
              <span class="title rightArror">智能设备</span>
              <div class="spacer"></div>
              <span>智能手表</span>
              <div class="spacer"></div>
              <span>智能手环</span>
              <div class="spacer"></div>
              <span>监控摄像</span>
              <div class="spacer"></div>
              <span>智能出行</span>
              <div class="spacer"></div>
              <span>智能眼镜</span>
              <div class="spacer"></div>
              <span>智能家居</span>
              <div class="spacer"></div>
              <span>健康检测</span>
              <div class="spacer"></div>
              <span>无人机</span>
            </li>
            <li>
              <span class="title rightArror">电子教育</span>
              <div class="spacer"></div>
              <span>学生平板</span>
              <div class="spacer"></div>
              <span>点读机</span>
              <div class="spacer"></div>
              <span>早教</span>
              <div class="spacer"></div>
              <span>录音笔</span>
              <div class="spacer"></div>
              <span>电子书</span>
              <div class="spacer"></div>
              <span>电子词典</span>
              <div class="spacer"></div>
              <span>复读机</span>
              <div class="spacer"></div>
              <span>翻译机</span>
            </li>
          </ul>
        </div>
        <div class="sub-list sub-15" :style='{"display": categoryId===15? "block" : "none"}'>
          <ul class="category-list-2">
            <li>
              <span class="title rightArror">手机通讯</span>
              <div class="spacer"></div>
              <span>手机</span>
              <div class="spacer"></div>
              <span>游戏手机</span>
              <div class="spacer"></div>
              <span>5G手机</span>
              <div class="spacer"></div>
              <span>拍照手机</span>
              <div class="spacer"></div>
              <span>全面屏手机</span>
              <div class="spacer"></div>
              <span>对讲机</span>
              <div class="spacer"></div>
              <span>以旧换新</span>
              <div class="spacer"></div>
              <span>手机维修</span>
            </li>
            <li>
              <span class="title rightArror">运营商</span>
              <div class="spacer"></div>
              <span>合约机</span>
              <div class="spacer"></div>
              <span>手机卡</span>
              <div class="spacer"></div>
              <span>宽带</span>
              <div class="spacer"></div>
              <span>充话费/流量</span>
              <div class="spacer"></div>
              <span>中国电信</span>
              <div class="spacer"></div>
              <span>中国联通</span>
              <div class="spacer"></div>
              <span>中国移动</span>
              <div class="spacer"></div>
              <span>挑靓号</span>
            </li>
            <li>
              <span class="title rightArror">手机配件</span>
              <div class="spacer"></div>
              <span>手机壳</span>
              <div class="spacer"></div>
              <span>贴膜</span>
              <div class="spacer"></div>
              <span>手机存储卡</span>
              <div class="spacer"></div>
              <span>数据线</span>
              <div class="spacer"></div>
              <span>充电器</span>
              <div class="spacer"></div>
              <span>手机耳机</span>
              <div class="spacer"></div>
              <span>创意配件</span>
              <div class="spacer"></div>
              <span>手机饰品</span>
            </li>
            <li>
              <span class="title rightArror">摄影摄像</span>
              <div class="spacer"></div>
              <span>数码相机</span>
              <div class="spacer"></div>
              <span>微单相机</span>
              <div class="spacer"></div>
              <span>单反相机</span>
              <div class="spacer"></div>
              <span>拍立得</span>
              <div class="spacer"></div>
              <span>运动相机</span>
              <div class="spacer"></div>
              <span>摄像机</span>
              <div class="spacer"></div>
              <span>镜头</span>
              <div class="spacer"></div>
              <span>户外器材</span>
            </li>
            <li>
              <span class="title rightArror">数码配件</span>
              <div class="spacer"></div>
              <span>存储卡</span>
              <div class="spacer"></div>
              <span>三脚架/云台</span>
              <div class="spacer"></div>
              <span>相机包</span>
              <div class="spacer"></div>
              <span>滤镜</span>
              <div class="spacer"></div>
              <span>闪光灯/手柄</span>
              <div class="spacer"></div>
              <span>相机清洁/贴膜</span>
              <div class="spacer"></div>
              <span>机身附件</span>
              <div class="spacer"></div>
              <span>镜头附件</span>
            </li>
            <li>
              <span class="title rightArror">影音娱乐</span>
              <div class="spacer"></div>
              <span>耳机/耳麦</span>
              <div class="spacer"></div>
              <span>音箱/音响</span>
              <div class="spacer"></div>
              <span>智能音箱</span>
              <div class="spacer"></div>
              <span>收音机</span>
              <div class="spacer"></div>
              <span>麦克风</span>
              <div class="spacer"></div>
              <span>MP3/MP4</span>
              <div class="spacer"></div>
              <span>专业音频</span>
              <div class="spacer"></div>
              <span>音频线</span>
            </li>
            <li>
              <span class="title rightArror">智能设备</span>
              <div class="spacer"></div>
              <span>智能手表</span>
              <div class="spacer"></div>
              <span>智能手环</span>
              <div class="spacer"></div>
              <span>监控摄像</span>
              <div class="spacer"></div>
              <span>智能出行</span>
              <div class="spacer"></div>
              <span>智能眼镜</span>
              <div class="spacer"></div>
              <span>智能家居</span>
              <div class="spacer"></div>
              <span>健康检测</span>
              <div class="spacer"></div>
              <span>无人机</span>
            </li>
            <li>
              <span class="title rightArror">电子教育</span>
              <div class="spacer"></div>
              <span>学生平板</span>
              <div class="spacer"></div>
              <span>点读机</span>
              <div class="spacer"></div>
              <span>早教</span>
              <div class="spacer"></div>
              <span>录音笔</span>
              <div class="spacer"></div>
              <span>电子书</span>
              <div class="spacer"></div>
              <span>电子词典</span>
              <div class="spacer"></div>
              <span>复读机</span>
              <div class="spacer"></div>
              <span>翻译机</span>
            </li>
          </ul>
        </div>
        <div class="sub-list sub-16" :style='{"display": categoryId===16? "block" : "none"}'>
          <ul class="category-list-2">
            <li>
              <span class="title rightArror">手机通讯</span>
              <div class="spacer"></div>
              <span>手机</span>
              <div class="spacer"></div>
              <span>游戏手机</span>
              <div class="spacer"></div>
              <span>5G手机</span>
              <div class="spacer"></div>
              <span>拍照手机</span>
              <div class="spacer"></div>
              <span>全面屏手机</span>
              <div class="spacer"></div>
              <span>对讲机</span>
              <div class="spacer"></div>
              <span>以旧换新</span>
              <div class="spacer"></div>
              <span>手机维修</span>
            </li>
            <li>
              <span class="title rightArror">运营商</span>
              <div class="spacer"></div>
              <span>合约机</span>
              <div class="spacer"></div>
              <span>手机卡</span>
              <div class="spacer"></div>
              <span>宽带</span>
              <div class="spacer"></div>
              <span>充话费/流量</span>
              <div class="spacer"></div>
              <span>中国电信</span>
              <div class="spacer"></div>
              <span>中国联通</span>
              <div class="spacer"></div>
              <span>中国移动</span>
              <div class="spacer"></div>
              <span>挑靓号</span>
            </li>
            <li>
              <span class="title rightArror">手机配件</span>
              <div class="spacer"></div>
              <span>手机壳</span>
              <div class="spacer"></div>
              <span>贴膜</span>
              <div class="spacer"></div>
              <span>手机存储卡</span>
              <div class="spacer"></div>
              <span>数据线</span>
              <div class="spacer"></div>
              <span>充电器</span>
              <div class="spacer"></div>
              <span>手机耳机</span>
              <div class="spacer"></div>
              <span>创意配件</span>
              <div class="spacer"></div>
              <span>手机饰品</span>
            </li>
            <li>
              <span class="title rightArror">摄影摄像</span>
              <div class="spacer"></div>
              <span>数码相机</span>
              <div class="spacer"></div>
              <span>微单相机</span>
              <div class="spacer"></div>
              <span>单反相机</span>
              <div class="spacer"></div>
              <span>拍立得</span>
              <div class="spacer"></div>
              <span>运动相机</span>
              <div class="spacer"></div>
              <span>摄像机</span>
              <div class="spacer"></div>
              <span>镜头</span>
              <div class="spacer"></div>
              <span>户外器材</span>
            </li>
            <li>
              <span class="title rightArror">数码配件</span>
              <div class="spacer"></div>
              <span>存储卡</span>
              <div class="spacer"></div>
              <span>三脚架/云台</span>
              <div class="spacer"></div>
              <span>相机包</span>
              <div class="spacer"></div>
              <span>滤镜</span>
              <div class="spacer"></div>
              <span>闪光灯/手柄</span>
              <div class="spacer"></div>
              <span>相机清洁/贴膜</span>
              <div class="spacer"></div>
              <span>机身附件</span>
              <div class="spacer"></div>
              <span>镜头附件</span>
            </li>
            <li>
              <span class="title rightArror">影音娱乐</span>
              <div class="spacer"></div>
              <span>耳机/耳麦</span>
              <div class="spacer"></div>
              <span>音箱/音响</span>
              <div class="spacer"></div>
              <span>智能音箱</span>
              <div class="spacer"></div>
              <span>收音机</span>
              <div class="spacer"></div>
              <span>麦克风</span>
              <div class="spacer"></div>
              <span>MP3/MP4</span>
              <div class="spacer"></div>
              <span>专业音频</span>
              <div class="spacer"></div>
              <span>音频线</span>
            </li>
            <li>
              <span class="title rightArror">智能设备</span>
              <div class="spacer"></div>
              <span>智能手表</span>
              <div class="spacer"></div>
              <span>智能手环</span>
              <div class="spacer"></div>
              <span>监控摄像</span>
              <div class="spacer"></div>
              <span>智能出行</span>
              <div class="spacer"></div>
              <span>智能眼镜</span>
              <div class="spacer"></div>
              <span>智能家居</span>
              <div class="spacer"></div>
              <span>健康检测</span>
              <div class="spacer"></div>
              <span>无人机</span>
            </li>
            <li>
              <span class="title rightArror">电子教育</span>
              <div class="spacer"></div>
              <span>学生平板</span>
              <div class="spacer"></div>
              <span>点读机</span>
              <div class="spacer"></div>
              <span>早教</span>
              <div class="spacer"></div>
              <span>录音笔</span>
              <div class="spacer"></div>
              <span>电子书</span>
              <div class="spacer"></div>
              <span>电子词典</span>
              <div class="spacer"></div>
              <span>复读机</span>
              <div class="spacer"></div>
              <span>翻译机</span>
            </li>
          </ul>
        </div>
        <div class="sub-list sub-17" :style='{"display": categoryId===17? "block" : "none"}'>
          <ul class="category-list-2">
            <li>
              <span class="title rightArror">手机通讯</span>
              <div class="spacer"></div>
              <span>手机</span>
              <div class="spacer"></div>
              <span>游戏手机</span>
              <div class="spacer"></div>
              <span>5G手机</span>
              <div class="spacer"></div>
              <span>拍照手机</span>
              <div class="spacer"></div>
              <span>全面屏手机</span>
              <div class="spacer"></div>
              <span>对讲机</span>
              <div class="spacer"></div>
              <span>以旧换新</span>
              <div class="spacer"></div>
              <span>手机维修</span>
            </li>
            <li>
              <span class="title rightArror">运营商</span>
              <div class="spacer"></div>
              <span>合约机</span>
              <div class="spacer"></div>
              <span>手机卡</span>
              <div class="spacer"></div>
              <span>宽带</span>
              <div class="spacer"></div>
              <span>充话费/流量</span>
              <div class="spacer"></div>
              <span>中国电信</span>
              <div class="spacer"></div>
              <span>中国联通</span>
              <div class="spacer"></div>
              <span>中国移动</span>
              <div class="spacer"></div>
              <span>挑靓号</span>
            </li>
            <li>
              <span class="title rightArror">手机配件</span>
              <div class="spacer"></div>
              <span>手机壳</span>
              <div class="spacer"></div>
              <span>贴膜</span>
              <div class="spacer"></div>
              <span>手机存储卡</span>
              <div class="spacer"></div>
              <span>数据线</span>
              <div class="spacer"></div>
              <span>充电器</span>
              <div class="spacer"></div>
              <span>手机耳机</span>
              <div class="spacer"></div>
              <span>创意配件</span>
              <div class="spacer"></div>
              <span>手机饰品</span>
            </li>
            <li>
              <span class="title rightArror">摄影摄像</span>
              <div class="spacer"></div>
              <span>数码相机</span>
              <div class="spacer"></div>
              <span>微单相机</span>
              <div class="spacer"></div>
              <span>单反相机</span>
              <div class="spacer"></div>
              <span>拍立得</span>
              <div class="spacer"></div>
              <span>运动相机</span>
              <div class="spacer"></div>
              <span>摄像机</span>
              <div class="spacer"></div>
              <span>镜头</span>
              <div class="spacer"></div>
              <span>户外器材</span>
            </li>
            <li>
              <span class="title rightArror">数码配件</span>
              <div class="spacer"></div>
              <span>存储卡</span>
              <div class="spacer"></div>
              <span>三脚架/云台</span>
              <div class="spacer"></div>
              <span>相机包</span>
              <div class="spacer"></div>
              <span>滤镜</span>
              <div class="spacer"></div>
              <span>闪光灯/手柄</span>
              <div class="spacer"></div>
              <span>相机清洁/贴膜</span>
              <div class="spacer"></div>
              <span>机身附件</span>
              <div class="spacer"></div>
              <span>镜头附件</span>
            </li>
            <li>
              <span class="title rightArror">影音娱乐</span>
              <div class="spacer"></div>
              <span>耳机/耳麦</span>
              <div class="spacer"></div>
              <span>音箱/音响</span>
              <div class="spacer"></div>
              <span>智能音箱</span>
              <div class="spacer"></div>
              <span>收音机</span>
              <div class="spacer"></div>
              <span>麦克风</span>
              <div class="spacer"></div>
              <span>MP3/MP4</span>
              <div class="spacer"></div>
              <span>专业音频</span>
              <div class="spacer"></div>
              <span>音频线</span>
            </li>
            <li>
              <span class="title rightArror">智能设备</span>
              <div class="spacer"></div>
              <span>智能手表</span>
              <div class="spacer"></div>
              <span>智能手环</span>
              <div class="spacer"></div>
              <span>监控摄像</span>
              <div class="spacer"></div>
              <span>智能出行</span>
              <div class="spacer"></div>
              <span>智能眼镜</span>
              <div class="spacer"></div>
              <span>智能家居</span>
              <div class="spacer"></div>
              <span>健康检测</span>
              <div class="spacer"></div>
              <span>无人机</span>
            </li>
            <li>
              <span class="title rightArror">电子教育</span>
              <div class="spacer"></div>
              <span>学生平板</span>
              <div class="spacer"></div>
              <span>点读机</span>
              <div class="spacer"></div>
              <span>早教</span>
              <div class="spacer"></div>
              <span>录音笔</span>
              <div class="spacer"></div>
              <span>电子书</span>
              <div class="spacer"></div>
              <span>电子词典</span>
              <div class="spacer"></div>
              <span>复读机</span>
              <div class="spacer"></div>
              <span>翻译机</span>
            </li>
          </ul>
        </div>
        <div class="sub-list sub-18" :style='{"display": categoryId===18? "block" : "none"}'>
          <ul class="category-list-2">
            <li>
              <span class="title rightArror">手机通讯</span>
              <div class="spacer"></div>
              <span>手机</span>
              <div class="spacer"></div>
              <span>游戏手机</span>
              <div class="spacer"></div>
              <span>5G手机</span>
              <div class="spacer"></div>
              <span>拍照手机</span>
              <div class="spacer"></div>
              <span>全面屏手机</span>
              <div class="spacer"></div>
              <span>对讲机</span>
              <div class="spacer"></div>
              <span>以旧换新</span>
              <div class="spacer"></div>
              <span>手机维修</span>
            </li>
            <li>
              <span class="title rightArror">运营商</span>
              <div class="spacer"></div>
              <span>合约机</span>
              <div class="spacer"></div>
              <span>手机卡</span>
              <div class="spacer"></div>
              <span>宽带</span>
              <div class="spacer"></div>
              <span>充话费/流量</span>
              <div class="spacer"></div>
              <span>中国电信</span>
              <div class="spacer"></div>
              <span>中国联通</span>
              <div class="spacer"></div>
              <span>中国移动</span>
              <div class="spacer"></div>
              <span>挑靓号</span>
            </li>
            <li>
              <span class="title rightArror">手机配件</span>
              <div class="spacer"></div>
              <span>手机壳</span>
              <div class="spacer"></div>
              <span>贴膜</span>
              <div class="spacer"></div>
              <span>手机存储卡</span>
              <div class="spacer"></div>
              <span>数据线</span>
              <div class="spacer"></div>
              <span>充电器</span>
              <div class="spacer"></div>
              <span>手机耳机</span>
              <div class="spacer"></div>
              <span>创意配件</span>
              <div class="spacer"></div>
              <span>手机饰品</span>
            </li>
            <li>
              <span class="title rightArror">摄影摄像</span>
              <div class="spacer"></div>
              <span>数码相机</span>
              <div class="spacer"></div>
              <span>微单相机</span>
              <div class="spacer"></div>
              <span>单反相机</span>
              <div class="spacer"></div>
              <span>拍立得</span>
              <div class="spacer"></div>
              <span>运动相机</span>
              <div class="spacer"></div>
              <span>摄像机</span>
              <div class="spacer"></div>
              <span>镜头</span>
              <div class="spacer"></div>
              <span>户外器材</span>
            </li>
            <li>
              <span class="title rightArror">数码配件</span>
              <div class="spacer"></div>
              <span>存储卡</span>
              <div class="spacer"></div>
              <span>三脚架/云台</span>
              <div class="spacer"></div>
              <span>相机包</span>
              <div class="spacer"></div>
              <span>滤镜</span>
              <div class="spacer"></div>
              <span>闪光灯/手柄</span>
              <div class="spacer"></div>
              <span>相机清洁/贴膜</span>
              <div class="spacer"></div>
              <span>机身附件</span>
              <div class="spacer"></div>
              <span>镜头附件</span>
            </li>
            <li>
              <span class="title rightArror">影音娱乐</span>
              <div class="spacer"></div>
              <span>耳机/耳麦</span>
              <div class="spacer"></div>
              <span>音箱/音响</span>
              <div class="spacer"></div>
              <span>智能音箱</span>
              <div class="spacer"></div>
              <span>收音机</span>
              <div class="spacer"></div>
              <span>麦克风</span>
              <div class="spacer"></div>
              <span>MP3/MP4</span>
              <div class="spacer"></div>
              <span>专业音频</span>
              <div class="spacer"></div>
              <span>音频线</span>
            </li>
            <li>
              <span class="title rightArror">智能设备</span>
              <div class="spacer"></div>
              <span>智能手表</span>
              <div class="spacer"></div>
              <span>智能手环</span>
              <div class="spacer"></div>
              <span>监控摄像</span>
              <div class="spacer"></div>
              <span>智能出行</span>
              <div class="spacer"></div>
              <span>智能眼镜</span>
              <div class="spacer"></div>
              <span>智能家居</span>
              <div class="spacer"></div>
              <span>健康检测</span>
              <div class="spacer"></div>
              <span>无人机</span>
            </li>
            <li>
              <span class="title rightArror">电子教育</span>
              <div class="spacer"></div>
              <span>学生平板</span>
              <div class="spacer"></div>
              <span>点读机</span>
              <div class="spacer"></div>
              <span>早教</span>
              <div class="spacer"></div>
              <span>录音笔</span>
              <div class="spacer"></div>
              <span>电子书</span>
              <div class="spacer"></div>
              <span>电子词典</span>
              <div class="spacer"></div>
              <span>复读机</span>
              <div class="spacer"></div>
              <span>翻译机</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderList",
    data(){
      return {
        categoryId: -1,
        initCategoryId: -1,
        isChanging: false
      }
    },
    methods:{
      changeCategoryId(event){
        if (event.target.attributes.categoryId){
          const currentCategoryId = event.target.attributes.categoryId.value * 1
          if (currentCategoryId === 0 || currentCategoryId === -1) this.categoryId = currentCategoryId
          else {
            if (this.isChanging) return
            this.isChanging = true
            this.categoryId = currentCategoryId
            setTimeout(()=>this.isChanging=false, 20)
          }
        }
      },
      goTo(event) {
        if (event.target.tagName === "SPAN") {
          this.$router.push({
            name: "search",
            params: {category: ["computer", "book", "phone"][Math.floor(Math.random()*3)]}
          })
        }
      }
    },
    mounted(){
      if (this.$route.name === "home") {
        this.categoryId = 0
        this.initCategoryId = 0
      }
      else this.initCategoryId = -1
    }
  }
</script>

<style lang="less" scoped>
  .header-list {
    @mainColor: #f30213;
    position: relative;
    border-bottom: 3px solid @mainColor;
    margin-bottom: -3px;
    .all-category, .category {
      height: 33px;
      line-height: 33px;
      float: left;
      font-size: 14px;
      cursor: pointer;
    }
    .all-category {
      width: 200px;
      color: #fff;
      height: 36px;
      text-align: center;
      margin-bottom: -30px;
      background-color: @mainColor;
    }
    .category {
      margin: 0 30px;
      font-weight: 700;
      &:hover {
        color: @mainColor;
      }
    }
    .dropdown-list {
      position: absolute;
      box-sizing: border-box;
      top: 36px;
      width: 200px;
      height: 550px;
      font-size: 14px;
      background-color: #fff;
      box-shadow: -1px 3px 12px -1px rgba(0,0,0,.3);
      z-index: 20;
      span {
        &:hover {
          color: @mainColor !important;
          cursor: pointer;
        }
      }
      .category-list-1 {
        position: absolute;
        width: 200px;
        color: #626262;
        margin-top: 10px;
        background-color: #fff;
        li {
          padding-left: 10px;
          &:hover {
            background-color: #e7e7e7;
          }
        }
        span {
          line-height: 29px;
          padding: 2px;
        }
      }
      .sub-list {
        position: absolute;
        top: 10px;
        left: 200px;
        height: 270px;
        width: 720px;
        background-color: #f7f7f7;
        box-shadow: -1px 3px 12px -1px rgba(0,0,0,.3);
        .category-list-2 {
          margin: 15px 0 0 10px;
          color: #666;
          font-size: 14px;
          li {
            line-height: 30px;
            .title {
              display: inline-block;
              width: 80px;
              text-align: right;
              color: #666;
              font-weight: 700;
              margin-right: 15px;
            }
          }
        }
      }
      .sub-list-position(@n) when (@n>=0) {
        .sub-list.sub-@{n} {
          top: unit(((-1+@n)*29), px);
        }
        .sub-list-position(-1+@n)
      }
      .sub-list-position(18)
    }
  }
</style>