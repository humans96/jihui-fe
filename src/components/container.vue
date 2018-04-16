<template lang="html">
  <el-container>
    <el-header class="header">
      <!-- <div class="head-containder"> -->
        <div class="logo_container">
          <a href="#/">
            <img class="logo" src="images/logo.png">
          </a>        
        </div>
        <el-menu :default-active="activeIndex" :router='true'  class="el-menu-demo" mode="horizontal" active-text-color="#4e97d9" @select="handleSelect">
          <el-menu-item index="/">首页</el-menu-item>
          <!-- <el-menu-item index="/">产品</el-menu-item> -->
          <el-submenu index="/product">
            <template slot="title">产品</template>
            <el-menu-item index="/rift">oculus rift</el-menu-item>
            <el-menu-item index="/product/lily">lily</el-menu-item>
            <!-- <el-menu-item index="2-3">选项3</el-menu-item> -->
            <!-- <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu> -->
          </el-submenu>
          <el-menu-item index="/support">支持</el-menu-item>
          <el-menu-item index="/about">关于</el-menu-item>
          <el-submenu index="10" style="width:90px">
            <template slot="title">
              <img src="images/carousel1.jpg" style="width:40px;height:40px;border-radius: 50px">
            </template>
            <el-menu-item :index="islogin">个人中心</el-menu-item>
            <el-menu-item index="7">
                购物车
                <i class="iconfont icon-publishgoods_fill"></i>
                &nbsp;             
                <el-badge :value="2"></el-badge>
            </el-menu-item>
          </el-submenu>
          <!-- <el-menu-item :index="islogin">个人中心</el-menu-item>
          <el-menu-item index="7">
              购物车<el-badge :value="2" class="item">
              <i class="iconfont icon-publishgoods_fill"></i>
            </el-badge>
          </el-menu-item> -->
          
        </el-menu>
      <!-- </div> -->
    </el-header>
    <el-main style="padding:0">
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
        activeIndex: this.$route.path,
        islogin:'/login'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted(){
      // console.log(this.activeIndex);
      // console.log(this.$route.path);
    }

  }

</script>

<style lang="scss">


</style>
