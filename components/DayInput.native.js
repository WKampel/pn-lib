import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import { Text, View } from 'react-native'

const DayInput = props => {
  const onChange = (e, date) => {
    if (props.onChange) props.onChange(date)
  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text>{props.label}</Text>
      <DateTimePicker style={{ padding: 0, margin: 0 }} themeVariant='light' value={moment(props.value).toDate()} mode='date' onChange={onChange} />
    </View>
  )
}

export default DayInput
