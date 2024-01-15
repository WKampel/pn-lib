import React, { useContext } from 'react'
import { theme } from '../../config/theme'
import { tokens } from '../../config/tokens'
import { ThemeContext } from '../contexts/ThemeContext'

type Theme = typeof theme
type Tokens = typeof tokens

type ThemeProviderProps = {
  children: React.ReactNode
  override?: Partial<Theme & Tokens>
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, override } = props
  const existingTheme = useContext(ThemeContext)

  const mergedTheme = {
    ...existingTheme,
    ...override,
  }

  return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>
}
