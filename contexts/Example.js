import { createContext, useContext } from 'react'

const Context = createContext()

export const useExample = () => useContext(Context)

export const ExampleProvider = props => {
  return <Context.Provider value={null}>{props.children}</Context.Provider>
}
