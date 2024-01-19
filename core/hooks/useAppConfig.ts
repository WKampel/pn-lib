import { useContext } from 'react'
import { AppConfigContext } from '../contexts/AppConfigContext'

export const useAppConfig = () => {
  const appConfig = useContext(AppConfigContext)
  if (!appConfig) {
    throw new Error('useAppConfig must be used within a AppConfigProvider')
  }
  return appConfig
}
