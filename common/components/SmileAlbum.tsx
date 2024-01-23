import { Text, TouchableOpacity } from 'react-native'
import { useTheme } from '../hooks/useTheme'

export const SmileAlbum = ({ name, onPress }: { name: string; onPress: () => void }) => {
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
          color: tokens.color_ui_primary,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  )
}
