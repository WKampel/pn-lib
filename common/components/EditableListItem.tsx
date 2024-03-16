import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity, View } from 'react-native'
import { useTheme } from '../hooks/useTheme'
import { SolidButton } from './buttons/SolidButton'

type EditableListItemProps = {
  onUp: () => void
  onDown: () => void
  onDelete: () => void
  setIsOpen: (isOpen: boolean) => void
  isOpen: boolean
  children: React.ReactNode
}

export const EditableListItem = ({ onUp, onDown, onDelete, children, isOpen, setIsOpen }: EditableListItemProps) => {
  const { tokens } = useTheme()
  return (
    <View style={{ gap: tokens.spacing_xs }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: tokens.spacing_m }}>
        {children}
        <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
          <Entypo name='dots-three-horizontal' size={24} />
        </TouchableOpacity>
      </View>
      {isOpen ? (
        <View style={{ flexDirection: 'row', gap: tokens.spacing_xs }}>
          <SolidButton variant='secondary' size='s' onPress={onUp} text='Move Up' icon={<Ionicons name='chevron-up' />} />
          <SolidButton variant='secondary' size='s' onPress={onDown} text='Move Down' icon={<Ionicons name='chevron-down' />} />
          <SolidButton variant='danger' size='s' onPress={onDelete} text='Delete' icon={<MaterialIcons name='delete' />} />
        </View>
      ) : null}
    </View>
  )
}
