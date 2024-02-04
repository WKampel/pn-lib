import moment from 'moment'
import { useState } from 'react'
import { Text, View } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { TimeInputProps } from '.'
import { useTheme } from '../../hooks/useTheme'
import { SolidButton } from '../buttons/SolidButton'

const TimeInput = ({ onChange, value, label }: TimeInputProps) => {
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

  const tokens = useTheme()

  return (
    <View style={{ gap: tokens.spacing_s }}>
      {label ? <Text>{label}</Text> : null}
      <View style={{ marginRight: 'auto' }}>
        <SolidButton variant='secondary' onPress={show} text={value ? moment(value).format('hh:mm A') : 'Pick Time'} />
      </View>

      {/* This wrapping view is necessary. The DateTimePickerModal adds an extra element, and if it's not wrapped in a view that extra element with affect the gap */}
      <View>
        <DateTimePickerModal isVisible={isOpen} themeVariant='light' date={value || undefined} mode='time' onCancel={handleCancel} onConfirm={handleConfirm} />
      </View>
    </View>
  )
}

export default TimeInput
