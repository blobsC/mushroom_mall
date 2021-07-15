<!--
 * @author: 陈大帅
 * @Date: 2021-07-06 17:08:59
 * @LastEditTime: 2021-07-16 00:24:24
 * @FilePath: \supermall\mushroom_mall\src\components\common\tabbar\TabBar.vue
-->
@<template>
   <div id="tab-bar">
      <slot></slot>
   </div>
</template>

<script>
export default {

}
</script>

<style>

#tab-bar { 
  display: flex;
  background: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, .2) ;
  z-index: 9;
  
}

</style>