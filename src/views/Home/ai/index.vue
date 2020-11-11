<template>
  <div class="wrap-iframe">
    <iframe src="https://juejin.im/post/6891888458919641096" style="width:100%;height:100vh;border:none;" scrolling="auto" frameborder="0">
    </iframe>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
  ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
  }
  ::-webkit-scrollbar-thumb{
      background-color: #999;
      -webkit-border-radius: 5px;
      border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:vertical:hover{
      background-color: #666;
  }
  ::-webkit-scrollbar-thumb:vertical:active{
      background-color: #333;
  }
  ::-webkit-scrollbar-button{
      display: none;
  }
  ::-webkit-scrollbar-track{
      background-color: #f1f1f1;
  }
</style>
