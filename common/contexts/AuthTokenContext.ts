import { createContext } from 'react'

type AuthTokenContextType = {
  token: string | undefined | null
  loading: boolean
  setToken: (token: string | null) => void
}

export const AuthTokenContext = createContext<AuthTokenContextType | undefined>(undefined)
