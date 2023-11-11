import { Platform } from 'react-native'

const mobileStyles = styles => {
  if (Platform.OS === 'android' || Platform.OS === 'ios') {
    return styles
  }
  return {}
}

export default mobileStyles
