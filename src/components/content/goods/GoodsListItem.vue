<!--
 * @author: 陈大帅
 * @Date: 2021-07-15 22:45:00
 * @LastEditTime: 2021-08-09 03:04:29
 * @FilePath: \supermall\mushroom_mall\src\components\content\goods\GoodsListItem.vue
-->
@<template>
  <div class="goods-item" @click="itemClick">   
    <img v-lazy="showImg" alt="" @load="imageLoad" :key="showImg">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>   
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>   
  </div>
</template>

<script>

export default {
  props: {
    goodsItem: {
    type: Object,
    default() {
      return {}
      }
    } 
  },
  methods: {      
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
      },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
  computed: {
    showImg() {
      return this.goodsItem.img || this.goodsItem.image ||  this.goodsItem.show.img
    }
  },
  
  // mounted: function () {
  //   console.log(this.goodsItem);
  //   console.log(this.goodsItem.iid);
  // }
    
 

}

</script>

<style scoped>

.goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;   
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: #800;
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>