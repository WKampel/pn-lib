import moment from 'moment'
import { createElement, useEffect, useRef, useState } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import sharedInputStyles from '../config/styles/sharedInputStyles'
import useInteractive from '../hooks/useInteractive'
import useStyles from '../hooks/useStyles'

const TimeInput = ({
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
  const [time, setTime] = useState('')
  const inputRef = useRef(null)
  const { hovered, focused, pressed, onMouseEnter, onMouseLeave, onFocus, onBlur } = useInteractive()
  const styles = useStyles(styleConfig, { size, round }, { hovered, focused, pressed })

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
    onFocus()
    onFocusProp?.()
  }

  const handleBlur = () => {
    onBlur()
    onBlurProp?.()
    setLocalTimeToParentState()
  }

  const style = { ...styles.input, ...inputStyle, borderStyle: 'solid', boxSizing: 'border-box', borderWidth: 0 }

  return (
    <TouchableWithoutFeedback focusable={false} onPressIn={() => inputRef.current?.focus()}>
      <View style={[styles.container, containerStyle]} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {label && value ? <Text style={styles.label}>{label}</Text> : null}
        {createElement('input', {
          ref: inputRef,
          type: 'time',
          style,
          value: time,
          onChange: e => setTime(e.target.value),
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

export default TimeInput
