import { Platform } from 'react-native'

export default {
  tokens: {
    color: {
      snow: 'rgb(220, 220, 220)',
      primary: '#69b4f5',
      primaryLightTint: '#e9eff5',
      danger: 'red',
    },
  },
  variants: {
    shadow: {
      m: {
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 5,
            shadowRadius: 2,
          },
          android: {
            elevation: 2,
          },
          default: {
            boxShadow: `0px ${4}px ${16}px rgba(0, 0, 0, 0.1)`,
          },
        }),
      },
    },
    round: {
      true: {
        borderRadius: 999,
      },
    },
    outline: {
      primary: {
        outlineColor: '$color.primary',
        outlineStyle: 'solid',
        outlineWidth: 2,
        borderColor: 'transparent',
      },
    },
  },
  styleAliases: {
    bg: 'backgroundColor',
    marginH: 'marginHorizontal',
    marginV: 'marginVertical',
    marginL: 'marginLeft',
    marginR: 'marginRight',
    marginT: 'marginTop',
    marginB: 'marginBottom',
  },
}
