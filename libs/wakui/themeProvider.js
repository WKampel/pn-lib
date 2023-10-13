import { createContext, useContext, useMemo } from 'react'
import { useRawTokens, useRawVariants } from './configProvider'
import { resolveTokenReferences } from './utils'

export const ThemeContext = createContext()

export const useComponentVariants = compName => {
  const { variants } = useContext(ThemeContext)
  return variants?.[compName] || {}
}

const ThemeProvider = ({ theme, children }) => {
  const rawTokens = useRawTokens()
  const rawVariants = useRawVariants()

  // Combines tokens with theme and replaces token references
  const tokens = useMemo(() => resolveTokenReferences({ ...rawTokens, ...theme }, { ...rawTokens, ...theme }), [rawTokens, theme])

  // Replaces token references
  const variants = useMemo(() => resolveTokenReferences(rawVariants, tokens), [tokens, rawVariants])

  return <ThemeContext.Provider value={{ tokens, variants }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
