import { Linking, Text, TouchableOpacity } from 'react-native'
import { reviewLinkIconSet } from '../config/reviewLinkIconSet'
import { useTheme } from '../hooks/useTheme'
import { Icon } from './Icon'

export const ReviewLink = ({ link, icon, name }: { link: string; icon?: string | null; name: string }) => {
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
      onPress={() => Linking.openURL(link)}
    >
      {icon ? <Icon set={reviewLinkIconSet} size={tokens.font_size_m} color={tokens.color_ui_primary} id={icon} /> : null}
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
