import { Platform } from 'react-native'
import button from './colors/button'
import card from './colors/card'
import textInput from './colors/textInput'

export default generateTokens = palette => ({
  color: {
    mainBackground: palette.white,
    link: palette.primary,
    outline: palette.primary,
    spinner: palette.primary,
    ...button(palette),
    ...card(palette),
    ...textInput(palette),
  },
  space: {
    xs: 8,
    s: 16,
    m: 24,
    l: 32,
    xl: 40,
  },
  fontSize: {
    xs: 6,
    s: 12,
    m: 18,
    l: 24,
    xl: 30,
  },
  inputHeight: {
    xs: 30,
    s: 40,
    m: 50,
    l: 60,
  },
  shadow: {
    m: {
      ...Platform.select({
        ios: {
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowRadius: 2,
          shadowOpacity: 0.2,
          shadowColor: 'rgb(0,0,0)',
        },
        android: {
          elevation: 3,
        },
        default: {
          boxShadow: '0 1px 2px rgb(0,0,0,.2)',
        },
      }),
    },
  },
})
