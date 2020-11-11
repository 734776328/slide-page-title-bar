<template>
  <div class="wrap-slide-page-title-bar">
    <ul ref="scrollContainer"
      @touchstart.stop="touchStart"
      @touchmove.stop="touchMove"
      @touchend.stop="touchEnd"
    >
      <li
        v-for="(item, index) in titleList"
        :key="index"
        @click.self="selectEvent(item, index)"
        :class="{selected: selected === index}"
      >
        {{ item.title }}
      </li>
    </ul>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      selected: 0,
      scrollParams: {
        startLocation: 0,
        moveDistance: 0,
        titleContainerWidth: 0,
        clientWidth: '',
        // // 上一次移动的距离
        lastMoveDistance: 0
      }
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
      console.log('touchestart')
      this.scrollParams.startLocation = e.touches[0].pageX
      console.log(e.touches[0].pageX)
    },
    touchMove (e) {
      console.log('touchmove')
      // if (this.scrollParams.moveDistance > (this.scrollParams.titleContainerWidth - this.scrollParams.clientWidth)) return
      this.scrollParams.moveDistance = Math.floor(e.touches[0].pageX - this.scrollParams.startLocation) + this.scrollParams.lastMoveDistance
      this.$refs.scrollContainer.style.transform = `translateX(${this.scrollParams.moveDistance}px)`
    },
    touchEnd (e) {
      // 缓存上一次移动的距离
      this.scrollParams.lastMoveDistance = this.scrollParams.moveDistance
    },
    selectEvent (item, index) {
      this.selected = index
      this.$emit('selected', item)
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
    color: #1681E9 !important;
    border-bottom: 2px solid #1681E9;
  }
  .wrap-slide-page-title-bar {
    overflow: hidden;
    background-color: #fff;
    ul {
      width: 1000% !important;
      padding-right: .5rem;
      overflow: hidden;
      padding: .2rem 0;
      box-shadow: 10px 2px 4px #888888;
      li {
        float: left;
        font-size: .3rem;
        margin-left: .5rem;
        height: .5rem;
        text-align: center;
        line-height: .5rem;
        padding-bottom: .55rem;
        color: #BECACC;
      }
    }
  }
</style>
