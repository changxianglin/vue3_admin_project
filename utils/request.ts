import axios from 'axios'
import { ElMessage } from 'element-plus'

let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

request.interceptors.request.use(config => {
  return config
})