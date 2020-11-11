<template>
  <div class="wrap-recommend">
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
  </div>
</template>
<script>
import listItem from '../components/listItem.vue'
export default {
  components: {
    listItem
  }
}
</script>
<style lang="scss" scoped>
  .wrap-recommend {
    font-size: .3rem;
  }
</style>
