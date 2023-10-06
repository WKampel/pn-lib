import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { View } from 'react-native'
import uuid from 'react-native-uuid'
import { styled } from '../libs/wakui'
import Button from './Button'
import Group from './Group'

const EditableList = styled('editableList', ({ style, onChange, value, getItemChildren }) => {
  const addFieldBefore = () => onChange(prev => [{ id: uuid.v4() }, ...prev])
  const addFieldAfter = () => onChange(prev => [...prev, { id: uuid.v4() }])

  const moveItem = (id, direction) => {
    const index = value.findIndex(item => item.id === id)
    if (index === -1) return // Not found
    const copy = [...value]
    const targetIndex = index + direction
    if (targetIndex < 0 || targetIndex >= value.length) return // Out of bounds
    ;[copy[index], copy[targetIndex]] = [copy[targetIndex], copy[index]]
    onChange(copy)
  }

  const deleteItem = id => onChange(prev => prev.filter(item => item.id !== id))

  return (
    <View style={style}>
      <Button text='Add Field' onPress={addFieldBefore} />
      {value.map(item => (
        <ListItem
          key={item.id}
          style={style?.itemStyle}
          onUp={() => moveItem(item.id, -1)}
          onDown={() => moveItem(item.id, 1)}
          onDelete={() => deleteItem(item.id)}
        >
          {getItemChildren(item)}
        </ListItem>
      ))}
      <Button text='Add Field' onPress={addFieldAfter} />
    </View>
  )
})

const ListItem = ({ style, onUp, onDown, onDelete, children }) => {
  return (
    <View style={style}>
      <Group $x>
        <Group style={{ flex: 1 }}>{children}</Group>
        <Button onPress={onDelete} $danger icon={<MaterialIcons name='delete' />} />
        <UpDownButtons onUp={onUp} onDown={onDown} />
      </Group>
    </View>
  )
}

const UpDownButtons = ({ onUp, onDown }) => {
  return (
    <Group style={{ gap: 0 }}>
      <Button $round style={{ height: 25, paddingHorizontal: 0 }} onPress={onUp} icon={<Ionicons name='chevron-up' size={24} color='black' />} />
      <Button $round style={{ height: 25, paddingHorizontal: 0 }} onPress={onDown} icon={<Ionicons name='chevron-down' size={24} color='black' />} />
    </Group>
  )
}

export default EditableList
