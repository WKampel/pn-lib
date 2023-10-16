import { MaterialIcons } from '@expo/vector-icons'
import { View } from 'react-native'
import uuid from 'react-native-uuid'
import { styled } from '../libs/wakui'
import Button from './Button'
import Group from './Group'
import OrderButtons from './OrderButtons'

const EditableList = styled('editableList', ({ style, onChange, value, getItemChild }) => {
  const addFieldBefore = () => onChange([{ id: uuid.v4() }, ...value])
  const addFieldAfter = () => onChange([...value, { id: uuid.v4() }])

  const moveItem = (id, direction) => {
    const index = value.findIndex(item => item.id === id)
    if (index === -1) return // Not found
    const copy = [...value]
    const targetIndex = index + direction
    if (targetIndex < 0 || targetIndex >= value.length) return // Out of bounds
    ;[copy[index], copy[targetIndex]] = [copy[targetIndex], copy[index]]
    onChange(copy)
  }

  const deleteItem = id => onChange(value.filter(item => item.id !== id))

  return (
    <Group style={style}>
      <Button style={{ marginRight: 'auto' }} $small $secondary text='Add Field' onPress={addFieldBefore} />
      {value.map(item => (
        <ListItem
          key={item.id}
          style={style?.itemStyle}
          onUp={() => moveItem(item.id, -1)}
          onDown={() => moveItem(item.id, 1)}
          onDelete={() => deleteItem(item.id)}
        >
          {getItemChild(item)}
        </ListItem>
      ))}
      {value?.length > 0 && <Button style={{ marginRight: 'auto' }} $small $secondary text='Add Field' onPress={addFieldAfter} />}
    </Group>
  )
})

const ListItem = ({ style, onUp, onDown, onDelete, children }) => {
  return (
    <View style={style}>
      <Group $compact $x>
        {children}
        <Button $danger $icon onPress={onDelete} icon={<MaterialIcons name='delete' />} />
        <OrderButtons onUp={onUp} onDown={onDown} />
      </Group>
    </View>
  )
}

export default EditableList
