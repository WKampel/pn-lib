const { createDrawerNavigator } = require('@react-navigation/drawer')
const { useWindowDimensions, Platform } = require('react-native')
import { HeaderBackButton } from '@react-navigation/elements'
import { Context as StyleContext } from '../../contexts/style'
import OpenDrawerButton from '../../components/openDrawerButton'
import { useContext } from 'react'

const Drawer = createDrawerNavigator()

export default props => {
  const dimensions = useWindowDimensions()
  const style = useContext(StyleContext)

  return (
    <Drawer.Navigator
      drawerContent={props.drawerContent}
      screenOptions={{
        drawerType: dimensions.width >= 900 ? 'permanent' : 'front',
        headerShown: false,
        swipeEdgeWidth: 50,
        drawerStyle: {
          borderRightWidth: 0,
          shadowColor: 'rgba(0,0,0,.1)',
          shadowRadius: 10,
          shadowOffset: {
            width: 1,
            height: 1,
          },
        },
        headerTintColor: style.primaryColor,
        drawerLabelStyle: {
          fontSize: 14,
        },
        drawerItemStyle: {
          marginTop: 0,
          marginBottom: 0,
        },
      }}
    >
      {props.screens.map(screen => {
        return (
          <Drawer.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={({ navigation }) => {
              let options = {
                title: screen.navLabel,
                drawerIcon: screen.getIcon,
                headerShown: screen.headerShown === undefined ? false : screen.headerShown,
                headerRight: () => <OpenDrawerButton navigation={navigation} />,
                headerLeft: () => {},
              }
              if (screen.hideInSideNav) {
                options.drawerItemStyle = { display: 'none' }
              }

              if (screen.backButton) {
                options.headerLeft = () => <HeaderBackButton onPress={() => navigation.navigate(screen.backButton)} />
              }

              return options
            }}
          />
        )
      })}
    </Drawer.Navigator>
  )
}
