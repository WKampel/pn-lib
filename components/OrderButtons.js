import { Ionicons } from '@expo/vector-icons'
import Button from './Button'
import Group from './Group'

const OrderButtons = ({ onUp, onDown }) => {
  return (
    <Group style={{ gap: 0 }}>
      <Button $icon onPress={onUp} icon={<Ionicons name='chevron-up' color='black' />} />
      <Button $icon onPress={onDown} icon={<Ionicons name='chevron-down' color='black' />} />
    </Group>
  )
}

export default OrderButtons
