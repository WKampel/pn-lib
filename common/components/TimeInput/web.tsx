import moment from 'moment'
import { createElement, useEffect, useRef, useState } from 'react'
import { TimeInputProps } from '.'
import { useTheme } from '../../hooks/useTheme'
import { getTextInputHeight } from '../../utils/getTextInputHeight'

const TimeInput = ({ disabled, value, onChange, label, onFocus, onBlur, size = 'm', flex }: TimeInputProps) => {
  const [time, setTime] = useState('')
  const inputRef = useRef(null)

  const setLocalTimeToParentState = () => {
    if (value && moment(value).isValid()) {
      setTime(value)
    }
  }

  // When local time changes, send it to parent if valid
  useEffect(() => {
    if (moment(time, 'HH:mm').isValid()) {
      onChange?.(time)
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

  const { tokens } = useTheme()

  return createElement('input', {
    ref: inputRef,
    type: 'time',
    value: time,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setTime(e.target.value),
    onFocus: handleFocus,
    onBlur: handleBlur,
    disabled,
    placeholder: label,
    style: {
      height: getTextInputHeight(tokens, size),
      backgroundColor: 'rgb(250, 250, 250)',
      paddingLeft: tokens.spacing_s,
      borderRadius: tokens.radius_xs,
      borderWidth: 1.5,
      borderColor: tokens.color_border_on_surface,
      flex: flex === true ? 1 : flex ? flex : undefined,
      borderStyle: 'solid',
      boxSizing: 'border-box',
      paddingRight: tokens.spacing_s,
    },
  })
}

export default TimeInput
