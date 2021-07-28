<!--
 * @author: 陈大帅
 * @Date: 2021-07-13 22:30:43
 * @LastEditTime: 2021-07-28 04:11:54
 * @FilePath: \supermall\mushroom_mall\src\components\common\navbar\NavBar.vue
-->
@<template>
  <div class="nav-bar">
    <div class="nav-left"><slot name="left"></slot></div>
    <div class="nav-center"><slot name="center">标题</slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align:center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
  }

  .nav-left, .nav-right{
    width: 60px;
  }

  .nav-center {
    flex: 1;
  }
</style>