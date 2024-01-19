import moment from 'moment'
import { createElement, useEffect, useRef, useState } from 'react'
import { Text, View } from 'react-native'

type TimeInputProps = {
  value: Date
  onChange: (value: Date) => void
  label?: string
  disabled?: boolean
  onFocus?: () => void
  onBlur?: () => void
}

export const TimeInput = ({ disabled, value, onChange, label, onFocus, onBlur }: TimeInputProps) => {
  const [time, setTime] = useState('')
  const inputRef = useRef(null)

  const setLocalTimeToParentState = () => {
    if (moment(value).isValid()) {
      setTime(moment(value).format('HH:mm'))
    }
  }

  // When local time changes, send it to parent if valid
  useEffect(() => {
    if (moment(time, 'HH:mm').isValid()) {
      onChange?.(moment(time, 'HH:mm').toDate())
    }
  }, [time])

  // When parent time changes, update local time with correct format
  useEffect(() => {
    setLocalTimeToParentState()
  }, [value])

  const handleFocus = () => {
    onFocus?.()
  }

  const handleBlur = () => {
    onBlur?.()
    setLocalTimeToParentState()
  }

  return (
    <View>
      {label && value ? <Text style={{}}>{label}</Text> : null}
      {createElement('input', {
        ref: inputRef,
        type: 'time',
        value: time,
        onChange: e => setTime(e.target.value),
        onFocus: handleFocus,
        onBlur: handleBlur,
        disabled,
      })}
    </View>
  )
}
