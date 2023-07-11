import { TextInput as ReactNativeTextInput } from 'react-native'
import { useBranding } from '../contexts/Branding'

const TextInput = props => {
  const branding = useBranding()

  return (
    <ReactNativeTextInput
      multiline={props.multiline}
      secureTextEntry={props.password}
      style={[branding.input.style, props.style]}
      value={props.state.val}
      onChangeText={props.state.set}
      placeholder={props.placeholder}
      placeholderTextColor='gray'
      keyboardType={props.email ? 'email-address' : null}
      disabled={props.disabled}
    />
  )
}

export default TextInput
