import { useSocketEvent } from '../contexts/Socket'

const useNotifyServerNotifications = () => {
  useSocketEvent('notification', data => {
    notify({
      type: data.type,
      title: data.title,
      body: data.body,
      linkTo: data.linkTo,
    })
  })
}

export default useNotifyServerNotifications
