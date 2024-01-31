import { ReactElement } from 'react'
import { AppConfigContext } from '../contexts/AppConfigContext'
import { AppType } from '../types/AppType'

function getAppType(): AppType {
  const app = process.env.EXPO_PUBLIC_APP

  if (!app) {
    throw new Error('EXPO_PUBLIC_APP is not defined')
  }
  if (app !== 'PATIENT' && app !== 'OFFICE') {
    throw new Error(`App ${app} is not supported`)
  }

  return app
}

export const AppConfigProvider = ({ children }: { children: ReactElement }) => {
  const config = {
    app: getAppType(),
  }

  return <AppConfigContext.Provider value={config}>{children}</AppConfigContext.Provider>
}
