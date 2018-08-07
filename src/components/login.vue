<template lang="html">
  <div class="login">
    <div class="login-container">
      <div class="logo">
        <a href="#/">
          <img src="images/logo.png">
        </a>
      </div>
      <div class="login-box-warp">
        <div class="login-box">
          <h2>密码登录</h2>
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

          <span class="input-group">
            <input type="text" id="input">
            <input type="button" id="code" @click="createCode()" />
          </span>

          <button class="login-submit" id="login-btn" type="submit" @click="onSubmit" style="width:100%">登录</button>

          <p class="login-box-link">
            <a href='#/register'>免费注册</a>
            <a href="#/forgetPassword">忘记密码</a>
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue';
  import $ from 'jQuery';
  import {
    login
  } from 'api/user.js';

  export default {
    name: 'login',
    data() {
      return {
        form: {
          account: '',
          password: '',
          code: ''
        }
      };
    },
    methods: {
      onSubmit() {
        if (this.form.account == '' || this.form.password == '') {
          this.$notify({
            title: '警告',
            message: '用户名和密码不能为空！',
            type: 'warning',
            duration: 1500
          });
        } else {
          let inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写
          if (inputCode.length <= 0) { //若输入的验证码长度为0  
            this.$notify.error({
              title: "请输入验证码！",
              duration: 1500
            });
          } else if (inputCode != this.code) { //若输入的验证码与产生的验证码不一致时  
            this.$notify.error({
              title: "验证码输入错误！",
              duration: 1500
            });
            this.createCode(); //刷新验证码  
            document.getElementById("input").value = ""; //清空文本框  
          } else { //输入正确时  
            login(this.form).then(res => {
              if (typeof (res.message) == 'string') {
                this.$notify.error({
                  title: res.message,
                  duration: 1500
                });
                this.createCode(); //刷新验证码  
                document.getElementById("input").value = ""; //清空文本框  
              } else {
                $.cookie('token', res.uuid, {
                  expires: .2
                });
                $.cookie('userName', res.message.name, {
                  expires: .2
                });
                this.$router.push('/');
              }
            });
          }
        }
      },
      createCode() {
        this.code = "";
        var codeLength = 4; //验证码的长度  
        var checkCode = document.getElementById("code");
        var random = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
          'M', 'N', 'P', 'Q', 'R',
          'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数  
        for (var i = 0; i < codeLength; i++) { //循环操作  
          var index = Math.floor(Math.random() * 34); //取得随机数的索引（0~35）  
          this.code += random[index]; //根据索引取得随机数加到code上  
        }
        checkCode.value = this.code; //把code值赋给验证码  
      }
    },
    created() {
      document.onkeydown = function (e) {
        if (!e) e = window.event;
        if ((e.keyCode || e.which) == 13) {
          document.getElementById('login-btn').click();
        }
      }
    },
    mounted() {
      this.createCode();
    }
  }

</script>

<style lang="scss">


</style>
