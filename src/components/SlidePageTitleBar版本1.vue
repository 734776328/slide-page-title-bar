<template>
  <div class="wrap">
    <ul ref="scrollContainer"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <li
        v-for="(item, index) in titleList"
        :key="index"
        @click="selected = index"
        :class="{selected: selected === index}"
      >
        {{ item.title }}
      </li>
    </ul>
    <div>
      123123
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: '',
      scrollParams: {
        startLocation: 0,
        moveDistance: 0,
        titleContainerWidth: 0,
        clientWidth: '',
        // // 上一次移动的距离
        lastMoveDistance: 0
      },
      titleList: [
        { title: '关注' },
        { title: '推荐' },
        { title: '热榜' },
        { title: '后端' },
        { title: '前端' },
        { title: 'Android' },
        { title: 'IOS' },
        { title: '开发工具' },
        { title: '开发工具' },
        { title: '开发工具' },
        { title: '人工智能' }
      ]
    }
  },
  methods: {
    initLayout () {
      // 获取设备宽度
      this.clientWidth = document.body.clientWidth
      // 1rem转化为px
      const oneRemToPx = Number(document.documentElement.style.fontSize.replace(/px/, ''))
      // 获取所有title
      const children = this.$refs.scrollContainer.children
      const length = children.length
      // 计算所有title的宽度 并且相加
      for (let i = 0; i < length; i++) {
        this.scrollParams.titleContainerWidth += Number(window.getComputedStyle((children[i])).width.replace(/px/, ''))
      }
      this.scrollParams.titleContainerWidth = Math.ceil(this.scrollParams.titleContainerWidth) + (0.5 * (length + 1) * oneRemToPx)
      this.$refs.scrollContainer.style.width = this.scrollParams.titleContainerWidth + 'px'
    },
    touchStart (e) {
      console.log(1)
      this.scrollParams.startLocation = e.touches[0].pageX
    },
    touchMove (e) {
      // if (this.scrollParams.moveDistance > (this.scrollParams.titleContainerWidth - this.scrollParams.clientWidth)) return
      this.scrollParams.moveDistance = Math.floor(e.touches[0].pageX - this.scrollParams.startLocation) + this.scrollParams.lastMoveDistance
      this.$refs.scrollContainer.style.transform = `translateX(${this.scrollParams.moveDistance}px)`
    },
    touchEnd (e) {
      this.scrollParams.lastMoveDistance = this.scrollParams.moveDistance
      this.scrollParams.moveDistance = 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.initLayout()
      })
    })
  }
}
</script>
<style lang="scss" scoped>
  .selected {
    color: #1681E9;
    border-bottom: 2px solid #1681E9;
  }
  .wrap {
    overflow: hidden;
    ul {
      padding-right: .5rem;
      overflow: hidden;
      padding: .2rem 0;
      li {
        float: left;
        font-size: .3rem;
        margin-left: .5rem;
        height: .5rem;
        text-align: center;
        line-height: .5rem;
        padding-bottom: .55rem;
      }
    }
  }
</style>
