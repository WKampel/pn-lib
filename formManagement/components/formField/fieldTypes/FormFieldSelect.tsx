import { Select } from '../../../../common/components/Select'
import { FormFieldOptionData } from '../../../types/FormFieldOptionData'

type FormFieldProps = {
  value: string
  onChange: (value: string) => void
  name: string
  options: FormFieldOptionData[]
}

export const FormFieldSelect = ({ value, onChange, name, options }: FormFieldProps) => {
  return (
    <Select<FormFieldOptionData, string>
      value={value}
      onChange={onChange}
      label={name}
      options={options}
      getLabel={option => option.value}
      getValue={option => option.value}
    />
  )
}
