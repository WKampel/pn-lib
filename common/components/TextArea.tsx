import { useEffect, useRef } from 'react'
import { NativeSyntheticEvent, Platform, TextInput as ReactNativeTextInput, TextInputKeyPressEventData } from 'react-native'
import { useTheme } from '../hooks/useTheme'

export type TextAreaProps = {
  disabled?: boolean
  password?: boolean
  email?: boolean
  loading?: boolean
  value: string
  label: string
  onChange: (value: string) => void
  onSubmit?: () => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyPress?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void
  containerStyle?: TextAreaContainerStyles
  flex?: boolean | number
}

export type TextAreaContainerStyles = {
  flex?: number
  maxWidth?: number
}

export const TextArea = ({
  flex,
  disabled = false,
  password,
  email,
  loading,
  value,
  label,
  onChange,
  onSubmit,
  onFocus,
  onBlur,
  onKeyPress,
  containerStyle,
}: TextAreaProps) => {
  const { tokens } = useTheme()
  const ref = useRef<ReactNativeTextInput>(null)

  useEffect(() => adjustHeight(), [ref.current])

  const adjustHeight = () => {
    const el: any = ref.current
    if (Platform.OS === 'web' && el) {
      el.style.height = 0
      const newHeight = el.offsetHeight - el.clientHeight + el.scrollHeight
      el.style.height = `${newHeight}px`
    }
  }

  return (
    <ReactNativeTextInput
      ref={ref}
      secureTextEntry={password}
      style={{
        minHeight: tokens.size_m - 20,
        paddingVertical: 10,
        backgroundColor: 'rgb(250, 250, 250)',
        paddingLeft: tokens.spacing_s,
        borderRadius: tokens.radius_xs,
        borderWidth: 1,
        borderColor: 'rgb(220,220,220)',
        flex: flex === true ? 1 : flex ? flex : undefined,
        ...containerStyle,
      }}
      value={value}
      onChangeText={onChange}
      onChange={adjustHeight}
      placeholder={label}
      placeholderTextColor='gray'
      keyboardType={email ? 'email-address' : 'default'}
      onSubmitEditing={onSubmit}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyPress={onKeyPress}
      editable={disabled ? false : true}
      multiline={true}
    />
  )
}
