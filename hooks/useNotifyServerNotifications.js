import { useNotification } from '../contexts/Notification'
import { useSocketEvent } from '../contexts/Socket'

const useNotifyServerNotifications = () => {
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

export default useNotifyServerNotifications
