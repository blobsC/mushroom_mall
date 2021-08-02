/*
 * @author: 陈大帅
 * @Date: 2021-07-30 19:55:45
 * @LastEditTime: 2021-08-02 02:24:41
 * @FilePath: \supermall\mushroom_mall\src\network\detail.js
 */
import {request} from './request'

//请求整的详情页的大数据
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    } 
  })
}

//请求详情页中的推荐商品的数据
export function getRecommend() {
  return request({
    url: '/recommend'
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

//用一个类将详情页商品的参数数据整合到业务需求的一起
export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}



