import { DayInput } from '../../../../common/components/DayInput'
import { ExtractPatientFormFieldProps } from '../PatientFormFieldRenderer'

export const PatientFormFieldDate = ({ value, onChange, name }: ExtractPatientFormFieldProps<'DATE'>) => {
  return <DayInput value={value} onChange={onChange} label='' />
}
