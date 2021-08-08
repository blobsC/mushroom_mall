<!--
 * @author: 陈大帅
 * @Date: 2021-08-08 02:34:33
 * @LastEditTime: 2021-08-09 01:56:54
 * @FilePath: \supermall\mushroom_mall\src\views\category\childComps\TabContentDetail.vue
-->
<template>
  <grid-view>
    <goods-list-item v-for="(item, index) in categoryDetail" :key="index" :goodsItem="item"></goods-list-item>
  </grid-view>
</template>

<script>
  import GridView from 'components/common/gridView/GridView'
  import GoodsListItem from 'components/content/goods/GoodsListItem'

  export default {
    name: "TabContentDetail",
    components: {
      GridView,
      GoodsListItem
    },
    props: {
      categoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
      
    }
  }
</script>

<style scoped>

</style>
