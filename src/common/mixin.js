/*
 * @author: 陈大帅
 * @Date: 2021-07-13 15:03:42
 * @LastEditTime: 2021-08-08 02:42:58
 * @FilePath: \supermall\mushroom_mall\src\common\mixin.js
 */

import {debounce} from 'components/common/tools/tools.js'

import {POP, NEW, SELL} from "./const";

export const itemListenerMixin = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,30)
    this.itemListener = () => {
      refresh()
  }
    this.$bus.$on('itemImageLoad',this.itemListener)     
  },
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}