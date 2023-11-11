import { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'

const useTheme = () => {
  const tokens = useContext(ThemeContext)
  return tokens
}

export default useTheme
