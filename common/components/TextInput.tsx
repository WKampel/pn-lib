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
  flex?: number | boolean
}

export type TextInputContainerStyles = {
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
  flex,
}: TextInputProps) => {
  const tokens = useTheme()

  const heightMap = {
    s: tokens.size_s,
    m: tokens.size_m,
    l: tokens.size_l,
  }

  return (
    <ReactNativeTextInput
      secureTextEntry={password}
      style={{
        height: heightMap[size],
        backgroundColor: 'rgb(250, 250, 250)',
        paddingLeft: tokens.spacing_s,
        borderRadius: tokens.radius_xs,
        borderWidth: 1.5,
        borderColor: tokens.color_border_on_surface,
        flex: flex === true ? 1 : flex ? flex : undefined,
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
