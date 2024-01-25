import { Text } from 'react-native'

export const FormFieldTitle = ({ name }: { name: string }) => {
  return <Text style={{ fontWeight: 'bold', textAlign: 'center', flex: 1 }}>{name}</Text>
}
