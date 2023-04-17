import { Ionicons } from '@expo/vector-icons'
import { DrawerActions } from '@react-navigation/native'
import { Pressable, useWindowDimensions } from 'react-native'

export default ({ navigation }) => {
  const dimensions = useWindowDimensions()
  if (dimensions.width >= 900) return <></>
  return (
    <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <Ionicons name='menu' size={24} color='black' style={{ marginRight: 10 }} />
    </Pressable>
  )
}
