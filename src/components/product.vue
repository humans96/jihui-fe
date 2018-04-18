<template lang="html">

  <div id="product">
    <div class="p-title">
      <h1>Product</h1>
    </div>
    <div class="tab-container">
      <el-tabs tab-position="top">
        <el-tab-pane label="全部">
          <div class="pro-container">
            <div class="isss">
              <el-card>
                <div class="img-container">
                  <img src="images/公子小白.jpg">              
                </div>
                <p class="pro-name">公子小白</p>
                <p class="price">￥1880</p>
              </el-card>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="智能手表">智能手表</el-tab-pane>
        <el-tab-pane label="智能眼镜">智能眼镜</el-tab-pane>
        <el-tab-pane label="机器人">机器人</el-tab-pane>
        <el-tab-pane label="体感车">体感车</el-tab-pane>
        <el-tab-pane label="无人机">无人机</el-tab-pane>
      </el-tabs>
    </div>
  </div>
  
    
</template>
  
  <script>
    import Vue from 'vue';
  
    export default {
      name: 'product',
      data() {
        return {
          activeIndex: '',
        };
      },
      methods: {
        
      },
      mounted(){
        
      }
    }
  
  </script>
  
  <style lang="scss">
    
    
  </style>
  