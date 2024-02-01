import * as Notifications from 'expo-notifications'
import { useEffect } from 'react'
import { PushNotifData } from '../../../pn-core-lib/types/PushNotifData'

type UseHandlePushNotifProps = {
    onPressHandles: { [key in PushNOti]: () => void }}

export const useHandlePushNotif = (props: UseHandlePushNotifProps) => {
  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      const type = response.notification.request.content.data.type as PushNotifType

      switch (type) {
        case 'ANNOUNCEMENT_CREATED':
          props.onPressHandles.get(type)()
          break
      }
    })

    // Clean up the subscription when the component is unmounted
    return () => subscription.remove()
  }, [])
}
