import { useState } from 'react'
import uuid from 'react-native-uuid'
import Notification from '../components/Notification'
import NotificationContainer from '../components/NotificationContainer'
import NotificationContext from '../contexts/NotificationContext'

const DEFAULT_LIFESPAN = 15000

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([])

  const clearOne = id =>
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

  const notify = ({ id = uuid.v4(), title, body, linkTo, onPress, lifeSpan = DEFAULT_LIFESPAN, type = 'info' }) => {
    setNotifications(prev => {
      const copy = [...prev]
      let existingNotification = copy.find(notif => notif.id === id)

      // If notification exists, clear the old timeout
      if (existingNotification) {
        clearTimeout(existingNotification.timeout)
      } else {
        // If not, create a new one
        existingNotification = { id }
        copy.push(existingNotification)
      }

      // Update the notification
      Object.assign(existingNotification, {
        title,
        body,
        linkTo,
        onPress,
        createdAt: new Date(),
        timeout: setTimeout(() => {
          clearOne(id)
        }, lifeSpan),
        type,
      })

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
              if (notif.onPress) notif.onPress()
            }}
            linkTo={notif.linkTo}
            onDelete={() => clearOne(notif.id)}
            type={notif.type}
          />
        ))}
      </NotificationContainer>
    </NotificationContext.Provider>
  )
}

export default NotificationProvider
