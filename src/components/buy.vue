<template lang="html">

  <div class="buy-body">
    <div class="container">
      <p class="title">收货地址   <el-button type="success"  @click="addAddress">添加地址</el-button></p>
      <div class="address-container">
        <div class="address-box"  v-for="(item,index) in addressList" @click="chose(item,$event)">
          <div class="action">
            <i class="el-icon-edit" @click="editAdress(item,index)"></i>
            <i class="el-icon-delete" @click="deleteAdress(item)"></i>
          </div>
          <p class="name">{{item.name}}</p>
          <p class="phone">{{item.phone}}</p>
          <p class="address">{{item.address.tier1}}  {{item.address.tier2}} {{item.address.addressDesc}}</p>
        </div>
      </div>
      <el-dialog title="收货地址" :visible.sync="addressDialog">
        <el-form :model="address" :rules="rules">
          <el-form-item label="收货人姓名" prop="name" :label-width="formLabelWidth" :required="true">
            <el-input v-model="address.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="收货人手机号" prop="phone" :label-width="formLabelWidth" :required="true">
            <el-input v-model="address.phone" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="收件人地址" prop="address.tier2" :label-width="formLabelWidth" :required="true">
            <el-select v-model="address.address.tier1" placeholder="请选择地址" @change="getCity1">
              <el-option 
              v-for="item in cityList1"
              :key="item.value"
              :label="item.text"
              :value="item.text"></el-option>
            </el-select>
            <el-select v-model="address.address.tier2" placeholder="请选择地址">
              <el-option 
              v-for="item in cityList2.children"
              :key="item.value"
              :label="item.text"
              :value="item.text"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="详细地址" prop="address.addressDesc" :label-width="formLabelWidth" :required="true">
            <el-input type="textarea" v-model="address.address.addressDesc"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addressDialog = false">取 消</el-button>
          <el-button type="primary" @click="addrConf">确 定</el-button>
        </div>
      </el-dialog>
      <hr>

      <p class="title">支付方式 <span class="buy-way ischose" @click="buyWay('货到付款',$event)">货到付款</span>  <span class="buy-way" @click="buyWay('在线支付',$event)">在线支付</span></p>
      <hr>

      <p class="title">配送方式 <span class="distribution">快递配送（免运费）</span> </p>
      <hr>

      <p class="title">商品</p>
      <div class="cart-body">
        <el-table
          :show-header="false"
          ref="multipleTable"
          :data="data"
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
              <p>{{scope.row.num}}</p>
              <!-- <el-input-number size="mini" v-model="scope.row.num" @change="handleChange(scope.row)" :min="1" :max="scope.row.stock"></el-input-number> -->
            </template>
          </el-table-column>
          <el-table-column
            label="小计"
            width="120">
            <template slot-scope="scope">
              <p class="tPrice">{{(scope.row.sPrice * scope.row.num).toFixed(2)}}元</p>
            </template>
          </el-table-column>
        </el-table>
        <el-input type="textarea" v-model="tip" placeholder="给商家留言" ></el-input>
      </div>
      <!-- <hr> -->
      
      <div class="row" style="margin-top: 20px">
        <div class="col-md-8 col-sm-8 col-xs-6 total">
          <p>共 {{data.length}} 件商品， 合计 : <span class="price">{{totalPrice}}元</span>  </p>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12 buy-btn">
            
        <p><el-button type="info" onclick="javascript:window.location='#/cart'">返回购物车</el-button><el-button type="danger" @click="pay">提交订单</el-button></p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue';
  import Init from 'components/default/init';
  import {city} from 'components/default/city';
  import $ from 'jQuery';
  import {
    getAddress,
    deleteCart,
    addAddress,
    deleteAddress, 
    editAddress
  } from 'api/user.js';
  import {
    placeOrder
  } from 'api/product.js';

  export default {
    name: 'buy',
    data() {
      let validatePhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
        if (!myreg.test(value)) {  
          return callback(new Error('手机号码格式错误'));
          this.$confirm('手机号码格式错误，请重新填写！', '提示', {
            confirmButtonText: '确定',
            type: 'warning'
          })
        } else {  
          callback();
        }  
      };
      return {
        data:[],
        tip:'',
        formLabelWidth:'120px',
        addressDialog:false,
        // addressChose:'',
        addressList:[],
        rules: {
          phone:[
            { validator: validatePhone, trigger: 'blur' }
          ],
        },
        address:{
          name: '',
          phone: '',
          address:{
            tier1:'',
            tier2:'',
            addressDesc:''
          }
        },
        payWay:'货到付款',
        isaddorEdit:'',
        oldAddress:{},
        oldIndex:'',
        chosed:'',
        cityList1:city,
        cityList2:'',
      };
    },
    computed:{
      totalPrice:function(){
        if(this.data.length > 1){
          return  this.data.reduce(function(p, c){
            return (p.num * p.sPrice + c.num * c.sPrice).toFixed(2);
          })
        }
        else if(this.data.length == 1){
          return (this.data[0].num * this.data[0].sPrice).toFixed(2);
        }else {
          return 0;
        }
      }
    },
    methods: {
      addrConf(){
        if(this.address.name == ''|| this.address.phone == '' || this.address.address.tier2 == ''|| this.address.address.addressDesc==''){
          this.$confirm('请填写完整的信息！', '提示', {
            confirmButtonText: '确定',
            type: 'warning'
          })
        }
        else {
          if(this.isaddorEdit == 'add'){
            addAddress({
              name:$.cookie('userName') ,
              address:this.address
            }).then(res =>{
              this.chosed = this.address;
              getAddress({
                name:$.cookie('userName')
              }).then(res =>{
                if(res.address.length >= 1){
                  res.address = eval(res.address);
                  this.oldAddress =  JSON.parse(JSON.stringify(res.address));
                  this.addressList = res.address;
                }
                else{
                  this.addressList = [];
                }
              })
            })
          }
          else{
            editAddress({
              name:$.cookie('userName'),
              old: this.oldAddress[this.oldIndex],
              new:this.address
            }).then(res =>{
              getAddress({
                name:$.cookie('userName')
              }).then(res =>{
                if(res.address.length >= 1){
                  res.address = eval(res.address);
                  this.oldAddress =  JSON.parse(JSON.stringify(res.address));
                  this.addressList = res.address;
                }
                else{
                  this.addressList = [];
                }
              })
            })
          }
          this.addressDialog = false;
        }
      },
      buyWay(val,el){
        this.payWay = val;
        $('.buy-way').removeClass('ischose');
        $($(el.currentTarget)[0]).addClass('ischose');
        console.log(this.payWay);
      },
      chose(val,ev){
        this.chosed = val;
        $('.address-box').removeClass('ischose');
        $($(ev.currentTarget)[0]).addClass('ischose');
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
        function objec(val){
          if(val >=1 && val <=9){
            val = "0" + val;
          }
          return val;
        }
        month = objec(month);
        strDate = objec(strDate);
        h = objec(h);
        m = objec(m);
        s = objec(s);
        var currentdate = year + seperator1 + month + seperator1 + strDate + ' ' + h +':' + m +':' + s ;
        return currentdate;
      },
      pay(){
        if(this.chosed){
          this.data.forEach(item =>{
            deleteCart({
              id: item.id
            })
          })
          let product = this.data.map(item =>({
            id:item.id,
            name:item.pName,
            num:item.num,
            switch:item.switch,
            image:item.image,
            price:item.sPrice,
            stock:item.stock
          }));
          placeOrder({
            user:$.cookie('userName'),
            product:product,
            time:this.getNowFormatDate(),
            status:this.payWay == '货到付款'? 'Auditing':'Paying',
            address: this.address,
            attention:this.tip,
            price:this.totalPrice,
            payWay: this.payWay
          }).then(res =>{
            this.$router.push('/ucenter');
          })    
        }
        else {
          this.$confirm('请选择收货地址！', '提示', {
            confirmButtonText: '确定',
            type: 'warning'
          })
        } 
      },
      addAddress(){
        this.address = {
          name: '',
          phone: '',
          address:{
            tier1:'',
            tier2:'',
            addressDesc:''
          }
        },
        this.isaddorEdit = 'add';        
        this.addressDialog = true;
      },
      editAdress(val,index){
        this.isaddorEdit = 'edit';
        this.address = val;
        this.oldIndex = index;
        this.addressDialog = true;
      },
      deleteAdress(val){
        deleteAddress({
          name:$.cookie('userName') ,
          address:val
        }).then(res =>{
          getAddress({
            name:$.cookie('userName')
          }).then(res =>{
            if(res.address.length >= 1){
              res.address = eval(res.address);
              this.oldAddress =  JSON.parse(JSON.stringify(res.address));
              this.addressList = res.address;
            }
            else{
              this.addressList = [];
            }
          })
        })
      },
      getCity1(v){
        this.cityList2 = city.find(item =>{
          return item.text == v
        });
      },
    },
    created() {
      this.data = sessionStorage.getItem('buy');
      this.data = eval('(' + this.data + ')');
      // console.log(this.data);
      getAddress({
        name:$.cookie('userName')
      }).then(res =>{
        if(res.address.length>=1){
          res.address = eval(res.address);
          this.oldAddress =  JSON.parse(JSON.stringify(res.address));
          this.addressList = res.address;
          this.address = this.addressList[0];
        }
        else{
          this.oldAddress =  JSON.parse(JSON.stringify(res.address));
          this.addressList = [];
        }
      })
    },
    mounted() {
      Init();
    }
  }
  
  
</script>

<style lang="scss">


</style>
