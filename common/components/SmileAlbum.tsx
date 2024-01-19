import { Text, TouchableOpacity } from 'react-native'
import { useTheme } from '../hooks/useTheme'

export const SmileAlbum = ({ name, onPress }: { name: string; onPress: () => void }) => {
  const tokens = useTheme()

  return (
    <TouchableOpacity style={{ gap: tokens.spacing_m, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={onPress}>
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
