import { Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../hooks/useTheme'

export type SwitchProps = {
  disabled?: boolean
  value: boolean
  label: string
  size?: 's' | 'm' | 'l'
  onChange: (value: boolean) => void
  style?: object
}

export const Switch = ({ style, disabled = false, value, label, size = 'm', onChange }: SwitchProps) => {
  const { tokens } = useTheme()

  return (
    <TouchableOpacity
      style={{
        backgroundColor: value ? tokens.color_ui_primary : tokens.color_ui_secondary,
        height: tokens.size_m,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: tokens.radius_round,
        paddingHorizontal: tokens.size_xs + (tokens.size_m - tokens.size_xs),
        ...style,
      }}
      onPress={() => onChange(!value)}
    >
      <Text
        style={{
          fontSize: tokens.font_size_xs,
        }}
      >
        {label}
      </Text>
      <View
        style={{
          height: tokens.size_xs,
          backgroundColor: 'white',
          aspectRatio: 1,
          borderRadius: tokens.radius_round,
          position: 'absolute',
          [value ? 'right' : 'left']: (tokens.size_m - tokens.size_xs) / 2,
        }}
      ></View>
    </TouchableOpacity>
  )
}
