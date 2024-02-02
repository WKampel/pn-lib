import { YesNoInput } from '../../../../common/components/YesNoInput'
import { ExtractPatientFormFieldProps } from '../PatientFormFieldRenderer'

export const PatientFormFieldYesNo = ({ value, onChange, name }: ExtractPatientFormFieldProps<'YES_NO'>) => {
  return <YesNoInput value={value} onChange={onChange} label={name} />
}
