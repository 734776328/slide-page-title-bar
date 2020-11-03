<template>
  <div class="home-page">
    <!-- 滑动标题 -->
    <slide-page-title-bar
      :titleList="titleList"
      @selected="selectTarget"
    >
    </slide-page-title-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import SlidePageTitleBar from '@/components/SlidePageTitleBar.vue'
export default {
  data () {
    return {
      titleList: [
        { title: '关注' },
        { title: '推荐' },
        { title: '热榜' },
        { title: '后端' },
        { title: '前端' },
        { title: 'Android' },
        { title: 'IOS' },
        { title: '人工智能' }
      ],
      currentSelectItem: ''
    }
  },
  components: {
    SlidePageTitleBar
  },
  methods: {
    selectTarget (target) {
      switch (target.title) {
        case '关注':
          this.$router.push('attention')
          break
        case '推荐':
          this.$router.push('recommend')
          break
        case '热榜':
          this.$router.push('hot')
          break
        case '后端':
          this.$router.push('backEnd')
          break
        case '前端':
          this.$router.push('frontEnd')
          break
        case 'Android':
          this.$router.push('android')
          break
        case 'IOS':
          this.$router.push('ios')
          break
        case '人工智能':
          this.$router.push('ai')
          break
      }
      this.currentSelectItem = target
    }
  }
}
</script>

<style scoped lang="scss">
  .home-page {
    background-color: #D2E4E6;
  }
</style>
