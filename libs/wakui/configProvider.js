import { createContext } from 'react'

export const WakuiContext = createContext()

const WakuiProvider = ({ config, children }) => {
  return (
    <WakuiContext.Provider value={{ tokens: config.tokens, styleAliases: config.styleAliases, variants: config.variants }}>
      {children}
    </WakuiContext.Provider>
  )
}

export default WakuiProvider
