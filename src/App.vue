<!--
 * @author: 陈大帅
 * @Date: 2021-07-13 14:36:40
 * @LastEditTime: 2021-07-16 00:23:39
 * @FilePath: \supermall\mushroom_mall\src\App.vue
-->
<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>

import MainTabBar from "components/content/mainTabBar/MainTabBar.vue"

export default {
  name: "app",
  components:{
    MainTabBar
  }
}

</script>

<style>
@import url(./assets/css/base.css);

</style>
