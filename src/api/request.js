import request from '../lib/fetch';
import QS from 'qs'
//列表
export const getMescrollList = (query) => {
    return request({
      url: '/webApi/findByPageH5?'+ QS.stringify(query),
      method: 'get',
      data:query
    })
  }

