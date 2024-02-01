import { useNotification } from './useNotification'
import { useSocketEvent } from './useSocketEvent'

export const useInAppNotifications = () => {
  const { notify } = useNotification()

  useSocketEvent('notification', data => {
    notify({
      type: data.type,
      title: data.title,
      body: data.body,
      linkTo: data.linkTo,
      lifeSpan: data.lifeSpan,
    })
  })
}
