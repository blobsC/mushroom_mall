<!--
 * @author: 陈大帅
 * @Date: 2021-07-13 14:36:40
 * @LastEditTime: 2021-08-09 03:44:47
 * @FilePath: \supermall\mushroom_mall\src\App.vue
-->
<template>
  <div id="app">
    <keep-alive exclude="deTail">
    <router-view></router-view>
    </keep-alive>   
    <main-tab-bar></main-tab-bar>
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>

<script>

import MainTabBar from "components/content/mainTabBar/MainTabBar.vue"

import Icon from 'components/content/Icon/Icon.vue'
import SvgIcon from 'components/content/Icon/svg.vue'

export default {
  name: "app",
  components:{
    MainTabBar,
    Icon,
    SvgIcon
  }
}

</script>

<style>
@import url(./assets/css/base.css);

</style>
