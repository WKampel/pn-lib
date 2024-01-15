import { ReactNode } from 'react'
import { AuthTokenContext } from '../contexts/AuthTokenContext'
import { useStorage } from '../hooks/useStorage'

export const AuthTokenProvider = ({ children, practiceUrl }: { children: ReactNode; practiceUrl: string }) => {
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
