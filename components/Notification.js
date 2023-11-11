import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Pressable, Text, View } from 'react-native'
import useInteractive from '../hooks/useInteractive'
import useStyles from '../hooks/useStyles'

const NOTIF_TYPES = {
  INFO: 'info',
  ERROR: 'error',
}

const Notification = ({ title, body, onPress: onPressProp, onDelete, linkTo, type = NOTIF_TYPES.INFO }) => {
  const nav = useNavigation()

  const { hovered, focused, pressed, interactiveEvents } = useInteractive()
  const styles = useStyles(styleConfig, { type }, { hovered, focused, pressed })

  const onPress = () => {
    if (onPressProp) onPressProp()
    if (linkTo) nav.navigate(linkTo)
  }

  const getIconName = () => {
    if (type === NOTIF_TYPES.INFO) return 'infocirlceo'
    if (type === NOTIF_TYPES.ERROR) return 'closecircleo'
  }

  return (
    <Pressable style={styles.notification} onPress={onPress} {...interactiveEvents}>
      <AntDesign name={getIconName()} size={30} color='white' />

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>

      <Pressable onPress={onDelete}>
        <AntDesign name='delete' size={20} color='white' />
      </Pressable>
    </Pressable>
  )
}

const styleConfig = {
  base: {
    notification: {
      flexDirection: 'row',
      padding: '$spacing-m',
      borderRadius: '$radius-s',
      marginBottom: '$spacing-m',
      gap: '$spacing-s',
      '@hovered': {
        opacity: '$opacity-hovered',
      },
    },
    title: {
      fontSize: '$font-size-m',
      textTransform: 'uppercase',
      fontWeight: '$weight-heavy',
      marginBottom: '$spacing-xs',
      color: 'white',
    },
    body: {
      fontSize: '$font-size-m',
      color: 'white',
    },
  },
  type: {
    info: {
      notification: {
        backgroundColor: '$color-info',
      },
    },
    error: {
      notification: {
        backgroundColor: '$color-danger',
      },
    },
  },
}

export default Notification
