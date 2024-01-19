import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useLayoutEffect } from 'react'
import { Header } from '../components/Header'

type NavigationProp<T extends ParamListBase> = NativeStackNavigationProp<T, keyof T>

export const useBackTo = <T extends ParamListBase>(handleBackTo: () => void, navigation: NavigationProp<T>) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: props => <Header {...props} handleBackTo={handleBackTo} />,
    })
  }, [navigation, handleBackTo])
}
