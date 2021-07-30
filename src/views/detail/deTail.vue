<!--
 * @author: 陈大帅
 * @Date: 2021-07-30 15:59:13
 * @LastEditTime: 2021-07-31 02:58:42
 * @FilePath: \supermall\mushroom_mall\src\views\detail\deTail.vue
-->
@<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages" ></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
  </div>
</template>

<script>

import detailNavBar from './childComps/detailNavBar.vue'

import {getDetail,Goods,Shop} from 'network/detail.js'
import detailSwiper from './childComps/detailSwiper.vue'
import detailBaseInfo from './childComps/detailBaseInfo'
import detailShopInfo from './childComps/detailShopInfo'

export default {
  name: 'deTail',
  components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo 
  },
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {}
    }
  },
  created() {
    //保存从Home路由跳转传入得id
    this.id = this.$route.params.id
    
    //根据id请求详细页图片的数据
    getDetail(this.id).then(res => {
      console.log(res);
      const data = res.data.result
      this.topImages = data.itemInfo.topImages    
          
    //整合详情页需要的数据
    this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

    //整合商家信息的数据
    this.shop = new Shop(data.shopInfo)
    })     
  },
}
</script>

<style>

</style>