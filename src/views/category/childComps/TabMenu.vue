<!--
 * @author: 陈大帅
 * @Date: 2021-08-08 02:34:33
 * @LastEditTime: 2021-08-08 03:35:03
 * @FilePath: \supermall\mushroom_mall\src\views\category\childComps\TabMenu.vue
-->
<template>
  <scroll id="tab-menu">
    <div class="menu-list">
      <div class="menu-list-item"
           :class="{active: index===currentIndex}"
           v-for="(item, index) in categories"
           :key="index"
           @click="itemClick(index)">
        {{item.title}}
      </div>
    </div>
  </scroll>
</template>

<script>
  import scroll from 'components/common/scroll/scroll'

	export default {
		name: "TabMenu",
    components: {
		  scroll
    },
    props: {
		  categories: Array
    },
    data() {
		  return {
		    currentIndex: 0
      }
    },
    methods: {
		  itemClick(index) {
        this.currentIndex = index
        this.$emit('selectItem', index)
      }
    }
	}
</script>

<style scoped>
  #tab-menu {
    background-color: #f6f6f6;
    height: 100%;
    width: 100px;
    box-sizing: border-box;
  }

  .menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }

  .menu-list-item.active {
    font-weight: 700;
    color: #800;
    background-color: #fff;
    border-left: 3px solid #800;
  }
</style>
