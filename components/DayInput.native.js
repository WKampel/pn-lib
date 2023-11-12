import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import { Text, View } from 'react-native'

const DayInput = ({ onChange, value, label }) => {
  const handleChange = (e, date) => {
    onChange?.(date)
  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text>{label}</Text>
      <DateTimePicker style={{ padding: 0, margin: 0 }} themeVariant='light' value={moment(value).toDate()} mode='date' onChange={handleChange} />
    </View>
  )
}

export default DayInput
