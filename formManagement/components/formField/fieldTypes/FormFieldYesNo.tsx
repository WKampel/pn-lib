import { YesNoInput } from '../../../../common/components/YesNoInput'

type FormFieldYesNoProps = {
  value: boolean | null
  onChange: (value: boolean) => void
  name: string
}

export const FormFieldYesNo = ({ value, onChange, name }: FormFieldYesNoProps) => {
  return <YesNoInput value={value} onChange={onChange} label={name} />
}
