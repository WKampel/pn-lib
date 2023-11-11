import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import useDrawer from '../hooks/useDrawer'
import useStyles from '../hooks/useStyles'

const OpenDrawerButton = () => {
  const { setOpen } = useDrawer()
  const styles = useStyles(styleConfig)

  return (
    <TouchableOpacity style={styles.openDrawerButton} onPress={() => setOpen(true)}>
      <Ionicons name='menu' color={styles.text.color} size={styles.text.fontSize} />
    </TouchableOpacity>
  )
}

const styleConfig = {
  base: {
    openDrawerButton: {
      height: '100%',
      aspectRatio: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: -10,
    },
    text: {
      fontSize: '$font-size-xl',
      color: 'black',
    },
  },
}

export default OpenDrawerButton
