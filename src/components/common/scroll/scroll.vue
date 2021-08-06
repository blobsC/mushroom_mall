<!--
 * @author: 陈大帅
 * @Date: 2021-07-28 03:31:22
 * @LastEditTime: 2021-08-07 02:53:16
 * @FilePath: \supermall\mushroom_mall\src\components\common\scroll\scroll.vue
-->
@<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
  data() {
    return {
      scroll : null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() { 
    this.scroll = new BScroll(this.$refs.wrapper,{
      click: true,
      observeDOM: true,
      observeImage: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    //监听scroll滚动
    if(this.probeType === 2 || this.probeType ===3) {
      this.scroll.on('scroll',(position) => {
        this.$emit('scroll',position)     
      })
    }

    //监听上拉加载数据
    if(this.pullUpLoad) {
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    }

  },
  methods: {
    scrollTo(x, y, time=300) {
      //做得是点击回到顶部
     this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
     this.scroll && this.scroll.finishPullUp()    
    },
    refresh() {
     this.scroll && this.scroll.refresh()    
    },
    getScrollY() {
      return this.scroll ?  this.scroll.y : 0
    }
  },
}
</script>

<style scpoed>

</style>