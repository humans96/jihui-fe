<template lang="html">
  <div class="order-bod">
    <div class="container status">
      <div class="row">
        <div class="col-sm-4">
          <p>{{statusMap[data.status]}}</p>
        </div>
        <div class="col-sm-8" v-if="data.payWay=='online'">
          <div class="row justify-content-end">
            <div class="col-xs-12 col-sm-4 col-lg-2 butt">
              <el-button plain>取消订单</el-button>
            </div>
            <div class="col-xs-12 col-sm-4 col-lg-2 butt">
              <el-button type="danger" @click="dialog = true">立即付款</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="正在付款" :visible.sync="dialog">
      <h1>2222222</h1>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialog = false">取 消</el-button>
        <el-button type="primary" @click="payed">确 定</el-button>
      </div>
    </el-dialog>

    <div class="container step" v-if="data.status != 'Closed'">
      <el-steps :active="stepIndex[data.status]" align-center>
        <el-step title="下单" :description="data.time" icon="iconfont icon-publishgoods_fill"></el-step>
        <el-step title="待付款" icon="iconfont icon-bu-payment-o"></el-step>
        <el-step title="待审核发货" icon="el-icon-time"></el-step>
        <el-step title="待收货" icon="el-icon-location-outline"></el-step>
        <el-step title="完成" icon="el-icon-check"></el-step>
      </el-steps>
    </div>

    <div class="container products">
      <div class="cart-body">
        <el-table
          ref="multipleTable"
          :data="data.product"
          tooltip-effect="dark"
          style="width: 100%">
          <el-table-column
            label="商品"
            min-width="300"
          >
            <template slot-scope="scope">
              <div class="img-box">
                <img :src="'images/products/' + scope.row.image">              
              </div>
              <div class="title">
                <p class="name">{{scope.row.name}}</p>
                <p class="switch"><span v-for="val in scope.row.switch">{{val}}&nbsp; &nbsp; </span></p>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            label="单价"
            width="120">
            <template slot-scope="scope">
              <p class="sPrice">{{scope.row.price}}元</p>
            </template>
          </el-table-column>
          <el-table-column
            label="数量"
            width="180">
            <template slot-scope="scope">
              <p>{{scope.row.num}}</p>
              <!-- <el-input-number size="mini" v-model="scope.row.num" @change="handleChange(scope.row)" :min="1" :max="scope.row.stock"></el-input-number> -->
            </template>
          </el-table-column>
          <el-table-column
            label="小计"
            width="120">
            <template slot-scope="scope">
              <p class="tPrice">{{(scope.row.price * scope.row.num).toFixed(2)}}元</p>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="container detail">
      <div class="row">
        <div class="col-xs-4 col-md-3 col-xl-2">
          <p class="lab">订单号 :</p>
        </div>
        <div class="col-xs-8 col-md-9 col-xl-10">
          <p class="cont">2018042419561751632</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-4 col-md-3 col-xl-2">
          <p class="lab">支付方式 :</p>
        </div>
        <div class="col-xs-8 col-md-9 col-xl-10">
          <p class="cont">{{data.payWay}}</p>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-4 col-md-3 col-xl-2">
          <p class="lab">配送方式 :</p>
        </div>
        <div class="col-xs-8 col-md-9 col-xl-10">
          <p class="cont">快递配送</p>
        </div>
      </div>
      <div class="row" v-if="data.orderID">
        <div class="col-xs-4 col-md-3 col-xl-2">
          <p class="lab">快递单号 :</p>
        </div>
        <div class="col-xs-8 col-md-9 col-xl-10">
          <p class="cont">{{data.orderID}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-4 col-md-3 col-xl-2">
          <p class="lab">收货信息 :</p>
        </div>
        <div class="col-xs-8 col-md-9 col-xl-10">
          <p class="cont">{{data.address.name}} {{data.address.phone}} {{data.address.address.tier1}} {{data.address.address.tier2}} {{data.address.address.addressDesc}}</p>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-4 col-md-3 col-xl-2">
          <p class="lab">买家留言 :</p>
        </div>
        <div class="col-xs-8 col-md-9 col-xl-10">
          <p class="cont">{{data.attention}}</p>
        </div>
      </div>
      <div class="row" v-if="data.manage">
        <div class="col-xs-4 col-md-3 col-xl-2">
          <p class="lab">商家留言 :</p>
        </div>
        <div class="col-xs-8 col-md-9 col-xl-10">
          <p class="cont">{{data.manage}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import Vue from 'vue';
  import Init from 'components/default/init';
  import $ from 'jQuery';
  import {getOrderInfo} from 'api/product.js';
  export default {
    name: 'order',
    data() {
      return {
        dialog:false,
        data:{
          address:{
            name: '',
            phone: '',
            address:{
              tier1:'',
              tier2:'',
              addressDesc:''
            }
          },
          status:'',
          attention:'',
        },
        statusMap:{
          'Paying':'待支付',
          'Auditing':'待审核发货',
          'Receiving':'待收货',
          'Finish':'已完成',
          'Closed':'已取消'
        },
        stepIndex:{
          'Paying':1,
          'Auditing':2,
          'Finish':4,
        }
      };
    },
    methods: {
      payed(){
        this.dialog = false;
        this.stepIndex = 2;
      }
    },
    created(){
      getOrderInfo({
        id:this.$route.params.id
      }).then(res =>{
        res.data[0].address = eval('(' + res.data[0].address + ')');
        res.data[0].product = eval('(' + res.data[0].product + ')');
        this.data = res.data[0];

        console.log('data',this.data);
      })
    },
    mounted() {
      Init();
    }
  }

</script>

<style lang="scss">


</style>
