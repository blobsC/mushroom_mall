<!--
 * @author: 陈大帅
 * @Date: 2021-07-30 16:29:47
 * @LastEditTime: 2021-08-03 03:24:33
 * @FilePath: \supermall\mushroom_mall\src\views\detail\childComps\detailNavBar.vue
-->
@<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="leftClick">
        <img src="~assets/img/common/back.svg" alt=""></div>
      <div slot="center" class="titles">
        <div v-for="(item,index) in titles" 
             :key="item"
             class="titles-item" 
             :class="{active: index === currentIndex}"
             @click="titlesClick(index)">
             {{item}} 
        </div>                   
      </div>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'

export default {
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品','评价','参数','推荐'],
      currentIndex: 0,
      isleftGo: false
    }
  },
  methods: {
    titlesClick(index) {
      this.currentIndex = index
      this.$emit('navBarClick',index)
    },
    leftClick() {
      this.$router.back()
    }
  },
}
</script>

<style>
  .titles {
    display: flex;
    font-size: 15px;
  }

  .titles-item {
    flex: 1;
  }

  .active {
    color: #800;
    font-size: 16px;
  }

  .back img {
    padding-top: 10px;
  }

</style>