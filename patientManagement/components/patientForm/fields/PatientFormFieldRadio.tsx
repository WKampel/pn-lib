import { Radio } from '../../../../common/components/Radio'
import { FormFieldOptionData } from '../../../../formManagement/types/FormFieldOptionData'
import { ExtractPatientFormFieldProps } from '../PatientFormFieldRenderer'

export const PatientFormFieldRadio = ({ value, onChange, name, options }: ExtractPatientFormFieldProps<'RADIO'>) => {
  return <Radio<FormFieldOptionData> value={value} onChange={onChange} label={name} options={options} getLabel={option => option.value} getValue={option => option.value} />
}
