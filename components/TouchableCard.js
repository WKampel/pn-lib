import { TouchableOpacity } from 'react-native'
import useInteractive from '../hooks/useInteractive'
import useStyles from '../hooks/useStyles'
import Card from './Card'

const TouchableCard = ({ style, onPress, children }) => {
  const { hovered, interactiveEvents } = useInteractive()
  const styles = useStyles(styleConfig, {}, { hovered })

  return (
    <TouchableOpacity {...interactiveEvents} onPress={onPress}>
      <Card style={[style, styles]}>{children}</Card>
    </TouchableOpacity>
  )
}

const styleConfig = {
  base: {
    '@hovered': {
      borderColor: '$color-border-on-surface-intense',
    },
  },
}

export default TouchableCard
