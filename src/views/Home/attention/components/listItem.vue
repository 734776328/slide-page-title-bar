<template>
  <div class="wrap-list-item">
    <a class="header">
        <div>
          <img src="https://mirror-gold-cdn.xitu.io/16d0746c64228d3d249?imageView2/1/w/30/h/30/q/85/format/webp/interlace/1">
          <span>TianTianUp</span>
        </div>
        <div>
          <span>数据结构/JavaScript</span>
        </div>
    </a>
    <div class="content">
      <div>项目，渐渐使用function无状态组件代替了classs声明的有状态组件，期间也总结了一些心得。尤其对于近期三个月的项目里，一点点用自定义hooks来处理公司项目中重复逻辑，总体感觉还不错。今天给大家讲</div>
      <div>
        <img style="width: 100px;" src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1333e70a7644458dacbab5881ec6949a~tplv-k3u1fbpfcp-watermark.image">
      </div>
    </div>
    <div class="handler">
      <div><span>100</span></div>
      <div><span>10</span></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
  .wrap-list-item {
    background-color: #fff;
    padding: .1rem .25rem;
    margin-top: .22rem;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: .25rem;
    }
    .content {
      display: flex;
      align-items: center;
      div:first-child {
        flex: 1 1 auto;
      }
      div:last-child {
        flex: 0 0 auto;
      }
    }
    .handler {
      display: flex;
      justify-content: flex-start;
      div {
        margin-right: .5rem;
      }
    }
  }
</style>
