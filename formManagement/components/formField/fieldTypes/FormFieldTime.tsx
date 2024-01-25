import { TimeInput } from '../../../../common/components/TimeInput'

type FormFieldTimeProps = {
  value: Date | null
  onChange: (value: Date) => void
  name: string
}

export const FormFieldTime = ({ value, onChange, name }: FormFieldTimeProps) => {
  return <TimeInput value={value} onChange={onChange} label={name} />
}
