import { useContext } from 'react'
import { CurrentRouteContext } from '../contexts/CurrentRouteContext'

export const useCurrentRoute = () => useContext(CurrentRouteContext)
