import { coderwhy } from 'network/request/request'

export function getHomeMultidata() {
  return coderwhy({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return coderwhy({
    url: '/home/data',
    params:{
      type,
      page
    }
  })
}
