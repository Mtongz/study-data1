import { coderwhy } from 'network/request/request'

export function getHomeMultidata() {
  return coderwhy({
    url: '/home/multidata'
  })
}
