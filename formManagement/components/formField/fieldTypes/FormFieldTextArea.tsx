import { TextArea } from '../../../../common/components/TextArea'

type FormFieldTextAreaProps = {
  value: string
  onChange: (value: string) => void
  name: string
}

export const FormFieldTextArea = ({ value, onChange, name }: FormFieldTextAreaProps) => {
  return <TextArea value={value} onChange={onChange} label={name} />
}
