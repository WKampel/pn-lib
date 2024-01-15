import { createContext } from 'react'
import { theme } from '../../config/theme'
import { tokens } from '../../config/tokens'

type Theme = typeof theme
type Tokens = typeof tokens

export const ThemeContext = createContext<Theme & Tokens>({
  ...tokens,
  ...theme,
})
