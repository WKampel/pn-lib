import { TextArea } from '../../TextArea'

type FormFieldTextAreaProps = {
  value: string
  onChange: (value: string) => void
  label?: string
}

export const FormFieldTextArea = ({ value, onChange, label }: FormFieldTextAreaProps) => {
  return <TextArea value={value} onChange={onChange} label={label || ''} />
}
