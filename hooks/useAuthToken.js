import { useContext } from 'react'
import AuthTokenContext from '../contexts/AuthTokenContext'

const useAuthToken = () => {
  const { token, setToken, loading } = useContext(AuthTokenContext)
  return { token, setToken, loading }
}

export default useAuthToken
