import { KeyboardType, NativeSyntheticEvent, TextInput as ReactNativeTextInput, StyleProp, TextInputKeyPressEventData, TextStyle } from 'react-native'
import { useTheme } from '../hooks/useTheme'
import { TextInputSize } from '../types/TextInputSize'
import { getTextInputHeight } from '../utils/getTextInputHeight'

export type TextInputProps = {
  disabled?: boolean
  password?: boolean
  email?: boolean
  loading?: boolean
  value: string
  label?: string
  size?: TextInputSize
  onChange: (value: string) => void
  onSubmit?: () => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyPress?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void
  style?: StyleProp<TextStyle>
  flex?: number | boolean
  keyboardType?: KeyboardType
  id?: string
  placeholder?: string
}

export const TextInput = ({
  id,
  disabled = false,
  password,
  email,
  loading,
  value,
  label,
  size = 'm',
  onChange,
  onSubmit,
  onFocus,
  onBlur,
  onKeyPress,
  style,
  flex,
  keyboardType,
  placeholder,
}: TextInputProps) => {
  const { tokens } = useTheme()

  return (
    <ReactNativeTextInput
      id={id}
      secureTextEntry={password}
      style={[
        {
          height: getTextInputHeight(tokens, size),
          backgroundColor: 'rgb(250, 250, 250)',
          paddingLeft: tokens.spacing_s,
          borderRadius: tokens.radius_xs,
          borderWidth: 1,
          borderColor: tokens.color_border_on_surface,
          flex: flex === true ? 1 : flex ? flex : undefined,
        },
        style,
      ]}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder || label}
      placeholderTextColor='gray'
      keyboardType={email ? 'email-address' : keyboardType ? keyboardType : 'default'}
      onSubmitEditing={onSubmit}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyPress={onKeyPress}
      editable={disabled ? false : true}
    />
  )
}
