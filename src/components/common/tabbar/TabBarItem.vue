<!--
 * @author: 陈大帅
 * @Date: 2021-07-06 17:27:42
 * @LastEditTime: 2021-07-28 04:12:30
 * @FilePath: \supermall\mushroom_mall\src\components\common\tabbar\TabBarItem.vue
-->
@<template>
  <div class="tab-bar-item" @click="pathClick">
  <div  v-if="!isActive"><slot name="item-icon"></slot></div>
  <div v-else><slot name="item-icon-active"></slot></div>
  <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props:{
    path: String,
    activeColor: {
      type: String,
      default: '#800'     
    }
  },
  methods: {
    pathClick() {
      this.$router.push(this.path)    
    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle() {
      return this.isActive ? {color:this.activeColor} : {}
    }
  }
}
</script>

<style scoped>
  
  .tab-bar-item {
  flex: 1;
  text-align: center ;
  height: 49px;
  font-size: 14px;
}

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
    margin-top: 3px;
  }

</style>