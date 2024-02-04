import { TimeInput } from '../../../../common/components/TimeInput'
import { ExtractPatientFormFieldProps } from '../PatientFormFieldRenderer'

export const PatientFormFieldTime = ({ value, onChange, name }: ExtractPatientFormFieldProps<'TIME'>) => {
  return <TimeInput value={value} onChange={onChange} label='' />
}
