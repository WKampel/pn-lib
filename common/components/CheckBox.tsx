import { AntDesign } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../hooks/useTheme'

type CheckBoxProps = {
  onChange: (value: boolean) => void
  value: boolean
  label?: string
  round?: boolean
}

export const CheckBox = ({ onChange, value, label, round = false }: CheckBoxProps) => {
  const tokens = useTheme()

  return (
    <TouchableOpacity style={{}} onPress={() => onChange(!value)}>
      <View style={{}}>{value ? <AntDesign name='check' size={20} color={'red'} /> : null}</View>
      <Text style={{}}>{label}</Text>
    </TouchableOpacity>
  )
}
