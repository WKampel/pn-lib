import { TextArea } from '../../../../common/components/TextArea'
import { ExtractPatientFormFieldProps } from '../PatientFormFieldRenderer'

export const PatientFormFieldTextArea = ({ value, onChange, name }: ExtractPatientFormFieldProps<'TEXT_AREA'>) => {
  return <TextArea value={value} onChange={onChange} label={name} />
}
