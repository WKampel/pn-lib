import CurrentRouteContext from '../contexts/CurrentRouteContext'

const CurrentRouteProvider = ({ currentRoute, children }) => {
  return <CurrentRouteContext.Provider value={currentRoute}>{children}</CurrentRouteContext.Provider>
}

export default CurrentRouteProvider
