import { Platform } from 'react-native'

export function mobileStyles(styles) {
  if (Platform.OS === 'android' || Platform.OS === 'ios') {
    return styles
  }
  return {}
}
