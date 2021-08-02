/*
 * @author: 陈大帅
 * @Date: 2021-07-13 15:03:42
 * @LastEditTime: 2021-08-02 20:15:48
 * @FilePath: \supermall\mushroom_mall\src\common\mixin.js
 */

import {debounce} from 'components/common/tools/tools.js'

export const itemListenerMixin = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,30)
    this.itemListener = () => {
      refresh()
  }
    this.$bus.$on('itemImageLoad',this.itemListener)     
  },
}