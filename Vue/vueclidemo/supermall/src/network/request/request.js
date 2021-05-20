import axios from 'axios'

export function coderwhy(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 12 * 1000,
    // withCredentials: true
  })

  // 2.实例（局部）拦截器   也可以使用全局拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    return err
  })
  instance.interceptors.response.use(res => {
    const _data = res.data
    return _data
  }, err => {

  })



  return instance(config)
}
