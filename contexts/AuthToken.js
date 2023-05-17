import { createContext, useContext } from 'react'
import useStorage from '../hooks/useStorage'

const Context = createContext()

export const useAuthToken = () => useContext(Context)

export const AuthTokenProvider = props => {
  const { val, set } = useStorage('token')

  return (
    <Context.Provider
      value={{
        token: val,
        setToken: set,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}
