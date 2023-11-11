import { DefaultTheme, NavigationContainer as ReactNativeNavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { useState } from 'react'
import 'react-native-gesture-handler' /* Necessary for production (https://reactnavigation.org/docs/drawer-navigator/) */
import CurrentRouteProvider from '../providers/CurrentRouteProvider'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
}

const NavigationContainer = ({ linking, children }) => {
  const navRef = useNavigationContainerRef()
  const [currentRoute, setCurrentRoute] = useState(null)

  return (
    <ReactNativeNavigationContainer
      theme={theme}
      ref={navRef}
      linking={linking}
      onStateChange={() => {
        setCurrentRoute(navRef.getCurrentRoute())
      }}
    >
      <CurrentRouteProvider currentRoute={currentRoute}>{children}</CurrentRouteProvider>
    </ReactNativeNavigationContainer>
  )
}

export default NavigationContainer
