import { useContext } from 'react'
import { AuthTokenContext } from '../contexts/AuthTokenContext'

export const useAuthToken = () => {
  const context = useContext(AuthTokenContext)

  if (!context) {
    throw new Error('useAuthToken must be used within a AuthTokenContext.Provider')
  }

  return context
}
