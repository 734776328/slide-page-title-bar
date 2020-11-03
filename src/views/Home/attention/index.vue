<template>
  <div class="wrap-attention">
    <div class="header">
      <div>发现更多掘金优秀作者</div>
      <div>
        <img src="https://mirror-gold-cdn.xitu.io/16d0746c64228d3d249?imageView2/1/w/30/h/30/q/85/format/webp/interlace/1">
        <img src="https://mirror-gold-cdn.xitu.io/16d0746c64228d3d249?imageView2/1/w/30/h/30/q/85/format/webp/interlace/1">
        <img src="https://mirror-gold-cdn.xitu.io/16d0746c64228d3d249?imageView2/1/w/30/h/30/q/85/format/webp/interlace/1">
        <img src="https://mirror-gold-cdn.xitu.io/16d0746c64228d3d249?imageView2/1/w/30/h/30/q/85/format/webp/interlace/1">
      </div>
    </div>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
  </div>
</template>
<script>
import listItem from './components/listItem.vue'
export default {
  components: {
    listItem
  }
}
</script>
<style lang="scss" scoped>
  .wrap-attention {
    font-size: .3rem;
    // background-color: #fff;
    margin-top: .22rem;
    .header {
      display:flex;
      justify-content: space-between;
      align-items: center;
      height: .6rem;
      width: 100%;
      background-color: #fff;
      padding: .4rem .25rem;
      div:first-child {
        font-weight: 550;
      }
      div:last-child {
        display: flex;
        justify-content: flex-end;
        img {
          height: 100%;
          width: auto;
          border-radius: 50%;
        }
      }
    }
  }
</style>
