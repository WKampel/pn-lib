import { useState } from 'react'
import { View } from 'react-native'
import uuid from 'react-native-uuid'
import useNotification from '../hooks/useNotification'
import useScreenBlur from '../hooks/useScreenBlur'
import useScreenFocus from '../hooks/useScreenFocus'
import useStyles from '../hooks/useStyles'

const Screen = ({ children, style, notification }) => {
  const { notify, clearNotification } = useNotification()
  const [notificationId, setNotificationId] = useState()

  useScreenFocus(() => {
    if (notification) {
      const id = uuid.v4()
      setNotificationId(id)
      notify({
        id,
        title: notification.title,
        body: notification.body,
      })
    }
  })

  useScreenBlur(() => {
    if (notificationId) {
      clearNotification(notificationId)
    }
  })

  const styles = useStyles(styleConfig)

  return <View style={[styles, style]}>{children}</View>
}

const styleConfig = {
  base: {
    padding: '$spacing-l',
    gap: '$spacing-l',
    flex: 1,
    overflow: 'hidden',
    maxWidth: 1300,
  },
}

export default Screen
