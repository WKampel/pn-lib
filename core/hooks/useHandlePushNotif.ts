import { useEffect } from 'react'
import * as Notifications from 'expo-notifications'

export const useHandlePushNotif = () => {
  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      const { screen } = response.notification.request.content.data
      if (screen) {
        // Navigate to the screen
      }
    })

    // Clean up the subscription when the component is unmounted
    return () => subscription.remove()
  }, [])
}
