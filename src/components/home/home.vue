<template lang="html">
  <el-container>
    <el-carousel indicator-position="outside" height="685px">
      <el-carousel-item>
        <img src="http://127.0.0.1/carousel1.jpg">
      </el-carousel-item>
      <el-carousel-item>
        <img src="http://127.0.0.1/carousel2.jpg">
      </el-carousel-item>
      <el-carousel-item>
        <img src="http://127.0.0.1/carousel3.jpg">
      </el-carousel-item>
    </el-carousel>
  </el-container>

</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'home',
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      
    }
  }

</script>

<style lang="scss">


</style>
