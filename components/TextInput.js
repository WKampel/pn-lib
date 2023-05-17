import { TextInput as ReactNativeTextInput } from 'react-native'
import { useBranding } from '../contexts/Branding'

const TextInput = props => {
  const branding = useBranding()

  return (
    <ReactNativeTextInput
      multiline={props.multiline}
      secureTextEntry={props.password}
      style={branding.input.style}
      value={props.state.val}
      onChangeText={props.state.set}
      placeholderTextColor='gray'
    />
  )
}

export default TextInput
