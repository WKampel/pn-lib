import { ActivityIndicator } from 'react-native'
import useStyles from '../hooks/useStyles'

const Spinner = ({ style, visible = true, color }) => {
  const styles = useStyles(styleConfig)

  return <ActivityIndicator style={style} color={color || styles.color} animating={visible} />
}

const styleConfig = {
  base: {
    color: '$color-ui-primary',
  },
}

export default Spinner
