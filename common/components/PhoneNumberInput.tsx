import { TextInput, TextInputProps } from './TextInput'

export type PhoneNumberInputProps = Omit<TextInputProps, 'keyboardType'> & {}

export const PhoneNumberInput = (props: PhoneNumberInputProps) => {
  const onChange = (value: string) => {
    // Remove all non-numeric characters
    props.onChange(value.replace(/[^0-9]/g, ''))
  }

  return <TextInput keyboardType='phone-pad' {...props} onChange={onChange} />
}
