/*
 * @author: 陈大帅
 * @Date: 2021-07-30 19:55:45
 * @LastEditTime: 2021-07-31 02:57:15
 * @FilePath: \supermall\mushroom_mall\src\network\detail.js
 */
import {request} from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    } 
  })
}

 //用一个类将商品数据后端混乱的数据整合到业务需求的一起
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
  }
}

//用一个类将商家数据后端混乱的数据整合到业务需求的一起
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}
