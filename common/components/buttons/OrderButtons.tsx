import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, View } from 'react-native'

export const OrderButtons = ({ onUp, onDown }: { onUp: () => void; onDown: () => void }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={onUp}>
        <Ionicons name='chevron-up' size={20} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onDown}>
        <Ionicons name='chevron-down' size={20} />
      </TouchableOpacity>
    </View>
  )
}
