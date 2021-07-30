<!--
 * @author: 陈大帅
 * @Date: 2021-07-30 21:08:52
 * @LastEditTime: 2021-07-30 22:11:33
 * @FilePath: \supermall\mushroom_mall\src\views\detail\childComps\detailSwiper.vue
-->
@<template>
  <swiper class="item-swiper">
    <swiper-item v-for="item in topImages" :key="item">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>

import {Swiper,SwiperItem} from 'components/common/swiper/index.js'

export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type : Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .item-swiper {
    height: 300px;
    overflow: hidden;
  }

</style>