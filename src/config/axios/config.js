import axios from 'axios';


export const publicAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 4000,  
    headers: {
        "Content-Type" : "application/json"
    }
})

export const privateAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 1000,
    headers: {
        "Content-Type" : "application/json",
    }
})

console.log(import.meta.env.VITE_API_URL)

privateAxios.defaults.headers.common['Authorization'] = `Token  token` ?? delete privateAxios.defaults.headers.common['Authorization']

publicAxios.interceptors.request.use(
    config => {
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )
  
  // privateAxios
  
  // endpoints
  
  
  export const register = (data) => {
    return privateAxios.post('register/', data)
  }
  
  export const forgetPassword = (data) => {
    return privateAxios.post('forget/password/', data)
  }
