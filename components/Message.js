import moment from 'moment'
import { useMemo } from 'react'
import { Text, View } from 'react-native'
import useStyles from '../hooks/useStyles'

// App can be office or patient
const app = process.env.EXPO_PUBLIC_APP

const Message = ({ body, createdAt, from }) => {
  const kind = useMemo(() => {
    if (from === 'server') return 'server'
    if (app === from) return 'me'
    return 'penpal'
  }, [app, from])

  const styles = useStyles(styleConfig, { kind }, {})
  return (
    <View style={styles.message}>
      <Text style={styles.text}>{body}</Text>
      {createdAt ? <Text style={styles.text}>{moment(createdAt).format('ddd, MMM D YYYY, h:mm A')}</Text> : null}
    </View>
  )
}

const styleConfig = {
  base: {
    message: {
      borderRadius: '$radius-m',
      maxWidth: '75%',
      paddingHorizontal: '$spacing-m',
      paddingVertical: '$spacing-s',
    },
    text: {
      fontSize: '$font-size-s',
    },
  },
  kind: {
    server: {
      message: {
        backgroundColor: 'transparent',
        alignSelf: 'center',
      },
      text: {
        color: '$color-text-on-surface',
        textAlign: 'center',
      },
    },
    penpal: {
      message: {
        backgroundColor: '$color-ui-primary',
        marginRight: 'auto',
      },
      text: {
        color: '$color-text-on-primary',
      },
    },
    me: {
      message: {
        backgroundColor: '$color-bg-surface-emphasis',
        marginLeft: 'auto',
      },
      text: {
        color: '$color-text-on-surface',
      },
    },
  },
}

export default Message
