import { FormFieldOption } from '../../../../../gql/graphql'
import { Radio } from '../../../../common/components/Radio'
import { ExtractPatientFormFieldProps } from '../PatientFormFieldRenderer'

export const PatientFormFieldRadio = ({ value, onChange, name, options }: ExtractPatientFormFieldProps<'RADIO'>) => {
  return <Radio<FormFieldOption> value={value} onChange={onChange} label='' options={options} getLabel={option => option.value} getValue={option => option.value} />
}
