import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export const useTheme = () => {
  const tokens = useContext(ThemeContext)
  return { tokens }
}
