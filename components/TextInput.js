import { useRef } from 'react'
import { TextInput as ReactNativeTextInput, Text, TouchableWithoutFeedback, View } from 'react-native'
import sharedInputStyles from '../config/styles/sharedInputStyles'
import useInteractive from '../hooks/useInteractive'
import useStyles from '../hooks/useStyles'

const TextInput = ({
  containerStyle,
  inputStyle,
  password,
  email,
  onSubmit,
  disabled,
  onKeyPress,
  value,
  onChange,
  label,
  onFocus: onFocusProp,
  onBlur: onBlurProp,
  size = 'm',
  round = false,
  placeholder,
}) => {
  const inputRef = useRef(null)
  const { hovered, focused, pressed, onMouseEnter, onMouseLeave, onFocus, onBlur } = useInteractive()
  const styles = useStyles(styleConfig, { size, round }, { hovered, focused, pressed, disabled })

  const handleFocus = () => {
    onFocus()
    if (onFocusProp) onFocusProp()
  }

  const handleBlur = () => {
    onBlur()
    if (onBlurProp) onBlurProp()
  }

  return (
    <TouchableWithoutFeedback focusable={false} onPressIn={() => inputRef.current?.focus()}>
      <View style={[styles.container, containerStyle]} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {label && value ? <Text style={styles.label}>{label}</Text> : null}
        <ReactNativeTextInput
          ref={inputRef}
          secureTextEntry={password}
          style={[styles.input, inputStyle]}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder || label}
          placeholderTextColor='gray'
          keyboardType={email && 'email-address'}
          disabled={disabled}
          onSubmitEditing={onSubmit}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyPress={onKeyPress}
          editable={disabled ? false : true}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styleConfig = {
  ...sharedInputStyles,
}

export default TextInput
