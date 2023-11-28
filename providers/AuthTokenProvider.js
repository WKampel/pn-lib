import AuthTokenContext from '../contexts/AuthTokenContext'
import useStorage from '../hooks/useStorage'

const AuthTokenProvider = ({ children, practiceUrl }) => {
  const key = practiceUrl ? `token-${practiceUrl}` : 'token'
  const [token, setToken, loading] = useStorage(key)

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
