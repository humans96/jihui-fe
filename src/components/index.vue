<template lang="html">
  <div class="box">
    <div class="conversation">
      <div class="Head">
        <img src="src/assets/images/bg1.jpg">
      </div>
      <div class="pop">
        <em class="triangle"></em>
        <span class="triangle"></span>
        <span class="content">
          如果是一个正方形，我们写边时，会用到border，但我们这里讨论的三角形本身就是border，不可能再给border添加border属性，所以我们需要用到其他办法。最容易想到的，是叠加层。思路是将两个三角形叠加在一起，外层三角形稍大一些，颜色设置成边框所需的颜色；内层三角形绝对定位在里面。整体就能形成带边框三角形的假象。这里就涉及到一个绝对定位的问题，上、下、左、右四种方向的三角形相对于父级定位是不同的。首先我们来看下，当定位都为0（left:0px;
          top:0px;）时，会发生什么。
        </span>
      </div>
      <div class="clear">
      </div>
    </div>
    <div class="conversation">
      <div class="Head">
        <img src="src/assets/images/bg1.jpg">
      </div>
      <div class="pop">
        <em class="triangle"></em>
        <span class="triangle"></span>
        <span class="content">
          如果是一个正方形，我们写边时，会用到border，但我们这里讨论的三角形本身就是border，不可能再给border添加border属性，所以我们需要用到其他办法。最容易想到的，是叠加层。思路是将两个三角形叠加在一起，外层三角形稍大一些，颜色设置成边框所需的颜色；内层三角形绝对定位在里面。整体就能形成带边框三角形的假象。这里就涉及到一个绝对定位的问题，上、下、左、右四种方向的三角形相对于父级定位是不同的。首先我们来看下，当定位都为0（left:0px;
          top:0px;）时，会发生什么。
        </span>
      </div>
      <div class="clear">
      </div>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'hea',
    data() {
      return {
        a: 1
      };
    },
    methods: {}
  }

</script>

<style lang="scss">
  .box {
    padding: 20px;
  }

  .clear {
    clear: both;
  }

  .conversation {
    width: 80%; // background-color: red;
    margin: 20px auto;
    .Head img {
      width: 50px;
      height: 50px;
    }
    .Head {
      float: left;
    }
    .pop {
      padding: 15px;
      width: 70%; // height: 200px;
      float: left;
      margin-left: 24px; // margin-top: -20px;
      border-radius: 5px; // background-color: gray;
      border: 1px solid #333;
      span.triangle {
        border-width: 12px;
        border-color: transparent #FFF transparent transparent;
        left: 2px;
        top: 1px;
      }
      em.triangle {
        border-width: 13px;
        border-color: transparent #333 transparent transparent;
      }
      .triangle {
        margin-left: -41px; // margin-top: -4px;
        display: block;
        float: left; // left: -70%;
        position: relative;
        ;
        border-style: solid dashed dashed dashed;
        font-size: 0;
        line-height: 0;
      }
      .content {
        padding: 10px;
      }
    }
  }

</style>
