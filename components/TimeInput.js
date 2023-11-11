import moment from 'moment'
import { createElement, useEffect, useState } from 'react'
import { View } from 'react-native'

const TimeInput = ({ style, value, onChange, label }) => {
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
      {createElement('input', {
        type: 'time',
        style: { ...style, borderStyle: 'solid', boxSizing: 'border-box', paddingHorizontal: 15 },
        value: date,
        onChange: e => setTime(e.target.value),
      })}
    </View>
  )
}

export default TimeInput
