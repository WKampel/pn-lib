import { TextInput as ReactNativeTextInput, StyleSheet, View } from 'react-native'
import { useBranding } from '../contexts/Branding'
import useState from '../hooks/useState'
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
    <View style={[styles.container, containerStyle]}>
      {label && <BorderLabel label={label} backgroundColor={brandingStyles.input.backgroundColor} color='gray' />}
      <ReactNativeTextInput
        multiline={multiline}
        secureTextEntry={password}
        style={[brandingStyles.input, inputStyle, multiline && { paddingTop: 10 }]}
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
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default TextInput
