import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import { Pressable, Text } from 'react-native'
import { useBranding } from '../contexts/Branding'
import useModal from '../hooks/useModal'

const TimeInput = props => {
  const branding = useBranding()

  const onChange = (e, date) => {
    props.state.set(date)
  }

  const onPress = () => {
    if (!props.state.val) props.state.set(new Date())
    modal.open()
  }

  const modal = useModal(() => <DateTimePicker display='spinner' value={moment(props.state.val).toDate()} mode='time' onChange={onChange} />, {
    marginTop: 'auto',
    padding: 0,
  })

  return (
    <>
      <Pressable onPress={onPress} style={[branding?.input.style, { justifyContent: 'center' }]}>
        <Text>{moment(props.state.val).format('hh:mm A')}</Text>
      </Pressable>
      {modal.render}
    </>
  )
}

export default TimeInput
