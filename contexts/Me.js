import { createContext, useContext } from 'react'

const Context = createContext()

export const useMe = () => useContext(Context)

export const MeProvider = props => {
  return <Context.Provider value={props.value}>{props.children}</Context.Provider>
}
