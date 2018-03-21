<template lang="html">
<div class="login">
  <div class="login-container">
    <div class="logo">
      <img src="images/logo.png">
    </div>
    <div class="login-box-warp">
      <div class="login-box">
        <h2>密码登录</h2>
        <el-form ref="form" :model="form">
          <span class="input-group">
            <input type="text" v-model="form.account">
            <span class="input-icon">
              <i class="iconfont icon-people"></i>
            </span>
          </span>
          <span class="input-group">
            <input type="password" v-model="form.password" onkeydown='if(event.keyCode==13){this.onSubmit}'>
            <span class="input-icon">
              <i class="iconfont icon-lock"></i>
            </span>
          </span>
          <button class="login-submit" type="submit" @click="onSubmit" style="width:100%">登录</button>

          <p class="login-box-link">
            <a href='/register'>免费注册</a>
            <a href="/forgetPassword">忘记密码</a>
          </p>
        </el-form>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'login',
    data() {
      return {
        form:{
          account:'',
          password:''
        }
      };
    },
    methods: {
      onSubmit(){
        console.log(this.form);
      }
    },
    watch:{
    },
    mounted(){
    }
  }

</script>

<style lang="scss">
  
  
</style>

