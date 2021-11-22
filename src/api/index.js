import axios from 'axios'

const service = axios.create({
  timeout: 5000,
  baseURL: 'https://api.virapi.com/wangwanqi/demo',
  headers: { appToken: '$2a$10$Xe1ebH77pJKKm3O/kA6RgOyTUrBkYyx0rOuoIH3jd90bmIa7cLsja' }
})
service.interceptors.request.use(
  (config) => {
    // 插件 airApi官网设置请求头
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)
export default service
