import { Platform, View } from 'react-native'
import useStyles from '../hooks/useStyles'

const Screen = ({ children, style }) => {
  const styles = useStyles(styleConfig, { OS: Platform.OS })

  return <View style={[styles, style]}>{children}</View>
}

const styleConfig = {
  base: {
    gap: '$spacing-l',
    flex: 1,
    overflow: 'hidden',
  },
  OS: {
    web: {
      padding: '$spacing-l',
      maxWidth: 1300,
    },
  },
}

export default Screen
