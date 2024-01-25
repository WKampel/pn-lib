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
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: tokens.spacing_xs,
      }}
      onPress={() => onChange(!value)}
    >
      <View
        style={{
          borderWidth: 1,
          borderColor: tokens.color_border_on_surface,
          borderRadius: tokens.radius_xs,
          width: 25,
          height: 25,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: value ? tokens.color_ui_primary : 'white',
        }}
      >
        {value ? <AntDesign name='check' size={20} color='white' /> : null}
      </View>
      <Text style={{}}>{label}</Text>
    </TouchableOpacity>
  )
}
