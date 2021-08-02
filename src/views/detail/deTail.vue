<!--
 * @author: 陈大帅
 * @Date: 2021-07-30 15:59:13
 * @LastEditTime: 2021-08-02 23:08:57
 * @FilePath: \supermall\mushroom_mall\src\views\detail\deTail.vue
-->
@<template>
  <div id="detail">
    <detail-nav-bar class="detail-navbar" @navBarClick="navBarClick"></detail-nav-bar>
    
    <scroll class="scroll-wrapper" ref="scroll"
            :probeType="3"
            @scroll="detailScroll">
    <detail-swiper :top-images="topImages" ></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
    <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>   
    <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
    <goods-list :goods="recommends" ref="recommends"></goods-list>
    </scroll>
    
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>

import detailNavBar from './childComps/detailNavBar.vue'
import detailSwiper from './childComps/detailSwiper.vue'
import detailBaseInfo from './childComps/detailBaseInfo'
import detailShopInfo from './childComps/detailShopInfo'
import detailCommentInfo from './childComps/detailCommentInfo.vue'
import detailGoodsInfo from './childComps/detailGoodsInfo.vue'
import detailParamInfo from './childComps/detailParamInfo.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import BackTop from 'components/content/backTop/BackTop.vue'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail.js'
import scroll from 'components/common/scroll/scroll.vue'
import {debounce} from 'components/common/tools/tools.js'

//导入混入的代码
import {itemListenerMixin} from 'common/mixin.js'




export default {
  name: 'deTail',
  components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    scroll,
    detailGoodsInfo,
    detailParamInfo,
    detailCommentInfo, 
    GoodsList,
    BackTop,
  },
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      refresh: null,
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      isShowBackTop : false,
      itemListener: null,
      titleTopYs: [],
      getTitleTopYs: null
    }
  },
  created() {
    //保存从Home路由跳转传入得id
    this.id = this.$route.params.id
    
    //根据id请求详情页图片的数据
    getDetail(this.id).then(res => {
      
      const data = res.data.result
      this.topImages = data.itemInfo.topImages    
          
    //整合详情页需要的数据
    this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

    //整合详情页商家信息的数据
    this.shop = new Shop(data.shopInfo)

    
    //整合详情页商家信息下的图片数据
    this.detailInfo = data.detailInfo

    //整合详情页商家的参数信息
    this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

    //整合详情页商品评论信息的数据
    if(data.rate.cRate !== 0) {
    this.commentInfo = data.rate.list[0]
    }
    })     

    //请求详情页商品的推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.data.list     
    })

    //为那navbar 的跳转高度 赋值 进行防抖
    this.getTitleTopYs = debounce(() => {
      this.titleTopYs = []
      this.titleTopYs.push(0)
      this.titleTopYs.push(this.$refs.param.$el.offsetTop - 49)  
      this.titleTopYs.push(this.$refs.comment.$el.offsetTop - 49)  
      this.titleTopYs.push(this.$refs.recommends.$el.offsetTop - 49) 
      console.log(this.titleTopYs);
    },500)
  },
  mixins: [itemListenerMixin],
  methods: {
    //修复better-scroll中图片加载高度的Bug
    imageLoad() {
      this.refresh()

      this.getTitleTopYs()   
    },

    //点击回到顶部
    backTop() {
      this.$refs.scroll.scrollTo(0,0,300)
    },

    //到一定位置不显示backTop按钮
    detailScroll(position) {
      this.isShowBackTop = Math.abs(position.y) > 500
    },

    
    navBarClick(index) {
    this.$refs.scroll.scrollTo(0,-this.titleTopYs[index],100)
  }
  },
  mounted() {
    //详情页商品介绍图片的 防抖刷新
     this.refresh = debounce(this.$refs.scroll.refresh,30)   
  },
  destroyed() {
    //取消全局事件的监听 以防在别处使用会影响到当下组件
    this.$bus.$off('itemImageLoad',this.itemListener)
  },
}
</script>

<style>
  #detail {
    position: relative;
    z-index: 9;
    height: 100vh;
    background-color: #fff;
  }
  .detail-navbar {
    position: relative;
    z-index: 9;
    background-color: #fff;   
  }

  .scroll-wrapper {
    height: calc(100% - 44px);
  }
</style>