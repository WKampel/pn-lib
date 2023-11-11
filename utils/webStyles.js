import { Platform } from 'react-native'

export function webStyles(styles) {
  if (Platform.OS === 'web') {
    return styles
  }
  return {}
}
