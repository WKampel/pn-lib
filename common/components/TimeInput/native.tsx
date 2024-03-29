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
    // onChange requires the time in string format of hh:mm A
    const time = moment.utc(date).format('hh:mm A')
    onChange(time)
    hide()
  }

  const handleCancel = () => {
    hide()
  }

  const { tokens } = useTheme()

  return (
    <View style={{ gap: tokens.spacing_s }}>
      {label ? <Text>{label}</Text> : null}
      <View style={{ marginRight: 'auto' }}>
        <SolidButton variant='secondary' onPress={show} text={value || 'Pick Time'} />
      </View>

      {/* This wrapping view is necessary. The DateTimePickerModal adds an extra element, and if it's not wrapped in a view that extra element with affect the gap */}
      <View>
        <DateTimePickerModal
          timeZoneOffsetInMinutes={0}
          isVisible={isOpen}
          themeVariant='light'
          date={value ? new Date(value) : undefined}
          mode='time'
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      </View>
    </View>
  )
}

export default TimeInput
