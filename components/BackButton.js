import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Pressable, Text } from 'react-native'

export default props => {
  const nav = useNavigation()
  return (
    <Pressable style={{ ...props.style, flexDirection: 'row', alignItems: 'center' }} onPress={() => nav.navigate(props.to)}>
      <Entypo name='chevron-left' size={24} color='black' />
      <Text style={{ fontSize: 14 }}>Back</Text>
    </Pressable>
  )
}
