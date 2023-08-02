import { TextInput as ReactNativeTextInput, Text, View } from 'react-native'
import { useBranding } from '../contexts/Branding'

const TextInput = ({
  password,
  multiline,
  variants,
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
  variants = disabled ? ['disabled', ...[].concat(variants)] : variants

  const { brandingStyles } = useBranding('textInput', variants)

  return (
    <View style={containerStyle}>
      {label && <Text style={[brandingStyles.label]}>{label}</Text>}
      <ReactNativeTextInput
        multiline={multiline}
        secureTextEntry={password}
        style={[brandingStyles.input, inputStyle]}
        value={state.val}
        onChangeText={state.set}
        placeholder={placeholder || label}
        placeholderTextColor='gray'
        keyboardType={email ? 'email-address' : null}
        disabled={disabled}
        onSubmitEditing={onSubmit}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
      />
    </View>
  )
}

export default TextInput
