<template>
  <div>
    <iframe :src="query" class="iframeView"></iframe>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        query: '',
      }
    },
    created: function () {
      //$route为路由，params为路由传递过来的参数
      this.query = this.$route.params.path;
    }
  }
</script>

<style scoped>
  .iframeView {
    width: 100%;
    background: rgba(255, 255, 255, 1);    border-radius: 5px;
    min-height: calc(100% - 20px);
    border: 0;
  }
</style>