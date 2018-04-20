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
          <span slot="title">human</span>
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
          <el-tab-pane label="全部订单" name="first">
            <div class="order-item">
              <div class="order-info row">
                <div class="col-sm-8 col-xs-12">
                  <p class="status">待支付</p>
                  <p>订单号：123311212412  2018-01-01 10:40:13  在线支付</p>
                </div>
                <div class="col-sm-4 col-xs-12 order-num">
                  <p>订单金额：<span class="price">1288.00元</span></p>
                </div>
              </div>
              <div class="order-product row">
                <div class="col-sm-6 col-xs-12">
                  <div class="img-box">
                    <a href="#/rift"><img src="images/order.png"></a>
                  </div>
                  <div class="desc">
                    <p class="name"><a href="#/rift">Oculus Rift</a></p>
                    <p class="num">1288.00元 x 1</p>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-3 col-xl-2 butt">
                  <a href="#/rift"><el-button type="info" plain>订单详情</el-button></a>
                </div>
                <div class="col-xs-12 col-sm-3 col-xl-2 butt">
                  <el-button type="danger">立即付款</el-button>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待支付" name="second">待支付</el-tab-pane>
          <el-tab-pane label="待收货" name="third">待收货</el-tab-pane>
          <el-tab-pane label="已关闭" name="fourth">已关闭</el-tab-pane>
        </el-tabs>
      </div>

      <div class="index-1-3" v-if="active == '1-3'">
        <el-tabs v-model="coupon" @tab-click="handleClick">
          <el-tab-pane label="已领取" name="first">
            <p class="no-data">没有符合条件的优惠券</p>
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
          <div class="address-box">
            <div class="action">
              <i class="el-icon-edit" @click="editAdress"></i>
              <i class="el-icon-delete" @click="deleteAdress"></i>
            </div>
            <p class="name">human</p>
            <p class="phone">15262051386</p>
            <p class="address">内蒙古自治区 呼和浩特市 新城区 sd</p>
          </div>
        </div>
        
      </div>
      <el-dialog title="收货地址" :visible.sync="isdialog.addressDialog">
        <el-form :model="dialogForm.address">
          <el-form-item label="收货人姓名" :label-width="formLabelWidth">
            <el-input v-model="dialogForm.address.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="收货人手机号" :label-width="formLabelWidth">
            <el-input v-model="dialogForm.address.phone" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="收件人地址" :label-width="formLabelWidth">
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
          <el-form-item label="详细地址" :label-width="formLabelWidth">
            <el-input type="textarea" v-model="dialogForm.address.address.addressDesc"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="isdialog.addressDialog = false">取 消</el-button>
          <el-button type="primary" @click="isdialog.addressDialog = false">确 定</el-button>
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

      <el-dialog title="邮箱绑定" :visible.sync="isdialog.phoneDialog">
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
  import {city} from 'components/default/city';
  // import UcenterBord from 'components/user/dashbord.vue';
  

  export default {
    name: 'ucenter',
    data() {
      return {
        active: '2',
        activeName: 'first',
        coupon:'first',
        iscollapse:false,
        isdialog:{
          addressDialog:false,
          pwdDialog:false,
          emailDialog:false,
          phoneDialog:false
        },
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
        cityList1:city,
        cityList2:'',
        formLabelWidth:'120px'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        this.active = key;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      addAddress(){
        this.isdialog.addressDialog = true;
      },
      editAdress(){
        this.isdialog.addressDialog = true;
      },
      deleteAdress(){
        console.log(city);
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
    // components: { UcenterBord }
  }

</script>

<style lang="scss">
  
  
</style>
    
    