import type { Route } from '@react-navigation/routers'
import { createContext } from 'react'

export const CurrentRouteContext = createContext<Route<string> | undefined>(undefined)
