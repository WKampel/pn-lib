import { Text } from 'react-native'

export const FormFieldTitle = ({ label }: { label: string }) => {
  return <Text style={{ fontWeight: 'bold', textAlign: 'center', flex: 1 }}>{label}</Text>
}
