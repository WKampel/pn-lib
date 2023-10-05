import buttonColors from './colors/button'

export default tokens = palette => ({
  color: {
    mainBackground: palette.white,
    ...buttonColors(palette),
  },
  space: {
    xs: 6,
    s: 12,
    m: 18,
    l: 24,
    xl: 30,
  },
  fontSize: {
    xs: 6,
    s: 12,
    m: 18,
    l: 24,
    xl: 30,
  },
})
