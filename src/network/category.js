/*
 * @author: 陈大帅
 * @Date: 2021-08-08 02:31:13
 * @LastEditTime: 2021-08-08 03:12:52
 * @FilePath: \supermall\mushroom_mall\src\network\category.js
 */

import {request} from "./request.js"

export function getCategory() {
  return request({
    url: '/category'
  })
}

export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
