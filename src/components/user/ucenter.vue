<template lang="html">

  <div class="ucenter">
      <el-menu
      :default-active="active"
      :collapse="iscollapse"
      class="el-menu-vertical-demo dashbord"
      @select="handleSelect"
      :default-openeds="['1', '2']"
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="iconfont icon-people_fill"></i>
          <span slot="title">{{username}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">个人中心</el-menu-item>
          <el-menu-item index="1-2">我的订单</el-menu-item>
          <el-menu-item index="1-3">我的优惠券</el-menu-item>
          <el-menu-item index="1-4">收货地址</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="iconfont icon-anquan"></i>
        <span slot="title">账号安全</span>
      </el-menu-item>
    </el-menu>
    <div class="u-body">
      <div class="index-1-1" v-if="active == '1-1'">
        <div class="head-card">
          <img src="images/carousel1.jpg">
          <p class="name">{{username}}</p>
        </div>
        <div class="row body-card">
          <div class="col-xs-4 col-sm-4 offset-xs-2 offset-sm-1">
            <p class="num" @click="jump('1-2')">{{num.Paying}}</p>
            <p class="desc">待支付</p>
          </div>
          <div class="col-xs-4 col-sm-2">
            <p class="num" @click="jump('1-2')">{{num.Auditing}}</p>
            <p class="desc">待收货</p>
          </div>
          <div class="col-xs-12 col-sm-4">
            <p class="num" onclick="javascript:window.location='#/cart'">{{carNum}} 件</p>
            <p class="desc">购物车</p>
          </div>
        </div>
        <div class="menu-card">
          <p @click="jump('1-2')"><i class="iconfont icon-order"></i> 查看所有订单 <span class="linkto"> > </span></p>     
          <p @click="jump('1-3')"><i class="iconfont icon-bookmark"></i> 我的优惠券 <span class="linkto"> > </span></p>      
          <p @click="jump('1-4')"><i class="iconfont icon-map"></i> 收货地址 <span class="linkto"> > </span></p>      
          <!-- <p @click="jump('1-2')"><i class="iconfont icon-payment"></i> 消费明细 <span class="linkto"> > </span></p> -->
          <!-- <p @click="jump('1-5')"><i class="iconfont icon-edit"></i> 修改个人信息 <span class="linkto"> > </span></p>          -->
        </div>
      </div>

      <div class="index-1-2" v-if="active == '1-2'">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部订单" name="first">
            <div class="order-item" v-for="item in orderInfo">
              <div class="order-info row">
                <div class="col-sm-8 col-xs-12">
                  <p class="status">{{statusMap[item.status]}}</p>
                  <p>{{item.time}}  {{item.payWay}}</p>
                </div>
                <div class="col-sm-4 col-xs-12 order-num">
                  <p>订单金额：<span class="price">{{item.price}}元</span></p>
                </div>
              </div>
              <div class="order-product row" v-for="p in item.product">
                <div class="col-xs-12">
                  <div class="img-box">
                    <a :href="'#/product/' + p.name"><img :src="'images/products/' + p.image"></a>
                  </div>
                  <div class="desc">
                    <p class="name"><a href="#/rift">{{p.name}}</a></p>
                    <p class="num">{{p.price}}元 x {{p.num}}</p>
                  </div>
                </div>
              </div>
              <div class="row order-btn justify-content-end">
                <div class="col-xs-12 col-sm-4 col-lg-2 butt" v-if="item.status == 'Paying'">
                  <el-button plain @click="cancelOrder(item.id)">取消订单</el-button>
                </div>
                <div class="col-xs-12 col-sm-4 col-lg-2 butt">
                  <a :href="'#/order/' + item.id"><el-button type="info" plain>订单详情</el-button></a>
                </div>
                <div class="col-xs-12 col-sm-4 col-lg-2 butt" v-if="item.status == 'Paying'">
                  <el-button type="danger" @click="ispaying=true">立即付款</el-button>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待支付" name="second">
            <div class="order-item" v-for="item in orderInfo" v-if="item.status=='Paying'">
              <div class="order-info row">
                <div class="col-sm-8 col-xs-12">
                  <p class="status">{{statusMap[item.status]}}</p>
                  <p>{{item.time}}  在线支付</p>
                </div>
                <div class="col-sm-4 col-xs-12 order-num">
                  <p>订单金额：<span class="price">{{item.price}}元</span></p>
                </div>
              </div>
              <div class="order-product row" v-for="p in item.product">
                <div class="col-xs-12">
                  <div class="img-box">
                    <a :href="'#/product/' + p.name"><img :src="'images/products/' + p.image"></a>
                  </div>
                  <div class="desc">
                    <p class="name"><a href="#/rift">{{p.name}}</a></p>
                    <p class="num">{{p.price}}元 x {{p.num}}</p>
                  </div>
                </div>
              </div>
              <div class="row order-btn justify-content-end">
                <div class="col-xs-12 col-sm-4 col-lg-2 butt">
                  <el-button plain @click="cancelOrder(item.id)">取消订单</el-button>
                </div>
                <div class="col-xs-12 col-sm-4 col-lg-2 butt">
                  <a :href="'#/order/' + item.id"><el-button type="info" plain>订单详情</el-button></a>
                </div>
                <div class="col-xs-12 col-sm-4 col-lg-2 butt">
                  <el-button type="danger"  @click="ispaying=true">立即付款</el-button>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待收货" name="third">
            <div class="order-item" v-for="item in orderInfo" v-if="item.status=='Auditing'">
              <div class="order-info row">
                <div class="col-sm-8 col-xs-12">
                  <p class="status">{{statusMap[item.status]}}</p>
                  <p>{{item.time}}  在线支付</p>
                </div>
                <div class="col-sm-4 col-xs-12 order-num">
                  <p>订单金额：<span class="price">{{item.price}}元</span></p>
                </div>
              </div>
              <div class="order-product row" v-for="p in item.product">
                <div class="col-xs-12">
                  <div class="img-box">
                    <a :href="'#/product/' + p.name"><img :src="'images/products/' + p.image"></a>
                  </div>
                  <div class="desc">
                    <p class="name"><a href="#/rift">{{p.name}}</a></p>
                    <p class="num">{{p.price}}元 x {{p.num}}</p>
                  </div>
                </div>
              </div>
              <div class="row order-btn justify-content-end">
                <div class="col-xs-12 col-sm-4 col-lg-2 butt">
                  <a :href="'#/order/' + item.id"><el-button type="info" plain>订单详情</el-button></a>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="已完成" name="fourth">
            <div class="order-item" v-for="item in orderInfo" v-if="item.status=='Finish'">
              <div class="order-info row">
                <div class="col-sm-8 col-xs-12">
                  <p class="status">{{statusMap[item.status]}}</p>
                  <p>{{item.time}}  在线支付</p>
                </div>
                <div class="col-sm-4 col-xs-12 order-num">
                  <p>订单金额：<span class="price">{{item.price}}元</span></p>
                </div>
              </div>
              <div class="order-product row" v-for="p in item.product">
                <div class="col-xs-12">
                  <div class="img-box">
                    <a :href="'#/product/' + p.name"><img :src="'images/products/' + p.image"></a>
                  </div>
                  <div class="desc">
                    <p class="name"><a href="#/rift">{{p.name}}</a></p>
                    <p class="num">{{p.price}}元 x {{p.num}}</p>
                  </div>
                </div>
              </div>
              <div class="row order-btn justify-content-end">
                <div class="col-xs-12 col-sm-4 col-lg-2 butt">
                  <a :href="'#/order/' + item.id"><el-button type="info" plain>订单详情</el-button></a>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="已取消" name="fifth">
            <div class="order-item" v-for="item in orderInfo" v-if="item.status=='Closed'">
              <div class="order-info row">
                <div class="col-sm-8 col-xs-12">
                  <p class="status">{{statusMap[item.status]}}</p>
                  <p>{{item.time}}  在线支付</p>
                </div>
                <div class="col-sm-4 col-xs-12 order-num">
                  <p>订单金额：<span class="price">{{item.price}}元</span></p>
                </div>
              </div>
              <div class="order-product row" v-for="p in item.product">
                <div class="col-sm-9 col-xs-12 col-xl-10">
                  <div class="img-box">
                    <a :href="'#/product/' + p.name"><img :src="'images/products/' + p.image"></a>
                  </div>
                  <div class="desc">
                    <p class="name"><a href="#/rift">{{p.name}}</a></p>
                    <p class="num">{{p.price}}元 x {{p.num}}</p>
                  </div>
                </div>
              </div>
              <div class="row order-btn justify-content-end">
                <div class="col-xs-12 col-sm-4 col-lg-2 butt">
                  <a :href="'#/order/' + item.id"><el-button type="info" plain>订单详情</el-button></a>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <el-dialog
        title="扫码支付"
        :visible.sync="ispaying"
        width="30%">
        <p style="text-align: center">这是付款二维码</p>
        <img style="display: flex" src="images/二维码.png">
        <span slot="footer" class="dialog-footer">
          <el-button @click="ispaying = false">取 消</el-button>
          <el-button type="primary" @click="ispaying = false">确 定</el-button>
        </span>
      </el-dialog>

      <div class="index-1-3" v-if="active == '1-3'">
        <el-tabs v-model="coupon" @tab-click="handleClick">
          <el-tab-pane label="已领取" name="first">
            <div class="demo">
              <div class="stamp stamp01">
                <div class="par"><p>新用户优惠券</p><sub class="sign">￥</sub><span>50.00</span><p>订单满100.00元</p></div>
                <div class="copy">副券<p>2017-08-13<br>2018-08-13</p></div>
                <i></i>
              </div>
            </div>
            <!-- <p class="no-data">没有符合条件的优惠券</p> -->
          </el-tab-pane>
          <el-tab-pane label="待领取" name="second">
            <p class="no-data">没有符合条件的优惠券</p>
          </el-tab-pane>
          <el-tab-pane label="已使用" name="third">
            <p class="no-data">没有符合条件的优惠券</p>
          </el-tab-pane>
          <el-tab-pane label="已过期" name="fourth">
            <p class="no-data">没有符合条件的优惠券</p>
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="index-1-4" v-if="active == '1-4'">
        <el-button type="success" @click="addAddress">添加地址</el-button>
        <div>
          <div class="address-box" v-for="(item,index) in addressList">
            <div class="action">
              <i class="el-icon-edit" @click="editAdress(item,index)"></i>
              <i class="el-icon-delete" @click="deleteAdress(item)"></i>
            </div>
            <p class="name">{{item.name}}</p>
            <p class="phone">{{item.phone}}</p>
            <p class="address">{{item.address.tier1}}  {{item.address.tier2}} {{item.address.addressDesc}}</p>
          </div>
        </div>
        
      </div>
      <el-dialog title="收货地址" :visible.sync="isdialog.addressDialog">
        <el-form :model="dialogForm.address" :rules="rules">
          <el-form-item label="收货人姓名" prop="name" :label-width="formLabelWidth" :required="true">
            <el-input v-model="dialogForm.address.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="收货人手机号" prop="phone" :label-width="formLabelWidth" :required="true">
            <el-input v-model="dialogForm.address.phone" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="收件人地址" prop="address.tier2" :label-width="formLabelWidth" :required="true">
            <el-select v-model="dialogForm.address.address.tier1" placeholder="请选择地址" @change="getCity1">
              <el-option 
              v-for="item in cityList1"
              :key="item.value"
              :label="item.text"
              :value="item.text"></el-option>
            </el-select>
            <el-select v-model="dialogForm.address.address.tier2" placeholder="请选择地址">
              <el-option 
              v-for="item in cityList2.children"
              :key="item.value"
              :label="item.text"
              :value="item.text"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="详细地址" prop="address.addressDesc" :label-width="formLabelWidth" :required="true">
            <el-input type="textarea" v-model="dialogForm.address.address.addressDesc"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="isdialog.addressDialog = false">取 消</el-button>
          <el-button type="primary" @click="addrConf">确 定</el-button>
        </div>
      </el-dialog>

      <div class="index-2" v-if="active == '2'">
        <div class="safe-item row">
          <div class="left-body col-xs-12 col-sm-1">
            <i class="iconfont icon-unlockalt"></i>              
          </div>
          <div class="right-body col-xs-12 col-sm-10">
            <div class="row">
              <div class="col-xs-8 col-sm-10">
                <p class="name">帐号密码</p>
                <p class="desc">用于保护帐号信息和登录安全</p>
              </div>
              <div class="col-xs-4 col-sm-2">
                <el-button @click="isdialog.pwdDialog = true">修改</el-button>
              </div>
            </div>
          </div>
        </div>
        <div class="safe-item row">
          <div class="left-body col-xs-12 col-sm-1">
            <i class="iconfont icon-envelope"></i>              
          </div>
          <div class="right-body col-xs-12 col-sm-10">
            <div class="row">
              <div class="col-xs-8 col-sm-10">
                <p class="name">邮箱绑定 <span>未绑定</span></p>
                <p class="desc">邮箱绑定可以用于登录帐号，重置密码或其他安全验证</p>
              </div>
              <div class="col-xs-4 col-sm-2">
                <el-button @click="isdialog.emailDialog = true">修改</el-button>
              </div>
            </div>
          </div>
        </div>
        <div class="safe-item row">
          <div class="left-body col-xs-12 col-sm-1">
            <i class="iconfont icon-mobile"></i>              
          </div>
          <div class="right-body col-xs-12 col-sm-10">
            <div class="row">
              <div class="col-xs-8 col-sm-10">
                <p class="name">手机绑定 <span>未绑定</span></p>
                <p class="desc">手机绑定可以用于登录帐号，重置密码或其他安全验证</p>
              </div>
              <div class="col-xs-4 col-sm-2">
                <el-button @click="isdialog.phoneDialog = true">修改</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <el-dialog title="修改密码" :visible.sync="isdialog.pwdDialog">
        <el-form :model="dialogForm.pwd">
          <el-form-item label="旧密码" :label-width="formLabelWidth">
            <el-input v-model="dialogForm.pwd.old" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="新密码" :label-width="formLabelWidth">
            <el-input v-model="dialogForm.pwd.new" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="重复密码" :label-width="formLabelWidth">
            <el-input v-model="dialogForm.pwd.renew" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="isdialog.pwdDialog = false">取 消</el-button>
          <el-button type="primary" @click="isdialog.pwdDialog = false">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog title="邮箱绑定" :visible.sync="isdialog.emailDialog">
        <el-form :model="dialogForm.email">
          <el-form-item label="邮箱地址" :label-width="formLabelWidth">
            <el-input v-model="dialogForm.email.value" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="验证码" :label-width="formLabelWidth">
            <el-input v-model="dialogForm.email.valid" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="isdialog.emailDialog = false">取 消</el-button>
          <el-button type="primary" @click="isdialog.emailDialog = false">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog title="手机号绑定" :visible.sync="isdialog.phoneDialog">
        <el-form :model="dialogForm.phone">
          <el-form-item label="手机号码" :label-width="formLabelWidth">
            <el-input v-model="dialogForm.phone.num" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="验证码" :label-width="formLabelWidth">
            <el-input v-model="dialogForm.phone.valid" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="isdialog.phoneDialog = false">取 消</el-button>
          <el-button type="primary" @click="isdialog.phoneDialog = false">确 定</el-button>
        </div>
      </el-dialog>

    </div>
  </div>
  

</template>
    
<script>
  import Vue from 'vue';
  import Init from 'components/default/init';
  import $ from 'jQuery';
  import {city} from 'components/default/city';
  import {getOrderNum,getCartNum,getAddress,addAddress,deleteAddress, editAddress} from 'api/user.js';
  import {getOrderInfo, cancelOrder} from 'api/product.js';
  
  const statusMap = {
    'Auditing':'待收货',
    'Paying':'待支付',
    'Closed':'已取消',
    'Finish':'已完成'
  };

  export default {
    name: 'ucenter',
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
        username:$.cookie('userName'),
        active: '1-1',
        activeName: 'first',
        coupon:'first',
        iscollapse:false,
        carNum:0,
        addressList:[],
        ispaying:false,
        orderInfo:[],
        num:{
          Auditing:0,
          Paying:0,
          Finish:0
        },
        isdialog:{
          addressDialog:false,
          pwdDialog:false,
          emailDialog:false,
          phoneDialog:false
        },
        statusMap:statusMap,
        isaddorEdit:'',
        oldAddress:{},
        oldIndex:'',
        dialogForm: {
          address:{
            name: '',
            phone: '',
            address:{
              tier1:'',
              tier2:'',
              addressDesc:''
            }
          },
          pwd:{
            old:'',
            new:'',
            renew:''
          },
          email:{
            value:'',
            valid:''
          },
          phone:{
            num:'',
            valid:''
          }
        },
        rules: {
          phone:[
            { validator: validatePhone, trigger: 'blur' }
          ],
        },
        cityList1:city,
        cityList2:'',
        formLabelWidth:'120px'
      };
    },
    methods: {
      cancelOrder(id){
        // console.log(id);
        cancelOrder({
          id: id
        }).then(res =>{
          getOrderNum({
            user:$.cookie('userName')
          }).then(res =>{
            res.data.forEach(v =>{
              this.num[v.status]++;
            })
          });
          getOrderInfo({
            user:$.cookie('userName')
          }).then(res =>{
            if(res.data.length>=1){
              res.data.forEach(item =>{
                item.address = eval( '(' + item.address + ')');
                item.product = eval( '(' + item.product + ')');
              })
            }
            res.data.sort(function(x, y){
                return x.id > y.id ? -1:1;
            });
            this.orderInfo = res.data;
          })
        })
      },
      addrConf(){
        if(this.dialogForm.address.name == ''|| this.dialogForm.address.phone == '' || this.dialogForm.address.address.tier2 == ''|| this.dialogForm.address.address.addressDesc==''){
          this.$confirm('请填写完整的信息！', '提示', {
            confirmButtonText: '确定',
            type: 'warning'
          })
        }
        else {
          if(this.isaddorEdit == 'add'){
            addAddress({
              name:$.cookie('userName') ,
              address:this.dialogForm.address
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
          else{
            editAddress({
              name:$.cookie('userName'),
              old: this.oldAddress[this.oldIndex],
              new:this.dialogForm.address
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
          this.isdialog.addressDialog = false;
        }
      },
      jump(val){
        this.active = val;
      },
      handleSelect(key, keyPath) {
        this.active = key;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      addAddress(){
        this.isaddorEdit = 'add';
        this.isdialog.addressDialog = true;
      },
      editAdress(val,index){
        this.isaddorEdit = 'edit';
        this.dialogForm.address = val;
        this.oldIndex = index;
        this.isdialog.addressDialog = true;        
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
        console.log(v);
        this.cityList2 = city.find(item =>{
          return item.text == v
        });
        console.log(this.cityList2);
      }
    },
    mounted(){
      Init();
      if(window.innerWidth <=600 ){
        this.iscollapse = true;
      }
      else {
        this.iscollapse = false;
      }
      window.onresize = () => {
        if(window.innerWidth <=600 ){
          this.iscollapse = true;
        }
        else {
          this.iscollapse = false;
        }
      }
    },
    created(){
      getOrderNum({
        user:$.cookie('userName')
      }).then(res =>{
        res.data.forEach(v =>{
          this.num[v.status]++;
        })
        console.log('num',res.data);
      });
      getCartNum({
        user:$.cookie('userName')
      }).then(res =>{
        this.carNum = res.num;
      });
      getAddress({
        name:$.cookie('userName')
      }).then(res =>{
        // console.log(res.address);
        if(res.address){
          res.address = eval(res.address);
          this.oldAddress =  JSON.parse(JSON.stringify(res.address));
          this.addressList = res.address;
        }
        else{
          this.oldAddress = {};
          this.addressList = [];
        }
        console.log(this.addressList);
      })
      getOrderInfo({
        user:$.cookie('userName')
      }).then(res =>{
        if(res.data.length>=1){
          res.data.forEach(item =>{
            item.address = eval( '(' + item.address + ')');
            item.product = eval( '(' + item.product + ')');
          })
        }
        res.data.sort(function(x, y){
            return x.id > y.id ? -1:1;
        });
        this.orderInfo = res.data;
        console.log(res.data);
      })
    }
    // components: { UcenterBord }
  }

</script>

<style lang="scss">
  
  
</style>
    
    