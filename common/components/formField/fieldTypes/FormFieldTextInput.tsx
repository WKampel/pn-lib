import { TextInput } from '../../TextInput'

type FormFieldTextInputProps = {
  value: string
  onChange: (value: string) => void
  label?: string
}

export const FormFieldTextInput = ({ value, onChange, label }: FormFieldTextInputProps) => {
  return <TextInput value={value} onChange={onChange} label={label || ''} />
}
