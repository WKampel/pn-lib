import { Radio } from '../../../../common/components/Radio'
import { FormFieldOptionData } from '../../../types/FormFieldOptionData'

type FormFieldRadioProps = {
  value: string[]
  onChange: (value: string[]) => void
  name: string
  options: FormFieldOptionData[]
}

export const FormFieldRadio = ({ value, onChange, name, options }: FormFieldRadioProps) => {
  return <Radio<FormFieldOptionData> value={value} onChange={onChange} label={name} options={options} getLabel={option => option.value} getValue={option => option.value} />
}
