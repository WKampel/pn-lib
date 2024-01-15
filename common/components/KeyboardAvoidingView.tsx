import { ReactNode } from 'react'
import { Platform, KeyboardAvoidingView as ReactNativeKeyboardAvoidingView } from 'react-native'

export const KeyboardAvoidingView = ({ children, keyboardVerticalOffset }: { children: ReactNode; keyboardVerticalOffset?: number }) => {
  return (
    <ReactNativeKeyboardAvoidingView keyboardVerticalOffset={keyboardVerticalOffset} behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
      {children}
    </ReactNativeKeyboardAvoidingView>
  )
}
