import { Ionicons } from '@expo/vector-icons'
import Button from './Button'
import Group from './Group'

const OrderButtons = ({ onUp, onDown, children }) => {
  return (
    <Group style={{ gap: 0 }}>
      <Button kind='icon' onPress={onUp} icon={<Ionicons name='chevron-up' />} />
      {children}
      <Button kind='icon' onPress={onDown} icon={<Ionicons name='chevron-down' />} />
    </Group>
  )
}

export default OrderButtons
