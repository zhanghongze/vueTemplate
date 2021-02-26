import request from 'network/fetch';
import QS from 'qs'
export const getMessage = (query) => {
  return request({
    url: '/api/getMessage?' + QS.stringify(query),
    method: 'get',
    data: query
  })
}
export const postMessage = (query) => {
  return request({
    url: '/api/postMessage',
    method: 'post',
    data: QS.stringify(query)
  })
}
