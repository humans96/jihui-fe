<template lang="html">
  <div class="about">
    <div class="about-us animate-box animate-one">
      <h2>关于我们</h2>
      <div class="img-box">
        <img src="images/about.jpg">
      </div>

      <hr>

      <div class="desc">
        <p>集慧科技公司是一个诞生于2018年VR、机器人浪潮来袭前际，总部位于中国上海。</p>
        <p>我们是一群热衷于智能科技的极客、设计师和发烧友，对未来充满无限创想、野心和激情。“在最好的时光里，撒野去”是我们所倡导的品牌文化，号召属于这个时代的年轻人，不羁束缚、随心逐梦！</p>
        <p>比普通创客幸运一些的是，我们成立之初，就在语义技术、图数据管理和供应链方面拥有比较丰富的经验和积累，并且、汇聚整合了完善的生产链条和多元的渠道资源，我们愿意拥抱大胆有趣的产品理念，为用户创造更多的惊喜！</p>
      </div>
    </div>

    <div class="contact-us">
      <h2 class="animate-box">联系我们</h2>
      <p class="desc animate-box">成为我们的合作伙伴，一起感受科技的魅力</p>
      <div class="row contact-box">
        <div class="contact col-md-6 col-xs-12 animate-box">
          <p>
            <strong>电话&传真:</strong> 15262051386 </p>
          <p>
            <strong>电子邮件:</strong> humeng_sq@163.com </p>
          <p>
            <strong>公司地址:</strong> 江苏师范大学泉山校区 </p>
        </div>
        <div class="map-box  col-md-6 col-xs-12 animate-box">
          <div id="map"></div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
  import Vue from 'vue';
  import Init from 'components/default/init';

  export default {
    name: 'about',
    data() {
      return {
        form: {
          account: '',
          password: ''
        }
      };
    },
    methods: {

    },
    mounted() {
      Init();
      setTimeout(function () {
        var map = new BMap.Map('map');
        var point = new BMap.Point(117.188088, 34.203394);
        map.centerAndZoom(point, 15); // 初始化地图,设置中心点坐标和地图级别
        map.setCurrentCity("徐州"); // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        // map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT}));// 左上角，添加比例尺
        map.addControl(new BMap.NavigationControl()); //左上角，添加默认缩放平移控件

        var marker = new BMap.Marker(point);
        map.addOverlay(marker); // 将标注添加到地图中
        map.centerAndZoom(point, 15);
      }, 500);
    }
  }

</script>

<style lang="scss">


</style>
