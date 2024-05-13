import { View } from 'react-native'
import { useTheme } from '../hooks/useTheme'
import { NumberInput } from './NumberInput'
import { TextInputProps } from './TextInput'

export type PhoneCodeInputProps = Omit<TextInputProps, 'keyboardType'> & {}

export const PhoneCodeInput = (props: PhoneCodeInputProps) => {
  const CODE_LENGTH = 6

  const { tokens } = useTheme()

  const onChange = (value: number | null) => {
    props.onChange()
  }

  return (
    <View style={{ flexDirection: 'row', gap: tokens.spacing_s }}>
      {Array.from({ length: CODE_LENGTH }).map((_, index) => {
        return <NumberInput id='f' onChange={onChange} />
      })}
    </View>
  )
}
