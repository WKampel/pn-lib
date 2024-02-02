import { Select } from '../../../../common/components/Select'
import { FormFieldOptionData } from '../../../../formManagement/types/FormFieldOptionData'
import { ExtractPatientFormFieldProps } from '../PatientFormFieldRenderer'

export const PatientFormFieldSelect = ({ value, onChange, name, options }: ExtractPatientFormFieldProps<'DROPDOWN'>) => {
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
