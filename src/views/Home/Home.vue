<template>
  <div class="home-page">
    <!-- 搜索框 -->
    <div class="input-handler">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fangdajing"></use>
        </svg>
        <input type="text" placeholder="搜索掘金">
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon02"></use>
        </svg>
        <span>标签</span>
      </div>
    </div>
    <!-- 滑动标题 -->
    <slide-page-title-bar
      :titleList="titleList"
      @selected="selectTarget"
    >
    </slide-page-title-bar>
      <up-load-down-refresh
        @refresh="refresh"
        @load="load"
        :maxDistance="200"
        :triggerDistance="20"
      >
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </up-load-down-refresh>
      <!-- 搜索页面 -->
      <div class="search-page">
        <Search></Search>
      </div>
  </div>
</template>

<script>
import SlidePageTitleBar from '@/components/SlidePageTitleBar.vue'
import upLoadDownRefresh from '@/components/upLoadDownRefresh.vue'
import Search from '@/views/Home/search'
import axios from 'axios'
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
      currentSelectItem: '',
      isShowSearch: false
    }
  },
  components: {
    SlidePageTitleBar,
    upLoadDownRefresh,
    Search
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
    },
    refresh (done) {
      setTimeout(() => {
        done()
      }, 2000)
    },
    load (done) {
      setTimeout(() => {
        done()
      }, 2000)
    }
  },
  mounted () {
    axios({
      headers: {
        'X-SS-STUB': 'D25A44230CE0FFA85A40B588C5D767B7',
        'Accept-Encoding': 'gzip',
        'User-Agent': 'ttnet okhttp/3.10.0.2',
        'X-Khronos': '1604910934',
        'X-Gorgon': '0404a0de5005b9873580d9866f8109134a6742c617a641a14624',
        'Content-Type': 'application/json; charset=UTF-8',
        'Content-Length': '104',
        'Host': 'apinew.juejin.im',
        'Connection': 'Keep-Alive'
      },
      method: 'post',
      url: 'juejin/recommend_api/v1/article/recommend_cate_feed',
      data: {"id_type":2,"client_type":2606,"cursor":"0","limit":50,"sort_type":200,"cate_id":"6809637767543259144"}
    })
  }
}
</script>

<style scoped lang="scss">
  .home-page {
    background-color: #EFF2F5;
    .input-handler {
      display: flex;
      flex-direction: space-between;
      height: .9rem;
      align-items: center;
      padding: 0 .3rem;
      background: #fff;
      div:first-child {
        flex: 1;
        padding: .1rem;
        display: flex;
        align-items: center;
        background-color: #EEEEEE;
        border-radius: 3px;
        margin-right: .15rem;
        svg {
          margin: 0 .15rem 0 .24rem;
          color: #BFBFBF;
          font-size: .24rem;
        }
        input {
          flex: 1;
          color: #BEC4CA;
          font-size: .28rem;
          background-color: #EEEEEE;
        }
      }
      div:last-child {
        color: #ABB4BF;
        svg {
          font-size: .34rem;
        }
        span {
          color: #ABB4BF;
          font-weight: bold;
        }
      }
    }
    .search-page {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      background: yellow;
    }
  }
</style>
