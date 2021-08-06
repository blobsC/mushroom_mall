<!--
 * @author: 陈大帅
 * @Date: 2021-08-06 20:56:23
 * @LastEditTime: 2021-08-07 01:42:58
 * @FilePath: \supermall\mushroom_mall\src\components\common\toast\toast.vue
-->
@<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message,time=1500) {
    this.message = message
    this.isShow = true

    setTimeout(() => {
      this.message = ''
      this.isShow = false
    }, time)
    }
  },
}
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 8px 10px;
    transform: translate(-50%,-50%);
    z-index: 999;

    color: #fff;
    background-color: rgba(0, 0, 0,.8)
  }
</style>