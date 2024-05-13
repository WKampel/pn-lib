import { useMemo } from 'react'
import { Platform, Text } from 'react-native'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'
import { useTheme } from '../hooks/useTheme'
import { TextInputProps } from './TextInput'

export type PhoneCodeInputProps = Omit<TextInputProps, 'keyboardType'> & {
  onChange: (code: string) => void
  codeLength?: number
  value: string
  onFulfill: () => void
}

export const PhoneCodeInput = ({ onChange, onFulfill, codeLength = 6, value }: PhoneCodeInputProps) => {
  const ref = useBlurOnFulfill({ value, cellCount: codeLength })

  const { tokens } = useTheme()

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChange,
  })

  const autoComplete = useMemo(() => {
    if (Platform.OS === 'android') return 'sms-otp'
    return 'one-time-code'
  }, [Platform.OS])

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={value => {
        onChange(value)
        if (value.length === codeLength) onFulfill()
      }}
      cellCount={codeLength}
      rootStyle={{
        flex: 1,
        padding: tokens.spacing_s,
      }}
      keyboardType='number-pad'
      textContentType='oneTimeCode'
      autoComplete={autoComplete}
      renderCell={({ index, symbol, isFocused }) => (
        <Text
          key={index}
          style={[
            {
              width: tokens.size_m,
              height: tokens.size_m,
              lineHeight: tokens.size_m,
              fontSize: tokens.font_size_xl,
              borderWidth: 1,
              borderRadius: tokens.radius_s,
              borderColor: 'rgb(210,210,210)',
              textAlign: 'center',
            },
            isFocused && {
              borderColor: '#000',
            },
          ]}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  )
}
