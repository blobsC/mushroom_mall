<!--
 * @author: 陈大帅
 * @Date: 2021-08-06 00:32:52
 * @LastEditTime: 2021-08-06 15:57:11
 * @FilePath: \supermall\mushroom_mall\src\views\cart\childComps\checkButton.vue
-->
@<template>
  <div>
  <div class="icon-selector" :class="{'selector-active': isChecked}">
    <img src="~/assets/img/cart/tick.svg" alt="">
  </div>
</div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
} 
</script>

<style scoped>
   .icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }

  .selector-active {
    background-color: #800;
    border-color: #800;
  }
</style>