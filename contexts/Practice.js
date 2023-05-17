import { createContext, useContext } from 'react'

const Context = createContext()

export const usePractice = () => useContext(Context)

export const PracticeProvider = props => {
  return <Context.Provider value={props.value}>{props.children}</Context.Provider>
}
