import { useContext } from 'react'
import CurrentRouteContext from '../contexts/CurrentRouteContext'

const useCurrentRoute = () => useContext(CurrentRouteContext)

export default useCurrentRoute
