<template lang="html">
  <div>
    <div class="detail-container container">
      <div class="row">
        <div class="prod-demo col-lg-6 col-xs-12">
          <div class="bg">
            <div class="bg_left">
              <div class="show">
                <img :src="'images/products/' + product.name + '/' + product.switch.image[0]">
                <div class="mask"></div>
              </div>
              <div class="smallshow">
                <p class="prev prevnone"></p>
                <div class="middle_box">
                  <ul class="middle">
                    <li v-for="val in product.switch.image">
                      <img :src="'images/products/' + product.name + '/' + val" alt="">
                    </li>
                  </ul>
                </div>
                <p class="next"></p>
              </div>
            </div>
            <div class="bg_right">
              <div class="bigshow">
                <div class="bigitem">
                  <img :src="'images/products/' + product.name + '/' + product.switch.image[0]">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="detail col-lg-6 col-xs-12">
          <h1>{{product.name}}</h1>
          <div class="price">
            <span class="num">{{product.price}}元</span>
          </div>

          <div class="form-group" v-for="(v,k,index) in product.switch" v-if="k!='image'">
            <p>{{k}}</p>
            <el-radio-group v-model="switchRadio[index]" size="medium" @change="changeSwitch(k,v)">
              <el-radio-button v-for="val in v" :key="val" :label="val"></el-radio-button>
            </el-radio-group>
          </div>

          <div class="form-group">
            <p>数量</p>
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="product.stock"></el-input-number>
          </div>

          <p>库存 {{product.stock}} 件</p>

          <div class="form-group">
            <el-button type="primary" @click="addCart">加入购物车</el-button>
            <el-button type="danger" @click="order">立即购买</el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="content-body">
      <div class="container">
        <el-row :gutter="40">
          <el-col :xs="24" :md="18" class="introduce">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane class="details" label="详情" name="first">
                <div class="img-box">
                  <img v-for="val in product.detail" :src="'images/products/' + product.name + '/' + val">
                </div>
              </el-tab-pane>
              <el-tab-pane v-if="product.function.length>0" class="function" label="功能" name="second">
                <div class="img-box">
                  <img v-for="val in product.function" :src="'images/products/' + product.name + '/' + val">
                </div>
              </el-tab-pane>
              <el-tab-pane label="包装" name="third" v-if="product.packing.length>0" class="packing">
                <div class="img-box">
                  <img v-for="val in product.packing" :src="'images/products/' + product.name + '/' + val">
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-col>
          <el-col :md="6" class="recommend hidden-sm-and-down">
            <p style="font-size: 24px;text-align: center;">推荐</p>
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
          </el-col>
        </el-row>
      </div>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue';
  import mag from 'components/default/show';
  import {
    getProduct,
    addCart,
    placeOrder
  } from 'api/product.js';

  export default {
    name: 'demo',
    data() {
      return {
        activeIndex: '',
        switchRadio: ['', '', '', '', '', ''],
        num1: 1,
        activeName: 'first',
        product: {
          detail: [],
          switch: {
            image: ''
          },
          function: [],
          packing: []
        },
        name: this.$route.params.name
      };
    },
    watch: {
      "$route.params.name": "initial"
    },
    methods: {
      initial() {
        getProduct({
          name: this.$route.params.name
        }).then(res => {
          res.data[0].detail = eval('(' + res.data[0].detail + ')')
          res.data[0].function = eval('(' + res.data[0].function+')');
          res.data[0].packing = eval('(' + res.data[0].packing + ')');
          res.data[0].switch = eval('(' + res.data[0].switch+')');
          Object.keys(res.data[0].switch).map((k, v) => {
            if (k != 'image') {
              this.switchRadio[v] = res.data[0].switch[k][0];
            }
          })
          // console.log(product)
          this.product = res.data[0];
          console.log(this.product);
          console.log(this.switchRadio);
        })
      },
      radiochange(val) {
        console.log(val);
        // console.log(k);
        console.log(this.switchRadio);
      },
      getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();

        function objec(val) {
          if (val >= 1 && val <= 9) {
            val = "0" + val;
          }
          return val;
        }
        month = objec(month);
        strDate = objec(strDate);
        h = objec(h);
        m = objec(m);
        s = objec(s);
        var currentdate = year + seperator1 + month + seperator1 + strDate + ' ' + h + ':' + m + ':' + s;
        return currentdate;
      },
      handleChange(value) {
        if (value == this.product.stock) {
          this.$notify.error({
            title: "最大数量为库存量",
            duration: 1500
          });
        }
        console.log(value);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      addCart() {
        if ($.cookie('userName')) {
          let swi = this.switchRadio.filter(v => {
            return v != ''
          })
          addCart({
            user: $.cookie('userName'),
            product: this.product.id,
            num: this.num1,
            time: this.getNowFormatDate(),
            switch: JSON.stringify(swi)
          })
          location.reload();
        } else {
          this.$router.push('/login');
        }
      },
      changeSwitch(val, v) {
        console.log(this.switchRadio);
      },
      order() {
        if ($.cookie('userName')) {
          let swi = this.switchRadio.filter(v => {
            return v != ''
          })
          let proData = [{
            user: $.cookie('userName'),
            product: this.product.id,
            pName: this.product.name,
            num: this.num1,
            image: this.product.image,
            sPrice: this.product.price,
            stock: this.product.stock,
            switch: swi,
            time: this.getNowFormatDate()
          }]
          sessionStorage.setItem("buy", JSON.stringify(proData));
          this.$router.push('/buy');
        } else {
          this.$router.push('/login');
        }
      }
    },
    created() {
      // console.log(this.name);
      this.initial();
    },
    mounted() {
      // Show();
      setTimeout(function () {
        $(function () {
          var obj = new mag('.show', '.bigshow', '.smallshow', '.mask', '.bigitem');
          obj.init();
        });
      }, 300);
    }
  }

</script>

<style lang="scss">


</style>
