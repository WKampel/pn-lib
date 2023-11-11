import AuthTokenContext from '../contexts/AuthTokenContext'
import useStorage from '../hooks/useStorage'

const AuthTokenProvider = ({ children }) => {
  const [token, setToken, loading] = useStorage('token')

  return (
    <AuthTokenContext.Provider
      value={{
        token,
        setToken,
        loading,
      }}
    >
      {children}
    </AuthTokenContext.Provider>
  )
}

export default AuthTokenProvider
