<!--
 * @author: 陈大帅
 * @Date: 2021-07-14 14:00:12
 * @LastEditTime: 2021-07-28 04:11:36
 * @FilePath: \supermall\mushroom_mall\src\views\home\childComps\RencommendViews.vue
-->
@<template>
  <div class="recommend">
    <div v-for="(ele,index) in recommend" :key="index" class="recommend-item">
      <a :href="ele.link">
        <img :src="ele.image" alt="">
        <div>{{ele.title}}</div>
      </a>         
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend : {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }

  .recommend-item {
    flex: 1
  }
  
  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }

</style>