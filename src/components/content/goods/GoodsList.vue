<!--
 * @author: 陈大帅
 * @Date: 2021-07-15 22:44:41
 * @LastEditTime: 2021-07-15 23:49:13
 * @FilePath: \supermall\mushroom_mall\src\components\content\goods\GoodsList.vue
-->
@<template>
  <div class="good-list">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item='item'></goods-list-item>
  </div>
</template>

<script>

import GoodsListItem from './GoodsListItem.vue'

export default {
    components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>


<style>
    .good-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #fff;
    padding: 2px;
  }
</style>