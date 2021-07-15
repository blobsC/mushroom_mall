<!--
 * @author: 陈大帅
 * @Date: 2021-07-14 02:45:28
 * @LastEditTime: 2021-07-14 03:42:05
 * @FilePath: \supermall\mushroom_mall\src\views\home\childComps\HomeSwiper.vue
-->
@<template>
  <swiper>
      <swiper-item v-for="(ele,index) in banner" :key="index">
        <a :href="ele.link">
          <img :src="ele.image" alt="">
        </a>
      </swiper-item>
    </swiper> 
</template>

<script>
 import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banner : {
      type: Array,
      default() {
        return []
      }
    }
  }

}
</script>

<style>

</style>