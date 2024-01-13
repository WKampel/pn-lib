import { useState } from 'react'
import uuid from 'react-native-uuid'
import { useNotification } from './useNotification'
import { useScreenBlur } from './useScreenBlur'
import { useScreenFocus } from './useScreenFocus'

type ScreenNotificationParams = {
  title: string
  body: string
}

export const useScreenNotification = (params: ScreenNotificationParams) => {
  const { notify, clearNotification } = useNotification()
  const [notificationId, setNotificationId] = useState<string>('')

  useScreenFocus(() => {
    const id: string = uuid.v4() as string
    setNotificationId(id)
    notify({
      id,
      title: params.title,
      body: params.body,
      type: 'INFO',
    })
  })

  useScreenBlur(() => {
    clearNotification(notificationId)
  })
}
