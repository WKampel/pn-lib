import { Text, View } from 'react-native'
import { useTheme } from '../hooks/useTheme'
import { TextInput, TextInputProps } from './TextInput'

export const PracticeIdTextInput = ({ onChange, flex, ...other }: Omit<TextInputProps, 'label'>) => {
  const handleChange = (value: string) => {
    // Test if value includes any characters other than letters. Not spaces are allowed. No specials are allowed. No numbers are allowed.
    if (value.match(/[^a-zA-Z]/)) return
    onChange(value)
  }
  const { tokens } = useTheme()
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        flex: flex === true ? 1 : flex ? flex : undefined,
        gap: tokens.spacing_xs,
      }}
    >
      <Text style={{ fontSize: tokens.font_size_xs }}>www.platformnow.app/</Text>
      <TextInput flex {...other} label='Practice Identifier' onChange={handleChange} />
    </View>
  )
}
