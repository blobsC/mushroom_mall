/*
 * @author: 陈大帅
 * @Date: 2021-07-12 19:01:01
 * @LastEditTime: 2021-07-14 01:07:45
 * @FilePath: \supermall\mushroom_mall\src\network\request.js
 */

import axios from 'axios'

export function request(config) {   
   
    const instance =  new axios.create(
      {
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000
    })  

    // 请求拦截
    instance.interceptors.request.use(config => {
    
      return config
    },err => {
     
      console.log(err);
      return err
    })
    
    // 响应拦截
     instance.interceptors.response.use(res => {     
     
      return res
     },err => {
       return err
     })

    return  instance(config)      
  }

 
 