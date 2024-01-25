import { Text, TouchableOpacity } from 'react-native'
import { useTheme } from '../hooks/useTheme'

export const Promotion = ({ name, onPress }: { name: string; onPress: () => void }) => {
  const tokens = useTheme()

  return (
    <TouchableOpacity
      style={{
        gap: tokens.spacing_m,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: tokens.radius_s,
        borderWidth: 1,
        borderColor: tokens.color_border_on_surface,
        padding: tokens.spacing_s,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          textAlign: 'center',
          color: tokens.color_ui_primary,
          fontSize: tokens.font_size_l,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  )
}
