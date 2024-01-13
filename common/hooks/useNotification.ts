import { useContext } from 'react'
import { NotificationContext } from '../contexts/NotificationContext'

export const useNotification = () => {
  const context = useContext(NotificationContext)
  return context
}
