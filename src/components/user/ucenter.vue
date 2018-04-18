<template lang="html">

  <div class="ucenter">
      <el-menu
      :default-active="active"
      class="el-menu-vertical-demo dashbord"
      @select="handleSelect"
      :default-openeds="['1', '2']"
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">human</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">个人中心</el-menu-item>
          <el-menu-item index="1-2">我的订单</el-menu-item>
          <el-menu-item index="1-3">我的优惠券</el-menu-item>
          <el-menu-item index="1-4">收货地址</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">账号安全</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">修改密码</el-menu-item>
          <el-menu-item index="2-2">绑定邮箱</el-menu-item>
          <el-menu-item index="2-3">绑定手机号</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <div class="u-body">
      <div class="index-1-1" v-if="active == '1-1'">
        <div class="head-card">
          <img src="images/carousel1.jpg">
          <p class="name">human</p>
        </div>
        <div class="row body-card">
          <div class="col-xs-4 col-sm-4 offset-xs-2 offset-sm-1">
            <p class="num">1</p>
            <p class="desc">待支付</p>
          </div>
          <div class="col-xs-4 col-sm-2">
            <p class="num">0</p>
            <p class="desc">待收货</p>
          </div>
          <div class="col-xs-12 col-sm-4">
            <p class="num">0 件</p>
            <p class="desc">购物车</p>
          </div>
        </div>
        <div class="menu-card">
          <a href="./"><p><i class="iconfont icon-order"></i> 查看所有订单 <span class="linkto"> > </span></p></a>          
          <a href="./"><p><i class="iconfont icon-bookmark"></i> 我的优惠券 <span class="linkto"> > </span></p> </a>         
          <a href="./"><p><i class="iconfont icon-map"></i> 收货地址 <span class="linkto"> > </span></p></a>       
          <a href="./"><p><i class="iconfont icon-payment"></i> 消费明细 <span class="linkto"> > </span></p></a>          
          <a href="./"><p><i class="iconfont icon-edit"></i> 修改个人信息 <span class="linkto"> > </span></p></a>          
        </div>
      </div>

      <div class="index-1-2" v-if="active == '1-2'">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部订单" name="first">全部订单</el-tab-pane>
          <el-tab-pane label="待支付" name="second">待支付</el-tab-pane>
          <el-tab-pane label="待收货" name="third">待收货</el-tab-pane>
          <el-tab-pane label="已关闭" name="fourth">已关闭</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
  

</template>
    
<script>
  import Vue from 'vue';
  import Init from 'components/default/init';
  // import UcenterBord from 'components/user/dashbord.vue';
  

  export default {
    name: 'ucenter',
    data() {
      return {
        active: '1-2',
        activeName: 'second'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        this.active = key;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    mounted(){
      Init();
    },
    // components: { UcenterBord }
  }

</script>

<style lang="scss">
  
  
</style>
    
    