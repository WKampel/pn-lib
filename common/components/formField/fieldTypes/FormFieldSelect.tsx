import { Select } from '../../Select'

type FormFieldProps = {
  value: string
  onChange: (value: string) => void
  label?: string
  options: string[]
}

export const FormFieldSelect = ({ value, onChange, label, options }: FormFieldProps) => {
  return <Select<string> value={value} onChange={onChange} label={label || ''} options={options} getLabel={option => option} getValue={option => option} />
}
