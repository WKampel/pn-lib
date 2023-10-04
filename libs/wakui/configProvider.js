import { createContext } from 'react'

export const WakuiContext = createContext()

const WakuiProvider = ({ config, children }) => {
  return <WakuiContext.Provider value={{ tokens: config.tokens, getVariants: config.getVariants }}>{children}</WakuiContext.Provider>
}

export default WakuiProvider
