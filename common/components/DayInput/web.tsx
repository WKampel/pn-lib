import moment from 'moment'
import { createElement, useEffect, useRef, useState } from 'react'
import { DayInputProps } from '.'
import { useTheme } from '../../hooks/useTheme'
import { getTextInputHeight } from '../../utils/getTextInputHeight'

const DayInput = ({ disabled, value, onChange, label, onFocus, onBlur, size = 'm', flex }: DayInputProps) => {
  const [date, setDate] = useState('')
  const inputRef = useRef(null)

  const { tokens } = useTheme()

  const setLocalDateToParentState = () => {
    if (moment.utc(value).isValid()) {
      setDate(moment.utc(value).format('YYYY-MM-DD'))
    }
  }

  // When local date changes, send it to parent if valid
  useEffect(() => {
    if (moment.utc(date).isValid()) {
      onChange(date)
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

  return createElement('input', {
    ref: inputRef,
    type: 'date',
    value: date,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value),
    onFocus: handleFocus,
    onBlur: handleBlur,
    disabled,
    placeholder: label,
    style: {
      height: getTextInputHeight(tokens, size),
      backgroundColor: 'rgb(250, 250, 250)',
      paddingLeft: tokens.spacing_s,
      borderRadius: tokens.radius_xs,
      borderWidth: 1,
      borderColor: tokens.color_border_on_surface,
      flex: flex === true ? 1 : flex ? flex : undefined,
      borderStyle: 'solid',
      boxSizing: 'border-box',
      paddingRight: tokens.spacing_s,
    },
  })
}

export default DayInput
