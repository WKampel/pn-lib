import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, TouchableOpacity } from 'react-native'

const TrashButton = ({ onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.deleteButton, style]} onPress={onPress}>
      <MaterialIcons name='delete' size={24} color='red' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  deleteButton: {},
})

export default TrashButton
