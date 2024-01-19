import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../config/linking'

export type ScreenName = keyof RootStackParamList

export type NavAction = {
  [K in keyof RootStackParamList]: RootStackParamList[K] extends undefined ? [K] | [K, undefined] : [K, RootStackParamList[K]]
}[keyof RootStackParamList]

export function useNav() {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>()
}
