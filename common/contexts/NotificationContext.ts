import { createContext } from 'react'
import { NotifyParams } from '../types/NotifyParams'

type NotificationContextType = {
  notify: (params: NotifyParams) => void
  clearNotifications: () => void
  clearNotification: (id: string) => void
}

export const NotificationContext = createContext<NotificationContextType>({
  notify: () => {},
  clearNotifications: () => {},
  clearNotification: () => {},
})
