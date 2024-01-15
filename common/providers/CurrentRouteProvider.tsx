import type { Route } from '@react-navigation/routers'
import { ReactNode } from 'react'
import { CurrentRouteContext } from '../contexts/CurrentRouteContext'

export const CurrentRouteProvider = ({ currentRoute, children }: { currentRoute: Route<string> | undefined; children: ReactNode }) => {
  return <CurrentRouteContext.Provider value={currentRoute}>{children}</CurrentRouteContext.Provider>
}
