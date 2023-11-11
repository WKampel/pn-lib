import { Platform, View } from 'react-native'
import useIsPhoneEmulator from '../hooks/useIsPhoneEmulator'
import useStyles from '../hooks/useStyles'

const Screen = ({ children, style }) => {
  const isPhoneEmulator = useIsPhoneEmulator()

  const styles = useStyles(styleConfig, { OS: Platform.OS, phone: Platform.OS === 'mobile' || isPhoneEmulator })

  return <View style={[styles, style]}>{children}</View>
}

const styleConfig = {
  base: {
    gap: '$spacing-l',
    flex: 1,
    overflow: 'hidden',
    padding: '$spacing-l',
    maxWidth: 1300,
  },
  phone: {
    true: {
      padding: 0,
      maxWidth: 'unset',
    },
  },
}

export default Screen
