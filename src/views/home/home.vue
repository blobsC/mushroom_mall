<!--
 * @author: 陈大帅
 * @Date: 2021-07-07 09:38:28
 * @LastEditTime: 2021-07-30 15:05:26
 * @FilePath: \supermall\mushroom_mall\src\views\home\home.vue
-->
@<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <tab-control 
            :titles="['流行', '新款', '精选']"                  
              @tabClick="tabClick"
              ref="tabControl2"
              class="tab-control" 
              v-show="isTabFixed"></tab-control>

    <scroll class="content" ref="scroll" 
            :probeType='3' 
            @scroll="contenScroll"
            :pull-up-load="true"          
            @pullingUp='loadMoer'>    
      <home-swiper :banner="banner" @swiperImageLoad="swiperImageLoad"/>
      <rencommend-views :recommend="recommend"></rencommend-views>
      <feature-views></feature-views>
      <tab-control 
            :titles="['流行', '新款', '精选']"                  
              @tabClick="tabClick"
              ref="tabControl1"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RencommendViews from './childComps/RencommendViews'
import FeatureViews from './childComps/FeatureViews.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList'


import {getHomeMultidata,getHomeGoods} from 'network/home.js'

import scroll from 'components/common/scroll/scroll.vue'
import BackTop from 'components/content/backTop/BackTop.vue'

import {debounce} from 'components/common/tools/tools.js'


export default {
  components: {
    NavBar,   
    HomeSwiper,
    RencommendViews,
    FeatureViews,
    TabControl,
    GoodsList,
    scroll,
    BackTop,
    BackTop
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        'pop' : {page:0, list: []},
        'new' : {page:0, list: []},
        'sell' : {page:0, list: []},
      },
      currentType: 'pop',
      isShowBackTop : false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0

    }
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata()

    //2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')    
  },
  mounted() {
    // 监听图片加载完成 刷新解决better-scroll中得BUG
    const refresh = debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on('itemImageLoad',() => {
        refresh()
    }) 
  },
  computed: {

    showGoods() {
     return this.goods[this.currentType].list
    }, 
  },
  activated() {
    //让Home保持状态
    this.$refs.scroll.scrollTo(0,this.saveY,5000)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    //让Home保持状态 离开时 记录一下scroll.y的位置
    this.saveY = this.$refs.scroll.getScrollY()
  },  
  methods: {   
    /**
     * 事件监听的相关方法
     */
    
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;    
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }

      //让吸顶的tabControl中的点击保持一致
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    
    //点击回到顶部
    backTop() {      
       this.$refs.scroll.scrollTo(0,0)
    },

    //内容滚动显示回到顶部按钮
    contenScroll(position) {
      
      //判断是否显示BackTop按钮
      this.isShowBackTop = Math.abs(position.y) > 1000   
      
      //决定tabControl是否吸顶
      this.isTabFixed = Math.abs(position.y) > this.tabOffsetTop
    },

    //上拉加载更多数据
    loadMoer() {
      this.getHomeGoods(this.currentType)
    },

    //做吸顶效果 获取tabControl的offsetTop
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop     
    },
   
    /**
     * 数据获取的相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      this.banner = res.data.data.banner.list
      this.recommend = res.data.data.recommend.list
    })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {  
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1  
        
        //完成上拉加载更多
        this.$refs.scroll.finishPullUp()
        
      })
    }  
  }
}
</script>

<style scoped>
  #home {
    /* padding-top: 44px; */
    position: relative;
    height: 100vh;
  }

  .nav-bar {
    background-color: #800;
    color: #fff;
    font-weight: 666 ;
    
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }
</style>