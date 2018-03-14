<template lang="html">
  <el-container>
    <el-header class="header">
      <img src="http://127.0.0.1/logo.png"></img>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" active-text-color="#4e97d9" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">产品</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="6">支持</el-menu-item>
        <el-menu-item index="7">关于</el-menu-item>
        <el-menu-item index="3">个人中心</el-menu-item>
        <el-menu-item index="4">
          <!-- <a href="https://www.ele.me" target="_blank"> -->
            订单管理
          <!-- </a> -->
        </el-menu-item>
        <el-menu-item index="5">
          购物车<i class="iconfont icon-publishgoods_fill"></i>
        </el-menu-item>
        
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <div>
        <p>Copyright &copy; 上海集慧科技有限公司 沪ICP备170311111号  <span class="version">Version : v0.1.24</span></p>
      </div>
    </el-footer>
  </el-container>

</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'container',
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>

<style lang="scss">


</style>
