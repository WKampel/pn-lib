import DateTimePicker from '@react-native-community/datetimepicker'
import { createElement, useState } from 'react'
import { Platform, Pressable, StyleSheet, Text } from 'react-native'
import moment from 'moment'
export default props => {
  const [androidOpen, setAndroidOpen] = useState(false)

  const onChange = (e, time) => {
    setAndroidOpen(false)
    props.onChange(moment(time).format('HH:mm'))
  }

  if (Platform.OS == 'web') {
    return createElement('input', {
      type: 'time',
      value: props.value,
      onChange: e => props.onChange(e.target.value),
      style: styles.webInput,
    })
  } else if (Platform.OS == 'android') {
    return (
      <>
        <Pressable onPress={() => setAndroidOpen(true)} style={styles.webInput}>
          <Text>{props.value}</Text>
        </Pressable>
        {androidOpen ? (
          <DateTimePicker
            display='default'
            value={new Date(new Date().toDateString() + ' ' + props.value)}
            mode='time'
            is24Hour={true}
            onChange={onChange}
          />
        ) : null}
      </>
    )
  } else if (Platform.OS == 'ios') {
    return (
      <DateTimePicker
        style={styles.iosInput}
        display='default'
        value={new Date(new Date().toDateString() + ' ' + props.value)}
        mode={'time'}
        is24Hour={true}
        onChange={onChange}
      />
    )
  }
}

const styles = StyleSheet.create({
  webInput: {
    backgroundColor: 'rgb(220, 220, 230)',
    borderWidth: 1,
    borderColor: 'rgb(200, 200, 220)',
    borderStyle: 'solid',
    fontSize: 12,
    padding: 0,
    paddingLeft: 10,
    paddingRight: 10,
    height: 38,
    paddingVertical: 0 /* Android fix */,
    outlineColor: '#69b4f5',
    borderRadius: 10,
    justifyContent: 'center',
    flex: 1,
  },
  iosInput: {
    alignSelf: 'flex-start',
    margin: 0,
    fontSize: 1,
    color: 'red',
  },
})
