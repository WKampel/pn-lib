import { ReactElement } from 'react'
import { AppConfigContext } from '../contexts/AppConfigContext'
import { AppType } from '../types/AppType'

export const AppConfigProvider = ({ children }: { children: ReactElement }) => {
  const config = {
    app: process.env.EXPO_PUBLIC_APP as AppType,
  }

  return <AppConfigContext.Provider value={config}>{children}</AppConfigContext.Provider>
}
