import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export function useNav() {
  return useNavigation<NativeStackNavigationProp<ParamListBase>>()
}
