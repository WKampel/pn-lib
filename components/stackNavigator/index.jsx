import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HeaderBackButton } from '@react-navigation/elements'
import { Platform } from 'react-native'
import OpenDrawerButton from '../../components/openDrawerButton'
import { useContext } from 'react'
import { Context as StyleContext } from '../../contexts/style'

const Stack = createNativeStackNavigator()

export default props => {
  const style = useContext(StyleContext)
  return (
    <Stack.Navigator navigationOptions={{ unmountInactiveRoutes: true }}>
      {props.screens.map(screen => {
        const options = ({ navigation }) => {
          let options = {
            headerTintColor: style.primaryColor,
            unmountOnBlur: true,
            headerLeft: () => {},
          }
          if (screen.headerTitle) options.headerTitle = screen.headerTitle
          if (screen.backButton) options.headerLeft = () => <HeaderBackButton backImage={''} onPress={() => navigation.navigate(screen.backButton)} />

          if (screen.drawerButton) options.headerRight = () => <OpenDrawerButton navigation={navigation} />
          return options
        }
        return <Stack.Screen key={screen.name} name={screen.name} component={screen.component} options={options} />
      })}
    </Stack.Navigator>
  )
}
