import { TextInput } from '../../../../common/components/TextInput'
import { ExtractPatientFormFieldProps } from '../PatientFormFieldRenderer'

export const PatientFormFieldTextInput = ({ value, onChange, name }: ExtractPatientFormFieldProps<'TEXT_INPUT'>) => {
  return <TextInput value={value} onChange={onChange} label='' />
}
