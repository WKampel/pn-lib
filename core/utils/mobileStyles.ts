import { Platform, StyleProp, TextStyle, ViewStyle } from 'react-native'

export const mobileStyles = (styles: StyleProp<ViewStyle | TextStyle>) => {
  if (Platform.OS === 'android' || Platform.OS === 'ios') {
    return styles
  }
  return {}
}
