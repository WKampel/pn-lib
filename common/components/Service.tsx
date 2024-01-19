import { Text, TouchableOpacity } from 'react-native'
import { serviceIconSet } from '../config/serviceIconSet'
import { useTheme } from '../hooks/useTheme'
import { Icon } from './Icon'

export const Service = ({ icon, name, onPress }: { icon?: string | null; name: string; onPress: () => void }) => {
  const tokens = useTheme()

  return (
    <TouchableOpacity style={{ gap: tokens.spacing_m, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={onPress}>
      {icon ? <Icon set={serviceIconSet} size={tokens.font_size_m} color={tokens.color_ui_primary} id={icon} /> : null}

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
