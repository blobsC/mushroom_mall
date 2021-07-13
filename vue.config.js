/*
 * @author: 陈大帅
 * @Date: 2021-07-13 15:28:57
 * @LastEditTime: 2021-07-13 15:39:58
 * @FilePath: \supermall\mushroom_mall\vue.config.js
 */
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {       
        assets: "@/assets",    
        components: "@/components", 
        common: "@/common",
        network: "@/network",
        views: "@/views"   
      }
    }
  }
}