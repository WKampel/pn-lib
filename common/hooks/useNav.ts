import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../config/linking'

export function useNav() {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>()
}
