import { Radio } from '../../Radio'

type FormFieldRadioProps = {
  value: string[]
  onChange: (value: string[]) => void
  label?: string
  options: string[]
}

export const FormFieldRadio = ({ value, onChange, label, options }: FormFieldRadioProps) => {
  return <Radio<string> value={value} onChange={onChange} label={label} options={options} getLabel={option => option} getValue={option => option} />
}
