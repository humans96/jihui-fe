<template lang="html">

   
  
</template>
  
<script>
  import Vue from 'vue';
  import Init from 'components/default/init';

  export default {
    name: 'ucenter-bord',
    props: {
      data: {
        type: Object,
        default: {}
      },
      name: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        form:{
          account:'',
          password:''
        },
        iscol:false        
      };
    },
    methods: {
      
    },
    mounted(){
      Init();
    }
  }

</script>

<style lang="scss">
    
    
  </style>
      
      