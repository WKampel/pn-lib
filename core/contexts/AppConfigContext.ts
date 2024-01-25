import { createContext } from 'react'
import { AppType } from '../types/AppType'

type AppConfig = {
  app: AppType
}

export const AppConfigContext = createContext<AppConfig | undefined>(undefined)
