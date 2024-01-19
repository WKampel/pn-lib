import moment from 'moment'
import { createElement, useEffect, useRef, useState } from 'react'
import { Text, View } from 'react-native'
import useStyles from '../../hooks/useStyles'

type DayInputProps = {
  disabled?: boolean
  value: Date
  onChange: (date: Date) => void
  label?: string
  onFocus?: () => void
  onBlur?: () => void
}

export const DayInput = ({ disabled, value, onChange, label, onFocus, onBlur }: DayInputProps) => {
  const [date, setDate] = useState('')
  const inputRef = useRef(null)

  const theme = useStyles()

  const setLocalDateToParentState = () => {
    if (moment.utc(value).isValid()) {
      setDate(moment.utc(value).format('YYYY-MM-DD'))
    }
  }

  // When local date changes, send it to parent if valid
  useEffect(() => {
    if (moment.utc(date).isValid()) {
      onChange(moment.utc(date).toDate())
    }
  }, [date])

  // When parent date changes, update local date with correct format
  useEffect(() => {
    setLocalDateToParentState()
  }, [value])

  const handleFocus = () => {
    onFocus?.()
  }

  const handleBlur = () => {
    onBlur?.()
    setLocalDateToParentState()
  }

  return (
    <View>
      {label && value ? <Text>{label}</Text> : null}
      {createElement('input', {
        ref: inputRef,
        type: 'date',
        value: date,
        onChange: e => setDate(e.target.value),
        onFocus: handleFocus,
        onBlur: handleBlur,
        disabled,
      })}
    </View>
  )
}
