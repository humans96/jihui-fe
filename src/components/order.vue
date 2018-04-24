<template lang="html">
  <div class="order">
    <h1>111111</h1>
  </div>
</template>


<script>
  import Vue from 'vue';
  import Init from 'components/default/init';

  export default {
    name: 'order',
    data() {
      return {
        form: {
          account: '',
          password: ''
        }
      };
    },
    methods: {

    },
    mounted() {
      Init();
    }
  }

</script>

<style lang="scss">


</style>
