import { FormFieldOption } from '../../../../../gql/graphql'
import { Select } from '../../../../common/components/Select'
import { ExtractPatientFormFieldProps } from '../PatientFormFieldRenderer'

export const PatientFormFieldSelect = ({ value, onChange, name, options }: ExtractPatientFormFieldProps<'DROPDOWN'>) => {
  return <Select<FormFieldOption, string> value={value} onChange={onChange} label='' options={options} getLabel={option => option.value} getValue={option => option.value} />
}
