<template>
  <div class="wrap-search">
    <header>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fangdajing"></use>
        </svg>
        <input type="text" placeholder="搜索文章/标签/用户">
      </div>
      <div>
        <span>取消</span>
      </div>
    </header>
    <article>
      <Slide-page-title-bar
        :titleList="titleList"
        @selected="selectTarget"
      >
        <synthesize-page v-show="currentPage === '综合'"></synthesize-page> 
        <user-page v-show="currentPage === '用户'"></user-page> 
        <article-page v-show="currentPage === '文章'"></article-page> 
        <label-page v-show="currentPage === '标签'"></label-page> 
      </Slide-page-title-bar>
    </article>
  </div>
</template>
  
<script>
import SlidePageTitleBar from '@/components/SlidePageTitleBar.vue'
import articlePage from './components/articlePage.vue'
import labelPage from './components/labelPage.vue'
import synthesizePage from './components/synthesizePage.vue'
import userPage from './components/userPage.vue'
export default {
  components: {
    SlidePageTitleBar,
    articlePage,
    labelPage,
    synthesizePage,
    userPage
  },
  data () {
    return {
      titleList: [
        { title: '综合' },
        { title: '文章' },
        { title: '标签' },
        { title: '用户' }
      ],
      currentPage: '综合',
    }
  },
  methods: {
    selectTarget(target) {
      this.currentPage = target.title
      console.log(this.currentPage)
    }
  }
}
</script>
<style scoped lang="scss">
  .wrap-search {
    margin: .15rem .3rem;
    header {
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
        span {
          color: #0180FF;
          font-weight: 550;
        }
      }
    }
  }
</style>
