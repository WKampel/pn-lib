import { View } from 'react-native'
import useStyles from '../hooks/useStyles'

const Group = ({ children, style, x = false, spacing = 'm' }) => {
  const styles = useStyles(styleConfig, { x, spacing })

  return <View style={[styles, style]}>{children}</View>
}

const styleConfig = {
  base: {},
  x: {
    true: {
      flexDirection: 'row',
    },
  },
  spacing: {
    m: {
      gap: '$spacing-l',
    },
    s: {
      gap: '$spacing-m',
    },
    xs: {
      gap: '$spacing-s',
    },
  },
}

export default Group
