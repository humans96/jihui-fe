<template lang="html">
  <div class="home">
    <div class="carousel animate-box animate-one">
      <el-carousel :height="carousel">
        <el-carousel-item>
          <img id="carousel-item" src="images/carousel2.jpg">
        </el-carousel-item>
        <el-carousel-item>
          <!-- <img src="images/carousel4.jpg" style="position: relative;"> -->
          <div class="carous-des">
            <p class="des-title">oculus rift</p>
            <p>走进 VR 世界，体验各种游戏大作 - 现在只需
              <span class="price">￥2799</span>
            </p>
            <p>
              <el-button type="primary" round @click="linkto">详细了解</el-button>
            </p>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <img src="images/carousel1.jpg">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="change animate-box">
      <h2>科技改变生活</h2>
      <p class="desc">科技正用你无法想象的速度在改变世界，改变人们的生活</p>
      <div class="ch-container">
        <div class="row">
          <div class="col-md-3 col-xs-12">
            <div class="ch-item">
              <div class="ch-item-bg">
                <i class="iconfont icon-car"></i>
              </div>
              <h3>无人驾驶</h3>
              <p>无人驾驶车将改变人们的出行方式。据估计，无人驾驶车可将每年因交通事故死亡的人数（120万）削减一半。</p>
            </div>
          </div>
          <div class="col-md-3 col-xs-12">
            <div class="ch-item">
              <div class="ch-item-bg">
                <i class="iconfont icon-eye"></i>
              </div>
              <h3>虚拟现实</h3>
              <p>简称VR，创建和体验虚拟世界，有一天你也会有专属自己的虚拟人生。</p>
            </div>
          </div>
          <div class="col-md-3 col-xs-12">
            <div class="ch-item">
              <div class="ch-item-bg">
                <i class="iconfont icon-android"></i>
              </div>
              <h3>机器人</h3>
              <p>未来将会有更多给人们生活带来改变的机器人，甚至机器人会有自己的情感。</p>
            </div>
          </div>
          <div class="col-md-3 col-xs-12">
            <div class="ch-item">
              <div class="ch-item-bg">
                <i class="iconfont icon-fighter-jet"></i>
              </div>
              <h3>无人机</h3>
              <p>人们已经在利用无人机寻找等待救援的远足者和滑雪者，拍摄房屋航空图像，以及调查考古遗址。</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="recommend animate-box">
      <h2>热卖产品</h2>
      <p class="desc">科技，与生活息息相关</p>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-3 col-xs-12 col-md-4">
            <a href="#/rift">
              <el-card>
                <div class="img-container">
                  <img src="images/Oculus Rift.png">
                </div>
                <p class="pro-name">Oculus Rift</p>
                <p class="desc">高性能VR眼镜</p>
                <p class="price">￥1880</p>
              </el-card>
            </a>
          </div>
          <div class="col-xl-3 col-xs-12 col-md-4">
            <a href="#/product/公子小白">
              <el-card>
                <div class="img-container">
                  <img src="images/公子小白.jpg">
                </div>
                <p class="pro-name">公子小白</p>
                <p class="desc">智能情感机器人</p>
                <p class="price">￥1880</p>
              </el-card>
            </a>
          </div>
          <div class="col-xl-3 col-xs-12 col-md-4">
            <a href="#/product/Apple Watch Sport">
              <el-card>
                <div class="img-container">
                  <img src="images/Apple Watch Sport.jpg">
                </div>
                <p class="pro-name">Apple Watch Sport</p>
                <p class="desc">苹果智能运动Watch</p>
                <p class="price">￥2280</p>
              </el-card>
            </a>
          </div>
          <div class="col-xl-3 col-xs-12 col-md-4">
            <a href="#/product/Gear VR">
              <el-card>
                <div class="img-container">
                  <img src="images/Gear VR.jpg">
                </div>
                <p class="pro-name">Gear VR</p>
                <p class="desc">高性能VR眼镜</p>
                <p class="price">￥1280</p>
              </el-card>
            </a>
          </div>
        </div>
      </div>

    </div>

    <div class="readygo">
      <div class="animate-box">
        <h2>集慧</h2>
        <p class="desc">你的智能科技中心</p>
        <h1>
          <a href="#/rift">
            <el-button type="primary" round>抢先体验</el-button>
          </a>
        </h1>
      </div>
      <div class="col-xl-12">
        <img class="animate-box" src="images/display.jpg">
      </div>
    </div>

  </div>

</template>

<script>
  import Vue from 'vue';
  import Init from 'components/default/init';

  export default {
    name: 'home',
    data() {
      return {
        carousel: '' + window.innerWidth / 2.1 + 'px',
        activeIndex: '1',
      };
    },
    methods: {
      linkto() {
        this.$router.push('/rift');
      },
    },
    watch: {},
    mounted() {
      Init();
      window.onresize = () => {
        this.carousel = '' + window.innerWidth / 2.1 + 'px';
      }
    }
  }

</script>

<style lang="scss">


</style>
