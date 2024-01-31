import { ReactNode, useState } from 'react'
import uuid from 'react-native-uuid'
import { Notification } from '../components/Notification'
import { NotificationContainer } from '../components/NotificationContainer'
import { NotificationContext } from '../contexts/NotificationContext'
import { NotificationType } from '../types/NotificationType'
import { NotifyParams } from '../types/NotifyParams'

const DEFAULT_LIFESPAN = 15000

type Notification = {
  id: string
  title: string
  body: ReactNode | string
  createdAt: Date
  timeout: NodeJS.Timeout
  type: NotificationType
  onPress?: () => void
}

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const clearOne = (id: string) =>
    setNotifications(prev =>
      prev.filter(notif => {
        if (notif.id === id) {
          clearTimeout(notif.timeout)
          return false
        }
        return true
      })
    )

  const clearAll = () => {
    setNotifications(prev =>
      prev.filter(notif => {
        clearTimeout(notif.timeout)
        return false
      })
    )
  }

  const notify = ({ id = uuid.v4() as string, title, body, onPress, lifeSpan = DEFAULT_LIFESPAN, type = 'INFO' }: NotifyParams) => {
    setNotifications(prev => {
      const copy = [...prev]
      const existingNotification = copy.find(notif => notif.id === id)

      const common = {
        title,
        body,
        onPress,
        lifeSpan,
        type,
        createdAt: new Date(),
        timeout: setTimeout(() => {
          clearOne(id)
        }, lifeSpan),
      }

      // If notification exists, clear the old timeout, update
      if (existingNotification) {
        clearTimeout(existingNotification.timeout)
        Object.assign(existingNotification, common)
      } else {
        // If not, create a new one
        copy.unshift({
          id,
          ...common,
        })
      }

      return copy
    })
  }

  return (
    <NotificationContext.Provider
      value={{
        notify,
        clearNotifications: clearAll,
        clearNotification: clearOne,
      }}
    >
      {children}
      <NotificationContainer>
        {notifications.map(notif => (
          <Notification
            key={notif.id}
            title={notif.title}
            body={notif.body}
            onPress={() => {
              if (notif.onPress) {
                notif.onPress()
                clearOne(notif.id)
              }
            }}
            onDelete={() => clearOne(notif.id)}
            type={notif.type}
          />
        ))}
      </NotificationContainer>
    </NotificationContext.Provider>
  )
}
