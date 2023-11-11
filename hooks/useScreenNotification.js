import { useState } from 'react'
import uuid from 'react-native-uuid'
import useNotification from './useNotification'
import useScreenBlur from './useScreenBlur'
import useScreenFocus from './useScreenFocus'

const useScreenNotification = ({ title, body }) => {
  const { notify, clearNotification } = useNotification()
  const [notificationId, setNotificationId] = useState()

  useScreenFocus(() => {
    const id = uuid.v4()
    setNotificationId(id)
    notify({
      id,
      title,
      body,
    })
  })

  useScreenBlur(() => {
    clearNotification(notificationId)
  })
}

export default useScreenNotification
