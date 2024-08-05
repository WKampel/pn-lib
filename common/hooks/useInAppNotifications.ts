import { InAppNotificationEventData } from '../../../pn-core-lib/types/InAppNotificationEventData'
import { useNotification } from './useNotification'
import { useSocketEvent } from './useSocketEvent'

type UseInAppNotificationsProps = {
  onPress?: (data: InAppNotificationEventData) => void
  shouldDisplay?: (data: InAppNotificationEventData) => boolean
}

export const useInAppNotifications = (props: UseInAppNotificationsProps) => {
  const { notify } = useNotification()

  useSocketEvent('notification', data => {
    if (props.shouldDisplay && !props.shouldDisplay(data.data)) {
      return
    }

    notify({
      type: 'INFO',
      title: data.title,
      body: data.body,
      onPress: () => {
        if (props.onPress) {
          props.onPress(data.data)
        }
      },
      lifeSpan: 60000,
    })
  })
}
