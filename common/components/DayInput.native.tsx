import DateTimePicker from '@react-native-community/datetimepicker'
import { Text, View } from 'react-native'

type DayInputProps = {
  onChange: (date: Date) => void
  value: Date
  label?: string
}

export const DayInput = ({ onChange, value, label }: DayInputProps) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text>{label}</Text>
      <DateTimePicker
        style={{ padding: 0, margin: 0 }}
        themeVariant='light'
        value={value}
        mode='date'
        onChange={(e, date) => {
          if (date) {
            onChange(date)
          }
        }}
        timeZoneOffsetInMinutes={0}
      />
    </View>
  )
}
