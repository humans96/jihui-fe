<template lang="html">

  <div class="cart">
    <div class="container cart-body">
      <el-table
        ref="multipleTable"
        :data="cartData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"

          width="55">
        </el-table-column>
        <el-table-column
          label="商品"
          min-width="300"
        >
          <template slot-scope="scope">
            <div class="img-box">
              <img :src="'images/products/' + scope.row.image">              
            </div>
            <div class="title">
              <p class="name">{{scope.row.pName}}</p>
              <p class="switch"> <span v-for="val in scope.row.switch">{{val}}&nbsp; &nbsp; </span></p>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="单价"
          width="120">
          <template slot-scope="scope">
            <p class="sPrice">{{scope.row.sPrice}}元</p>
          </template>
        </el-table-column>
        <el-table-column
          label="数量"
          width="180">
          <template slot-scope="scope">
            <el-input-number size="mini" v-model="scope.row.num" @change="handleChange(scope.row)" :min="1" :max="scope.row.stock"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column
          label="小计"
          width="120">
          <template slot-scope="scope">
            <p class="tPrice">{{(scope.row.sPrice * scope.row.num).toFixed(2)}}元</p>
          </template>
        </el-table-column>
        <el-table-column 
        label="操作"
        width="100">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="container sum">
      <div class="row">
        <div class="col-lg-9 col-md-8 col-sm-8 col-xs-6 total">
          <p>共 {{multipleSelection.length}} 件商品， 合计 : <span class="price">{{totalPrice}}元</span>  </p>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 buy-btn">
          <p><el-button type="danger" @click="goSettlement">去结算</el-button></p>
        </div>
      </div>
    </div>
  </div>

 
</template>

<script>
  import Vue from 'vue';
  import Init from 'components/default/init';
  import $ from 'jQuery';
  import {getCart, deleteCart} from 'api/user.js';

  export default {
    name: 'cart',
    data() {
      return {
        cartData:null,
        multipleSelection: ''
      };
    },
    computed:{
      totalPrice:function(){
        if(this.multipleSelection.length>1){
          return  this.multipleSelection.reduce(function(p, c){
            return (p.num * p.sPrice + c.num * c.sPrice).toFixed(2);
          })
        }
        if(this.multipleSelection.length == 1){
          return (this.multipleSelection[0].num * this.multipleSelection[0].sPrice).toFixed(2);
        }
        else {
          return 0;
        }
      }
    },
    methods: {
      handleSelectionChange(val) {
        console.log(val)
        this.multipleSelection = val;
      },
      handleChange(value) {
        console.log(this.multipleSelection);
        // console.log(value.num);
        // console.log(row);
      },
      handleDelete(index, row) {
        this.$confirm('确定将此商品移出购物车吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            deleteCart({
              id: row.id
            }).then(r =>{
              getCart({
                user :$.cookie('userName')
              }).then(res =>{
                res.data.forEach(item =>{
                  item.switch = eval('(' + item.switch + ')');
                })
                this.cartData = res.data;
                console.log(this.cartData);
              })
            })
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {       
        });
        console.log(index, row);
      },
      goSettlement(){
        if(this.multipleSelection.length < 1){
          this.$message({
            type: 'error',
            message: '未选择商品!'
          });
        }
        else{
          sessionStorage.setItem("buy",JSON.stringify(this.multipleSelection));
          this.$router.push('/buy');
        }
      }
    },
    created(){
      getCart({
        user :$.cookie('userName')
      }).then(res =>{
        if(res.data.length>=1){
          res.data.forEach(item =>{
            item.switch = eval('(' + item.switch + ')');
          })
        }
        this.cartData = res.data;
      })
    },
    mounted() {
      Init();
    }
  }

</script>

<style lang="scss">


</style>
