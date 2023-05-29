import { createDrawerNavigator } from '@react-navigation/drawer'
import { useWindowDimensions } from 'react-native'
import Header from './Header'
import PracticeDrawerContent from './PracticeDrawerContent'

const ReactDrawer = createDrawerNavigator()

const Drawer = props => {
  const dimensions = useWindowDimensions()

  return (
    <ReactDrawer.Navigator
      screenOptions={{
        drawerType: dimensions.width >= 900 ? 'permanent' : 'front',
        swipeEdgeWidth: 50,
        header: data => {
          return <Header {...data} />
        },
      }}
      drawerContent={_props => (
        <PracticeDrawerContent
          {..._props}
          hideDefaultItems={props.hideDefaultItems}
          customItems={props.customItems}
          extraChildren={props.extraChildren}
        />
      )}
    >
      {props.screens.map(screen => {
        let options = {}
        if (screen.icon) options.drawerIcon = screen.icon
        if (screen.hideHeader) options.headerShown = false
        if (screen.hideNavLink) options.drawerItemStyle = { display: 'none' }
        if (screen.title) options.title = screen.title
        if (screen.back) options.back = screen.back

        return <ReactDrawer.Screen key={screen.name} name={screen.name} component={screen.comp} options={options} />
      })}
    </ReactDrawer.Navigator>
  )
}

export default Drawer