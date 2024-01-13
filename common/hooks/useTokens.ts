import theme from '../../config/theme.json'
import tokens from '../../config/tokens.json'
import usePractice from '../../hooks/usePractice'

export const useTokens = () => {
  const practice = usePractice()

  return {
    ...tokens,
    ...theme,
    color_ui_primary: practice?.primaryColor,
  }
}
