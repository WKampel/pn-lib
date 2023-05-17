import { KeyboardAvoidingView as ReactNativeKeyboardAvoidingView } from 'react-native'
const KeyboardAvoidingView = props => {
  return (
    <ReactNativeKeyboardAvoidingView
      keyboardVerticalOffset={props.keyboardVerticalOffset}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      {props.children}
    </ReactNativeKeyboardAvoidingView>
  )
}

export default KeyboardAvoidingView
