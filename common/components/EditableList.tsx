import { useState } from 'react'
import { View } from 'react-native'
import { useTheme } from '../hooks/useTheme'
import { uuid } from '../utils/uuid'
import { EditableListItem } from './EditableListItem'
import { SolidButton } from './buttons/SolidButton'

type EditableListProps<TItem> = {
  onChange: (value: TItem[]) => void
  value: TItem[]
  getItemChild: (item: TItem, index: number) => React.ReactNode
  getItemDefaults: (id: string) => TItem
}

const EditableList = <TItem extends { id: string }>({ onChange, value, getItemChild, getItemDefaults }: EditableListProps<TItem>) => {
  const addFieldBefore = () => onChange([getItemDefaults(uuid()), ...value])
  const addFieldAfter = () => onChange([...value, getItemDefaults(uuid())])
  const [openItem, setOpenItem] = useState<string | null>(null)

  const moveItem = (id: string, direction: 1 | -1) => {
    const index = value.findIndex(item => item.id === id)
    if (index === -1) return // Not found
    const copy = [...value]
    const targetIndex = index + direction
    if (targetIndex < 0 || targetIndex >= value.length) return // Out of bounds
    ;[copy[index], copy[targetIndex]] = [copy[targetIndex], copy[index]]
    onChange(copy)
  }

  const deleteItem = (id: string) => onChange(value.filter(item => item.id !== id))

  const { tokens } = useTheme()

  return (
    <View style={{ gap: tokens.spacing_m }}>
      <View style={{ alignSelf: 'flex-start' }}>
        <SolidButton variant='secondary' size='s' text='Add Field' onPress={addFieldBefore} />
      </View>
      {value?.map((item, i) => {
        return (
          <EditableListItem
            key={item.id}
            onUp={() => moveItem(item.id, -1)}
            onDown={() => moveItem(item.id, 1)}
            onDelete={() => deleteItem(item.id)}
            isOpen={openItem === item.id}
            setIsOpen={() => {
              if (openItem === item.id) setOpenItem(null)
              else setOpenItem(item.id)
            }}
          >
            {getItemChild(item, i)}
          </EditableListItem>
        )
      })}
      <View style={{ alignSelf: 'flex-start' }}>{value?.length > 0 ? <SolidButton variant='secondary' size='s' text='Add Field' onPress={addFieldAfter} /> : null}</View>
    </View>
  )
}

export default EditableList
