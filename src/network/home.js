/*
 * @author: 陈大帅
 * @Date: 2021-07-14 00:49:26
 * @LastEditTime: 2021-07-14 20:23:18
 * @FilePath: \supermall\mushroom_mall\src\network\home.js
 */

import {request} from "./request.js"

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}