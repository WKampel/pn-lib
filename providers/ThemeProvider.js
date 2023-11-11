import { useContext } from 'react'
import baseTheme from '../config/baseTheme.json'
import ThemeContext from '../contexts/ThemeContext'

const ThemeProvider = ({ children, theme: themeProp = {} }) => {
  const currentTheme = useContext(ThemeContext)

  // Filter out null, undefined, and empty values from themeProp
  const filteredThemeProp = Object.entries(themeProp)
    .filter(([key, value]) => value !== null && value !== undefined && value !== '')
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

  const theme = { ...baseTheme, ...currentTheme, ...filteredThemeProp }
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
