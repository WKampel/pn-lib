import moment from 'moment'
import { createElement, useEffect, useState } from 'react'
import { View } from 'react-native'
import { useBranding } from '../contexts/Branding'
import { styled } from '../libs/wakui'

const DayInput = styled('textInput', ({ style, value, onChange, label }) => {
  const { brandingStyles } = useBranding('textInput')
  const [date, setDate] = useState('')

  useEffect(() => {
    if (moment(date).isValid()) {
      if (onChange) onChange(moment(date).toDate())
    }
  }, [date])

  useEffect(() => {
    if (moment(value).isValid()) {
      setDate(moment(value).format('YYYY-MM-DD'))
    }
  }, [value])

  return (
    <View style={{ flex: 1 }}>
      {createElement('input', {
        type: 'date',
        style: { ...style, borderStyle: 'solid', boxSizing: 'border-box', paddingHorizontal: 15 },
        value: date,
        onChange: e => setDate(e.target.value),
      })}
    </View>
  )
})

export default DayInput
