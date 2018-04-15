<template lang="html">
  <div class="about">
    <div class="about-us">
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

    <div>
      <div id="map"></div>
    </div>
  </div>
</template>
    
<!-- <script type="text/javascript" src="http://api.map.baidu.com/api?v=3.0&ak=rT6kUh9LqN6G5HkdKndFR7Gmx31FW84u"></script> -->
<script>
  import Vue from 'vue';

  export default {
    name: 'about',
    data() {
      return {
        form:{
          account:'',
          password:''
        }
      };
    },
    methods: {
      
    },
    mounted(){  
      // setTimeout(function() {
        // var map = new BMap.Map('map');
        // var point = new BMap.Point(121.609503, 31.204824);
        // map.centerAndZoom(point, 15);  // 初始化地图,设置中心点坐标和地图级别
        // map.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的
        // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        // // map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT}));// 左上角，添加比例尺
        // map.addControl(new BMap.NavigationControl());  //左上角，添加默认缩放平移控件

        // var marker = new BMap.Marker(point);
        // map.addOverlay(marker);              // 将标注添加到地图中
        // map.centerAndZoom(point, 15);
      // }, 500);
    }
  }

</script>

<style lang="scss">
  
  
</style>
      
      