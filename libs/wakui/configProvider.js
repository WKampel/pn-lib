import { createContext, useContext } from 'react'

export const WakuiContext = createContext()

export const useRawTokens = () => useContext(WakuiContext)?.tokens
export const useRawVariants = () => useContext(WakuiContext)?.variants

const WakuiProvider = ({ config, children }) => {
  return <WakuiContext.Provider value={{ tokens: config.tokens, variants: config.variants }}>{children}</WakuiContext.Provider>
}

export default WakuiProvider
