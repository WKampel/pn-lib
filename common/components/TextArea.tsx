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
  const tokens = useTheme()

  return (
    <ReactNativeTextInput
      secureTextEntry={password}
      style={{
        minHeight: tokens.size_m,
        backgroundColor: 'rgb(250, 250, 250)',
        paddingLeft: tokens.spacing_s,
        borderRadius: tokens.radius_xs,
        borderWidth: 1.5,
        borderColor: 'rgb(220,220,220)',
        flex: flex === true ? 1 : flex ? flex : undefined,
        ...containerStyle,
      }}
      value={value}
      onChangeText={onChange}
      onChange={e => {
        if (Platform.OS === 'web') {
          const el = e?.target || e?.nativeEvent?.target
          if (el) {
            // @ts-ignore
            el.style.height = 0
            // @ts-ignore
            const newHeight = el.offsetHeight - el.clientHeight + el.scrollHeight
            // @ts-ignore
            el.style.height = `${newHeight}px`
          }
        }
      }}
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
