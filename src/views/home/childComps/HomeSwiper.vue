<!--
 * @author: 陈大帅
 * @Date: 2021-07-14 02:45:28
 * @LastEditTime: 2021-07-30 22:12:21
 * @FilePath: \supermall\mushroom_mall\src\views\home\childComps\HomeSwiper.vue
-->
@<template>
  <swiper>
      <swiper-item v-for="(ele,index) in banner" :key="index">
        <a :href="ele.link">
          <img :src="ele.image" alt="" @load="imageLoad">
        </a>
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
    banner : {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {

    //监听home轮播图加载完成 来刷新页面高度
    imageLoad() {
      if(!this.isLoad)   //做节流阀 只发射一次
        this.$emit('swiperImageLoad')
        this.isLoad = true
    }
  },

}
</script>

<style>

</style>