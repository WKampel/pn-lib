import baseTokens from '../config/baseTokens.json'
import useTheme from './useTheme'

const useStyleTokens = () => {
  const themeTokens = useTheme()

  const tokens = {
    ...baseTokens,
    ...themeTokens,
  }

  return tokens
}

export default useStyleTokens
