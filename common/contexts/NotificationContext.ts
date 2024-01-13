import { createContext } from 'react'
import { NotificationType } from '../types/NotificationType'

type NotifyParams = {
  id: string
  title: string
  body: string
  type: NotificationType
  linkTo?: string
  onPress?: () => void
  lifeSpan?: number
}

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
