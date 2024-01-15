import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React from 'react'

type CustomStackNavigationOptions = NativeStackNavigationOptions & {
  back?: string
}

const RNStack = createNativeStackNavigator()

type CustomStackProps = {
  screenOptions: NativeStackNavigationOptions
  screens: Array<{
    name: string
    component: React.ComponentType<any>
    options?: CustomStackNavigationOptions
  }>
}

export const Stack: React.FC<CustomStackProps> = ({ screens, screenOptions }) => {
  return (
    <RNStack.Navigator screenOptions={screenOptions}>
      {screens.map(({ name, component, options }) => (
        <RNStack.Screen key={name} name={name} component={component} options={options} />
      ))}
    </RNStack.Navigator>
  )
}
