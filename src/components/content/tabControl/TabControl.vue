<!--
 * @author: 陈大帅
 * @Date: 2021-07-14 16:34:42
 * @LastEditTime: 2021-07-28 04:13:02
 * @FilePath: \supermall\mushroom_mall\src\components\content\tabControl\TabControl.vue
-->
@<template>
  <div class="tab-control">
    <div class="tab-control-item"
        :class="{active: currentIndex === index}"
        @click="itemClick(index)"
        v-for="(item,index) in titles" :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
    titles:{
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  },
}

</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;   
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: #800;
  }

  .active span {
    border-bottom:3px solid #800;
  }
</style>