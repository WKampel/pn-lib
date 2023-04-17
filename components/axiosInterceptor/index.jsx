import axios from 'axios'
import { useEffect } from 'react'

export default props => {
  useEffect(() => {
    const reqInterceptor = axios.interceptors.request.use(props.req || (req => req))
    const resInterceptor = axios.interceptors.response.use(props.res || (res => res), props.resError || (error => error))

    return () => {
      axios.interceptors.request.eject(reqInterceptor)
      axios.interceptors.response.eject(resInterceptor)
    }
  }, props.dependencies || [])
  return null
}
