import { DayInput } from '../../DayInput'

type FormFieldDateProps = {
  value: Date
  onChange: (value: Date) => void
  label?: string
}

export const FormFieldDate = ({ value, onChange, label }: FormFieldDateProps) => {
  return <DayInput value={value} onChange={onChange} label={label} />
}
