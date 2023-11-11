import moment from 'moment'
import { createElement, useEffect, useRef, useState } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import sharedInputStyles from '../config/styles/sharedInputStyles'
import useInteractive from '../hooks/useInteractive'
import useStyles from '../hooks/useStyles'

const DayInput = ({
  containerStyle,
  inputStyle,
  disabled,
  value,
  onChange,
  label,
  onFocus: onFocusProp,
  onBlur: onBlurProp,
  size = 'm',
  round = false,
}) => {
  const [date, setDate] = useState('')
  const inputRef = useRef(null)
  const { hovered, focused, pressed, onMouseEnter, onMouseLeave, onFocus, onBlur } = useInteractive()
  const styles = useStyles(styleConfig, { size, round }, { hovered, focused, pressed })

  const setLocalDateToParentState = () => {
    if (moment(value).isValid()) {
      setDate(moment(value).format('YYYY-MM-DD'))
    }
  }

  // When local date changes, send it to parent if valid
  useEffect(() => {
    if (moment(date).isValid()) {
      onChange?.(moment(date).toDate())
    }
  }, [date])

  // When parent date changes, update local date with correct format
  useEffect(() => {
    setLocalDateToParentState()
  }, [value])

  const handleFocus = () => {
    onFocus()
    if (onFocusProp) onFocusProp()
  }

  const handleBlur = () => {
    onBlur()
    if (onBlurProp) onBlurProp()
    setLocalDateToParentState()
  }

  const style = { ...styles.input, ...inputStyle, borderStyle: 'solid', boxSizing: 'border-box', borderWidth: 0 }

  return (
    <TouchableWithoutFeedback focusable={false} onPressIn={() => inputRef.current?.focus()}>
      <View style={[styles.container, containerStyle]} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {label && value ? <Text style={styles.label}>{label}</Text> : null}
        {createElement('input', {
          ref: inputRef,
          type: 'date',
          style,
          value: date,
          onChange: e => setDate(e.target.value),
          onFocus: handleFocus,
          onBlur: handleBlur,
          disabled,
        })}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styleConfig = {
  ...sharedInputStyles,
}

export default DayInput
