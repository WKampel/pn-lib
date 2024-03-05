import { createContext } from 'react'
import { Platform } from 'react-native'
import { AppType } from '../../../pn-core-lib/types/AppType'

type AppConfig = {
  app: AppType
  version: string
  platform: typeof Platform.OS
}

export const AppConfigContext = createContext<AppConfig | undefined>(undefined)
