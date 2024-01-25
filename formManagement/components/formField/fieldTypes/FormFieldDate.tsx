import { DayInput } from '../../../../common/components/DayInput'

type FormFieldDateProps = {
  value: Date | null
  onChange: (value: Date) => void
  name: string
}

export const FormFieldDate = ({ value, onChange, name }: FormFieldDateProps) => {
  return <DayInput value={value} onChange={onChange} label={name} />
}
