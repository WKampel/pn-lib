import { View } from 'react-native'
import useIsMobile from '../hooks/useIsMobile'
import useStyles from '../hooks/useStyles'

const Screen = ({ children, style }) => {
  const mobile = useIsMobile()

  const styles = useStyles(styleConfig, { mobile })

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
  mobile: {
    true: {
      padding: 0,
      maxWidth: 'unset',
    },
  },
}

export default Screen
