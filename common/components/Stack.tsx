import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React from 'react'
import { RootStackParamList } from '../../../config/linking'

type CustomStackNavigationOptions = NativeStackNavigationOptions & {
  back?: string
}

const RNStack = createNativeStackNavigator<RootStackParamList>()

type CustomStackProps = {
  screenOptions: NativeStackNavigationOptions
  screens: Array<{
    name: keyof RootStackParamList
    component: React.ComponentType<any>
    options?: CustomStackNavigationOptions
  }>
}

export const Stack = ({ screens, screenOptions }: CustomStackProps) => {
  return (
    <RNStack.Navigator screenOptions={screenOptions}>
      {screens.map(({ name, component, options }) => (
        <RNStack.Screen key={name} name={name} component={component} options={options} />
      ))}
    </RNStack.Navigator>
  )
}
