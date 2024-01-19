import { TimeInput } from '../../TimeInput'

type FormFieldTimeProps = {
  value: Date
  onChange: (value: Date) => void
  label?: string
}

export const FormFieldTime = ({ value, onChange, label }: FormFieldTimeProps) => {
  return <TimeInput value={value} onChange={onChange} label={label} />
}
