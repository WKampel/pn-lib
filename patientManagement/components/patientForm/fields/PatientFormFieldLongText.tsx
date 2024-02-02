import { Text } from 'react-native'
import { ExtractPatientFormFieldProps } from '../PatientFormFieldRenderer'

export const PatientFormFieldLongText = ({ name }: ExtractPatientFormFieldProps<'LONG_TEXT'>) => {
  return <Text>{name}</Text>
}
