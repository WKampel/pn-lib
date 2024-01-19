import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import { Text, View } from 'react-native'

type TimeInputProps = {
  value: Date
  onChange: (value: Date) => void
  label: string
}
export const TimeInput = ({ onChange, value, label }: TimeInputProps) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text>{label}</Text>
      <DateTimePicker
        style={{ padding: 0, margin: 0 }}
        themeVariant='light'
        value={moment(value).toDate()}
        mode='time'
        onChange={(e, date) => {
          if (date) onChange(date)
        }}
        timeZoneOffsetInMinutes={0}
      />
    </View>
  )
}
