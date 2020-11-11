<template>
  <div>
    <div id="scroll-container"
      @touchstart.stop="handlerTouchStart"
      @touchmove.stop="handlerTouchMove"
      @touchend.stop="handlerTouchEnd"
      ref="scrollContainer"
      :class="{'transition': isTransition}"
    >
      <div :class="['refresh', {'display': isDisplay.refresh}]">
        <img
          :src="isShrinked? loadImg : refreshImg"
          :class="{'rotate': isRotate}"
        >
      </div>
      <slot></slot>
      <div :class="['load', {display: isDisplay.load }]">
        <img :src="loadImg">
      </div>
    </div>
  </div>
</template>

<script>
let scrollStatus
export default {
  name: 'upLoadDownRefresh',
  props: {
    maxDistance: {
      style: Number,
      default: 300
    },
    // 定义触发加载刷新事件的拉伸长度
    triggerDistance: {
      style: Number,
      default: 200
    }
  },
  data () {
    return {
      startLocation: '', // 记录鼠标点击的位置
      moveDistance: 0, // 记录移动的位置
      distance: '', // 记录移动的距离
      timer: '', // 定时器id
      isTransition: false, // 是否启动transition
      isRotate: false, // 是否选择箭头
      isShrinked: false, // 是否收缩完成
      events: new Array(2).fill(undefined),
      isDisplay: {
        refresh: true,
        load: true
      },
      loadImg: 'https://img.lanrentuku.com/img/allimg/1212/5-121204193R5-50.gif',
      refreshImg: 'https://www.easyicon.net/api/resizeApi.php?id=1190769&size=48'
    }
  },
  methods: {
    handlerTouchStart (e) {
      this.isTransition = false
      this.isRotate = false
      this.isShrinked = false
      this.startLocation = e.touches[0].pageY
      // console.log(this.startLocation)
    },
    handlerTouchMove (e) {
      // let el = e.target
      // el.style.trans
      if (this.moveDistance > this.maxDistance + 1) {
        this.isRotate = true
        return
      }
      // 显示加载 刷新图片
      if (this.moveDistance > this.triggerDistance && this.isDisplay.refresh) {
        this.isDisplay.refresh = false
      } else if (this.moveDistance < -this.triggerDistance && this.isDisplay.load) {
        this.isDisplay.load = false
      }
      if (this.moveDistance > this.triggerDistance && !this.events[0]) this.events[0] = function () { this.$emit('refresh', this.displayDiv) }
      if (this.moveDistance < -this.triggerDistance && !this.events[1]) this.events[1] = function () { this.$emit('load', this.displayDiv) }
      this.moveDistance = Math.floor(e.touches[0].pageY - this.startLocation)
      this.$refs.scrollContainer.style.transform = `translateY(${this.moveDistance}px)`
      // 加载 刷新逻辑
    },
    handlerTouchEnd (e) {
      scrollStatus = this.moveDistance > 0
      this.isTransition = true // 开启transition
      this.moveDistance = 0 // 清除已移动的距离

      this.$refs.scrollContainer.style.transform = 'translateY(0px)'
      setTimeout(() => {
        this.shrinked()
      }, 700)
      this.events.forEach((fn, index) => {
        if (!fn) return
        this.events[index] = undefined
        fn.apply(this)
      })
    },
    // 收缩结束后操作
    shrinked () {
      if (scrollStatus) {
        this.isShrinked = true
      } else {
        return ''
      }
    },
    // 回传加载、刷新后状态
    displayDiv () {
      this.isDisplay.refresh = true
      this.isDisplay.load = true
    }
  }
}
</script>

<style scoped>
  .display {
    display: none;
  }
  .transition {
    transition: all .7s;
  }
  .load, .refresh {
    text-align: center;
  }
  .load img, .refresh img {
    width: 20px;
  }
  .rotate {
    transform: rotate(180deg);
  }
</style>
