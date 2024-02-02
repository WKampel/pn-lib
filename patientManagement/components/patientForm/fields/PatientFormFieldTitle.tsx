import { Text } from 'react-native'
import { ExtractPatientFormFieldProps } from '../PatientFormFieldRenderer'

export const PatientFormFieldTitle = ({ name }: ExtractPatientFormFieldProps<'TITLE'>) => {
  return <Text style={{ fontWeight: 'bold', textAlign: 'center', flex: 1 }}>{name}</Text>
}
