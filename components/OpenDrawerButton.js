import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { Pressable } from 'react-native'

export default props => {
  const nav = useNavigation()
  return (
    <Pressable
      style={[
        props.style,
        {
          height: '100%',
          aspectRatio: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: -10,
        },
      ]}
      onPress={() => nav.dispatch(DrawerActions.openDrawer())}
    >
      <Ionicons name='menu' size={24} color='black' />
    </Pressable>
  )
}
