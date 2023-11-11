import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity } from 'react-native'
import useStyles from '../hooks/useStyles'

const BackButton = ({ to }) => {
  const nav = useNavigation()
  const styles = useStyles(styleConfig)

  return (
    <TouchableOpacity style={styles.backButton} onPress={() => nav.navigate(to)}>
      <Entypo name='chevron-left' size={styles.icon.size} color={styles.icon.color} />
      <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
  )
}

const styleConfig = {
  base: {
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: 'black',
      size: '$font-size-xl',
    },
    text: {
      fontSize: '$font-size-s',
    },
  },
}

export default BackButton
