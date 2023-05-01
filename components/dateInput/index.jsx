import DateTimePicker from '@react-native-community/datetimepicker'
import { createElement, useContext, useState } from 'react'
import { Platform, Pressable, StyleSheet, Text } from 'react-native'
import moment from 'moment'
import { Context as StyleContext } from '../../contexts/style'

export default props => {
  const [androidOpen, setAndroidOpen] = useState(false)
  const style = useContext(StyleContext)

  const onChange = (e, date) => {
    setAndroidOpen(false)
    props.state.set(date)
  }

  const momentValue = moment(props.state.val)
  if (Platform.OS == 'web') {
    return createElement('input', {
      type: 'date',
      value: momentValue.format('YYYY-MM-DD'),
      onChange: e => props.state.set(moment(e.target.value).toDate()),
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
    backgroundColor: 'rgb(230,230,240)',
    borderColor: 'rgb(200, 200, 220)',
    borderWidth: 1,
    borderStyle: 'solid',
    fontSize: 12,
    padding: 0,
    paddingLeft: 10,
    paddingRight: 10,
    height: 38,
    paddingVertical: 0 /* Android fix */,
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
