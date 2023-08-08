import { Pressable, TextInput as ReactNativeTextInput, StyleSheet } from 'react-native'
import { useBranding } from '../contexts/Branding'
import useState from '../hooks/useState'
import { mobileStyles } from '../libs/utils'
import BorderLabel from './BorderLabel'

const TextInput = ({
  password,
  multiline,
  variants = [],
  state,
  email,
  onSubmit,
  label,
  containerStyle,
  inputStyle,
  placeholder,
  disabled,
  onFocus,
  onBlur,
  onKeyPress,
  onPress,
}) => {
  const focused = useState(false)
  if (disabled) variants.push('disabled')
  if (focused.val) variants.push('focused')

  const { brandingStyles } = useBranding('textInput', variants)

  function handleFocus(e) {
    if (onFocus) onFocus(e)
    focused.set(true)
  }

  function handleBlur() {
    if (onBlur) onBlur()
    focused.set(false)
  }

  return (
    <Pressable onPress={onPress} style={[styles.container, containerStyle]}>
      {label && <BorderLabel label={label} backgroundColor={brandingStyles.input.backgroundColor} color='gray' />}
      <ReactNativeTextInput
        multiline={multiline}
        secureTextEntry={password}
        style={[brandingStyles.input, inputStyle, multiline && { paddingTop: 10 }, multiline && mobileStyles({ height: 'auto', paddingBottom: 10 })]}
        value={state.val}
        onChangeText={state.set}
        placeholder={placeholder || label}
        placeholderTextColor='gray'
        keyboardType={email ? 'email-address' : null}
        disabled={disabled}
        onSubmitEditing={onSubmit}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyPress={onKeyPress}
        editable={disabled ? false : true}
        selectTextOnFocus={disabled ? false : true}
        onPressIn={onPress}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
})

export default TextInput
