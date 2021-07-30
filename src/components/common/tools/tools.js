/*
 * @author: 陈大帅
 * @Date: 2021-07-29 20:58:24
 * @LastEditTime: 2021-07-29 21:00:05
 * @FilePath: \supermall\mushroom_mall\src\components\common\tools\tools.js
 */

/** 防抖函数的封装  */
export function debounce(func, delay) {
  let timer = null
  return function(...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
        func.apply(this, args)
    }, delay)
  }
}
