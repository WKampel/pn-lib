import { View } from 'react-native'
import { TextInput } from './TextInput'

type PracticeIdTextInputProps = {
  value: string
  onChange: (value: string) => void
}

export const PracticeIdTextInput = ({ value, onChange }: PracticeIdTextInputProps) => {
  const handleChange = (value: string) => {
    // Test if value includes any characters other than letters. Not spaces are allowed. No specials are allowed. No numbers are allowed.
    if (value.match(/[^a-zA-Z]/)) return
    onChange(value)
  }

  return (
    <View>
      https://platformnow.app/
      <TextInput label='Practice Identifier' value={value} onChange={handleChange} />
    </View>
  )
}
