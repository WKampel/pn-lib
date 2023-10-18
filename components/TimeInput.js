import moment from 'moment'
import { createElement, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useBranding } from '../contexts/Branding'
import BorderLabel from './BorderLabel'

const TimeInput = ({ onChange, value, label }) => {
  const { brandingStyles } = useBranding('textInput')
  const [time, setTime] = useState('')

  useEffect(() => {
    if (moment(time, 'HH:mm').isValid()) {
      if (onChange) onChange(moment(time, 'HH:mm').toDate())
    }
  }, [time])

  useEffect(() => {
    if (moment(value).isValid()) {
      setTime(moment(value).format('HH:mm'))
    }
  }, [value])

  return (
    <View style={{ flex: 1 }}>
      {label && <BorderLabel label={label} backgroundColor={brandingStyles.input.backgroundColor} color='gray' />}
      {createElement('input', {
        type: 'time',
        style: { ...brandingStyles.input, ...styles.input },
        value: time,
        onChange: e => setTime(e.target.value),
      })}
    </View>
  )
}

export default TimeInput

const styles = StyleSheet.create({
  input: {
    boxSizing: 'border-box',
  },
})
