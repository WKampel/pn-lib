import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from './Header'

const ReactStack = createNativeStackNavigator()

const Stack = props => {
  return (
    <ReactStack.Navigator
      screenOptions={{
        header: data => <Header {...data} />,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      {props.screens.map(screen => {
        let options = {}
        if (screen.hideHeader) options.headerShown = false
        if (screen.title) options.title = screen.title
        if (screen.back) options.back = screen.back
        if (screen.animation === false) options.animation = 'none'
        return <ReactStack.Screen key={screen.name} name={screen.name} component={screen.comp} options={options} />
      })}
    </ReactStack.Navigator>
  )
}

export default Stack
