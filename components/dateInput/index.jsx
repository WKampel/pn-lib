import DateTimePicker from '@react-native-community/datetimepicker'
import { createElement, useContext, useState } from 'react'
import { Platform, Pressable, StyleSheet, Text } from 'react-native'
import moment from 'moment'
import { Context as StyleContext } from 'pn-context-style'

export default props => {
  const [androidOpen, setAndroidOpen] = useState(false)
  const style = useContext(StyleContext)

  const onChange = (e, date) => {
    setAndroidOpen(false)
    props.onChange(date)
  }

  const momentValue = moment(props.value)
  if (Platform.OS == 'web') {
    return createElement('input', {
      type: 'date',
      value: momentValue.format('YYYY-MM-DD'),
      onChange: e => props.onChange(moment(e.target.value).toDate()),
      style: styles.webInput,
    })
  } else if (Platform.OS == 'android') {
    return (
      <>
        <Pressable onPress={() => setAndroidOpen(true)} style={[styles.webInput, style.primaryColor]}>
          <Text>{momentValue.format('YYYY-MM-DD')}</Text>
        </Pressable>
        {androidOpen ? (
          <DateTimePicker display='default' value={momentValue.toDate() || new Date()} mode='date' is24Hour={true} onChange={onChange} />
        ) : null}
      </>
    )
  } else if (Platform.OS == 'ios') {
    return (
      <DateTimePicker
        style={styles.iosInput}
        display='default'
        value={momentValue.toDate() || new Date()}
        mode='date'
        is24Hour={true}
        onChange={onChange}
      />
    )
  }
}

const styles = StyleSheet.create({
  webInput: {
    outlineColor: '#69b4f5',
    backgroundColor: '#f0f0f0',
    borderWidth: 0,
    fontSize: 12,
    padding: 0,
    paddingLeft: 10,
    paddingRight: 10,
    height: 35,
    paddingVertical: 0 /* Android fix */,
    borderRadius: 5,
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
