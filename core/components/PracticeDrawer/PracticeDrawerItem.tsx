import { ReactElement, cloneElement } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useTheme } from '../../../common/hooks/useTheme'

type PracticeDrawerItemProps = {
  icon: ReactElement
  label: string
  onPress: () => void
  isFocused: boolean
  color?: string
}

export const PracticeDrawerItem = ({ icon, label, onPress, isFocused, color: colorProp }: PracticeDrawerItemProps) => {
  const tokens = useTheme()

  const color = isFocused ? tokens.color_ui_primary : colorProp ? colorProp : tokens.color_text_on_surface

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: tokens.spacing_s,
        marginLeft: tokens.spacing_s,
        height: tokens.size_m,
      }}
      onPress={onPress}
    >
      {icon ? cloneElement(icon, { size: tokens.font_size_s, color }) : null}
      <Text
        style={[
          {
            color,
            fontSize: tokens.font_size_s,
          },
          color ? { color } : {},
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}
