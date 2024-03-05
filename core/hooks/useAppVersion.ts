import * as Application from 'expo-application'
import Constants from 'expo-constants'
import app from '../../../app.json'

export const useAppVersion = () => {
  if (Constants.appOwnership === 'expo') {
    return app.expo.version
  }
  return Application.nativeApplicationVersion
}
