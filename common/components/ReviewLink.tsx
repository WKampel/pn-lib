import { Linking, Text, TouchableOpacity } from 'react-native'
import { reviewLinkIconSet } from '../config/reviewLinkIconSet'
import { useTheme } from '../hooks/useTheme'
import { Icon } from './Icon'

export const ReviewLink = ({ link, icon, name }: { link: string; icon?: string | null; name: string }) => {
  const tokens = useTheme()

  return (
    <TouchableOpacity style={{ gap: tokens.spacing_m, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => Linking.openURL(link)}>
      {icon ? <Icon set={reviewLinkIconSet} size={tokens.font_size_m} color={tokens.color_ui_primary} id={icon} /> : null}
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
