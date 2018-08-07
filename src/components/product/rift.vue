<template lang="html">
  <div class="rift">
    <div class="rift-des">
      <div class="img-box">
        <img src="images/carousel4.jpg">
      </div>
      <div class="des-box animate-box animate-one">
        <p class="des-title">oculus rift</p>
        <p>畅享 VR，仅需
          <span class="price">￥2799</span>
        </p>
        <p>
          <el-button type="primary" round @click="addcar">加入购物车</el-button>
        </p>
      </div>
    </div>

    <div class="vr-door">
      <div class="img-box">
        <img src="images/rift-show1.jpg" id="show" class="animated infinite pulse">
      </div>
      <div class="des-box">
        <div class="left-des des">
          <p>走进 Rift 世界</p>
        </div>
        <div class="right-des des">
          <p>独一无二的 Oculus Rift</p>
          <p>
            <img src="images/rift-show2.png">
          </p>
        </div>
      </div>
    </div>

    <div class="produce">
      <div class="intro-item">
        <div class="img-box">
          <img class="animate-box" src="images/produce1.jpg">
        </div>
        <p class="pro-title animate-box">Rift 为你开启崭新体验</p>
      </div>

      <div class="intro-item item1">
        <div class="img-box">
          <img class="animate-zoomIn" src="images/produce2.jpg">
        </div>
        <div class="tip animate-fadeInRight">
          <div class="tip-icon">
            <img src="images/produce-icon1.png">
          </div>
          <div class="des-box">
            <p class="title">智能设计</p>
            <p class="content">轻盈、便携、舒适。当你置身于虚拟现实中时，头戴设备将不复存在，你会进入一个神奇的世界。</p>
          </div>
        </div>
      </div>

      <div class="intro-item item2">
        <div class="img-box">
          <img class="animate-rollIn" src="images/produce3.jpg">
        </div>
        <div class="tip animate-fadeInLeft">
          <div class="tip-icon">
            <img src="images/produce-icon2.png">
          </div>
          <div class="des-box">
            <p class="title">直观控制</p>
            <p class="content">无论是在法师对决中召唤火球，还是雕琢你的下一个艺术形象，Touch 都能施展魔法，让你在虚拟现实中切实感受到手的存在。</p>
          </div>
        </div>
      </div>

      <div class="intro-item item3">
        <div class="img-box">
          <img class="animate-fadeInUp" src="images/produce4.jpg">
        </div>
        <div class="tip animate-fadeInUp animate-delay">
          <div class="tip-icon">
            <img src="images/produce-icon3.png">
          </div>
          <div class="des-box">
            <p class="title">卓越音效</p>
            <p class="content">所听和所见一样重要。Rift 的集成式 360° 环绕立体声音效让虚拟现实的沉浸式体验上升到新的高度。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="move">
      <p class="title animate-box">游戏区移动</p>
      <p class="content animate-box">想象一下在虚拟环境中 360 度全方位走动的场景。Rift 通过六个自由度支持完整的游戏区移动体验，带来无人能及的真实密室逃脱体验。</p>
      <img class="animate-box" src="images/move.jpg">
    </div>

    <div class="game">
      <div class="img-box">
        <img class="animate-box" src="images/game.jpg">
      </div>
      <div class="des-box animate-box">
        <p class="name">Oculus 体验</p>
        <p class="price">无穷 VR 世界等你体验</p>
        <p>
          <button @click="addcar">立即探索</button>
        </p>
      </div>
    </div>


    <div class="demand">
      <div class="animate-box">
        <p class="title">电脑推荐配置</p>
        <p class="content">电脑是 Rift 的引擎。为确保各类游戏和体验的出色表现，我们推荐使用以下规格的硬件。</p>
      </div>

      <div class="img-box">
        <img class="animate-box" src="images/demand.png">
      </div>
    </div>

    <div class="package">
      <div class="img-box">
        <img class="animate-box" src="images/package.jpg">
      </div>
      <div class="des-box animate-box">
        <p class="head">套盒中包含哪些部件？</p>
        <p class="title">1.头戴设备</p>
        <p class="content">柔软舒适的头戴设备、顶尖的显示设备以及自定义的光学器件，可提供让人难以置信的视觉保真度和宽阔的视野。</p>
        <p class="title">2.Touch 控制器</p>
        <p class="content">Touch 是一对跟踪式控制器，能够在虚拟现实中模拟真实的双手，这对虚拟的双手就跟你在现实世界中的双手一样。</p>
        <p class="title">3.两个传感器</p>
        <p class="content">Rift 传感器会追踪 IR LED 的光点，无论你是坐下还是站立，都能将你的运动转化到虚拟现实中。</p>
      </div>
    </div>

    <div class="buy">
      <div class="img-box">
        <img class="animate-box" src="images/buy.jpg">
      </div>
      <div class="des-box animate-box">
        <p class="name">Oculus Rift</p>
        <p class="price">￥2799</p>
        <p>
          <el-button type="primary" round @click="addcar">加入购物车</el-button>
        </p>
      </div>
    </div>

  </div>

</template>

<script>
  import Vue from 'vue';
  import $ from 'jQuery';
  import Init from 'components/default/init';
  import {
    getProduct,
    addCart,
    placeOrder
  } from 'api/product.js';

  export default {
    name: 'rift',
    data() {
      return {
        form: {
          account: '',
          password: ''
        }
      };
    },
    methods: {
      getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();

        function objec(val) {
          if (val >= 1 && val <= 9) {
            val = "0" + val;
          }
          return val;
        }
        month = objec(month);
        strDate = objec(strDate);
        h = objec(h);
        m = objec(m);
        s = objec(s);
        var currentdate = year + seperator1 + month + seperator1 + strDate + ' ' + h + ':' + m + ':' + s;
        return currentdate;
      },
      addcar() {
        if ($.cookie('userName')) {
          addCart({
            user: $.cookie('userName'),
            product: 8,
            num: 1,
            time: this.getNowFormatDate(),
            switch: []
          })
          location.reload();
        } else {
          this.$router.push('/login');
        }
      }
    },
    mounted() {

      Init();
      let n = 1;
      setInterval(function () {
        n == 6 ? n = 1 : n++;
        $("#show").attr('src', 'images/rift-show' + n + '.jpg');
      }, 1500);
    }
  }

</script>

<style lang="scss">


</style>
