import moment from 'moment'
import { useState } from 'react'
import { Text, View } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { DayInputProps } from '.'
import { useTheme } from '../../hooks/useTheme'
import { SolidButton } from '../buttons/SolidButton'

const DayInput = ({ onChange, value, label }: DayInputProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const show = () => setIsOpen(true)
  const hide = () => setIsOpen(false)

  const handleConfirm = (date: Date) => {
    const utcDate = moment.utc(date).startOf('day').format('YYYY-MM-DD')
    onChange(utcDate)
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
        <SolidButton variant='secondary' onPress={show} text={value || 'Pick Day'} />
      </View>

      {/* This wrapping view is necessary. The DateTimePickerModal adds an extra element, and if it's not wrapped in a view that extra element with affect the gap */}
      <View>
        <DateTimePickerModal
          isVisible={isOpen}
          themeVariant='light'
          timeZoneOffsetInMinutes={0}
          date={value ? new Date(value) : undefined}
          mode='date'
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      </View>
    </View>
  )
}

export default DayInput
