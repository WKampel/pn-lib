import { TextInput, TextInputProps } from './TextInput'

export type PhoneNumberInputProps = Omit<TextInputProps, 'keyboardType'> & {}

export const PhoneNumberInput = (props: PhoneNumberInputProps) => {
  const onChange = (value: string) => {
    // Remove all non-numeric characters
    let modified = value.replace(/[^0-9]/g, '')

    // Limit to 10 characters
    if (modified.length > 10) modified = modified.substring(0, 10)

    props.onChange(modified)
  }

  return <TextInput label='Phone Number (10 digits)' placeholder='(xxx) xxx-xxxx' keyboardType='phone-pad' {...props} onChange={onChange} />
}
