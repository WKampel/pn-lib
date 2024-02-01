import { InAppNotificationEventData, InAppNotificationEventName } from '../../../pn-core-lib/types/InAppNotificationEventData'
import { useNotification } from './useNotification'
import { useSocketEvent } from './useSocketEvent'

type NotificationHandler<T extends InAppNotificationEventData> = (data: T) => void

type InAppNotificationHandlers = {
  [K in InAppNotificationEventName]?: NotificationHandler<Extract<InAppNotificationEventData, { notificationName: K }>>
}

export const useInAppNotifications = (handlers?: InAppNotificationHandlers) => {
  const { notify } = useNotification()

  useSocketEvent('notification', data => {
    notify({
      type: 'INFO',
      title: data.title,
      body: data.body,
      onPress: () => {
        if (data.data.notificationName === 'new message') {
        }
      },
    })
  })
}
