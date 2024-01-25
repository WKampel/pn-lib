import { TextInput } from '../../../../common/components/TextInput'

type FormFieldTextInputProps = {
  value: string
  onChange: (value: string) => void
  name: string
}

export const FormFieldTextInput = ({ value, onChange, name }: FormFieldTextInputProps) => {
  return <TextInput value={value} onChange={onChange} label={name} />
}
