import { YesNo, YesNoInput } from '../../YesNoInput'

type FormFieldYesNoProps = {
  value: YesNo
  onChange: (value: YesNo) => void
  label?: string
}

export const FormFieldYesNo = ({ value, onChange, label }: FormFieldYesNoProps) => {
  return <YesNoInput value={value} onChange={onChange} label={label} />
}
