import { View } from 'react-native'
import useStyles from '../hooks/useStyles'

const Card = ({ children, style }) => {
  const styles = useStyles(styleConfig)

  return <View style={[styles, style]}>{children}</View>
}

const styleConfig = {
  base: {
    borderWidth: 1,
    borderColor: '$color-border-on-surface',
    borderRadius: '$radius-s',
    padding: '$spacing-l',
    gap: '$spacing-l',
    backgroundColor: '$color-bg-surface',
  },
}

export default Card
