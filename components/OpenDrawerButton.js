import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { Pressable, useWindowDimensions } from 'react-native'

export default props => {
  const nav = useNavigation()
  const dimensions = useWindowDimensions()
  if (dimensions.width >= 900) return <></>
  return (
    <Pressable style={props.style} onPress={() => nav.dispatch(DrawerActions.openDrawer())}>
      <Ionicons name='menu' size={24} color='black' />
    </Pressable>
  )
}
