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
    console.log(err);
    if (err && err.response) {
      console.log(err.response.status);
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break
        case 401:
          err.message = '未授权的访问'
          break
      }
      console.log(err.message);
    }
    return err
  })



  return instance(config)
}
