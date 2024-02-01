import * as Notifications from 'expo-notifications'

// This will request the user for permission to send push notifications
// and return the token if the user grants permission
export async function requestPushNotifToken() {
  let token
  const { status: existingStatus } = await Notifications.getPermissionsAsync()
  let finalStatus = existingStatus
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync()
    finalStatus = status
  }
  if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notification!')
    return
  }
  token = (await Notifications.getExpoPushTokenAsync()).data
  return token
}
