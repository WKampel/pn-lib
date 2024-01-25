import { useState } from 'react'
import { Text, View } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { DayInputProps } from '.'

const DayInput = ({ onChange, value, label }: DayInputProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const show = () => setIsOpen(true)
  const hide = () => setIsOpen(false)

  const handleConfirm = (date: Date) => {
    onChange(date)
    hide()
  }

  const handleCancel = () => {
    hide()
  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text>{label}</Text>
      <DateTimePickerModal isVisible={isOpen} themeVariant='light' date={value || undefined} mode='date' onCancel={handleCancel} onConfirm={handleConfirm} />
    </View>
  )
}

export default DayInput
