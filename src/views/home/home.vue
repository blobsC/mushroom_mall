<!--
 * @author: 陈大帅
 * @Date: 2021-07-07 09:38:28
 * @LastEditTime: 2021-07-28 18:38:03
 * @FilePath: \supermall\mushroom_mall\src\views\home\home.vue
-->
@<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>

    <scroll class="content" ref="scroll" 
            :probeType='3' 
            @scroll="contenScroll"
            :pull-up-load="true"          
            @pullingUp='loadMoer'>    
      <home-swiper :banner="banner"/>
      <rencommend-views :recommend="recommend"></rencommend-views>
      <feature-views></feature-views>
      <tab-control 
                  :titles="['流行', '新款', '精选']"
                   class="tab-control"
                   @tabClick="tabClick"></tab-control>
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
      isShowBackTop : false
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
  computed: {
    showGoods() {
     return this.goods[this.currentType].list
    }
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
    },
    
    //点击回到顶部
    backTop() {      
       this.$refs.scroll.scrollTo(0,0)
    },

    //内容滚动显示回到顶部按钮
    contenScroll(position) {
      this.isShowBackTop = Math.abs(position.y) > 1000
    },

    //上拉加载更多数据
    loadMoer() {
      this.getHomeGoods(this.currentType)

      this.$refs.scroll.scroll.refresh()
      
      setTimeout(() => {
        this.$refs.scroll.finishPullUp()
      }, 1000);
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
        
      })
    }
  }
}
</script>

<style scoped>
  #home {
    padding-top: 44px;
    position: relative;
    height: 100vh;
  }

  .nav-bar {
    background-color: #800;
    color: #fff;
    font-weight: 666 ;
    
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control{
    position: sticky;
    top: 44px;
    z-index:1;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
</style>