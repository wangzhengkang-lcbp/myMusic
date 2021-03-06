import axios from 'axios'

// const baseURL = process.env.NODE_ENV === 'development' ? "http://localhost:3000" : ""
const baseURL = "https://music-api-ten-sand.vercel.app"

axios.defaults.baseURL = baseURL

//请求拦截器
axios.interceptors.request.use(config => {
  config.withCredentials=true
  if (localStorage.getItem("token")) config.token = localStorage.getItem("token")
  return config
})


//响应拦截器
axios.interceptors.response.use(
  res => res.data,
  err => {
    // console.log("请求失败", err)
    // return new Promise(() => { })
    return err.response.data
  }
)

export default axios