import { NativeSyntheticEvent, TextInput as ReactNativeTextInput, TextInputKeyPressEventData } from 'react-native'
import { useTheme } from '../hooks/useTheme'

export type TextInputProps = {
  disabled?: boolean
  password?: boolean
  email?: boolean
  loading?: boolean
  value: string
  label: string
  size?: 's' | 'm' | 'l'
  onChange: (value: string) => void
  onSubmit?: () => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyPress?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void
  containerStyle?: TextInputContainerStyles
  textStyle?: TextInputTextStyles
}

export type TextInputContainerStyles = {
  flex?: number
  maxWidth?: number
}

type TextInputTextStyles = {}

export const TextInput = ({
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
  containerStyle,
  textStyle,
}: TextInputProps) => {
  const tokens = useTheme()

  return (
    <ReactNativeTextInput
      secureTextEntry={password}
      style={{
        height: tokens.size_m,
        backgroundColor: 'rgb(240, 242, 244)',
        paddingLeft: tokens.spacing_s,
        borderRadius: tokens.radius_xs,
        borderWidth: 1.5,
        borderColor: 'rgb(220,220,220)',
        ...containerStyle,
      }}
      value={value}
      onChangeText={onChange}
      placeholder={label}
      placeholderTextColor='gray'
      keyboardType={email ? 'email-address' : 'default'}
      onSubmitEditing={onSubmit}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyPress={onKeyPress}
      editable={disabled ? false : true}
    />
  )
}
