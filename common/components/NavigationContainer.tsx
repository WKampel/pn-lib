import { DefaultTheme, LinkingOptions, NavigationContainer as ReactNativeNavigationContainer, Theme, useNavigationContainerRef } from '@react-navigation/native'
import { ReactNode, useState } from 'react'
import 'react-native-gesture-handler' /* Necessary for production (https://reactnavigation.org/docs/drawer-navigator/) */
import { CurrentRouteProvider } from '../../core/providers/CurrentRouteProvider'

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
}

export const NavigationContainer = ({
  linking,
  children,
  initialState,
}: {
  linking: LinkingOptions<ReactNavigation.RootParamList>
  children: ReactNode
  initialState?: any
}) => {
  const navRef = useNavigationContainerRef()
  const [currentRoute, setCurrentRoute] = useState(navRef.getCurrentRoute())

  return (
    <ReactNativeNavigationContainer
      theme={theme}
      ref={navRef}
      linking={linking}
      initialState={initialState}
      onStateChange={() => {
        setCurrentRoute(navRef.getCurrentRoute())
      }}
      onReady={() => {
        setCurrentRoute(navRef.getCurrentRoute())
      }}
    >
      <CurrentRouteProvider currentRoute={currentRoute}>{children}</CurrentRouteProvider>
    </ReactNativeNavigationContainer>
  )
}
