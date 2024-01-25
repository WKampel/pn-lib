import { createContext } from 'react'
import { theme } from '../../config/theme'
import { tokens } from '../../config/tokens'

type Theme = typeof theme
type Tokens = typeof tokens

export type ThemeType = Theme & Tokens

export const ThemeContext = createContext<ThemeType>({
  ...tokens,
  ...theme,
})
