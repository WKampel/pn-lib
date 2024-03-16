import { Text, TouchableOpacity } from 'react-native'
import { serviceIconSet } from '../config/serviceIconSet'
import { useTheme } from '../hooks/useTheme'
import { Icon } from './Icon'

export const Service = ({ icon, name, onPress }: { icon?: string | null; name: string; onPress: () => void }) => {
  const { tokens } = useTheme()

  return (
    <TouchableOpacity
      style={{
        gap: tokens.spacing_m,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: tokens.radius_s,
        borderWidth: 1,
        borderColor: tokens.color_border_on_surface,
        padding: tokens.spacing_s,
      }}
      onPress={onPress}
    >
      {icon ? <Icon set={serviceIconSet} size={30} color={tokens.color_ui_primary} id={icon} /> : null}

      <Text
        style={{
          color: tokens.color_ui_primary,
          fontSize: tokens.font_size_l,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  )
}
