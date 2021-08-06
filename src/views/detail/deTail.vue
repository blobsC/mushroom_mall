<!--
 * @author: 陈大帅
 * @Date: 2021-07-30 15:59:13
 * @LastEditTime: 2021-08-07 03:03:04
 * @FilePath: \supermall\mushroom_mall\src\views\detail\deTail.vue
-->
@<template>
  <div id="detail" >
    <detail-nav-bar class="detail-navbar" @navBarClick="navBarClick" ref="navBar"></detail-nav-bar>
    
    <scroll ref="scroll"
            :probeType="3"
            @scroll="detailScroll"
            class="datail-scroll">
    <detail-swiper :top-images="topImages" ></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
    <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>   
    <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
    <goods-list :goods="recommends" ref="recommends"></goods-list>
    </scroll>

    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    
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
import detailBottomBar from 'views/detail/childComps/detailBottomBar'

import BackTop from 'components/content/backTop/BackTop.vue'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail.js'
import scroll from 'components/common/scroll/scroll.vue'
import {debounce} from 'components/common/tools/tools.js'

//导入混入的代码
import {itemListenerMixin} from 'common/mixin.js'

//映射vuex中的actions
import {mapActions} from 'vuex'


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
    detailBottomBar,
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
      getTitleTopYs: null,
      currentIndex: 0,
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
      this.titleTopYs.push(this.$refs.comment.$el.offsetTop - 49)  
      this.titleTopYs.push(this.$refs.param.$el.offsetTop - 49)  
      this.titleTopYs.push(this.$refs.recommends.$el.offsetTop - 49) 
      this.titleTopYs.push(Number.MAX_VALUE)
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
    
    //监听better-sroll 的滚动
    detailScroll(position) {
      //到一定位置不显示backTop按钮
      this.isShowBackTop = Math.abs(position.y) > 500
           
      //在详情页滚动一定距离匹配对应的标题
      let length = this.titleTopYs.length 
      for(let i = 0; i < length - 1; i++ ) {
        if(this.currentIndex !== i && (-position.y >= this.titleTopYs[i] && -position.y <= this.titleTopYs[i+1])) {
          this.currentIndex = i
          this.$refs.navBar.currentIndex = this.currentIndex
        }
      }
      },

      navBarClick(index) {
    this.$refs.scroll.scrollTo(0,-this.titleTopYs[index],100)
      },
    
    ...mapActions(['addCart']),
     addToCart() {
      //  1.获取收集好购物车展示需要的信息
       const product = {}
       product.image = this.topImages[0]
       product.title = this.goods.title
       product.desc = this.goods.desc
       product.price = this.goods.nowPrice
       product.id = this.id     

       //2.添加购物车商品数据
          //方法1：
      this.$store.dispatch('addCart',product).then(res => {       
        this.$toast.show(res,1500)
      })  //事件发射给vuex中的 actions

        // 方法2：vuex 的映射
        // this.addCart(product).then(res => {
        // console.log(res)
      //})  //事件发射给vuex中的 actions  
     }
  },
  mounted() {
    //详情页商品介绍图片的 防抖刷新
     this.refresh = debounce(this.$refs.scroll.refresh,30) 
     this.toTitle = debounce(this.then,500)  
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

  .datail-scroll {
      height: calc(100% - 44px - 58px - 49px);
  }
</style>