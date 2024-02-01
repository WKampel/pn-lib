import { NavigationProp } from '@react-navigation/native'
import * as Notifications from 'expo-notifications'
import { useEffect } from 'react'
import { RootStackParamList } from '../../../core/types/navigationTypes'
import { PushNotifData, PushNotifType } from '../../../pn-core-lib/types/PushNotifData'

type PushNotifHandler<T extends PushNotifData> = (data: Extract<PushNotifData, { type: T['type'] }>) => void

type PushNotifHandlers = {
  [K in PushNotifType]: PushNotifHandler<Extract<PushNotifData, { type: K }>>
}

export const useHandlePushNotifs = (navigation: NavigationProp<RootStackParamList>, handlers?: PushNotifHandlers) => {
  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      const data = response.notification.request.content.data as PushNotifData

      if (!data.type) return

      switch (data.type) {
        case 'ANNOUNCEMENT_CREATED':
          if (handlers?.[data.type]) handlers[data.type](data)
          navigation.navigate('Practice', { practiceUrl: data.practiceUrl, params: {} })
          break
        case 'FORM_ASSIGNED':
          if (handlers?.[data.type]) handlers[data.type](data)
          break
      }
    })

    // Clean up the subscription when the component is unmounted
    return () => subscription.remove()
  }, [])
}
