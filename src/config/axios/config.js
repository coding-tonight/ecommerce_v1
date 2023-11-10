import axios from 'axios';


export const publicAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 40000,
  headers: {
    "Content-Type": "application/json"
  }
})

export const privateAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 4000,
  headers: {
    "Content-Type": "application/json",
  }
})

// console.log(import.meta.env.VITE_API_URL)

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

// public endpoints

export const register = (data) => {
  return publicAxios.post('register/', data)
}

export const forgetPassword = (data) => {
  return publicAxios.post('forget/password/', data)
}

// private endpoints
export const verifyOtp = (data) => {
  return privateAxios.post(`verify/otp/`, data)
}

export const changePassword = (data) => {
  return privateAxios.post('forget/password/', data)
}

