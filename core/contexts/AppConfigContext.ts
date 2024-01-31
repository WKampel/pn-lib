import { createContext } from 'react'
import { AppType } from '../../../pn-core-lib/types/AppType'

type AppConfig = {
  app: AppType
}

export const AppConfigContext = createContext<AppConfig | undefined>(undefined)
